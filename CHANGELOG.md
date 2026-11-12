# Changelog

Notable changes are recorded here. Work under **Unreleased** has not been
published. Release preparation moves those notes into a dated version entry.
Historical entries were reconstructed from the repository's existing tags and
commit history.

## [Unreleased]

## [v0.2.1] - 2026-11-12

### Added

- Soft page entrance transitions, a sliding active navigation marker, and a mobile menu reveal that respect reduced-motion preferences.

## [v0.2.0] - 2026-11-11

### Added

- Home-page experience section covering AI engineering, DevSecOps, and infrastructure work.
- GopherGate and OurNeZt projects, with OurNeZt featured on the home page.
- Updated travel and photography images, including the Hoi An about-page portrait.
- Self-hosted fonts, optimised WebP images, canonical metadata, and a generated social preview.
- Contact API regression tests, production preview checks, and local setup documentation.
- Application changelog and release preparation that promotes reviewed Unreleased notes.
- Regression tests for changelog preparation, run alongside contact tests in CI.

### Changed

- Redesign home, about, work, skills, contact, navigation, and footer with a consistent warm dusk theme.
- Improve responsive layouts, keyboard navigation, focus visibility, and form status announcements.
- Update professional content to reflect the AI System Engineer role and current experience.
- Send contact messages through Resend's HTTPS API with the visitor's address as Reply-To.
- Publish future release images to `ghcr.io/cyrof/kn-folio` using GitHub Actions authentication.
- Refactor the README into a project guide covering configuration, content, deployment, and releases.

### Fixed

- Validate contact payloads and handle missing configuration, provider errors, and timeouts without discarding the visitor's note.
- Keep the home-page Experience navigation state aligned with the visible section.

### Removed

- Mantine and Axios dependencies following the UI refresh.
- Nodemailer and Gmail SMTP configuration following the Resend migration.
- Docker Hub publishing credentials from the release workflow.

## [v0.1.5] - 2026-02-15

### Changed

- Update application dependencies.

## [v0.1.4] - 2026-02-15

### Changed

- Refresh home and about copy, project naming, and photography presentation.
- Replace the diagonal about-page image treatment with a sliding vertical split.

### Fixed

- Correct scroll opacity behaviour and skills cards flipping together.

## [v0.1.3] - 2025-06-22

### Added

- Expand project and skills content.

### Fixed

- Correct spelling in the about, project, and contact content.
- Correct background styling and Mantine CSS imports through PostCSS configuration.

## [v0.1.2] - 2025-05-11

### Changed

- Rework the Docker build and runtime configuration, including removal of standalone mode.
- Consolidate Mantine styles in the global stylesheet and force the dark theme.
- Update local setup documentation.

### Fixed

- Include portfolio JSON data in the container image for the skills page.

## [v0.1.1] - 2025-04-30

### Added

- Automated GitHub release and Docker image publishing workflow.

### Fixed

- Correct release workflow configuration and spelling.
