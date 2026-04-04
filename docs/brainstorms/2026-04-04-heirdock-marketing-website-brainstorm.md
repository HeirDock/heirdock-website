# HeirDock Marketing Website — Brainstorm

**Date:** 2026-04-04
**Status:** Decided — ready for `/workflows:plan`

---

## What We're Building

A 27-page marketing website for HeirDock (heirdock.com) serving two audience paths — families (B2C) and professional partners (B2B2C) — from a single homepage. The site has four sections: Global (8 pages), Customer (5 pages), Partner (7 pages), and Legal stubs (7 pages). Legal pages are placeholders with contact-us messaging.

The site is a marketing/brochure site only. All app functionality (signup, login, onboarding) lives on the HeirDock platform at app.heirdock.com.

---

## Why This Approach

We're replicating the proven Roxmont platform pattern (React + Vite + Docker dev + S3/CloudFront deploy + Terraform IaC) with two key adaptations:

1. **No MUI** — Use plain CSS with design tokens instead. The marketing site has a specific visual identity (warm cream/navy/gold palette, Inter font) that doesn't need a component library. CSS gives full design control without fighting a framework.
2. **Static pre-rendering** — Unlike the Roxmont SPA, this site needs SEO. Use vite-ssg (or similar) to pre-render all 27 pages as static HTML at build time. React for development, real HTML files in production.

---

## Key Decisions

### Tech Stack
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | React 19 + Vite + TypeScript | Consistent with Roxmont and HeirDock platform |
| Styling | Plain CSS with design tokens (CSS custom properties) | Full design control, no MUI overhead. Tokens from implementation plan. |
| Routing | Static pre-rendering (vite-ssg or similar) | 27 pages need SEO. Pre-render to static HTML at build time. |
| Docker | Local dev only | Docker Compose with volume mounts for hot-reload. Production is S3 + CloudFront. |

### Infrastructure
| Decision | Choice | Rationale |
|----------|--------|-----------|
| AWS Account | HeirDock-Prod (077207386011) | All production-facing infra together. AWS best practice: no workloads in management account. |
| IaC | Terraform (replicate Roxmont modules) | S3, CloudFront, DNS/ACM, IAM/OIDC, SES, Lambda. Proven pattern. |
| CI/CD | GitHub Actions with OIDC auth | Tag-based deployment (staging-*, production-*). No stored AWS credentials. |
| CDN | CloudFront with S3 origin | Static files with smart caching (long for assets, short for HTML). |
| Staging | Separate S3 bucket + CloudFront distribution | Staging uses raw CloudFront URL (d1234abcd.cloudfront.net) — no custom domain. Obscure but accessible for review sharing. |
| Environments | staging + production | Both in HeirDock-Prod account. Separate S3 buckets, separate CloudFront distributions, separate Terraform state. |

### Form Backend
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Contact & Demo forms | Lambda + API Gateway + SES + reCAPTCHA v3 | Replicate Roxmont. No third-party dependency. Serverless, stays within AWS. |

### Domain & DNS
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Domain | heirdock.com | Registered, currently hosted elsewhere. Will migrate to Route 53 in HeirDock-Prod in ~2 weeks. |
| Interim DNS | Manual entries | Provide required DNS records; user will add manually to current hosted zone. |

### Content Source
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Content reference | https://heirway-tracker-aaronober1.replit.app/ | Marketing site prototype with draft page copy. Use as primary content source for all 27 pages. Client-side rendered (not scrapable) — content must be extracted manually or via browser. |

### Repo Structure
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Layout | apps/web/ (match Roxmont) | Monorepo-style structure even for standalone repo. Allows future additions (blog, etc.). |
| Repo name | heirdock-website | Already created under HeirDock org on GitHub. |

### Project Structure (Planned)
```
heirdock-website/
├── apps/web/
│   ├── src/
│   │   ├── components/        # React components (Nav, Footer, Hero, etc.)
│   │   ├── pages/             # Page components (27 pages)
│   │   ├── styles/            # CSS files (tokens, base, components, pages)
│   │   ├── assets/            # Images, icons, fonts
│   │   ├── App.tsx            # Root with router
│   │   └── main.tsx           # Entry point
│   ├── public/                # Static assets (robots.txt, sitemap.xml, favicon)
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── .env.staging
│   └── .env.production
│
├── infra/
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   ├── modules/
│   │   │   ├── s3/            # Frontend bucket + logs bucket
│   │   │   ├── cloudfront/    # CDN + OAC (no SPA rewrite needed with pre-rendering)
│   │   │   ├── dns/           # Route 53 + ACM (enable when zone migrates)
│   │   │   ├── iam/           # GitHub OIDC provider + deploy role
│   │   │   ├── ses/           # SES domain identity + DKIM
│   │   │   └── contact-form/  # Lambda + API Gateway
│   │   ├── environments/
│   │   │   ├── staging.tfvars
│   │   │   └── production.tfvars
│   │   └── backends/
│   │       ├── staging.tfbackend
│   │       └── production.tfbackend
│   └── lambda/
│       └── contact-form/
│           ├── index.js
│           └── package.json
│
├── .github/workflows/
│   ├── ci.yml                 # PR checks (lint, typecheck, build)
│   ├── build-and-deploy.yml   # Reusable deploy workflow
│   ├── deploy-staging.yml     # Tag: staging-*
│   └── deploy-production.yml  # Tag: production-*
│
├── docker-compose.yml         # Local dev environment
├── Dockerfile                 # node:22-alpine for dev
├── CLAUDE.md
├── docs/
│   └── brainstorms/
└── .gitignore
```

---

## Resolved Questions

1. **Terraform state bucket** — Does NOT exist in HeirDock-Prod. Need to create `heirdock-website-terraform-state` (or similar) in HeirDock-Prod (077207386011).
2. **GitHub OIDC provider** — Exists in HeirDock-Sandbox only (created by platform's integration environment). Need to create one in HeirDock-Prod for the website, OR the platform may already have one in Prod. The IAM role `heirdock-github-actions-deploy` currently trusts only `HeirDock/heirdock-platform` — we need a separate role (e.g., `heirdock-website-github-deploy`) that trusts `HeirDock/heirdock-website`.
3. **Contact form recipients** — info@heirdock.com (matching Roxmont pattern).

## Remaining Open Questions

1. **SES domain identity** — Is heirdock.com already verified in SES in HeirDock-Prod? If so, skip that Terraform module.
2. **Font licensing** — The plan calls for self-hosted Inter. Inter is open source (SIL OFL) so no licensing issue, but confirm this is the desired font.

---

## Decisions NOT Made Here (Deferred to Planning)

- Exact vite-ssg plugin selection and configuration
- CSS architecture details (file organization, naming conventions)
- Image/asset sourcing and optimization pipeline
- Content copy extraction from Replit prototype (page-by-page text)
- Build order and phasing (the implementation plan has a 7-phase approach)
- Accessibility and SEO implementation details

---

## Next Steps

Run `/workflows:plan` to create a detailed implementation plan incorporating these decisions. The plan should resolve the open questions above and define the build phases.
