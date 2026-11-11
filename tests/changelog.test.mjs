import assert from "node:assert/strict";
import { test } from "node:test";

import { prepareChangelog } from "../scripts/prepare-changelog.mjs";

const history =
    "## [v0.1.5] - 2026-02-15\n\n### Changed\n\n- Updated dependencies.\n";
const changelog = `# Changelog\n\nRelease notes.\n\n## [Unreleased]\n\n### Added\n\n- New portfolio design.\n\n${history}`;

test("release preparation promotes notes, resets Unreleased, and preserves history", () => {
    const result = prepareChangelog(changelog, "v0.1.6", "2026-11-12");
    assert.equal(
        result,
        `# Changelog\n\nRelease notes.\n\n## [Unreleased]\n\n## [v0.1.6] - 2026-11-12\n\n### Added\n\n- New portfolio design.\n\n${history}`,
    );
    assert.equal((result.match(/New portfolio design/g) || []).length, 1);
});

test("release preparation accepts Windows line endings and an initial release", () => {
    const source =
        "# Changelog\r\n\r\n## [Unreleased]\r\n\r\n- Initial release.\r\n";
    const result = prepareChangelog(source, "v1.0.0", "2026-11-12");
    assert.match(
        result,
        /## \[v1\.0\.0\] - 2026-11-12\n\n- Initial release\.\n$/,
    );
    assert.doesNotMatch(result, /\r/);
});

for (const tag of ["0.1.6", "v01.2.3", "v1.2", "v1.2.3-beta", "v1.2.3\n"]) {
    test(`release preparation rejects an invalid tag: ${JSON.stringify(tag)}`, () => {
        assert.throws(
            () => prepareChangelog(changelog, tag, "2026-11-12"),
            /release tag/,
        );
    });
}

for (const date of ["2026-2-01", "2026-02-30", "2026-13-01", "not-a-date"]) {
    test(`release preparation rejects an invalid date: ${date}`, () => {
        assert.throws(
            () => prepareChangelog(changelog, "v0.1.6", date),
            /release date/,
        );
    });
}

for (const source of [
    "# Changelog\n",
    `# Changelog\n\n${history}\n## [Unreleased]\n\n- Notes.\n`,
    "# Changelog\n\n## [Unreleased]\n\n- Notes.\n\n## [Unreleased]\n",
]) {
    test("release preparation rejects missing, misplaced, or repeated Unreleased headings", () => {
        assert.throws(
            () => prepareChangelog(source, "v0.1.6", "2026-11-12"),
            /first changelog section/,
        );
    });
}

for (const notes of ["", "### Added\n\n### Changed", "### Added\n\n- (fill)"]) {
    test("release preparation rejects empty or placeholder notes", () => {
        const source = `# Changelog\n\n## [Unreleased]\n\n${notes}\n\n${history}`;
        assert.throws(
            () => prepareChangelog(source, "v0.1.6", "2026-11-12"),
            /Add release notes/,
        );
    });
}

for (const version of ["v0.1.5", "0.1.5"]) {
    test(`release preparation rejects an existing version heading: ${version}`, () => {
        const source = changelog.replace("[v0.1.5]", `[${version}]`);
        assert.throws(
            () => prepareChangelog(source, "v0.1.5", "2026-11-12"),
            /already contains/,
        );
    });
}

test("the next preparation requires fresh notes after the release is synchronised", () => {
    const released = prepareChangelog(changelog, "v0.1.6", "2026-11-12");
    assert.throws(
        () => prepareChangelog(released, "v0.1.7", "2026-11-13"),
        /Add release notes/,
    );
});
