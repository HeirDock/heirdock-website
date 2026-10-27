"""HeirDock brand marks: reference SVGs for the website and the apps.

Run `python design/brand-marks/marks.py` to regenerate every SVG in this folder.
See README.md for the rules. The line drawings live next door, in
design/illustrations; these are the marks that sit beside them.
"""

from pathlib import Path

# Per surface, matching design/illustrations: "light" and "dark" follow the app's
# themes, "navy" is the website's deep-navy panels (#2E4E70).
PALETTES = {
    "light": {"line": "#456E9A", "gold": "#DEB05E", "surface": "#FFFFFF", "planks": "#5A8EC2", "check": "#2E4E70"},
    "dark": {"line": "#A0D0F2", "gold": "#E8C06E", "surface": "#1A222C", "planks": "#A0D0F2", "check": "#1A222C"},
    "navy": {"line": "#E8EEF5", "gold": "#DEB05E", "surface": "#2E4E70", "planks": "#A0D0F2", "check": "#2E4E70"},
}


def _svg(viewbox, width, height, title, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" width="{width}" height="{height}" '
            f'fill="none" role="img" aria-label="{title}">\n{body}</svg>\n')


def planks(p):
    """Three boards at 100%, 75% and 50% width, as tall as the gaps between them, ends cut at 45 degrees."""
    c = p["planks"]
    body = (f'  <polygon points="0,34 96,34 90,28 6,28" fill="{c}"/>\n'
            f'  <polygon points="12,22 84,22 78,16 18,16" fill="{c}"/>\n'
            f'  <polygon points="24,10 72,10 66,4 30,4" fill="{c}"/>\n')
    return _svg("0 0 96 34", 96, 34, "The planks", body)


def thread(p):
    """A specimen: done, done, now, next. The line is gold up to "now" and faint after it."""
    line, gold, surface, check = p["line"], p["gold"], p["surface"], p["check"]
    tick = lambda x: (f'  <path d="M{x - 5} 24 l3.5 3.5 l6.5 -7" stroke="{check}" stroke-width="2.2" '
                      f'stroke-linecap="round" stroke-linejoin="round"/>\n')
    body = (f'  <path d="M20 24 H220" stroke="{gold}" stroke-width="2"/>\n'
            f'  <path d="M220 24 H310" stroke="{line}" stroke-opacity=".3" stroke-width="2"/>\n'
            f'  <circle cx="20" cy="24" r="10" fill="{gold}"/>\n{tick(20)}'
            f'  <circle cx="120" cy="24" r="10" fill="{gold}"/>\n{tick(120)}'
            f'  <circle cx="220" cy="24" r="16" fill="{gold}" fill-opacity=".3"/>\n'
            f'  <circle cx="220" cy="24" r="10" fill="{gold}"/>\n'
            f'  <circle cx="310" cy="24" r="8" fill="{surface}" stroke="{line}" stroke-opacity=".45" stroke-width="2"/>\n')
    return _svg("0 0 330 48", 330, 48, "The thread: done, done, now, next", body)


def dot(p):
    """The gold dot at its navigation size."""
    return _svg("0 0 8 8", 8, 8, "The gold dot", f'  <circle cx="4" cy="4" r="4" fill="{p["gold"]}"/>\n')


def arch(p):
    """The arch every line drawing stands under (300 x 300 drawing canvas)."""
    body = f'  <path d="M28 286 V160 a122 122 0 0 1 244 0 V286" stroke="{p["gold"]}" stroke-width="3" stroke-linecap="round"/>\n'
    return _svg("0 0 300 300", 300, 300, "The arch", body)


def ring(p):
    """The small ring above interior page titles: 72 x 36, a 3px half ring."""
    body = f'  <path d="M1.5 36 a34.5 34.5 0 0 1 69 0" stroke="{p["gold"]}" stroke-width="3"/>\n'
    return _svg("0 0 72 36", 72, 36, "The title ring", body)


MARKS = {"planks": planks, "thread": thread, "dot": dot, "arch": arch, "ring": ring}


def generate(out=Path(__file__).parent):
    count = 0
    for name, draw in MARKS.items():
        for palette, colours in PALETTES.items():
            (out / f"{name}-{palette}.svg").write_text(draw(colours), encoding="utf-8", newline="\n")
            count += 1
    return count


if __name__ == "__main__":
    print(f"wrote {generate()} SVG files")
