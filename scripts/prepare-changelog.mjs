import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

export function prepareChangelog(
    source,
    tag,
    date = new Date().toISOString().slice(0, 10),
) {
    if (!/^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(tag)) {
        throw new Error("Expected a release tag in vX.Y.Z format.");
    }
    const timestamp = Date.parse(`${date}T00:00:00Z`);
    if (
        !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        Number.isNaN(timestamp) ||
        new Date(timestamp).toISOString().slice(0, 10) !== date
    ) {
        throw new Error("Expected a valid release date in YYYY-MM-DD format.");
    }

    const text = source.replace(/\r\n/g, "\n");
    const sections = [...text.matchAll(/^## [^\n]+$/gm)];
    const unreleased = sections.filter((section) =>
        /^## \[Unreleased\][ \t]*$/.test(section[0]),
    );
    if (unreleased.length !== 1 || sections[0] !== unreleased[0]) {
        throw new Error(
            "The first changelog section must be a single ## [Unreleased] heading.",
        );
    }

    const versionHeading = new RegExp(
        `^## \\[v?${tag.slice(1).replace(/\./g, "\\.")}\\](?:[ \\t]|$)`,
    );
    if (sections.some((section) => versionHeading.test(section[0]))) {
        throw new Error(`CHANGELOG.md already contains ${tag}.`);
    }

    const start = unreleased[0].index;
    const end = sections[1]?.index ?? text.length;
    const notes = text.slice(start + unreleased[0][0].length, end).trim();
    const body = notes
        .replace(/^#{3,6}[^\n]*$/gm, "")
        .replace(/^[ \t]*---[ \t]*$/gm, "")
        .trim();
    if (!body || notes.includes("(fill)")) {
        throw new Error(
            "Add release notes under [Unreleased] before preparing a release.",
        );
    }

    const preamble = text.slice(0, start).trimEnd();
    const history = text.slice(end).trim();
    return (
        `${preamble ? `${preamble}\n\n` : ""}## [Unreleased]\n\n` +
        `## [${tag}] - ${date}\n\n${notes}\n` +
        (history ? `\n${history}\n` : "")
    );
}

if (
    process.argv[1] &&
    import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
    try {
        if (process.argv.length !== 3) {
            throw new Error("Usage: node scripts/prepare-changelog.mjs vX.Y.Z");
        }
        const file = new URL("../CHANGELOG.md", import.meta.url);
        const updated = prepareChangelog(
            readFileSync(file, "utf8"),
            process.argv[2],
        );
        writeFileSync(file, updated);
        console.log(`Prepared CHANGELOG.md for ${process.argv[2]}.`);
    } catch (error) {
        console.error(`Changelog preparation failed: ${error.message}`);
        process.exitCode = 1;
    }
}
