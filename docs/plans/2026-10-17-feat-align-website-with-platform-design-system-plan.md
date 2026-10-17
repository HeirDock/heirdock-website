---
title: "feat: Align marketing website with the platform design system"
type: feat
date: 2026-10-17
revised: 2026-10-17 (after plan review: simplicity, TypeScript, architecture)
---

# feat: Align marketing website with the platform design system

## Overview

Restyle heirdock.com so a visitor moving from the site to the app (`Sign In` →
app.heirdock.com) sees one product: the same primary blue, neutrals, type
weights, buttons, links, cards, inputs, focus rings and icons. The source of
truth is `heirdock-platform/docs/design/design-system.json`. Where it disagrees
with the app's `apps/web/src/styles/materialTheme.js`, the theme wins, because
the theme is what users see.

The work is visual only: no copy, route, SEO or infrastructure changes. The one
exception is the deploy workflow fix in PR 0, which keeps the release free of
downtime.

## Decisions (owner, 2026-10-17)

| Topic | Decision |
|---|---|
| Primary | Platform `#456E9A` (hover `#3A5E84`, active `#2E4E70`). Retire navy `#1B3A5C` and CTA blue `#3B7DD8`. |
| Typography | Platform weights, tracking and line heights (h1 600, h2-h4 500), with marketing display sizes kept |
| Dark mode | Light only. Token structure allows a later override block. |
| Scope | Tokens, components, page cleanup, icons |
| CTA band + partner hero | Pale primary tint `#EDF3FA` with a regular primary button |
| Footer | Dark primary `#2E4E70`. The existing dark-background logo stays. |
| Icons | Inline SVGs of the platform's Material **Outlined** icons |
| Delivery | 4 small PRs, each shippable on its own, with no downtime (below) |

Defaults (any can be overruled in PR review):
- Body text 16px/1.5.
- `btn--lg` stays 48px tall; the app's buttons are a fixed 40px.
- The "HeirDock" highlight in the Home h2s keeps the logo blue `#5A8EC2`, which
  is allowed only at 24px and up.
- The "Most popular" pill and the Status page pill become plain text plus a
  border or a dot. The platform bans chips and pills.

## Findings that shape the work

- **Inter is not loaded at all.** There is no `@font-face` and no font link,
  so visitors see Segoe UI or San Francisco. CLAUDE.md wrongly says the font
  is self-hosted.
- **Three blues are in use, and none of them is the app's primary.** The
  neutrals and shadows also drift slightly.
- **72 inline `style={{}}` blocks** sit in 18 files. 14 of them only cancel the
  global `a:hover` underline (`base.css:53-56`). There are also about 10 real
  color literals, and 44 distinct emoji entities used as icons (✓ ×36). The
  arrow → appears in 13 files, and Inter's subsets don't include U+2192, so it
  always renders in the fallback font.
- **Component rules the site breaks:**
  - a pill badge (`partner/Pricing.tsx:55`) and a pill on the Status page
  - buttons at weight 600 with a 2px border
  - lift-on-hover cards
  - an 8px radius on `.diff-card` and `.audience-card`
  - two uppercase labels on Home
  - a nav shadow on scroll, with its JS in `Nav.tsx:7,11-15,43`
- **Accessibility:**
  - There is no `:focus-visible` style. The only `outline: none` is
    `.form__input:focus` (`components.css:1184`).
  - There is no reduced-motion CSS.
  - White at 85/75/70% alpha on `#456E9A` fails AA (see Appendix).
- **The deploy causes a brief outage.** `build-and-deploy.yml:49-69` syncs
  assets with `--delete` *before* uploading the new HTML. For a few seconds
  the live HTML points at deleted CSS and JS. That happens on every deploy
  today, and PR A changes every hashed filename.
- **Hydration mismatch:** `Footer.tsx:41` renders `new Date().getFullYear()`,
  so after New Year the prerendered HTML and the hydrated page differ until
  the next build.

## Delivery: four PRs, each shippable on its own

Prerequisite: commit the pending homepage changes to PR #3, merge PR #3
(**owner go-ahead**), then branch each PR below from `main`.

| PR | Contents | Visual change | Ships alone? |
|---|---|---|---|
| **0: Zero-downtime deploy** | Reorder `build-and-deploy.yml` | none | yes; lands first |
| **A: Restyle** | Fonts, tokens (one rename, no aliases), base and components, plus the page edits the new colors force (CTA-band buttons, partner hero, Home highlight), Nav scroll removal, manifest and theme-color, CLAUDE.md rules | yes (the redesign) | yes |
| **B: Cleanup + guard** | Inline styles → classes, remaining literals → tokens, lint guard, footer year | **none** (pixel-diffed against A) | yes |
| **C: Icons** | `Icon.tsx`, emoji and arrow swap; mapping table in the PR description | icons only | yes |

Staging and production tags are cut **only with owner approval**. Merging to
`main` deploys nothing; tags do (`deploy-staging.yml` / `deploy-production.yml`
→ `build-and-deploy.yml`).

**Rollback:** create a new `production-*` tag on the last good commit. That
rebuilds and redeploys it. With PR 0 in place, a rollback is also free of
downtime. The last production tag is currently `production-20260422-2105`.

## Design specification

### Tokens (`apps/web/src/styles/tokens.css`)

**Layer 1: design-system tokens.** This is the only block containing hex
values.
- Wrap it in `/* BEGIN design-system … END */` markers. Record the source
  commit of both files (`git log -1 --format=%h` at copy time; the JSON is
  currently `38cf745d`).
- Names come mechanically from the JSON paths:
  - `brand.X` → `--color-X`
  - `neutrals.X` → `--color-X`
  - `text.X` → `--color-text-X`
  - `states.S.base/softBg/softFg` → `--color-S`, `--color-S-soft-bg`, `--color-S-soft-fg`
  - `elevation.light.X` → `--shadow-X`
  - `radiiPx.X` → `--radius-X`
  - `motion` → `--duration-X`, `--ease-X`
- Theme-only values are marked `/* theme-only */`, so a re-sync doesn't drop
  them. Dark mode later overrides this one block with `color.dark`.

| Token | Value | Source |
|---|---|---|
| `--color-primary` / `-hover` / `-active` / `--color-on-primary` | `#456E9A` / `#3A5E84` / `#2E4E70` / `#FFFFFF` | brand |
| `--color-primary-light` | `#EDF3FA` | theme-only |
| `--color-secondary` / `-hover` / `-light` | `#5BADA0` / `#3F8278` / `#EDF8F6` | brand. Decorative only; never under white text (2.65:1) |
| `--color-accent` / `-hover` / `-light` | `#DEB05E` / `#CFA04E` / `#FFF8EC` | brand |
| `--color-bg`, `--color-surface`, `-surface-2`, `-surface-3` | `#F9F7F4`, `#FFFFFF`, `#FBFAF8`, `#F0EDE8` | neutrals |
| `--color-border`, `--color-divider` | `#E2DDD6`, `#E8E4DE` | neutrals |
| `--color-text-primary` / `-secondary` / `-muted` / `-disabled` / `-on-dark` | `#1A1714` / `#4A4540` / `#6B665F` / `#AAA69F` / `#FFFFFF` | text |
| `--color-{success,warning,danger,info}[-soft-bg,-soft-fg]` | per states | states |
| `--color-action-hover` | `rgba(0,0,0,.03)` | theme-only (card/row hover tint) |
| `--color-brand-highlight` | `#5A8EC2` | site-only (the logo blue). **Text ≥24px only.** Ask the platform to add `brand.logo`. |
| `--shadow-xs…lg`, `--shadow-card` | elevation.light; card `0 1px 3px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.03)` | elevation / theme-only |
| `--radius-xs/sm/md/lg` | 4/8/12/16px | radii |
| `--duration-fast/base/slow`, `--ease-default` | 120/200/300ms, `cubic-bezier(0.2,0,0,1)` | motion |

**Layer 2: site component tokens.** No hex values; each only references
layer 1.

| Token | Value |
|---|---|
| `--hero-bg` | `var(--color-primary-light)` |
| `--cta-band-bg` | `var(--color-primary-light)` |
| `--footer-bg` | `var(--color-primary-active)` (dark mode needs its own value, because the dark `primaryActive` is light) |
| `--focus-ring` | `var(--color-primary)`. The footer sets it to `var(--color-text-on-dark)`, and inheritance does the rest. |

**Other tokens:**
- The spacing scale is unchanged; it already matches the design system.
- The breakpoints, 767px and 1023px, are documented in a comment, because
  custom properties can't be used in `@media`. The stray `768px` at
  `components.css:1309` is fixed.

**One-shot rename in PR A (no aliases):**

| Old token | New token |
|---|---|
| navy | primary |
| navy-dark | primary-hover |
| navy-light | primary (icons, featured border), `--focus-ring` (inputs), or brand-highlight (the Home h2s), case by case |
| bg-warm | bg |
| bg-white | surface |
| bg-cream | surface-2 |
| bg-light-blue | primary-light |
| border-light | divider |
| footer-bg | `--footer-bg` |
| hero-bg | `--hero-bg` |
| cta-bg | `--cta-band-bg` |
| border-radius | radius-sm |
| border-radius-lg | radius-md |
| border-radius-xl | radius-lg |
| transition-X | `var(--duration-X) var(--ease-default)` |

The unused tokens (gold, cta-bg-dark, shadow-xs, text-5xl, and so on) are
deleted, as are the unused `.section--warm`, `.section--light-blue` and
`.section--navy` classes.

### Typography and fonts

- **Fonts:**
  - Add `@fontsource-variable/inter` pinned **exactly** at `5.2.5`, the
    version the platform uses. That gives provenance through the lockfile, and
    the OFL ships in the package.
  - Import its `wght.css` from `entry-client.tsx`, before the site CSS. Vite
    content-hashes the WOFF2 files, and `unicode-range` means only the needed
    subsets download.
  - The package declares the family **`Inter Variable`**. Use that name in the
    stack.
- **Preload:**
  - In `entry-server.tsx`, import `…/files/inter-latin-wght-normal.woff2?url`.
  - Add `<link rel="preload" as="font" type="font/woff2" crossorigin href=…>`
    to the head tags. Preload Latin only. `crossorigin` is required, or the
    font downloads twice.
  - Add an `fs.existsSync` assert in the prerender step, so the build fails if
    the client and server hashes ever differ.
- **No layout shift:** an `"Inter Fallback"` `@font-face` using
  `local("Arial")`, with `size-adjust`, `ascent-override`, `descent-override`
  and `line-gap-override`. Generate the values with `@capsizecss/metrics` or
  fontaine; don't guess them. The stack is
  `"Inter Variable", "Inter Fallback", system-ui, -apple-system, sans-serif`.
- **Body:** 16px/1.5, weight 400, with antialiased smoothing.
- **Headings:**
  - h1 600, h2-h4 500, color `--color-text-primary`, with the current display
    sizes kept.
  - Tracking in `em`, so it scales: h1 `-0.016em`, h2 `-0.0125em`.
  - The other twelve weight-700 rules in `components.css` move to 600
    (display titles, prices) or 500 (card and step titles).
- **Labels:** the two uppercase labels on Home become sentence case, weight
  500, muted.

### Components (plain-CSS translation of the app)

- **Buttons:**
  - Radius `--radius-sm`, weight 500, 1px border, no uppercase, no shadow.
  - Transition `background-color, border-color, color, opacity` over
    `--duration-fast`.
  - Heights: `btn` 40px/14px, `btn--lg` 48px/16px, `btn--sm` 32px.
  - `btn--primary`: primary, with hover and active shades.
  - `btn--outline`: `--color-border` border with primary text. On hover, bg
    `--color-surface-2` and border `--color-text-disabled`.
  - `btn--white` is deleted (its 10 uses are in CTA bands → `btn--primary`).
  - Disabled and loading: `opacity: .6`, with the label still visible.
- **Links:**
  - Primary color, no underline, hover `opacity: .8`.
  - Links inside running prose (`.legal-content`, `.legal-stub`, FAQ answers,
    paragraphs) are **always** underlined, as WCAG 1.4.1 requires. That is not
    a hover underline, so it doesn't break the platform rule.
- **Cards:**
  - Radius `--radius-md`, 1px `--color-border`, `--shadow-card`, padding 24px.
    `.diff-card` and `.audience-card` move from 8px to 12px.
  - New `.card--link`: on hover, `--color-action-hover` bg plus a primary
    border; no lift. It gets a trailing chevron in PR C.
- **Nav:**
  - White, with a `--color-divider` bottom border.
  - Delete `.site-nav--scrolled` *and* its state and scroll listener in
    `Nav.tsx`.
  - Logo at 44px, as in the app header, moved from the inline style to a
    class.
  - The mobile menu uses the same surface, divider and link rules.
- **Footer:**
  - `--footer-bg`, the existing dark logo, `--color-text-on-dark`.
  - Secondary text uses an alpha whose contrast measures ≥4.5:1 on `#2E4E70`.
    Compute it; it's roughly 0.75 or above.
  - The rgba-white literals become tokens.
- **CTA band:** `--cta-band-bg`, title `--color-text-primary`, note
  `--color-text-secondary`, `btn--primary`.
- **Heroes:**
  - `.hero--light` uses `--hero-bg`.
  - `.hero--navy` is deleted. Partner `Landing.tsx` moves to `.hero--light`,
    dropping its alpha-white subtitle and translucent button.
  - `.hero-video` bg is `--color-primary-active`.
- **Inputs:**
  - Radius 8px, 1px border, hover border `--color-text-disabled`, focus
    border primary.
  - **Delete** the `outline: none` and the `rgba(90,142,194,.15)` glow at
    `components.css:1184-1186`. Their specificity (0,2,0) would beat the
    global ring.
  - Input text 16px, so iOS doesn't zoom. Labels 14px/400, muted.
  - Errors and success use the state soft tokens. The reCAPTCHA badge is
    unchanged.
- **Focus:**
  - Global `:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px }`.
  - Check that the `overflow: hidden` at `components.css:257, 937, 1200`
    doesn't clip it.
- **FAQ:** white surface, 1px border, radius 12px, divider between items.
- **No pills:**
  - Delete `.pricing-tier__badge`. The featured tier gets a 2px primary
    border plus a plain "Most popular" label (14px/500, primary).
  - The Status pill becomes an 8px state-colored dot plus text.
- **Reduced motion:** a global `@media (prefers-reduced-motion: reduce)` sets
  transitions and animations to 0.01ms, plus `scroll-behavior: auto`.

### Icons (PR C)

- **`apps/web/src/components/Icon.tsx`.** Keep the `ICONS` map unexported, so
  the `react-refresh` lint rule stays quiet:

  ```tsx
  const ICONS = {
    check: ["M9 16.17 4.83 12l-1.42 1.41L9 19 21 7.59 19.59 6.17z"],
    // multi-shape icons: several paths; <circle> elements converted to arc paths when copied
  } as const satisfies Record<string, readonly string[]>;
  export type IconName = keyof typeof ICONS;
  // <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
  ```

- **Props:** `name`, `size` (default 24) and `className`. Every use is
  decorative, so there is no `label` / `role="img"` branch.
- **Path source:** the `.mjs` files at the root of the platform's
  `node_modules/@mui/icons-material` (9.4.0); for example `CheckOutlined.mjs`.
  350 Outlined icons have several shapes, which is why the map takes an array.
- **Attribution comment:** "Path data: Google Material Icons (Apache-2.0), via
  @mui/icons-material 9.4.0 (MIT)". Add both license texts to `src/assets/licenses/`.
- **The swap:**
  - All 44 emoji entities, including the ✓ spans in the two Pricing pages,
    Home and Invite.
  - `&rarr;` ×13 files → `ArrowForwardOutlined`.
  - The trailing chevron on `.card--link`.
  - Icon discs get a `--color-primary-light` bg with a `--color-primary`
    icon.
- **The PR description** carries the entity → icon mapping table for review.

### Guard (PR B)

Add a guard to the existing `npm run lint`, so `ci.yml` doesn't change:
- **ESLint** `no-restricted-syntax`: flag `JSXAttribute[name.name='style']`
  and string literals matching a hex color. Exceptions need
  `// eslint-disable-next-line … -- <reason>`. Being AST-based, it ignores
  `&#10003;` entities and `#anchor` links.
- **Stylelint**, a new devDependency: `color-no-hex`, `color-named: never`,
  `function-disallowed-list: [rgb, rgba, hsl, hsla]`, with an override that
  allows them in `tokens.css`. Change `lint` to `eslint . && stylelint "src/**/*.css"`.

## Tasks

### PR 0: Zero-downtime deploy (`.github/workflows/build-and-deploy.yml`)

- [x] Upload assets **without** `--delete`, with the one-year cache (the old step minus `--delete`).
- [x] Upload HTML/JSON with no-cache (unchanged).
- [x] Invalidate, then wait: `ID=$(aws cloudfront create-invalidation … --query Invalidation.Id --output text)` followed by `aws cloudfront wait invalidation-completed --distribution-id … --id "$ID"`. The deploy role already allows `cloudfront:GetInvalidation` (`infra/terraform/modules/iam/main.tf:80`).
- [x] Prune: re-run the asset sync with `--delete` (same excludes and cache-control) to remove stale hashed files. Old tabs are safe, because the build is a single JS bundle and a single CSS bundle with no lazy chunks, so an open tab already holds its assets.
- [ ] Verify on staging (owner-approved tag): load the site continuously during the deploy. There should be no unstyled responses, and the stale `index-*.js`/`.css` should be gone afterwards.

### PR A: Restyle

- [x] Take before screenshots (ad-hoc Playwright, not committed): 27 routes at 1440px, plus Home, customer and partner Landing, Pricing, Contact and Invite at 375px. Also the app's login page, for the handoff comparison.
- [x] Fonts: package, import, preload with the hash assert, and the fallback face.
- [x] Rewrite `tokens.css` (both layers) and do the one-shot rename across all CSS and TSX `var()` uses.
- [x] `base.css`: body, headings, links and the prose exception, `:focus-visible`, reduced motion, buttons.
- [x] `components.css`: everything in the component spec.
- [x] Page edits the new colors force: CTA bands use `btn--primary` (9 pages); partner `Landing.tsx` uses `.hero--light`; `.text-navy-light` becomes `.text-brand-highlight`; the `Nav.tsx` scroll code is removed and the logo becomes a class.
- [x] `site.webmanifest`: `theme_color` `#456E9A`, `background_color` `#F9F7F4`. Add `<meta name="theme-color">`. The manifest's one-year cache is accepted, since it only affects an installed PWA.
- [x] CLAUDE.md: replace the hex values in "Brand Guidelines" with **rules**. Tokens only; values in `tokens.css`, upstream in the platform JSON; no chips or pills; no hover underline; brand-highlight for large text only. Correct the font line, the footer color, the new lint command, and "26 routes" → 27.
- [ ] **Owner checkpoint:** a local preview of Home, customer Landing, Pricing and Contact. The heading weight change (700 → 500/600) is the biggest shift.
- [x] Take after screenshots at the same set. Do a keyboard pass on Home, Contact, Invite, Pricing and the open mobile nav. Check in DevTools that Inter Variable is the rendered font. Compare the site nav and buttons with app.heirdock.com/login.

### PR B: Cleanup + guard (no visual change)

- [x] Replace the 14 link-card resets with `.card--link` (customer/Landing.tsx:117-132, Help.tsx:18-53, partner/Landing.tsx:103-118).
- [x] Classes for the repeated inline patterns:
  - `.fine-print` (Contact.tsx:95, 108; Invite.tsx:96; partner/Demo.tsx:113; Status.tsx:67; customer/Pricing.tsx:211)
  - the step layouts in customer/HowItWorks.tsx:19-70
  - the Status banner and service list (Status.tsx:17-59)
  - the About section titles (About.tsx:55, 94, 132)
- [x] Home.tsx:171-199 literals (`#FEF3E2`, `#E8F0F8`, `#FCE4EC`, `#6B8E6B`) → state or accent soft tokens.
- [x] Remaining `style` blocks: zero, or truly dynamic with a stated disable reason.
- [x] The guard (ESLint + stylelint) as above.
- [x] Footer year: set it at build time (for example a Vite `define`), so the prerender and hydration match.
- [x] Pixel-diff against PR A's after screenshots. Expect no differences.

### PR C: Icons

- [ ] `Icon.tsx` plus the license texts; the swap; the chevrons; and the mapping table in the PR description.
- [ ] Screenshots of the pages that have icons. The arrow is now an icon, not the fallback font's glyph.

## Acceptance Criteria

- [ ] No `#1B3A5C`, `#3B7DD8`, `#2C3E50` or `#142C47` in `src/`, `index.html` or `site.webmanifest`. No color literals outside `tokens.css`, enforced by `npm run lint` in CI.
- [ ] No inline presentational styles. Any remaining `style` is dynamic and has a stated reason.
- [ ] Inter Variable renders site-wide from hashed, self-hosted files. The Latin file is preloaded. There is no layout shift beyond the fallback's metric match.
- [ ] No chips, pills or badges, and no hover underlines. Prose links are underlined.
- [ ] CTA bands and all heroes use the pale tint, and the footer is `#2E4E70`.
- [ ] The emoji and arrows are Material Outlined SVGs that use `currentColor`.
- [ ] Every text/background pair meets WCAG AA (4.5:1, or 3:1 for ≥24px or ≥18.66px bold). Brand-highlight is used only at ≥24px.
- [ ] A visible focus ring on every interactive element. Reduced motion disables transitions; the PR #3 hero video behavior is unchanged.
- [ ] The prerendered HTML matches the hydrated render, including the footer year.
- [ ] Deploys and rollbacks never serve HTML that points at deleted assets.
- [ ] `noindex` stays on the legal stubs and staging. Lint, typecheck and build are green.

## Risks

| Risk | Mitigation |
|---|---|
| The lighter headings change the site's character more than any color change | PR A owner checkpoint before the component work is finalized |
| Conflicts with PR #3 (same files) | Merge #3 first; branch every PR from `main` |
| No automated visual tests | Targeted screenshots for A and C; a pixel diff makes B provably visual-only |

## Out of scope (follow-ups)

- **og-image:** it has the old navy, a serif font and an "ASSET" tagline.
  Regenerate it as `og-image-v2.png` with new copy, then re-scrape the social
  previews.
- **Copy:** "AI" on 23 lines, em-dashes in Privacy.tsx, "asset" in the
  partner h1, and CLAUDE.md's "Estate Transition".
- **Dark mode** (the tokens are ready), print styles, the reCAPTCHA badge.
- **Platform (separate repo):** add the theme-only values to
  `design-system.json` (`primaryLight`, `accentActive`, `scrim`, `brand.logo`,
  body sizes, card shadow). Add a test that checks `materialTheme.js` against
  the JSON. Fix the undefined `neutrals.surface1` reference
  (`BrandedLogo.jsx:135`).

## References

- `heirdock-platform/docs/design/design-system.json` (`38cf745d`) and
  `apps/web/src/styles/materialTheme.js`. The palette is at L16-67; the note
  that the primary was darkened from `#5A8EC2` is at L13. Typography is at
  L219-269, links L276-283, buttons L341-366, inputs L368-470, cards L471-496.
- App top bar: `heirdock-platform/apps/web/src/components/layout/TopBar.jsx:79-92`
- Site: `apps/web/src/styles/{tokens,base,components}.css`, `entry-server.tsx`,
  `.github/workflows/build-and-deploy.yml`
- Previous plan: `docs/plans/2026-04-04-feat-heirdock-marketing-website-plan.md`.
  Related: PR #3.

### Appendix: computed contrast (WCAG 2.x)

| Pair | Ratio |
|---|---|
| white on `#456E9A` / on `#3A5E84` | 5.32 / 6.74 |
| `#456E9A` on white / `#F9F7F4` / `#EDF3FA` | 5.32 / 4.97 / 4.76 |
| white at 85 / 75 / 70% on `#456E9A` | 4.35 / 3.79 / 3.53 (fail) |
| white on teal `#5BADA0` | 2.65 (fail) |
| `#5A8EC2` on white | 3.45 (≥24px only) |
| muted `#6B665F` on white / `#F9F7F4` | 5.69 / 5.32 |
