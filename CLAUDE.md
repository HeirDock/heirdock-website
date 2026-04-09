# HeirDock Marketing Website

## Project Overview

Static marketing website for HeirDock (heirdock.com). 27 pages across four sections: Global, Customer, Partner, and Legal stubs. Pre-rendered as static HTML for SEO, deployed to S3 + CloudFront.

## Tech Stack

- **Frontend:** React 19, TypeScript 5.7, Vite 7
- **Styling:** Plain CSS with CSS custom properties (design tokens). No MUI, no Tailwind.
- **Pre-rendering:** Custom prerender script (entry-server.tsx renders each route to static HTML at build time)
- **Infrastructure:** AWS S3 + CloudFront, Terraform
- **CI/CD:** GitHub Actions with OIDC authentication
- **Forms:** Lambda + API Gateway + SES + reCAPTCHA v3
- **Containerization:** Docker (Node 24 Alpine) for local dev only

## Brand Guidelines

- **Colors:** Navy (#1B3A5C), Gold (#C4892B), Warm cream (#F7F5F2), Footer blue-gray (#7A9AB5)
- **Font:** Inter (Regular 400, Medium 500, Bold 700) — self-hosted WOFF2
- **Tone:** Calm, warm, unhurried. No urgency patterns, no alarming language.
- **Terminology:** Use "Item" not "asset," "Estate Transition" not "death mode," "Trusted Participant" not "heir"

## Commands

- Development: `cd apps/web && npm run dev` (port 3006)
- Docker: `docker compose up` (port 3006, hot-reload via volume mounts)
- Build: `cd apps/web && npm run build` (outputs to dist/client/)
- Lint: `cd apps/web && npm run lint`
- Type check: `cd apps/web && npm run typecheck`

## Build Pipeline

`npm run build` runs three steps:
1. `build:client` — Vite client build → `dist/client/` (JS, CSS, index.html template)
2. `build:server` — Vite SSR build → `dist/server/` (Node.js prerender script)
3. `prerender` — Runs `dist/server/entry-server.js` which renders all 26 routes to individual HTML files in `dist/client/`, then deletes `dist/server/`

Final output for deployment: `dist/client/` (all HTML + assets)

## Conventions

- Plain CSS only — no CSS-in-JS, no component libraries
- Design tokens as CSS custom properties in `src/styles/tokens.css`
- All environment variables prefixed with `VITE_`
- Tag-based deployments: `staging-*` and `production-*`
- GitHub OIDC for AWS authentication (no stored credentials)
- AWS Account: HeirDock-Prod (077207386011) for both environments
- Contact form emails go to info@heirdock.com
- Legal stubs have `noindex` meta tags
- Staging environment has `VITE_NOINDEX=true`

## Project Structure

```
heirdock-website/
├── apps/web/           # React + Vite web app
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Page components (27 pages)
│   │   ├── styles/     # CSS files (tokens, base)
│   │   ├── assets/     # Images, icons, fonts
│   │   ├── App.tsx     # Route definitions
│   │   ├── entry-client.tsx  # Client hydration entry
│   │   └── entry-server.tsx  # SSG prerender script
│   ├── public/         # Static assets
│   ├── dist/           # Build output
│   └── index.html      # HTML template
├── infra/
│   ├── terraform/      # Infrastructure as Code
│   └── lambda/         # Contact form Lambda
├── .github/workflows/  # CI/CD pipelines
├── Dockerfile          # Dev container
└── docker-compose.yml  # Local dev environment
```

## AWS Infrastructure

- **S3:** `heirdock-website-{env}-frontend` (static files), `heirdock-website-{env}-logs` (access logs)
- **CloudFront:** CDN with OAC, clean URL routing function, custom 404 page
- **Lambda:** Contact form handler (Node.js 24, ARM64)
- **API Gateway:** POST /contact endpoint with CORS and rate limiting
- **SES:** Email delivery for form submissions
- **Route 53 + ACM:** DNS and SSL (production only, when zone migrates)

## Content Source

Page content comes from the Replit prototype: https://heirway-tracker-aaronober1.replit.app/
Implementation plan: C:\Users\tresp\dev\heirdock\HeirDock\implementation-plan.md
