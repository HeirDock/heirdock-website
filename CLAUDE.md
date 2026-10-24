# HeirDock Marketing Website

## Project Overview

Static marketing website for HeirDock (heirdock.com). 19 pages across four sections: Global, Customer, Partner, and Legal stubs. Pre-rendered as static HTML for SEO, deployed to S3 + CloudFront.

## Tech Stack

- **Frontend:** React 19, TypeScript 5.7, Vite 7
- **Styling:** Plain CSS with CSS custom properties (design tokens). No MUI, no Tailwind.
- **Pre-rendering:** Custom prerender script (entry-server.tsx renders each route to static HTML at build time)
- **Infrastructure:** AWS S3 + CloudFront, Terraform
- **CI/CD:** GitHub Actions with OIDC authentication
- **Forms:** Lambda + API Gateway + SES + reCAPTCHA v3
- **Containerization:** Docker (Node 24 Alpine) for local dev only

## Brand Guidelines

- **Design system:** The site mirrors the HeirDock platform's design system (`heirdock-platform/docs/design/design-system.json`, as rendered by the app's `materialTheme.js`). Color, radius, shadow and motion values live only in `apps/web/src/styles/tokens.css`; its marked design-system block records the platform commits it was copied from. Change values there, never inline.
- **Colors:** Use tokens, never raw hex/rgb in components or pages. The primary is the platform's `--color-primary`. Headings use `--color-text-primary`, not a brand color. `--color-brand-highlight` (the logo blue) is for text 24px and up only (3.45:1). Teal (`--color-secondary`) is decorative: never under white text, never as body text.
- **Components:** No chips, pills or badges. Links never underline on hover (they fade); links inside running text stay underlined. Clickable cards use `.card--link` (tint and primary border on hover, no lift). Every interactive element keeps the global `:focus-visible` ring.
- **Font:** Inter variable (weights 100-900) from `@fontsource-variable/inter`, bundled and content-hashed by Vite; the latin subset is preloaded by the prerender. Headings: h1 600, h2-h4 500.
- **Tone:** Calm, warm, unhurried. No urgency patterns, no alarming language.
- **AI:** Say it sparingly. The site uses "AI" twice: the Security page's "Responsible AI" card and the FAQ answer on how identification works. Elsewhere, name what the feature does (identification, valuation).
- **Terminology:** Match the app's names: "Stewardship" (after the account holder's passing) and "Care Mode" (when they can't manage things themselves), never "death mode" or "Estate Transition"; "Trusted Participant" (everyone the account holder gives access to) not "heir", and never "Members". Household roles are Primary Account Holder (short "Account Holder", never "Owner"), Manager (manages the household on their behalf) and Shared Access (sees only what is shared with them). Access levels are Viewer, Contributor and Full Access, and apply per Collection or per Vault document, never to the whole household; Steward, Alternate Steward, Care Steward and Beneficiary are designations, not access levels. An item's plan is its "Intention" (Keep, Sell, Gift, Donate, Undecided) with "Intended For"; beneficiaries are named for the household or a collection, not per item. The app's product copy never says "AI". "Asset" is fine in site copy (household assets, asset records); "Item" is the app's word for one thing someone owns.

## Commands

- Development: `cd apps/web && npm run dev` (port 3006)
- Docker: `docker compose up` (port 3006, hot-reload via volume mounts)
- Build: `cd apps/web && npm run build` (outputs to dist/client/)
- Lint: `cd apps/web && npm run lint` (ESLint, then stylelint; together they reject inline `style` props and raw hex/rgb/hsl/named colors anywhere outside `src/styles/tokens.css`)
- Type check: `cd apps/web && npm run typecheck`

## Build Pipeline

`npm run build` runs three steps:
1. `build:client` — Vite client build → `dist/client/` (JS, CSS, index.html template)
2. `build:server` — Vite SSR build → `dist/server/` (Node.js prerender script)
3. `prerender` — Runs `dist/server/entry-server.js` which renders all 19 routes to individual HTML files in `dist/client/`, then deletes `dist/server/`

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
│   │   ├── pages/      # Page components (19 pages)
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
