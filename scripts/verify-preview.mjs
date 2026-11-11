import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const origin = process.argv[2] || "http://127.0.0.1:4173";
const publicOrigin = process.env.SITE_URL || "https://knfolio.cyrostack.dev";
const data = JSON.parse(
    await readFile(new URL("../app/data/processed-data.json", import.meta.url)),
);
const assets = new Set();
const pages = ["/", "/about", "/myWork", "/skills", "/contact"];

for (const page of pages) {
    const response = await fetch(new URL(page, origin), {
        signal: AbortSignal.timeout(15000),
    });
    assert.equal(response.status, 200, page);
    const html = await response.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical, `${page}: canonical link exists`);
    assert.equal(
        new URL(canonical).href,
        new URL(page, publicOrigin).href,
        `${page}: canonical URL uses the public origin`,
    );
    assert.ok(
        html.includes(
            `content="${new URL("/opengraph-image", publicOrigin).href}`,
        ),
        `${page}: social image uses the public origin`,
    );
    assert.equal(
        (html.match(/<h1[\s>]/g) || []).length,
        1,
        `${page}: one main heading`,
    );
    assert.equal(
        (html.match(/<main[\s>]/g) || []).length,
        1,
        `${page}: one main landmark`,
    );
    assert.match(html, /href="#main-content"/, `${page}: skip link`);
    assert.match(html, /aria-current="page"/, `${page}: active navigation`);
    assert.match(
        html,
        /<meta name="description" content="[^"]+"/,
        `${page}: description`,
    );
    assert.match(html, /<title>[^<]+<\/title>/, `${page}: title`);
    assert.doesNotMatch(
        html,
        /fonts\.googleapis\.com|img\.icons8\.com/,
        `${page}: no external font or skill-icon requests`,
    );
    if (page === "/") {
        assert.match(html, /id="experience"/);
        assert.match(html, /id="current-role-title">AI System Engineer/);
        assert.match(html, /datetime="2025-08"/i);
        for (const term of [
            "NCS Singapore",
            "Video Intelligence",
            "Kaisense",
            "RKE2",
            "NVIDIA H200",
            "Ansible",
            "Weka",
            "VAST",
            "Active Directory",
        ])
            assert.ok(
                html.includes(term),
                `Professional experience includes ${term}`,
            );
    }
    if (page === "/myWork") {
        assert.equal(
            (html.match(/<article class="project-card"/g) || []).length,
            data.projects.length,
            "Every project has a card",
        );
        assert.ok(
            html
                .replace(/<!--[\s\S]*?-->/g, "")
                .includes(`(${String(data.projects.length).padStart(2, "0")})`),
            "Project count matches the collection",
        );
        for (const project of data.projects)
            assert.ok(
                html.includes(project.github),
                `Project preserved: ${project.name}`,
            );
    }
    if (page === "/skills") {
        assert.equal(
            (html.match(/<summary[\s>]/g) || []).length,
            data.skills.length,
        );
        for (const skill of data.skills)
            assert.ok(
                html.includes(skill.description),
                `Skill preserved: ${skill.name}`,
            );
    }
    if (page === "/contact") {
        for (const field of ["name", "email", "message"]) {
            assert.ok(
                html.includes(`for="${field}"`),
                `Accessible label: ${field}`,
            );
            assert.ok(
                html.includes(`id="${field}"`),
                `Associated input: ${field}`,
            );
        }
        assert.match(html, /type="email"/);
        assert.match(html, /aria-live="polite"/);
        assert.match(html, /mailto:keithneo00@gmail.com/);
    }
    for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
        const url = match[1].replaceAll("&amp;", "&");
        if (url.startsWith("/")) assets.add(url);
    }
    console.log(
        `PASS ${page}: metadata, navigation, semantic structure, preserved content`,
    );
}

for (const asset of assets) {
    const response = await fetch(new URL(asset, origin), {
        signal: AbortSignal.timeout(30000),
    });
    assert.equal(response.status, 200, `Local asset or link: ${asset}`);
    const bytes = (await response.arrayBuffer()).byteLength;
    if (asset.startsWith("/_next/image")) {
        assert.ok(
            bytes < 256 * 1024,
            `Responsive image stays below 256 kB: ${asset}`,
        );
        console.log(`PASS optimized image: ${Math.round(bytes / 1024)} kB`);
    }
}
const socialImage = await fetch(new URL("/opengraph-image", origin), {
    signal: AbortSignal.timeout(15000),
});
assert.equal(socialImage.status, 200);
assert.match(socialImage.headers.get("content-type"), /image\/png/);
const socialBytes = Buffer.from(await socialImage.arrayBuffer());
assert.equal(socialBytes.readUInt32BE(16), 1200);
assert.equal(socialBytes.readUInt32BE(20), 630);
console.log("PASS social sharing image: 1200 × 630 PNG");
const response = await fetch(new URL("/api/contact", origin), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
    signal: AbortSignal.timeout(10000),
});
assert.equal(
    response.status,
    400,
    "Empty contact form is rejected before contacting Resend",
);
console.log(
    `PASS ${assets.size} local links/assets and contact validation; no email sent`,
);
