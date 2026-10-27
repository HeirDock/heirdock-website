# HeirDock brand marks

The marks that sit beside the line drawings (`design/illustrations`) on the website and in
the apps. All of them come from the logo or the drawings. Each has one job, so they never
compete. Approved 2026-10-26; the visual spec, with mockups for the website, the web app
and the mobile app, is the "HeirDock brand motifs" design canvas.

```
python design/brand-marks/marks.py
```

writes the reference SVGs here (`<mark>-<palette>.svg`, palettes `light`, `dark`, `navy`;
same colours as the illustrations: light and dark follow the app's themes, navy is the
website's deep-navy panel, #2E4E70).

| Mark | Comes from | Means | Use for | Keep out of |
|---|---|---|---|---|
| The arch | The logo's gold ring | Shelter: the household | Heroes, line drawings, the ring above page titles | Body content and controls; more than twice on a screen |
| The thread | The drawings' gold string and chain | In order; passed on | Steps, an item's history, getting started, the Stewardship hand-off | Decoration; two threads in one view; running through text |
| The gold dot | The dot on the i | This one; yours; new | The active page or tab, list markers, new since your last visit, one headline's full stop | Numbers and statuses that need words |
| The planks | The dock's boards | Structure; the way forward | Section dividers, empty states, loading | Panels that already have the arch |

**Rejected:** corner brackets around images (the "posts", from the dock's front posts) and
corner arcs on screenshots. Don't frame images with corners.

## Ground rules

- **One mark per component.** A card gets a thread or a dot, not both.
- **Gold stays small.** Gold is never text on a light surface and never fills a large area.
  (The darker gold #8C6A29 is for text such as eyebrows; the marks use the accent gold.)
- **Motion is earned and plays once,** except the planks while loading. Everything is
  still under reduced motion.
- **The arch at most twice on a page.** Where a page would show it a third time, stand the
  drawing on the planks instead (`keepsake-planks` in design/illustrations).

## The arch

- In a drawing: `M28 286 V160 a122 122 0 0 1 244 0 V286` on a 300 x 300 canvas, 3px, gold,
  round caps (`arch-*.svg`). In a hero it can stand wider than the image it frames and
  draw itself in once (1.8s), only without reduced motion (the professionals page).
- Above interior page titles: a half ring 72 x 36, 3px gold (`ring-*.svg`), 24px above
  the title.
- Its weight follows the logo (see the logo kit's rules); never change it.

## The thread

A gold line joining steps in order, with a node per step (`thread-*.svg` is a specimen).

| Part | Spec |
|---|---|
| Line | 2px. Gold up to "now"; the line colour at 30% for what's ahead. |
| Node, done | 20px solid gold with a check in deep navy (#2E4E70). |
| Node, now | 20px solid gold with a 6px gold halo at 30%. |
| Node, next | 16px, the surface colour, with a 2px ring in the line colour at 45%. |
| Numbered steps | 36px gold nodes carrying the number in ink (#1A1714, 8.9:1 on gold). |
| Compact (lists) | 12px gold nodes, 2px line, the node centred on the first line of text. |
| Direction | Across for a few steps; down for histories and checklists, and whenever the steps stack. |
| Motion | May draw from the first node to "now" once, 600ms, when it scrolls into view. |

Meaning is never colour alone: done has a check, next is hollow, every node has a label.

## The gold dot

| Use | Size | Placement |
|---|---|---|
| Active menu link or tab | 6px (web), 6-8px (mobile tab bar) | Centred 10px below the label; beside it in a stacked menu |
| List marker | 6px | Centred on the first line, one spacing step before the text |
| New since your last visit | 6-8px | After the label, with screen-reader text ("New") |
| A headline's full stop | 0.16em, 0.05em after the last letter | One per page, on a statement, never after a question mark |

Always the accent gold (#DEB05E light and navy, #E8C06E dark). One per group. A dot never
holds a number; counts and statuses get words.

## The planks

Three boards narrowing upward, like the logo's dock (`planks-*.svg`).

| Part | Spec |
|---|---|
| Boards | 100%, 75% and 50% width; each as tall as the gap between them (6 units on a 96 x 34 box); ends cut at 45 degrees. |
| Colour | The logo's sky: #5A8EC2 on light, #A0D0F2 on dark and on navy. Never gold. |
| Sizes | 32px inline, 48px as a section divider, 96px under an empty state or as a loading mark. |
| Divider | Centred, 48px wide, 32px above the section's title. |
| Loading | Boards light from the front (bottom) back: each 30% to 100% opacity and back, 1.2s cycle, 0.2s apart. In a button it takes the button's text colour. Still and lit under reduced motion, with a text label. |
| Under a drawing | Replaces the shelf line (see `keepsake-planks`), on pages that already show the arch twice. |

## Where the website uses them

- Arch: the professionals page hero, the line drawings, the ring on every page header.
  Home shows it twice (the watch panel and the closing door); its hero film has none.
- Thread: How it works on Home and the professionals page (`.step-tiles--thread`); What to
  expect / What happens next on the two request pages (`.thread-list`).
- Gold dot: the active menu link (`.site-nav__link--active`), the Features list markers
  (`.feature-matrix__list`), the closing headlines of Home, Use Cases and the professionals
  page (`.gold-stop`).
- Planks: `components/Planks.tsx`: dividers on Home, Features, Partner Features and
  Partner Pricing; the loading mark in all four form buttons; the story band's keepsake.

Colours come from `apps/web/src/styles/tokens.css` (accent, brand highlight,
`--planks-on-panel`); the CSS is in `components.css` under "Brand motifs beside the arch".
