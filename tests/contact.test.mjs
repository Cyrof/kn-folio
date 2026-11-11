import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import vm from "node:vm";

import ts from "typescript";

const loadModule = createRequire(import.meta.url);
const visitor = {
    name: "Portfolio visitor",
    email: "visitor@example.test",
    message: "Let's discuss a project.\nHere are the details.",
};

// Execute the real route with an isolated environment and mocked HTTP transport.
// No API key from the machine is read and no email or network request is sent.
function loadContactRoute({
    providerStatus = 200,
    providerBody = { id: "test-email-id" },
    rawProviderBody,
    providerError,
    env = {},
} = {}) {
    const requests = [];
    const logs = [];
    const source = fs.readFileSync(
        new URL("../app/api/contact/route.tsx", import.meta.url),
        "utf8",
    );
    const { outputText } = ts.transpileModule(source, {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            esModuleInterop: true,
        },
    });
    const loaded = { exports: {} };
    vm.runInNewContext(outputText, {
        module: loaded,
        exports: loaded.exports,
        AbortSignal,
        process: {
            env: {
                RESEND_API_KEY: "re_test_only",
                CONTACT_FROM_EMAIL:
                    "Keith Portfolio <portfolio@mail.example.test>",
                RECIPIENT_EMAIL: "owner@example.test",
                ...env,
            },
        },
        console: {
            error(...args) {
                logs.push(args.map(String).join(" "));
            },
        },
        async fetch(url, options) {
            requests.push({
                url,
                ...options,
                payload: JSON.parse(options.body),
            });
            if (providerError) throw providerError;
            return new Response(
                rawProviderBody ?? JSON.stringify(providerBody),
                {
                    status: providerStatus,
                    headers: { "Content-Type": "application/json" },
                },
            );
        },
        require: loadModule,
    });
    return { POST: loaded.exports.POST, requests, logs };
}

function request(body) {
    return new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
}

test("contact sends through Resend with the configured sender and visitor reply-to", async () => {
    const { POST, requests } = loadContactRoute();
    const response = await POST(
        request({
            ...visitor,
            name: "  Portfolio visitor  ",
            email: " visitor@example.test ",
        }),
    );
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
        message: "Message sent successfully!",
    });
    assert.equal(requests.length, 1);
    const sent = requests[0];
    assert.equal(sent.url, "https://api.resend.com/emails");
    assert.equal(sent.method, "POST");
    assert.equal(sent.headers.Authorization, "Bearer re_test_only");
    assert.equal(sent.headers["Content-Type"], "application/json");
    assert.deepEqual(sent.payload, {
        from: "Keith Portfolio <portfolio@mail.example.test>",
        to: ["owner@example.test"],
        reply_to: "visitor@example.test",
        subject: "New Message from Portfolio visitor",
        text:
            "From: Portfolio visitor\nEmail: visitor@example.test\nMessage: " +
            visitor.message,
    });
    assert.equal(sent.cache, "no-store");
    assert.ok(sent.signal instanceof AbortSignal);
});

for (const field of ["name", "email", "message"]) {
    for (const value of ["", "  ", 42]) {
        test(
            "contact rejects invalid " + field + " " + JSON.stringify(value),
            async () => {
                const { POST, requests } = loadContactRoute();
                const response = await POST(
                    request({ ...visitor, [field]: value }),
                );
                assert.equal(response.status, 400);
                assert.equal(
                    (await response.json()).error,
                    "Missing required fields",
                );
                assert.equal(requests.length, 0);
            },
        );
    }
}

for (const body of [null, [], "message", true]) {
    test(
        "contact rejects an unexpected JSON shape: " + JSON.stringify(body),
        async () => {
            const { POST, requests } = loadContactRoute();
            assert.equal((await POST(request(body))).status, 400);
            assert.equal(requests.length, 0);
        },
    );
}

test("contact handles malformed JSON without calling Resend", async () => {
    const { POST, requests } = loadContactRoute();
    const response = await POST(
        new Request("http://localhost/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: "{",
        }),
    );
    assert.equal(response.status, 400);
    assert.equal((await response.json()).error, "Invalid request body");
    assert.equal(requests.length, 0);
});

for (const email of [
    "not-an-email",
    "first@example.test, second@example.test",
]) {
    test("contact rejects an invalid reply-to address: " + email, async () => {
        const { POST, requests } = loadContactRoute();
        const response = await POST(request({ ...visitor, email }));
        assert.equal(response.status, 400);
        assert.equal((await response.json()).error, "Invalid email address");
        assert.equal(requests.length, 0);
    });
}

for (const variable of [
    "RESEND_API_KEY",
    "CONTACT_FROM_EMAIL",
    "RECIPIENT_EMAIL",
]) {
    test(
        "contact fails cleanly when " + variable + " is not configured",
        async () => {
            const { POST, requests, logs } = loadContactRoute({
                env: { [variable]: " " },
            });
            const response = await POST(request(visitor));
            assert.equal(response.status, 503);
            assert.equal(
                (await response.json()).error,
                "Contact service unavailable",
            );
            assert.equal(requests.length, 0);
            assert.ok(logs.every((line) => !line.includes("re_test_only")));
        },
    );
}

for (const status of [401, 403, 422, 429, 500]) {
    test(
        "contact preserves a retryable error when Resend returns " + status,
        async () => {
            const { POST, requests, logs } = loadContactRoute({
                providerStatus: status,
                providerBody: {
                    message: "Private provider diagnostic re_test_only",
                },
            });
            const response = await POST(request(visitor));
            assert.equal(response.status, status === 429 ? 503 : 502);
            assert.deepEqual(await response.json(), {
                error: "Failed to send message",
            });
            assert.equal(requests.length, 1);
            assert.ok(logs.every((line) => !line.includes("re_test_only")));
        },
    );
}

for (const providerBody of [{}, { id: "" }, { id: 123 }, null]) {
    test(
        "contact requires a provider confirmation ID: " +
            JSON.stringify(providerBody),
        async () => {
            const { POST } = loadContactRoute({ providerBody });
            assert.equal((await POST(request(visitor))).status, 502);
        },
    );
}

test("contact handles a non-JSON provider response", async () => {
    const { POST } = loadContactRoute({
        rawProviderBody: "<html>upstream error</html>",
    });
    assert.equal((await POST(request(visitor))).status, 502);
});

test("contact handles a network failure without retrying automatically", async () => {
    const { POST, requests } = loadContactRoute({
        providerError: new Error("Connection failed"),
    });
    const response = await POST(request(visitor));
    assert.equal(response.status, 502);
    assert.equal(requests.length, 1);
});

test("contact handles an upstream timeout", async () => {
    const { POST, requests } = loadContactRoute({
        providerError: new DOMException("Test timeout", "TimeoutError"),
    });
    const response = await POST(request(visitor));
    assert.equal(response.status, 504);
    assert.equal(requests.length, 1);
});
