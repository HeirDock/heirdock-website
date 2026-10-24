"""HeirDock line-art illustrations: one source for the website and the app.

Run `python design/illustrations/drawings.py` to regenerate every SVG in this folder
and the preview page (index.html). See README.md for the style rules.

Each drawing sits under the logo's gold ring, raised into an arch. It is drawn in
one stroke colour with gold accents, and its shapes are filled with the surface
colour so they read as solid objects on any background.
"""

from pathlib import Path

# Colours per surface. "light" and "dark" follow the app's theme
# (docs/design/design-system.json in heirdock-platform); "navy" is for the
# website's deep-navy panels (#2E4E70).
PALETTES = {
    "light": {"stroke": "#456E9A", "gold": "#DEB05E", "fill": "#FFFFFF"},
    "dark": {"stroke": "#A0D0F2", "gold": "#E8C06E", "fill": "#1A222C"},
    "navy": {"stroke": "#E8EEF5", "gold": "#DEB05E", "fill": "#2E4E70"},
}

ARCH = "M28 286 V160 a122 122 0 0 1 244 0 V286"

LID_OPEN = "M82 185 L94 128 Q96 122 102 122 H198 Q204 122 206 128 L218 185"
LID_SHUT = "M75 185 L75 172 Q75 166 81 166 H219 Q225 166 225 172 L225 185"
SEAM_OPEN = "M96 134 H204"
SEAM_SHUT = "M79 176 H221"

DOOR_AJAR = "M104 268 V150 L162 160 V262"
DOOR_SHUT = "M104 268 V150 H196 V268"

EASE = "0.2 0 0 1"


def _svg(body, width, title):
    size = f' width="{width}" height="{width}"' if width else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg"{size} viewBox="0 0 300 300" fill="none" role="img" aria-label="{title}">\n'
            f"{body}</svg>\n")


def keepsake(palette="light", motion=None, loop=False, width=None):
    """A keepsake box with a framed picture, a vase and a gold tag.

    motion: None (still), "swing" (the tag sways, a slow loop) or "open" (the lid lifts and
    the keepsakes rise; plays once, or loops when loop=True for previews).
    """
    p = PALETTES[palette]
    s, g, f = p["stroke"], p["gold"], p["fill"]
    opening = motion == "open"
    lid, seam = (LID_SHUT, SEAM_SHUT) if opening else (LID_OPEN, SEAM_OPEN)
    shift = "0 64" if opening else "0 0"
    rep = 'repeatCount="indefinite"' if loop else 'fill="freeze"'

    lid_anim = seam_anim = rise_anim = swing = ""
    if opening:
        if loop:  # hold shut, open, hold open, close
            kt, ks = "0;0.12;0.32;0.88;1", f"0 0 1 1;{EASE};0 0 1 1;0.4 0 0.2 1"
            lid_v = f"{LID_SHUT};{LID_SHUT};{LID_OPEN};{LID_OPEN};{LID_SHUT}"
            seam_v = f"{SEAM_SHUT};{SEAM_SHUT};{SEAM_OPEN};{SEAM_OPEN};{SEAM_SHUT}"
            rise_kt, rise_v = "0;0.16;0.38;0.86;1", "0 64;0 64;0 0;0 0;0 64"
            dur = "7s"
        else:  # a short pause, then open and stay open
            kt, ks = "0;0.3;1", f"0 0 1 1;{EASE}"
            lid_v, seam_v = f"{LID_SHUT};{LID_SHUT};{LID_OPEN}", f"{SEAM_SHUT};{SEAM_SHUT};{SEAM_OPEN}"
            rise_kt, rise_v = "0;0.4;1", "0 64;0 64;0 0"
            dur = "2.2s"
        lid_anim = f'<animate attributeName="d" dur="{dur}" {rep} calcMode="spline" keyTimes="{kt}" keySplines="{ks}" values="{lid_v}"/>'
        seam_anim = f'<animate attributeName="d" dur="{dur}" {rep} calcMode="spline" keyTimes="{kt}" keySplines="{ks}" values="{seam_v}"/>'
        rise_anim = (f'<animateTransform attributeName="transform" type="translate" dur="{dur}" {rep} calcMode="spline" '
                     f'keyTimes="{rise_kt}" keySplines="0 0 1 1;{EASE}{";0 0 1 1;0.4 0 0.2 1" if loop else ""}" values="{rise_v}"/>')
    if motion in ("swing", "open"):
        swing = ('<animateTransform attributeName="transform" type="rotate" dur="5s" repeatCount="indefinite" calcMode="spline" '
                 'keyTimes="0;0.14;0.3;0.46;0.6;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0 0 1 1" '
                 'values="0 150 202;7 150 202;-5 150 202;2.5 150 202;0 150 202;0 150 202"/>')

    body = f"""  <path d="{ARCH}" stroke="{g}" stroke-width="3" stroke-linecap="round"/>
  <path d="{lid}" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}">{lid_anim}</path>
  <path d="{seam}" stroke="{s}" stroke-width="2" opacity=".55">{seam_anim}</path>
  <g transform="translate({shift})">{rise_anim}
    <g transform="rotate(-9 118 160)">
      <rect x="96" y="130" width="46" height="56" rx="3" stroke="{s}" stroke-width="3" fill="{f}"/>
      <rect x="103" y="137" width="32" height="42" rx="1.5" stroke="{s}" stroke-width="1.8" opacity=".7"/>
      <path d="M119 174 V156 M119 160 q-7 -3 -8 -10 q7 1 8 8 M119 156 q6 -4 7 -11 q-7 2 -7 9" stroke="{g}" stroke-width="1.8" stroke-linecap="round"/>
    </g>
    <path d="M166 136 h20 M169 136 c0 8 -12 10 -12 24 c0 9 7 14 19 14 s19 -5 19 -14 c0 -14 -12 -16 -12 -24" stroke="{s}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="{f}"/>
    <path d="M160 158 q16 6 32 0" stroke="{s}" stroke-width="1.8" opacity=".6"/>
  </g>
  <rect x="75" y="185" width="150" height="80" rx="9" stroke="{s}" stroke-width="3" fill="{f}"/>
  <path d="M75 201 H225" stroke="{s}" stroke-width="2" opacity=".55"/>
  <g>{swing}
    <path d="M150 202 q2 9 10 14" stroke="{g}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M158 214 h30 q5 0 7 4 l3 6 l-3 6 q-2 4 -7 4 h-30 q-5 0 -5 -5 v-10 q0 -5 5 -5z" fill="{g}"/>
    <circle cx="163" cy="224" r="2.2" fill="{f}"/>
    <path d="M170 221 h18 M170 227 h12" stroke="{f}" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
  </g>
  <path d="M52 268 H248" stroke="{s}" stroke-width="3" stroke-linecap="round"/>
"""
    return _svg(body, width, "A keepsake box with a framed picture and a vase")


def front_door(palette="light", motion=None, loop=False, width=None):
    """A front door standing ajar, warm light inside. motion="open" swings it ajar from shut."""
    p = PALETTES[palette]
    s, g, f = p["stroke"], p["gold"], p["fill"]
    door = DOOR_SHUT if motion == "open" else DOOR_AJAR
    anim = ""
    if motion == "open":
        if loop:
            anim = (f'<animate attributeName="d" dur="7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.4;0.85;1" '
                    f'keySplines="0 0 1 1;{EASE};0 0 1 1;0.4 0 0.2 1" values="{DOOR_SHUT};{DOOR_SHUT};{DOOR_AJAR};{DOOR_AJAR};{DOOR_SHUT}"/>')
        else:
            anim = (f'<animate attributeName="d" dur="2s" fill="freeze" calcMode="spline" keyTimes="0;0.3;1" '
                    f'keySplines="0 0 1 1;{EASE}" values="{DOOR_SHUT};{DOOR_SHUT};{DOOR_AJAR}"/>')
    body = f"""  <path d="{ARCH}" stroke="{g}" stroke-width="3" stroke-linecap="round"/>
  <path d="M100 268 V150 H200 V268" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{g}" fill-opacity=".85"/>
  <path d="M100 150 V136 H200 V150" stroke="{s}" stroke-width="3" stroke-linejoin="round"/>
  <path d="{door}" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}">{anim}</path>
  <circle cx="152" cy="212" r="3.6" fill="{g}"/>
  <path d="M84 268 H216" stroke="{s}" stroke-width="3" stroke-linecap="round"/>
  <path d="M118 278 H182" stroke="{g}" stroke-width="5" stroke-linecap="round"/>
  <path d="M230 268 h28 l-4 -22 h-20z" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}"/>
  <path d="M244 246 c-2 -14 -12 -18 -18 -26 M244 246 c1 -16 8 -24 16 -30 M244 246 c0 -12 -2 -22 0 -34" stroke="{s}" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="232" cy="219" r="4" fill="{g}"/><circle cx="260" cy="214" r="4" fill="{g}"/>
"""
    return _svg(body, width, "A front door standing open, with warm light inside")


DRAWINGS = {"keepsake": keepsake, "front-door": front_door}
MOTIONS = {"keepsake": [None, "swing", "open"], "front-door": [None, "open"]}
BACKGROUNDS = {"light": "#F9F7F4", "dark": "#111820", "navy": "#2E4E70"}


def generate(out=Path(__file__).parent):
    tiles = []
    for name, draw in DRAWINGS.items():
        for palette in PALETTES:
            for motion in MOTIONS[name]:
                fname = f"{name}{'-' + motion if motion else ''}-{palette}.svg"
                (out / fname).write_text(draw(palette, motion), encoding="utf-8", newline="\n")
                preview = draw(palette, motion, loop=True, width=200)
                tiles.append(f'<figure style="margin:0;background:{BACKGROUNDS[palette]};border-radius:16px;padding:16px">{preview}'
                             f'<figcaption style="font:13px system-ui;color:{"#fff" if palette != "light" else "#4a4540"};margin-top:8px">{fname}</figcaption></figure>')
    page = ('<!doctype html><meta charset="utf-8"><title>HeirDock line illustrations</title>'
            '<body style="margin:0;padding:32px;background:#fff;font-family:system-ui">'
            '<h1 style="font-size:22px">HeirDock line illustrations</h1>'
            '<p style="color:#4a4540">Generated by drawings.py. Previews loop their motion; the SVG files play once (lid, door) or loop gently (tag).</p>'
            f'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));gap:16px">{"".join(tiles)}</div>')
    (out / "index.html").write_text(page, encoding="utf-8", newline="\n")
    return len(tiles)


if __name__ == "__main__":
    print(f"wrote {generate()} SVG files and index.html")
