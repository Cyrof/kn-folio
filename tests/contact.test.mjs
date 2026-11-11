import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import vm from "node:vm";

import ts from "typescript";

const loadModule = createRequire(import.meta.url);

// Exercise the real route with only the SMTP transport replaced. No email or
// network connection is made, and no local credentials are read.
function loadContactRoute({ smtpError } = {}) {
    const sent = [];
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
        process: {
            env: {
                EMAIL_USER: "sender@example.test",
                EMAIL_PASS: "test-only",
                RECIPIENT_EMAIL: "owner@example.test",
            },
        },
        console: { error() {} },
        require(name) {
            if (name === "nodemailer")
                return {
                    createTransport(config) {
                        assert.equal(config.service, "gmail");
                        assert.equal(config.auth.user, "sender@example.test");
                        return {
                            async sendMail(message) {
                                if (smtpError) throw smtpError;
                                sent.push(message);
                            },
                        };
                    },
                };
            return loadModule(name);
        },
    });
    return { POST: loaded.exports.POST, sent };
}

function request(body) {
    return new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
}

test("contact preserves the name, email, message and configured recipient", async () => {
    const { POST, sent } = loadContactRoute();
    const response = await POST(
        request({
            name: "Portfolio visitor",
            email: "visitor@example.test",
            message: "Let's discuss a project.\nHere are the details.",
        }),
    );
    assert.equal(response.status, 200);
    assert.equal((await response.json()).message, "Message sent successfully!");
    assert.equal(sent.length, 1);
    assert.equal(sent[0].to, "owner@example.test");
    assert.equal(sent[0].subject, "New Message from Portfolio visitor");
    assert.equal(
        sent[0].text,
        "From: Portfolio visitor\nEmail: visitor@example.test\nMessage: Let's discuss a project.\nHere are the details.",
    );
});

for (const field of ["name", "email", "message"]) {
    test(`contact rejects a missing ${field} without sending email`, async () => {
        const { POST, sent } = loadContactRoute();
        const response = await POST(
            request({
                name: "Visitor",
                email: "visitor@example.test",
                message: "Hello",
                [field]: "",
            }),
        );
        assert.equal(response.status, 400);
        assert.equal((await response.json()).error, "Missing required fields");
        assert.equal(sent.length, 0);
    });
}

test("contact reports delivery failures so the form can offer a retry", async () => {
    const { POST, sent } = loadContactRoute({
        smtpError: new Error("Test SMTP failure"),
    });
    const response = await POST(
        request({
            name: "Visitor",
            email: "visitor@example.test",
            message: "Hello",
        }),
    );
    assert.equal(response.status, 500);
    assert.equal((await response.json()).error, "Failed to send message");
    assert.equal(sent.length, 0);
});
