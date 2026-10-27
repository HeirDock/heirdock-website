# HeirDock line illustrations

Hand-drawn SVG line art for the website and the app, replacing the earlier AI-rendered
images. One source file (`drawings.py`) produces every variant here; open `index.html`
to see them all, with their motion.

```
python design/illustrations/drawings.py
```

## The drawings

| Drawing | Shows | Motion options |
|---|---|---|
| `keepsake` | A keepsake box with a framed picture, a vase and a gold tag | `swing` (the tag sways and rests, a slow loop), `open` (the lid lifts and the keepsakes rise, once) |
| `front-door` | A front door standing ajar, warm gold light inside, a plant by the step | `open` (the door swings ajar, once) |
| `keepsake-planks` | The keepsake standing on three planks (the logo's dock boards) instead of under the arch | `open` (as `keepsake`) |
| `valuables` | A pocket watch on a gold chain, a painting on the wall and an open ring box with a gold stone | `swing` (the watch sways on its chain and rests, a slow loop) |
| `strongbox` | A strongbox with a dial, its centre and marker in gold: the Vault (website: Security) | still |
| `letter` | An opened envelope with a note and a gold seal (website: every form's "sent" message) | still |
| `lantern` | A lantern with a lit candle behind gold glass (website: the 404 page) | still |
| `clipboard` | A clipboard with a checklist and a gold clip: a record a professional can work from (website: the professionals page) | still |

Each comes in three palettes:

| Palette | Use on | Stroke | Gold | Fill |
|---|---|---|---|---|
| `light` | Light pages and the app's light theme | `#456E9A` navy | `#DEB05E` | `#FFFFFF` |
| `dark` | The app's dark theme | `#A0D0F2` | `#E8C06E` | `#1A222C` |
| `navy` | The website's deep-navy panels (`#2E4E70`) | `#E8EEF5` | `#DEB05E` | `#2E4E70` |

Files are named `<drawing>[-<motion>]-<palette>.svg`, e.g. `keepsake-swing-light.svg`.

## Style rules (for new drawings)

- **The arch.** Every drawing stands under the logo's gold ring, raised into an arch:
  `M28 286 V160 a122 122 0 0 1 244 0 V286` on a 300 x 300 viewBox. It is the signature
  that ties the set to the logo.
  The one exception is `keepsake-planks`, for pages that already show the arch twice:
  it stands on the planks (the dock's boards, sky blue, never gold) instead.
- **One stroke colour, gold accents.** 3px strokes for outlines, 1.8-2px for detail lines
  (often at 55-70% opacity). Gold is for small, meaningful details only: a tag, a knob,
  a sprig, the light through a door.
- **Solid shapes, no shading.** Shapes are filled with the surface colour so they read as
  objects and hide what is behind them. No gradients, shadows, textures or glass effects.
- **Square and simple.** A shelf or step line grounds the object. Keep it to a few
  recognisable shapes; the drawing should read at 120px.
- **Warm, never clinical.** HeirDock handles inheritance and incapacity: no coffins,
  gravestones, hospital imagery or anything alarming.

## Motion rules

- Motion is chosen per placement. Most placements use the still version.
- `swing` is a gentle loop for sections people linger on. `open` plays **once**, when the
  drawing scrolls into view.
- Respect reduced motion. SMIL animation inside an SVG file cannot read
  `prefers-reduced-motion`, so wherever a visitor may have asked for less motion, render
  the still file, or inline the SVG and add the `<animate>` elements only after checking
  `matchMedia('(prefers-reduced-motion: reduce)')` on the client. On the pre-rendered
  website, render the still drawing on the server and add motion after hydration.

## Using these in the app (heirdock-platform)

The app's `BrandIllustration` swaps a light and a dark image by `data-color-scheme`.
The two AI images it uses today map directly:

| App name | Today | Replace with |
|---|---|---|
| `assets-empty` (Assets list, empty) | `assets-empty-{light,dark}.png` (AI chest) | `keepsake-light.svg` / `keepsake-dark.svg` |
| `property-doorway` (property without a cover photo, list and detail) | `property-doorway-{light,dark}.png` (AI door) | `front-door-light.svg` / `front-door-dark.svg` |

Copy the four SVGs into `apps/web/public/brand/illustrations/` (keeping the existing names
with `.svg`, or new names), point `BRAND_ILLUSTRATIONS` at them, and update the two tests
in `BrandIllustration.test.jsx`. The SVGs are square, so the property cover tile's
height-based sizing (`PROPERTY_COVER_ART_SX`) still works. Use the still files in the app;
its empty states are not the place for motion.
