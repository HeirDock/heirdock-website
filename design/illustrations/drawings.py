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

# The keepsake can stand on three planks (the logo's dock boards, narrowing upward,
# ends cut at 45 degrees) instead of under the arch, cropped to the box and boards.
PLANKS = ["66,274 234,274 228,268 72,268", "50,286 250,286 244,280 56,280", "34,298 266,298 260,292 40,292"]
PLANKS_VIEWBOX = "20 100 260 210"
PLANK_BLUE = {"light": "#5A8EC2", "dark": "#A0D0F2", "navy": "#E8EEF5"}


def _svg(body, width, title, viewbox="0 0 300 300"):
    size = f' width="{width}"' if width else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg"{size} viewBox="{viewbox}" fill="none" role="img" aria-label="{title}">\n'
            f"{body}</svg>\n")


def keepsake(palette="light", motion=None, loop=False, width=None, frame="arch"):
    """A keepsake box with a framed picture, a vase and a gold tag.

    motion: None (still), "swing" (the tag sways, a slow loop) or "open" (the lid lifts and
    the keepsakes rise; plays once, or loops when loop=True for previews).
    frame: "arch" (under the gold arch, on a shelf line) or "planks" (on three planks, no arch).
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

    on_planks = frame == "planks"
    arch = "" if on_planks else f'  <path d="{ARCH}" stroke="{g}" stroke-width="3" stroke-linecap="round"/>\n'
    ground = ("".join(f'  <polygon points="{pts}" fill="{PLANK_BLUE[palette]}"/>\n' for pts in PLANKS) if on_planks
              else f'  <path d="M52 268 H248" stroke="{s}" stroke-width="3" stroke-linecap="round"/>\n')
    body = f"""{arch}  <path d="{lid}" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}">{lid_anim}</path>
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
{ground}"""
    return _svg(body, width, "A keepsake box with a framed picture and a vase", PLANKS_VIEWBOX if on_planks else "0 0 300 300")


def keepsake_planks(palette="light", motion=None, loop=False, width=None):
    """The keepsake standing on the planks, with no arch."""
    return keepsake(palette, motion, loop, width, frame="planks")


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


def valuables(palette="light", motion=None, loop=False, width=None):
    """A pocket watch on a gold chain, a painting on the wall and an open ring box.
    motion="swing" sways the watch from its hook, a slow loop."""
    p = PALETTES[palette]
    s, g, f = p["stroke"], p["gold"], p["fill"]
    swing = ""
    if motion == "swing":
        swing = ('<animateTransform attributeName="transform" type="rotate" dur="6s" repeatCount="indefinite" calcMode="spline" '
                 'keyTimes="0;0.16;0.34;0.5;0.64;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0 0 1 1" '
                 'values="0 93 114;5 93 114;-4 93 114;2 93 114;0 93 114;0 93 114"/>')
    body = f"""  <path d="{ARCH}" stroke="{g}" stroke-width="3" stroke-linecap="round"/>
  <path d="M164 86 L188 72 L212 86" stroke="{s}" stroke-width="1.8" stroke-linejoin="round" opacity=".55"/>
  <circle cx="188" cy="72" r="2.4" fill="{s}"/>
  <rect x="140" y="86" width="96" height="72" rx="3" stroke="{s}" stroke-width="3" fill="{f}"/>
  <rect x="148" y="94" width="80" height="56" rx="1.5" stroke="{s}" stroke-width="1.8" opacity=".7"/>
  <path d="M154 142 q16 -18 32 -6 q12 -10 36 4" stroke="{s}" stroke-width="1.8" stroke-linecap="round" opacity=".7"/>
  <circle cx="206" cy="110" r="5" stroke="{s}" stroke-width="1.8" opacity=".7"/>
  <path d="M86 114 h14" stroke="{s}" stroke-width="3" stroke-linecap="round"/>
  <g>{swing}
    <path d="M93 117 V158" stroke="{g}" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="93" cy="165" r="6" stroke="{s}" stroke-width="2.4"/>
    <rect x="89" y="171" width="8" height="7" rx="1.5" stroke="{s}" stroke-width="2.4" fill="{f}"/>
    <circle cx="93" cy="204" r="26" stroke="{s}" stroke-width="3" fill="{f}"/>
    <circle cx="93" cy="204" r="20" stroke="{s}" stroke-width="1.8" opacity=".55"/>
    <path d="M93 188 v4 M109 204 h-4 M93 220 v-4 M77 204 h4" stroke="{s}" stroke-width="1.8" stroke-linecap="round" opacity=".7"/>
    <path d="M93 204 V192 M93 204 l8 5" stroke="{s}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="93" cy="204" r="2.2" fill="{s}"/>
  </g>
  <path d="M156 236 L160 200 Q161 195 166 195 H218 Q223 195 224 200 L228 236" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}"/>
  <path d="M163 207 H221" stroke="{s}" stroke-width="2" opacity=".55"/>
  <circle cx="192" cy="228" r="13" stroke="{s}" stroke-width="3"/>
  <path d="M184 213 l8 -9 l8 9 l-8 8z" fill="{g}"/>
  <rect x="152" y="234" width="80" height="32" rx="7" stroke="{s}" stroke-width="3" fill="{f}"/>
  <path d="M52 268 H248" stroke="{s}" stroke-width="3" stroke-linecap="round"/>
"""
    return _svg(body, width, "A pocket watch on a chain, a painting and an open ring box")


def _still(name, title, inner):
    """A still drawing under the arch, on the shelf line. inner(s, g, f) returns the object's markup."""
    def draw(palette="light", motion=None, loop=False, width=None):
        p = PALETTES[palette]
        s, g, f = p["stroke"], p["gold"], p["fill"]
        body = (f'  <path d="{ARCH}" stroke="{g}" stroke-width="3" stroke-linecap="round"/>\n'
                f"{inner(s, g, f)}"
                f'  <path d="M52 268 H248" stroke="{s}" stroke-width="3" stroke-linecap="round"/>\n')
        return _svg(body, width, title)
    draw.__name__ = name
    return draw


# A strongbox with a dial: the Vault. Gold for the dial's centre and its marker.
strongbox = _still("strongbox", "A strongbox with a dial", lambda s, g, f: f"""\
  <rect x="88" y="146" width="124" height="114" rx="8" stroke="{s}" stroke-width="3" fill="{f}"/>
  <rect x="100" y="158" width="100" height="90" rx="4" stroke="{s}" stroke-width="1.8" opacity=".55"/>
  <path d="M96 172 v12 M96 222 v12" stroke="{s}" stroke-width="4" stroke-linecap="round"/>
  <circle cx="146" cy="203" r="22" stroke="{s}" stroke-width="3" fill="{f}"/>
  <path d="M146 189 v-3 M160 203 h3 M146 217 v3 M132 203 h-3" stroke="{s}" stroke-width="1.8" stroke-linecap="round" opacity=".7"/>
  <circle cx="146" cy="203" r="6" fill="{g}"/>
  <path d="M146 181 v6" stroke="{g}" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M186 190 v26" stroke="{s}" stroke-width="3" stroke-linecap="round"/>
  <path d="M104 260 v8 M196 260 v8" stroke="{s}" stroke-width="5" stroke-linecap="round"/>
""")

# An opened envelope with a note inside and a gold seal: a message on its way.
letter = _still("letter", "An opened envelope with a note and a gold seal", lambda s, g, f: f"""\
  <path d="M72 186 L150 128 L228 186" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}"/>
  <rect x="94" y="146" width="112" height="96" rx="3" stroke="{s}" stroke-width="3" fill="{f}"/>
  <path d="M110 166 h66 M110 180 h80 M110 194 h58" stroke="{s}" stroke-width="1.8" stroke-linecap="round" opacity=".55"/>
  <path d="M72 186 L150 230 L228 186 V258 a6 6 0 0 1 -6 6 H78 a6 6 0 0 1 -6 -6 Z" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}"/>
  <circle cx="150" cy="230" r="11" fill="{g}"/>
  <circle cx="150" cy="230" r="5" stroke="{f}" stroke-width="1.6" opacity=".9"/>
""")

# A lantern with a candle, warm gold light behind the glass: finding the way.
lantern = _still("lantern", "A lantern with a lit candle", lambda s, g, f: f"""\
  <circle cx="150" cy="122" r="8" stroke="{s}" stroke-width="3"/>
  <path d="M124 148 L134 132 H166 L176 148 Z" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}"/>
  <rect x="118" y="148" width="64" height="104" rx="4" stroke="{s}" stroke-width="3" fill="{f}"/>
  <rect x="128" y="158" width="44" height="84" rx="2" fill="{g}" fill-opacity=".85"/>
  <path d="M150 184 c-6 8 -8 14 -8 18 a8 8 0 0 0 16 0 c0 -4 -2 -10 -8 -18z" fill="#FFFFFF"/>
  <path d="M150 210 v4" stroke="{s}" stroke-width="1.8" stroke-linecap="round"/>
  <rect x="143" y="214" width="14" height="28" rx="2" stroke="{s}" stroke-width="2.4" fill="{f}"/>
  <path d="M112 252 H188 V262 a4 4 0 0 1 -4 4 H116 a4 4 0 0 1 -4 -4 Z" stroke="{s}" stroke-width="3" stroke-linejoin="round" fill="{f}"/>
""")

# A clipboard with a checklist and a gold clip: a record a professional can work from.
clipboard = _still("clipboard", "A clipboard with a checklist", lambda s, g, f: f"""\
  <rect x="96" y="112" width="108" height="150" rx="8" stroke="{s}" stroke-width="3" fill="{f}"/>
  <rect x="108" y="130" width="84" height="120" rx="2" stroke="{s}" stroke-width="1.8" opacity=".55"/>
  <rect x="128" y="102" width="44" height="20" rx="6" fill="{g}"/>
  <circle cx="150" cy="110" r="3" fill="{f}"/>
  <rect x="118" y="148" width="14" height="14" rx="3" stroke="{s}" stroke-width="2"/>
  <path d="M121 155 l3 3 l5 -6" stroke="{s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M140 155 h40" stroke="{s}" stroke-width="1.8" stroke-linecap="round" opacity=".55"/>
  <rect x="118" y="176" width="14" height="14" rx="3" stroke="{s}" stroke-width="2"/>
  <path d="M121 183 l3 3 l5 -6" stroke="{s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M140 183 h32" stroke="{s}" stroke-width="1.8" stroke-linecap="round" opacity=".55"/>
  <rect x="118" y="204" width="14" height="14" rx="3" stroke="{s}" stroke-width="2"/>
  <path d="M140 211 h36" stroke="{s}" stroke-width="1.8" stroke-linecap="round" opacity=".55"/>
""")


DRAWINGS = {"keepsake": keepsake, "keepsake-planks": keepsake_planks, "front-door": front_door, "valuables": valuables,
            "strongbox": strongbox, "letter": letter, "lantern": lantern, "clipboard": clipboard}
MOTIONS = {"keepsake": [None, "swing", "open"], "keepsake-planks": [None, "open"], "front-door": [None, "open"], "valuables": [None, "swing"],
           "strongbox": [None], "letter": [None], "lantern": [None], "clipboard": [None]}
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
