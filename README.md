# KN Folio
This is my personal digital portfolio, showcasing my skills, projects, and a contact form. It's built with Next.js and TypeScript, with responsive CSS, Tailwind CSS, and Lucide icons, and follows ESLint + Prettier conventions.

## Technologies Used
- **Framework:** Next.js 
- **Language:** TypeScript
- **Styling:** Responsive CSS + Tailwind CSS
- **Typography:** Self-hosted DM Sans and Space Grotesk (licenses in public/fonts)
- **Linting & Formatting:** ESLint, Prettier
- **Containerisation:** Docker
- **CI/CD:** Github Actions

## Getting Started
### Prerequisites
- Node.js >= 18
- npm or yarn
- Docker (for containerised runs)

### Local Setup
1. **Clone the repository (stable branch)**
    ```bash
    git clone --branch stable https://github.com/Cyrof/kn-folio.git
    cd kn-folio
    ```
2. **Install dependencies**
    ```bash
    npm ci
    ```
3. **Create your environment file**
    In the project root, create a `.env.local` file (this is ignored by Git):
    ```bash
    touch .env.local
    ```
4. **Populate `.env.local`**
    ```bash
    EMAIL_USER=you@example.com
    EMAIL_PASS=your_email_app_password
    RECIPIENT_EMAIL=your_personal@inbox.com
    ```

### Environment Variables 
| key | Description |
| --- | --- | 
| `EMAIL_USER` | Email address the app will send _from_ (e.g., a noreply address
| `EMAIL_PASS` | App-specific password or SMTP credential for `EMAIL_USER` |
| `RECIPIENT_EMAIL` | Your inbox where contact-form messages will be delivered |
| `SITE_URL` | Optional public-origin override, set before building for canonical links and absolute social image URLs. Defaults to `https://knfolio.cyrostack.dev`. |


### Running the App
**Development**
This spins up Next.js in hot-reload mode so you can make changes and see them instantly.
```bash
npm run dev
```
Open your browser at `http://localhost:3000`
**Production (Local Build)**
This builds an optimised production bundle and then serves it.
```bash
npm run build 
npm start
```
By default it will listen on port 3000&mdash;visit `http://localhost:3000` to verify.

## Design and accessibility

The home, about, work, skills, and contact pages share a warm dusk theme
with plum and brown surfaces, cream text, and peach accents. Typography, spacing, colors, responsive layouts, and
reduced-motion behavior are defined in `app/globals.css`. Shared navigation and
footer live in the root layout. The original `/myWork` route is retained, and
`/skills` offers direct access to the full toolkit.
The home-page Experience section is available at `/#experience` from the main
navigation. Role details and responsibilities are maintained in
`app/data/experience.ts`.

Projects and skills render on the server from `app/data/processed-data.json`;
presentation details and skill grouping live in `app/data/portfolio.ts`.
Skill descriptions use native keyboard-accessible disclosures. Navigation has
active-page indicators, an Escape-dismissable mobile menu, and a skip link.
Contact fields have associated labels, browser validation, and announced status
messages. The existing `/api/contact` endpoint and SMTP configuration are retained.

Fonts are self-hosted with their licenses in `public/fonts`. Optimized WebP
photos in `public/images/optimized` are served through Next Image with responsive
sizes; original photos are preserved. Each page has a title and description,
and `app/opengraph-image.tsx` generates the social sharing image.
The default public URL is `https://knfolio.cyrostack.dev`, for deployment behind the Kubernetes ingress.
For another domain, set `SITE_URL` before building; Docker builds accept
`--build-arg SITE_URL=https://your-domain.example`. These metadata URLs are
prerendered at build time, so a runtime-only Kubernetes environment change will
not update them. Ingress and TLS configuration remain part of deployment setup.

## Verification

```bash
npm run lint
npm test
npm run build
```

Contact regression tests replace SMTP with an in-memory transport and never send
email. With the production server running, verify rendered content, metadata,
local links, optimized image responses, and empty-form validation:

```bash
npm start -- --hostname 127.0.0.1 --port 4173
node scripts/verify-preview.mjs http://127.0.0.1:4173
```

Browser review should include 1440px desktop, 768px tablet, and 390px/320px mobile
widths on all five pages. Check horizontal overflow, image cropping, menu opening
and Escape dismissal, visible keyboard focus, skill disclosures, required/email
validation, and form loading/success/error announcements. Live email delivery
requires the SMTP environment variables above. Resume downloading and security
review remain separate workstreams.

## Docker Deployment 
A Docker image is published to Docker Hub when a release pull request is merged into `stable`. To run via Docker:
```bash
docker pull cyrof/kn-folio:latest
docker run -d \
    -e EMAIL_USER \
    -e EMAIL_PASS \
    -e RECIPIENT_EMAIL \
    -p 3000:3000 \
    cyrof/kn-folio:latest
```
For full Docker-specific instructions, see the [Docker Hub README](https://hub.docker.com/repository/docker/cyrof/kn-folio/general).

## CI/CD
GitHub Actions are used to lint and build changes on pull requests to `master`. Start a release with the `prepare-release` workflow; it creates a versioned release branch and pull request to `stable`. After the changelog is reviewed and that pull request is merged, the `release` workflow creates the GitHub release and publishes Docker images tagged with the version and `latest`.
Configuration lives in `.github/workflows/`.

## License
This project is licensed under the [Apache V2 License](https://github.com/Cyrof/kn-folio/blob/stable/LICENSE).

---

_Built with :heart: and coffee :coffee: by Cyrof._
