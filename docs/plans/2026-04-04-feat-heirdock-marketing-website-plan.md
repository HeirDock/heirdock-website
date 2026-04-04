---
title: "feat: HeirDock Marketing Website"
type: feat
date: 2026-04-04
---

# feat: HeirDock Marketing Website

## Overview

Build a 27-page static marketing website for HeirDock (heirdock.com) using React 19 + Vite + TypeScript with plain CSS. The site serves two audience paths — families (B2C) and professional partners (B2B2C) — from a single homepage. Deploy to AWS S3 + CloudFront with Terraform IaC and GitHub Actions CI/CD, replicating the proven Roxmont platform pattern.

**Brainstorm:** `docs/brainstorms/2026-04-04-heirdock-marketing-website-brainstorm.md`
**Content reference:** Implementation plan at `C:\Users\tresp\dev\heirdock\HeirDock\implementation-plan.md`
**Content source:** Replit prototype at `https://heirway-tracker-aaronober1.replit.app/`
**Reference implementation:** Roxmont platform at `C:\Users\tresp\dev\roxmont\roxmont-platform`

---

## Problem Statement / Motivation

HeirDock needs a public-facing marketing website to:
1. Explain the product to two distinct audiences (families and professional partners)
2. Drive conversions (free trial signups and demo requests)
3. Establish credibility and trust for a sensitive financial/estate planning product
4. Support SEO discovery for organic acquisition

The site must be static (pre-rendered HTML) for SEO, cheap to host, and consistent with the infrastructure patterns already established across the portfolio (Roxmont).

---

## Proposed Solution

### Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | React 19 + TypeScript 5.7 | Consistent with portfolio |
| Bundler | Vite 7 | Consistent with portfolio |
| SSG | `vite-react-ssg` | Pre-renders all 27 pages as static HTML at build time. Dev mode uses plain Vite (full HMR). Build uses `vite-react-ssg build`. Provides `<Head>` component for per-page SEO meta tags. |
| Styling | Plain CSS with CSS custom properties | Design tokens from implementation plan. No MUI, no Tailwind. |
| Router | react-router-dom v7 (library mode) | Standard route definitions; `vite-react-ssg` handles pre-rendering each route. |
| Containerization | Docker (node:22-alpine) | Local dev only via docker-compose |
| Hosting | S3 + CloudFront | Static files, OAC, HTTPS enforced |
| IaC | Terraform (~> 5.0) | Modular, per-environment state |
| CI/CD | GitHub Actions + OIDC | Tag-based deploys, no stored AWS credentials |
| Forms | Lambda + API Gateway + SES + reCAPTCHA v3 | Contact form + demo request form |
| AWS Account | HeirDock-Prod (077207386011) | Both staging and production environments |

### Static Pre-rendering with `vite-react-ssg`

**Why `vite-react-ssg`:** Purpose-built for React + Vite + react-router-dom. Handles the SSG plumbing, provides `<Head>` for per-page meta tags and `<ClientOnly>` for browser-only components. Dev experience is identical to a normal Vite project (HMR, fast refresh). SSG only runs at build time.

**Entry point (`src/main.tsx`):**

```tsx
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

export const createRoot = ViteReactSSG({ routes })
```

**Route definitions (`src/routes.tsx`):**

```tsx
import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/Layout'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, lazy: () => import('./pages/Home') },
      { path: 'about', lazy: () => import('./pages/About') },
      { path: 'contact', lazy: () => import('./pages/Contact') },
      { path: 'security', lazy: () => import('./pages/Security') },
      { path: 'faq', lazy: () => import('./pages/Faq') },
      { path: 'help', lazy: () => import('./pages/Help') },
      { path: 'status', lazy: () => import('./pages/Status') },
      // Customer section
      { path: 'customer', lazy: () => import('./pages/customer/Landing') },
      { path: 'customer/how-it-works', lazy: () => import('./pages/customer/HowItWorks') },
      { path: 'customer/features', lazy: () => import('./pages/customer/Features') },
      { path: 'customer/pricing', lazy: () => import('./pages/customer/Pricing') },
      { path: 'customer/use-cases', lazy: () => import('./pages/customer/UseCases') },
      // Partner section
      { path: 'partner', lazy: () => import('./pages/partner/Landing') },
      { path: 'partner/how-it-works', lazy: () => import('./pages/partner/HowItWorks') },
      { path: 'partner/features', lazy: () => import('./pages/partner/Features') },
      { path: 'partner/pricing', lazy: () => import('./pages/partner/Pricing') },
      { path: 'partner/use-cases', lazy: () => import('./pages/partner/UseCases') },
      { path: 'partner/why-partner', lazy: () => import('./pages/partner/WhyPartner') },
      { path: 'partner/demo', lazy: () => import('./pages/partner/Demo') },
      // Legal stubs
      { path: 'legal/terms', lazy: () => import('./pages/legal/Terms') },
      { path: 'legal/privacy', lazy: () => import('./pages/legal/Privacy') },
      { path: 'legal/cookies', lazy: () => import('./pages/legal/Cookies') },
      { path: 'legal/data-rights', lazy: () => import('./pages/legal/DataRights') },
      { path: 'legal/acceptable-use', lazy: () => import('./pages/legal/AcceptableUse') },
      { path: 'legal/dpa', lazy: () => import('./pages/legal/Dpa') },
      { path: 'legal/accessibility', lazy: () => import('./pages/legal/Accessibility') },
      // 404
      { path: '*', lazy: () => import('./pages/NotFound') },
    ],
  },
]
```

**Build output (dist/):**

```
dist/
  index.html                          # /
  about.html                          # /about
  contact.html                        # /contact
  customer/
    index.html                        # /customer
    pricing.html                      # /customer/pricing
    ...
  partner/
    index.html                        # /partner
    demo.html                         # /partner/demo
    ...
  legal/
    terms.html                        # /legal/terms
    ...
  assets/
    index-[hash].js                   # JS bundle (hydration)
    index-[hash].css                  # CSS bundle
```

Each HTML file contains the fully-rendered page content. JS hydrates for interactivity (nav toggle, accordion, forms).

**`package.json` scripts:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite-react-ssg build",
    "preview": "vite preview"
  }
}
```

### CloudFront Adaptation (No SPA Rewrite)

Unlike Roxmont's SPA, this site has real HTML files for every route. The CloudFront function changes from SPA rewriting to **clean URL handling**:

```js
// CloudFront Function: heirdock-website-{env}-routing
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // If URI has a file extension, serve as-is
  if (uri.includes('.')) {
    return request;
  }

  // /about -> /about.html
  // /customer/pricing -> /customer/pricing.html
  // / -> /index.html
  if (uri === '/') {
    request.uri = '/index.html';
  } else if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else {
    request.uri = uri + '.html';
  }

  return request;
}
```

Custom 404 error response in CloudFront maps 403 (S3 missing key) → `/404.html` with HTTP 404 status.

---

## Technical Considerations

### Architecture

- **Static site with hydration:** Pre-rendered HTML served from S3/CloudFront. JS bundle hydrates on load for interactivity (nav, accordion, forms). No server-side rendering at request time.
- **Separate form backend:** Lambda function handles both contact and demo forms via a single API Gateway endpoint. Forms differentiated by a `formType` field in the payload.
- **Two environments:** Staging (CloudFront URL only, no custom domain) and production (heirdock.com). Both in HeirDock-Prod AWS account (077207386011).

### SEO

- Every page gets unique `<title>`, `<meta name="description">`, and Open Graph tags via `vite-react-ssg`'s `<Head>` component
- Pre-rendered HTML means crawlers see full content without executing JS
- `robots.txt` and `sitemap.xml` in `public/`
- Staging environment: `<meta name="robots" content="noindex, nofollow">` injected via environment variable
- Canonical URLs point to `https://heirdock.com` (non-www canonical; www redirects)
- Legal stubs excluded from sitemap (no useful content)
- Custom 404 page with navigation back to homepage

### Performance

- Static HTML from CDN — fast globally
- CSS custom properties (no runtime CSS-in-JS)
- Self-hosted Inter font (WOFF2, preloaded, `font-display: swap`)
- Images: WebP with fallback, lazy-loaded below the fold
- Target: Lighthouse 90+ on all four categories

### Security

- HTTPS enforced (CloudFront HTTP → HTTPS redirect)
- reCAPTCHA v3 on form submissions (score threshold: 0.5)
- Honeypot field for bot detection
- Input validation + HTML stripping on Lambda
- CORS restricted to known origins per environment
- API Gateway rate limiting (5 req/s, 10 burst)
- Lambda reserved concurrency: 5

---

## Acceptance Criteria

- [ ] All 27 pages render with content from the Replit prototype
- [ ] Every page has unique `<title>`, `<meta description>`, and OG tags
- [ ] Pre-rendered HTML files in dist/ — one per route
- [ ] Contact form submits successfully and emails info@heirdock.com
- [ ] Demo request form submits successfully and emails info@heirdock.com
- [ ] reCAPTCHA v3 validates on form submission
- [ ] Mobile hamburger nav works (open, close, outside click)
- [ ] FAQ accordion expands/collapses with category filtering
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Staging deploys via `staging-*` tag to CloudFront URL
- [ ] Production deploys via `production-*` tag to heirdock.com
- [ ] Staging has `noindex` meta tag and restrictive robots.txt
- [ ] `docker compose up` runs local dev server with hot-reload
- [ ] CI runs lint + typecheck + build on PRs
- [ ] Custom 404 page for unmatched routes
- [ ] All internal links work (no broken links)
- [ ] CTA buttons link to app.heirdock.com (signup/login)
- [ ] Lighthouse 90+ on Performance, Accessibility, Best Practices, SEO

---

## Implementation Phases

### Phase 1: Project Scaffolding + Infrastructure

Set up the entire development and deployment pipeline before building any pages.

#### 1a: Project Setup

- [ ] Initialize `apps/web/` with Vite + React 19 + TypeScript
- [ ] Install dependencies: `react`, `react-dom`, `react-router-dom`, `vite-react-ssg`
- [ ] Configure `vite.config.ts` (path aliases: components, styles, assets, pages)
- [ ] Configure `tsconfig.json` (strict mode, path mappings)
- [ ] Configure ESLint (`eslint.config.js`)
- [ ] Create `.gitignore` (node_modules, dist, .terraform, .env.local, etc.)
- [ ] Create `CLAUDE.md` with project conventions
- [ ] Set up `src/main.tsx` entry point with `ViteReactSSG`
- [ ] Set up `src/routes.tsx` with all 27 routes (lazy imports)
- [ ] Create placeholder page components (empty exports) for all 27 pages
- [ ] Create `src/components/Layout.tsx` with `<Outlet />`
- [ ] Verify `npm run dev` works and `npm run build` produces 27+ HTML files in dist/

**Files to create:**

```
apps/web/package.json
apps/web/vite.config.ts
apps/web/tsconfig.json
apps/web/eslint.config.js
apps/web/index.html
apps/web/src/main.tsx
apps/web/src/routes.tsx
apps/web/src/App.tsx
apps/web/src/components/Layout.tsx
apps/web/src/pages/Home.tsx (+ all 27 page files)
apps/web/.env.staging
apps/web/.env.production
```

#### 1b: Docker Setup

- [ ] Create `Dockerfile` (node:22-alpine, WORKDIR /app, npm ci, expose 3001)
- [ ] Create `docker-compose.yml` (web service, volume mounts for src/public/index.html, port 3001, VITE_ENVIRONMENT=development)
- [ ] Verify `docker compose up` runs dev server with hot-reload

**Files to create:**

```
Dockerfile
docker-compose.yml
```

#### 1c: Terraform Infrastructure

Replicate Roxmont's modular Terraform structure, adapted for HeirDock.

**Prerequisites (manual, one-time):**
- Create S3 bucket for Terraform state: `heirdock-website-terraform-state` in HeirDock-Prod (077207386011)
- Obtain reCAPTCHA v3 site key + secret key from Google (register heirdock.com)

- [ ] Create Terraform root config (`main.tf`, `variables.tf`, `outputs.tf`)
- [ ] Create `modules/s3/` — `heirdock-website-{env}-frontend` + `heirdock-website-{env}-logs` buckets
- [ ] Create `modules/cloudfront/` — distribution with OAC, clean URL routing function (not SPA rewrite), custom 404 error page, logging
- [ ] Create `modules/dns/` — Route 53 zone lookup + ACM certificate for `heirdock.com` + `*.heirdock.com` (disabled initially since zone is elsewhere)
- [ ] Create `modules/iam/` — GitHub OIDC provider (conditional) + `heirdock-website-{env}-github-deploy` role trusting `HeirDock/heirdock-website`
- [ ] Create `modules/ses/` — SES domain identity for heirdock.com + DKIM + SPF (skip if already exists from platform)
- [ ] Create `modules/contact-form/` — Lambda + API Gateway (POST /contact) + CloudWatch logs
- [ ] Create `environments/staging.tfvars` and `environments/production.tfvars`
- [ ] Create `backends/staging.tfbackend` and `backends/production.tfbackend`
- [ ] Create Lambda function code (`infra/lambda/contact-form/index.js`) — adapted from Roxmont (subject: "HeirDock Contact" / "HeirDock Demo Request", to: info@heirdock.com, formType field differentiates contact vs. demo)

**Files to create:**

```
infra/terraform/main.tf
infra/terraform/variables.tf
infra/terraform/outputs.tf
infra/terraform/modules/s3/main.tf
infra/terraform/modules/s3/variables.tf
infra/terraform/modules/s3/outputs.tf
infra/terraform/modules/cloudfront/main.tf
infra/terraform/modules/cloudfront/variables.tf
infra/terraform/modules/cloudfront/outputs.tf
infra/terraform/modules/dns/main.tf
infra/terraform/modules/dns/variables.tf
infra/terraform/modules/dns/outputs.tf
infra/terraform/modules/iam/main.tf
infra/terraform/modules/iam/variables.tf
infra/terraform/modules/iam/outputs.tf
infra/terraform/modules/ses/main.tf
infra/terraform/modules/ses/variables.tf
infra/terraform/modules/ses/outputs.tf
infra/terraform/modules/contact-form/main.tf
infra/terraform/modules/contact-form/variables.tf
infra/terraform/modules/contact-form/outputs.tf
infra/terraform/environments/staging.tfvars
infra/terraform/environments/production.tfvars
infra/terraform/backends/staging.tfbackend
infra/terraform/backends/production.tfbackend
infra/lambda/contact-form/index.js
infra/lambda/contact-form/package.json
```

#### 1d: GitHub Actions CI/CD

- [ ] Create `ci.yml` — lint, typecheck, build on PR to main
- [ ] Create `build-and-deploy.yml` — reusable workflow: build, S3 sync (two-phase: assets with long cache, HTML with no-cache), CloudFront invalidation
- [ ] Create `deploy-staging.yml` — triggered by `staging-*` tags
- [ ] Create `deploy-production.yml` — triggered by `production-*` tags, with health check

**Files to create:**

```
.github/workflows/ci.yml
.github/workflows/build-and-deploy.yml
.github/workflows/deploy-staging.yml
.github/workflows/deploy-production.yml
```

**GitHub Environment variables to configure (per environment):**
- `AWS_ACCOUNT_ID`: `077207386011`
- `AWS_REGION`: `us-east-1`
- `CLOUDFRONT_DISTRIBUTION_ID`: (from Terraform output)

---

### Phase 2: Design System + Shared Components

Build all reusable CSS and components before any pages.

#### 2a: CSS Design Tokens + Base Styles

- [ ] Create `src/styles/tokens.css` — all CSS custom properties (colors, typography, spacing, layout from implementation plan)
- [ ] Create `src/styles/base.css` — reset, body, headings, links, `.container`, `.container--narrow`, buttons (`.btn-primary`, `.btn-outline`), section variants (`.section--warm`, `.section--white`, `.section--navy`, `.section--blue`)
- [ ] Create `src/styles/components.css` — all component styles (hero, feature-card, feature-grid, cta-band, step-card, pricing-table, use-case-card, faq, problem-section, benefit-list, diff-grid, audience-grid, callout, page-header, stub-body)
- [ ] Create `src/styles/pages.css` — minimal page-specific overrides
- [ ] Self-host Inter font (400, 500, 700 WOFF2) in `src/assets/fonts/`, preload in `index.html`

**Design tokens (from implementation plan):**

```css
:root {
  --color-navy:           #1B3A5C;
  --color-navy-dark:      #142C47;
  --color-gold:           #C4892B;
  --color-bg-warm:        #F7F5F2;
  --color-bg-white:       #FFFFFF;
  --color-bg-cream:       #FAF8F6;
  --color-text-primary:   #1A1714;
  --color-text-secondary: #4A4540;
  --color-text-muted:     #7A756F;
  --color-border:         #E8E4E0;
  --color-footer-bg:      #7A9AB5;
  --color-hero-bg:        #E8F0F8;
  --color-cta-bg:         #3B7DD8;
  --color-success:        #4CAF50;
  /* Typography, spacing, layout tokens as defined in implementation plan */
}
```

**Files to create:**

```
apps/web/src/styles/tokens.css
apps/web/src/styles/base.css
apps/web/src/styles/components.css
apps/web/src/styles/pages.css
apps/web/src/assets/fonts/inter-regular.woff2
apps/web/src/assets/fonts/inter-medium.woff2
apps/web/src/assets/fonts/inter-bold.woff2
```

#### 2b: Shared React Components

- [ ] `Nav.tsx` — sticky nav, logo left, links center/right, Sign Up + Sign In buttons, mobile hamburger toggle. Active state via route matching.
- [ ] `Footer.tsx` — three-column footer (brand + tagline + social, Quick Links, Legal links)
- [ ] `Hero.tsx` — configurable variant (light/navy), title, subtitle, action buttons, optional scroll chevron
- [ ] `FeatureCard.tsx` + `FeatureGrid.tsx` — icon + title + description card in responsive grid
- [ ] `CtaBand.tsx` — full-width blue gradient CTA with title, subtitle, buttons, optional note
- [ ] `StepCard.tsx` + `StepGrid.tsx` — numbered step cards in horizontal/vertical layout
- [ ] `PricingTable.tsx` + `PricingTier.tsx` — pricing tiers with feature lists and CTAs
- [ ] `FaqAccordion.tsx` + `FaqItem.tsx` — accordion with category filtering (no separate JS file — React handles state)
- [ ] `ProblemSection.tsx` — two-column narrative + bullet list
- [ ] `BenefitList.tsx` — checkmark list alongside image
- [ ] `PageHeader.tsx` — title + subtitle for interior pages
- [ ] `LegalStub.tsx` — reusable stub body component
- [ ] `ContactForm.tsx` — form with validation, reCAPTCHA, submit handler
- [ ] `DemoForm.tsx` — partner demo request form (shares ContactForm base logic)
- [ ] `Layout.tsx` — Nav + `<Outlet />` + Footer, wraps all pages
- [ ] `SeoHead.tsx` — wrapper around `<Head>` for consistent meta tag pattern

**Files to create:**

```
apps/web/src/components/Nav.tsx
apps/web/src/components/Nav.css
apps/web/src/components/Footer.tsx
apps/web/src/components/Footer.css
apps/web/src/components/Hero.tsx
apps/web/src/components/FeatureCard.tsx
apps/web/src/components/FeatureGrid.tsx
apps/web/src/components/CtaBand.tsx
apps/web/src/components/StepCard.tsx
apps/web/src/components/StepGrid.tsx
apps/web/src/components/PricingTable.tsx
apps/web/src/components/PricingTier.tsx
apps/web/src/components/FaqAccordion.tsx
apps/web/src/components/FaqItem.tsx
apps/web/src/components/ProblemSection.tsx
apps/web/src/components/BenefitList.tsx
apps/web/src/components/PageHeader.tsx
apps/web/src/components/LegalStub.tsx
apps/web/src/components/ContactForm.tsx
apps/web/src/components/DemoForm.tsx
apps/web/src/components/SeoHead.tsx
```

#### 2c: SVG Icons

- [ ] Create or source SVG icons: house, chart, people, document, shield, search, checkmark, chevron, hamburger, close, Facebook, Twitter/X, LinkedIn, Instagram
- [ ] Store as React components in `src/assets/icons/` (inline SVGs, no icon font)

---

### Phase 3: Page Implementation

Build pages section by section, using content from the Replit prototype. Each page imports shared components and adds page-specific content.

**Content extraction prerequisite:** Before this phase, the content from `https://heirway-tracker-aaronober1.replit.app/` must be extracted manually via browser. Each page needs: headings, body copy, CTA text, feature lists, pricing details.

#### 3a: Global Pages (7 pages)

1. [ ] `pages/Home.tsx` — Hero (light), "How HeirDock Works" feature grid (4 cards), "Hidden Asset Gap" problem section, CTA band, "Why Choose" benefit list, dual-path section (For Families / For Professionals)
2. [ ] `pages/About.tsx` — mission, founder story, values, differentiator grid, audience grid, "In One Sentence" callout
3. [ ] `pages/Contact.tsx` — ContactForm component (name, email, inquiry type dropdown, message)
4. [ ] `pages/Security.tsx` — security feature cards (encryption, access control, audit logging, SOC 2, GDPR/CCPA)
5. [ ] `pages/Faq.tsx` — FaqAccordion with categories: Getting Started, Inventory, Family & Sharing, Partners, Security, Billing
6. [ ] `pages/Help.tsx` — category navigation cards linking to FAQ or anchored sections
7. [ ] `pages/Status.tsx` — static "All Systems Operational" with placeholder for future integration

#### 3b: Customer Pages (5 pages)

1. [ ] `pages/customer/Landing.tsx` — emotional hero, key benefits, feature highlights, pricing teaser, CTA
2. [ ] `pages/customer/HowItWorks.tsx` — step grid (Create → Catalog → Organize → Protect)
3. [ ] `pages/customer/Features.tsx` — alternating feature sections (AI Identify, Valuation, Evidence, Sharing, Vault, Coverage, Estate)
4. [ ] `pages/customer/Pricing.tsx` — 3-tier pricing table (Basic $50, Plus $100, Family $150/yr) + billing FAQ
5. [ ] `pages/customer/UseCases.tsx` — sections with anchor nav (Insurance, Estate, Disaster, Moving)

#### 3c: Partner Pages (7 pages)

1. [ ] `pages/partner/Landing.tsx` — navy hero, problem/solution, partner types, CTA
2. [ ] `pages/partner/HowItWorks.tsx` — step grid (Register → Verify → Invite → Access → Deliver)
3. [ ] `pages/partner/Features.tsx` — alternating feature sections (client workspace, doc sharing, gap analysis, analytics, team mgmt)
4. [ ] `pages/partner/Pricing.tsx` — 3-tier pricing table (Solo, Growing, Enterprise) or "Contact for Pricing" CTAs
5. [ ] `pages/partner/UseCases.tsx` — use case cards by role (Insurance, Estate, Appraiser)
6. [ ] `pages/partner/WhyPartner.tsx` — benefits, metrics, revenue opportunity
7. [ ] `pages/partner/Demo.tsx` — DemoForm component (name, email, company, role, client count, message)

#### 3d: Legal Stubs (7 pages)

All use the `LegalStub` component with the appropriate topic name.

1. [ ] `pages/legal/Terms.tsx` — "terms of service"
2. [ ] `pages/legal/Privacy.tsx` — "privacy policy"
3. [ ] `pages/legal/Cookies.tsx` — "cookie policy"
4. [ ] `pages/legal/DataRights.tsx` — "data rights and compliance"
5. [ ] `pages/legal/AcceptableUse.tsx` — "acceptable use policy"
6. [ ] `pages/legal/Dpa.tsx` — "data processing"
7. [ ] `pages/legal/Accessibility.tsx` — "accessibility"

#### 3e: 404 Page

- [ ] `pages/NotFound.tsx` — branded 404 with nav, "Page not found" message, link back to homepage

---

### Phase 4: Forms + Interactivity

- [ ] `ContactForm.tsx` — client-side validation (required fields, email format, message length), reCAPTCHA v3 execution, POST to API Gateway, inline success/error messages, loading state, duplicate submit prevention
- [ ] `DemoForm.tsx` — same pattern with demo-specific fields (company, role dropdown, client count dropdown)
- [ ] `Nav.tsx` — mobile hamburger toggle, sticky on scroll (shadow class), close on link click / outside click, focus trapping for accessibility
- [ ] `FaqAccordion.tsx` — expand/collapse with CSS `max-height` transition, category filter via data attributes, one-at-a-time open behavior, keyboard accessible (Enter/Space to toggle), `aria-expanded` attributes
- [ ] Smooth scrolling — CSS `scroll-behavior: smooth`, anchor links on Use Cases pages, homepage scroll chevron

---

### Phase 5: SEO + Static Assets

- [ ] Add `<Head>` to every page with unique title, description, OG tags
- [ ] Create `public/robots.txt` (production: allow all; staging: disallow all via build-time swap)
- [ ] Create `public/sitemap.xml` (all non-legal pages)
- [ ] Add `rel="canonical"` pointing to `https://heirdock.com/...` on every page
- [ ] Create favicon and apple-touch-icon in `public/`
- [ ] Optimize images: WebP format, max 1200px wide, lazy loading
- [ ] Inline critical CSS or rely on `vite-react-ssg`'s built-in critical CSS extraction

---

### Phase 6: Infrastructure Deploy + QA

#### 6a: Terraform Apply (Staging)

1. Create Terraform state bucket manually in HeirDock-Prod
2. `terraform init -backend-config=backends/staging.tfbackend`
3. `terraform plan -var-file=environments/staging.tfvars`
4. `terraform apply` — creates S3 bucket, CloudFront distribution, IAM role, Lambda, API Gateway
5. Note the CloudFront distribution ID and domain for GitHub environment config
6. Provide DNS records that need manual creation (ACM validation CNAMEs, SES verification)

#### 6b: First Staging Deploy

1. Configure GitHub environment "staging" with `AWS_ACCOUNT_ID`, `AWS_REGION`, `CLOUDFRONT_DISTRIBUTION_ID`
2. Push code to main
3. Create tag `staging-v0.1.0` → triggers deploy
4. Verify site loads at CloudFront URL

#### 6c: QA Checklist

- [ ] All 27 pages render correctly at CloudFront staging URL
- [ ] Responsive testing: 375px, 768px, 1024px, 1440px
- [ ] Mobile nav hamburger works
- [ ] FAQ accordion works
- [ ] Contact form submits and email received at info@heirdock.com
- [ ] Demo form submits and email received
- [ ] All internal links work (no 404s)
- [ ] CTA buttons link to app.heirdock.com correctly
- [ ] Legal stubs show placeholder messaging
- [ ] 404 page renders for unknown routes
- [ ] `noindex` meta tag present on staging
- [ ] Lighthouse audit: 90+ on all categories
- [ ] Keyboard navigation works (tab through nav, forms, accordion)
- [ ] ARIA labels on interactive elements

#### 6d: Production Deploy

1. `terraform apply` for production environment
2. Add DNS records manually to current hosted zone:
   - ACM validation CNAME records
   - SES verification TXT + DKIM CNAMEs
   - A/AAAA records pointing to CloudFront (once Route 53 migrates)
3. Configure GitHub environment "production"
4. Create tag `production-v1.0.0` → triggers deploy + health check
5. Verify site at heirdock.com

---

## Success Metrics

- All 27 pages deployed and accessible
- Lighthouse scores 90+ across all categories
- Contact and demo forms deliver emails successfully
- Staging environment usable for pre-production review
- Deploy pipeline works end-to-end (tag → build → S3 → CloudFront → live)

---

## Dependencies & Risks

| Dependency | Risk | Mitigation |
|-----------|------|-----------|
| Content from Replit prototype | Cannot be scraped automatically; requires manual extraction | User must copy content from browser, or provide access for browser agent extraction |
| app.heirdock.com not live | CTA buttons lead to dead links | Use `#` placeholder with a visible "Coming Soon" tooltip, or link to a waitlist/coming-soon page |
| DNS managed elsewhere | Cannot deploy to heirdock.com immediately | Deploy to staging (CloudFront URL) first; production DNS records added manually when ready |
| reCAPTCHA keys needed | Forms won't work without them | Register heirdock.com with Google reCAPTCHA v3 before form implementation |
| Terraform state bucket | Does not exist yet | Create manually before first `terraform init` |
| GitHub OIDC in HeirDock-Prod | May or may not exist from platform | Terraform module has `create_oidc_provider` flag — set true for first environment, false after |
| SES domain identity | May already exist from platform | Check before applying SES module; skip if already verified |

---

## References & Research

### Internal References

- Brainstorm: `docs/brainstorms/2026-04-04-heirdock-marketing-website-brainstorm.md`
- Implementation plan: `C:\Users\tresp\dev\heirdock\HeirDock\implementation-plan.md`
- Roxmont Terraform: `C:\Users\tresp\dev\roxmont\roxmont-platform\infra\terraform\`
- Roxmont workflows: `C:\Users\tresp\dev\roxmont\roxmont-platform\.github\workflows\`
- Roxmont Lambda: `C:\Users\tresp\dev\roxmont\roxmont-platform\infra\lambda\contact-form\index.js`
- Roxmont Docker: `C:\Users\tresp\dev\roxmont\roxmont-platform\Dockerfile`
- HeirDock platform: `C:\Users\tresp\dev\heirdock\heirdock-platform\`
- HeirDock brand/docs: `C:\Users\tresp\dev\heirdock\docs\`

### External References

- vite-react-ssg: https://github.com/Daydreamer-riri/vite-react-ssg
- Vite SSR docs: https://vite.dev/guide/ssr
- Inter font: https://rsms.me/inter/ (SIL OFL license)
- Google reCAPTCHA v3: https://developers.google.com/recaptcha/docs/v3

### AWS Account

- HeirDock-Prod: 077207386011 (devops+prod@heirdock.com)
- GitHub repo: HeirDock/heirdock-website
