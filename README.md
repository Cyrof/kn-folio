# KN Folio
This is my personal digital portfolio, showcasing my skills, projects, and a simple contact form. It's built with Next.js and TypeScript, styled using Mantine Components and Tailwind CSS, and follows ESLint + Prettier conventions.

## Technologies Used
- **Framework:** Next.js 
- **Language:** TypeScript
- **Styling:** Mantine UI + Tailwind CSS
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

## Docker Deployment 
A Docker image is auto-built & pushed to Docker Hub on every merge  to `stable`. To run via Docker:
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
GitHub Actions are used to:
1. **Bump & tag releases** on merges into `stable`
2. **Build & push** Docker images for both `vX.Y.Z` and `latest` tags.
Configuration lives in `.github/workflows/`.

## License
This project is licensed under the [Apache V2 License](https://github.com/Cyrof/kn-folio/blob/stable/LICENSE).

---

_Built with :heart: and coffee :coffee: by Cyrof._
