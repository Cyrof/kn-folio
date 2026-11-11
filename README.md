<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

<p align="center">
  <a href="https://github.com/Cyrof/kn-folio/actions/workflows/ci.yaml">
    <img src="https://img.shields.io/github/actions/workflow/status/Cyrof/kn-folio/ci.yaml?branch=master&style=for-the-badge&label=CI" alt="CI Status">
  </a>
  <a href="https://github.com/Cyrof/kn-folio/actions/workflows/release.yaml">
    <img src="https://img.shields.io/github/actions/workflow/status/Cyrof/kn-folio/release.yaml?branch=stable&style=for-the-badge&label=Release" alt="Release Status">
  </a>
  <a href="https://github.com/Cyrof/kn-folio/releases">
    <img src="https://img.shields.io/github/v/release/Cyrof/kn-folio?style=for-the-badge" alt="Latest Release">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/Cyrof/kn-folio?style=for-the-badge" alt="License">
  </a>
</p>

<br />

<div align="center">
  <h1>KN Folio</h1>

  <p>
    Keith Neo's personal portfolio: AI engineering, infrastructure, and thoughtful software.
    <br />
    <br />
    <a href="https://knfolio.cyrostack.dev">View Portfolio</a>
    &middot;
    <a href="https://github.com/Cyrof/kn-folio/issues/new?labels=bug&template=bug-report.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Cyrof/kn-folio/issues/new?labels=enhancement&template=feature-request.md">Request Feature</a>
    &middot;
    <a href="https://github.com/Cyrof/kn-folio/releases">Releases</a>
  </p>
</div>

---

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#what-it-does">What It Does</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#repository-structure">Repository Structure</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#content-and-design">Content And Design</a></li>
    <li><a href="#production-usage">Production Usage</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#release-flow">Release Flow</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#security">Security</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

---

## About The Project

**KN Folio** is my personal digital portfolio, built with Next.js and TypeScript.
It brings together my work as an AI System Engineer, my DevSecOps experience,
personal projects, and photography in a responsive website.

The site uses a warm dusk theme with plum and brown surfaces, cream text, and
peach accents. Shared navigation, typography, and spacing give the home, about,
work, skills, and contact pages a consistent presentation.

### What It Does

- Introduces my work and current experience on the home page.
- Showcases projects including OurNeZt, GopherGate, and my infrastructure work.
- Presents grouped skills with keyboard-accessible descriptions.
- Shares personal background, travel, and photography on the about page.
- Accepts contact messages through Resend, with a direct email link alongside the form.
- Provides responsive images, self-hosted fonts, page metadata, and a generated social preview.
- Supports Docker packaging and a separate Kubernetes deployment managed in CyroStack.

### How It Works

Pages render portfolio content on the server from local data files. Client
components handle interactions such as the mobile menu, image gallery, and
contact form.

Contact messages follow this flow:

```text
Visitor submits the contact form
              |
              v
     POST /api/contact
     Validate form fields
              |
              v
     Resend HTTPS API
              |
              v
     Configured recipient inbox
```

The server uses a verified sender address and sets the visitor's email as
Reply-To. The API key stays on the server. A failed request preserves the
visitor's message in the form so they can retry; success clears it.

### Repository Structure

```text
kn-folio/
|-- app/
|   |-- about/                 # About page
|   |-- api/contact/           # Contact form endpoint
|   |-- api/data/              # Portfolio data endpoint
|   |-- components/            # Shared UI and interactive components
|   |-- contact/               # Contact page
|   |-- data/                  # Projects, skills, and experience
|   |-- myWork/                # Work page (existing URL retained)
|   |-- skills/                # Skills page
|   |-- globals.css            # Visual system and responsive styles
|   |-- layout.tsx             # Fonts, metadata, navigation, and footer
|   |-- opengraph-image.tsx     # Generated social preview
|   `-- page.tsx               # Home page
|-- docs/resend-setup.md        # Email setup and Kubernetes migration guide
|-- public/                    # Images, icons, and licensed local fonts
|-- scripts/verify-preview.mjs  # Production preview checks
|-- tests/contact.test.mjs      # Contact API regression tests
|-- .github/workflows/          # CI, linting, and release automation
|-- .env.example               # Environment template without credentials
|-- Dockerfile
|-- LICENSE
|-- package.json
`-- README.md
```

### Built With

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white" alt="Resend">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions">
</p>

Next.js 15 and React 19 power the application. Styling combines responsive CSS
and Tailwind CSS, with Lucide icons and self-hosted DM Sans and Space Grotesk.
ESLint and Prettier provide code conventions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started

### Prerequisites

- Git.
- Node.js and npm. The current CI workflows and Docker build stage use Node.js 18.
- A Resend account and verified sending domain to test contact email delivery.
- Docker for containerised runs; kubectl and Helm for the separate Kubernetes deployment.

Email credentials are optional when browsing or building the site locally.

### Installation

Clone the development branch and install the locked dependencies:

```bash
git clone --branch master https://github.com/Cyrof/kn-folio.git
cd kn-folio
npm ci
```

Copy `.env.example` to `.env.local` using your editor or shell:

```powershell
Copy-Item .env.example .env.local
```

If `.env.local` already exists, edit that file instead of replacing it.
Configure email as described below, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Configuration

Set these variables in `.env.local`:

```dotenv
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Keith Portfolio <portfolio@mail.cyrostack.dev>
RECIPIENT_EMAIL=your_personal@inbox.com

# Optional: set before building for a different public domain.
# SITE_URL=https://knfolio.cyrostack.dev
```

| Variable | Purpose | When Used |
| --- | --- | --- |
| `RESEND_API_KEY` | Server-only Resend key with sending access to the verified domain | Runtime, required for contact email |
| `CONTACT_FROM_EMAIL` | Sender address on the verified domain, optionally with a display name | Runtime, required for contact email |
| `RECIPIENT_EMAIL` | Inbox that receives contact-form messages | Runtime, required for contact email |
| `SITE_URL` | Public origin for canonical links and social image URLs; defaults to `https://knfolio.cyrostack.dev` | Build time, optional |

Follow the [Resend setup guide](docs/resend-setup.md) for domain verification,
Cloudflare DNS, local delivery testing, and Kubernetes configuration. Resend is
a hosted service; it does not require a mail application or ingress in your cluster.

Restart the local server after changing email settings. Missing email settings
cause the contact endpoint to return a service-unavailable response.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Usage

### Run Locally

```bash
npm run dev
```

For a different port:

```bash
npm run dev -- --port 4173
```

### Browse The Portfolio

| Page | Route | Content |
| --- | --- | --- |
| Home | `/` | Introduction, featured projects, and experience |
| Experience | `/#experience` | Current role and responsibilities on the home page |
| About | `/about` | Background, travel, and photography |
| Work | `/myWork` | Full project collection |
| Skills | `/skills` | Grouped skills and descriptions |
| Contact | `/contact` | Contact form and direct email link |

### Test Email Delivery

With the sending domain verified and all three email variables configured,
submit a message on the contact page. Check the recipient inbox and Resend's
email logs, then confirm that replying addresses the visitor's email.
The direct email link opens the visitor's email application independently of the form.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Content And Design

| File Or Directory | What To Update |
| --- | --- |
| `app/data/processed-data.json` | Source project and skill content |
| `app/data/portfolio.ts` | Project presentation, featured selection, and skill grouping |
| `app/data/experience.ts` | Role details and responsibilities |
| `app/about/page.tsx` | Personal background and about-page content |
| `app/components/imageGallery.tsx` | Photography gallery |
| `app/globals.css` | Colours, typography, spacing, responsive layouts, and reduced-motion behaviour |
| `app/components/navbar.tsx` and `app/components/footer.tsx` | Shared navigation and footer |
| `public/images/optimized/` | Optimised WebP photos; originals are preserved elsewhere under `public/images/` |
| `public/fonts/` | Local font files and their licenses |
| `app/layout.tsx` and page metadata exports | Site-wide and page-specific titles, descriptions, and canonical links |
| `app/opengraph-image.tsx` | Generated social sharing image |

Navigation includes active indicators, an Escape-dismissable mobile menu, and a
skip link. Skills use native disclosures. Contact fields have labels, browser
validation, and announced status messages. Images use Next Image with responsive sizes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Production Usage

### Local Production Build

```bash
npm run build
npm start
```

The production server listens on port 3000 by default. A running Next.js server
is required for the contact API.

### Docker

To build the current checkout:

```bash
docker build -t kn-folio:local .
docker run --rm --env-file .env.local -p 3000:3000 kn-folio:local
```

The Docker build excludes `.env*` files. Email settings are injected at runtime.
For another public domain, pass the origin while building:

```bash
docker build --build-arg SITE_URL=https://your-domain.example -t kn-folio:local .
```

Canonical and social preview URLs are prerendered. Changing `SITE_URL` only at
container runtime will not update those URLs; rebuild the image.

Published releases are available as `cyrof/kn-folio:<version-tag>` and
`cyrof/kn-folio:latest`. After the desired version has been published:

```bash
docker pull cyrof/kn-folio:latest
docker run --rm --env-file .env.local -p 3000:3000 cyrof/kn-folio:latest
```

See the [Docker Hub repository](https://hub.docker.com/repository/docker/cyrof/kn-folio/general)
for published images.

### Kubernetes

The Helm chart is maintained separately in
[CyroStack](https://github.com/Cyrof/CyroStack), under `portfolio/knfolio-chart`.
Update its environment variables and Secret references for Resend before
rolling out this version. The [setup guide](docs/resend-setup.md) covers the
migration order, Secret creation, chart changes, rollout, and delivery checks.

The public hostname is `knfolio.cyrostack.dev`; ingress and TLS are configured
in the deployment repository. This repository contains the application and Docker build.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Development

Run the application checks:

```bash
npm run lint
npm test
npm run build
```

Contact regression tests mock Resend HTTP requests. They do not read local
credentials or send email. They cover validation, request formatting,
configuration errors, provider failures, and timeouts.

After building, start a production preview:

```bash
npm start -- --hostname 127.0.0.1 --port 4173
```

In a second terminal, run the preview checks:

```bash
node scripts/verify-preview.mjs http://127.0.0.1:4173
```

These check rendered content, metadata, local links, image responses, and
empty-form validation. If you built with a custom `SITE_URL`, set the same value
in the terminal running the verification script.

Browser review should cover 1440px desktop, 768px tablet, and 390px/320px mobile
widths across all five pages. Check overflow, image crops, mobile menu behaviour,
keyboard navigation and focus, skill disclosures, and form loading, success,
and error messages. Live email delivery requires the Resend configuration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Release Flow

Normal changes target `master`. The workflows in `.github/workflows/` separate
application checks from release preparation and publishing:

| Workflow | Trigger And Behaviour |
| --- | --- |
| `ci.yaml` | Pull requests and pushes to `master`; builds Next.js and the Docker image |
| `lint.yaml` | Pull requests or manual dispatch; runs ESLint |
| `prepare-release.yaml` | Manual dispatch; bumps the version, prepares changelog entries, and opens a `release/vX.Y.Z` pull request into `stable` |
| `release.yaml` | A merged `release/*` pull request into `stable`, or manual dispatch; publishes the Git tag, GitHub Release, and Docker images |

For a normal release:

1. Merge application changes into `master`.
2. Run `prepare-release` with a patch, minor, or major bump. Its dry-run option previews changes without pushing a branch or pull request.
3. Replace the generated changelog placeholders and review the release pull request.
4. Merge the release pull request into `stable` to publish the versioned and `latest` images.
5. Roll out the published image through the deployment workflow in CyroStack.

Release tags are created during publishing, after the release pull request has
merged. Publishing an image does not update the Kubernetes deployment automatically.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Roadmap

- [x] Cohesive design across home, about, work, skills, and contact pages.
- [x] Experience section and featured projects.
- [x] Responsive images, local fonts, and social metadata.
- [x] Contact delivery through Resend.
- [x] Contact regression tests and production preview checks.
- [ ] Resume download support, tracked separately in [#3](https://github.com/Cyrof/kn-folio/issues/3).

See the [open issues](https://github.com/Cyrof/kn-folio/issues) for planned work
and known issues. Security review and remediation are tracked separately.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contributing

1. Create a branch from `master` for your change.
2. Update the relevant content, code, or documentation.
3. Run the development checks for application changes and review affected layouts in the browser.
4. Commit using conventional commit style, such as `docs: clarify local setup`.
5. Open a pull request into `master` using the repository template.

Use the `prepare-release` workflow for release preparation. Include reproduction
steps for bugs and check existing issues before opening a feature request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Security

Keep the Resend API key in `.env.local` for local development and in a Kubernetes
Secret for deployment. `.env.local` is ignored by Git and excluded from Docker
builds. Commit only the credential-free `.env.example` template.

Email variables are server-only; do not prefix them with `NEXT_PUBLIC_`.
When reporting a security issue, omit credentials and private contact messages.
Security review and remediation should have their own issue and verification.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## License

Distributed under the Apache License 2.0. See [LICENSE](LICENSE) for details.
Font licenses are included in [public/fonts](public/fonts).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contact

Project Owner: [Keith Neo / Cyrof](https://github.com/Cyrof)

Portfolio: [knfolio.cyrostack.dev](https://knfolio.cyrostack.dev)

Repository: [Cyrof/kn-folio](https://github.com/Cyrof/kn-folio)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
