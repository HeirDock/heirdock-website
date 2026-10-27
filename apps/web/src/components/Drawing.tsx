import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";

// HeirDock's line drawings (source of truth: design/illustrations/drawings.py,
// and for the briefcase the shared library's illustrations/source/new_drawings.py),
// inline so their colours come from tokens: .drawing--light / --navy / --tint
// set the line, accent and surface colours in components.css.
//
// Motion is opt-in per placement and never on the server: the prerender and
// first paint are the still drawing. After hydration, and only when the
// viewer has not asked for reduced motion, "swing" sways the keepsake's tag
// (or the pocket watch on its chain), and "open" lifts the lid (or swings the door ajar) once, the first time the
// drawing scrolls into view.

type Props = {
  name: "keepsake" | "frontDoor" | "valuables" | StillName;
  tone?: "light" | "navy" | "tint";
  motion?: "swing" | "open";
  // The keepsake can stand on the planks instead of under the arch, so a page
  // with several drawings doesn't repeat the arch three times.
  frame?: "arch" | "planks";
  className?: string;
};

const ARCH = "M28 286 V160 a122 122 0 0 1 244 0 V286";
const LID_OPEN = "M82 185 L94 128 Q96 122 102 122 H198 Q204 122 206 128 L218 185";
const LID_SHUT = "M75 185 L75 172 Q75 166 81 166 H219 Q225 166 225 172 L225 185";
const SEAM_OPEN = "M96 134 H204";
const SEAM_SHUT = "M79 176 H221";
const DOOR_AJAR = "M104 268 V150 L162 160 V262";
const DOOR_SHUT = "M104 268 V150 H196 V268";
const EASE = "0.2 0 0 1";
// Three boards in place of the shelf line, narrowing upward like the logo's
// dock, ends cut at 45 degrees; the view is cropped to the box and boards.
const PLANKS = [
  "66,274 234,274 228,268 72,268",
  "50,286 250,286 244,280 56,280",
  "34,298 266,298 260,292 40,292",
];
const PLANKS_VIEWBOX = "20 100 260 210";

// Still drawings: an object under the arch, on the shelf line, no motion.
type StillName = "strongbox" | "letter" | "lantern" | "clipboard" | "briefcase";

const STILLS: Record<StillName, ReactElement> = {
  strongbox: (
    <>
      <rect className="drawing__line drawing__surface" x="88" y="146" width="124" height="114" rx="8" strokeWidth="3" />
      <rect className="drawing__line" x="100" y="158" width="100" height="90" rx="4" strokeWidth="1.8" opacity=".55" />
      <path className="drawing__line" d="M96 172 v12 M96 222 v12" strokeWidth="4" strokeLinecap="round" />
      <circle className="drawing__line drawing__surface" cx="146" cy="203" r="22" strokeWidth="3" />
      <path className="drawing__line" d="M146 189 v-3 M160 203 h3 M146 217 v3 M132 203 h-3" strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
      <circle className="drawing__accent-fill" cx="146" cy="203" r="6" />
      <path className="drawing__accent" d="M146 181 v6" strokeWidth="2.4" strokeLinecap="round" />
      <path className="drawing__line" d="M186 190 v26" strokeWidth="3" strokeLinecap="round" />
      <path className="drawing__line" d="M104 260 v8 M196 260 v8" strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  letter: (
    <>
      <path className="drawing__line drawing__surface" d="M72 186 L150 128 L228 186" strokeWidth="3" strokeLinejoin="round" />
      <rect className="drawing__line drawing__surface" x="94" y="146" width="112" height="96" rx="3" strokeWidth="3" />
      <path className="drawing__line" d="M110 166 h66 M110 180 h80 M110 194 h58" strokeWidth="1.8" strokeLinecap="round" opacity=".55" />
      <path className="drawing__line drawing__surface" d="M72 186 L150 230 L228 186 V258 a6 6 0 0 1 -6 6 H78 a6 6 0 0 1 -6 -6 Z" strokeWidth="3" strokeLinejoin="round" />
      <circle className="drawing__accent-fill" cx="150" cy="230" r="11" />
      <circle className="drawing__surface-line" cx="150" cy="230" r="5" strokeWidth="1.6" opacity=".9" />
    </>
  ),
  lantern: (
    <>
      <circle className="drawing__line" cx="150" cy="122" r="8" strokeWidth="3" />
      <path className="drawing__line drawing__surface" d="M124 148 L134 132 H166 L176 148 Z" strokeWidth="3" strokeLinejoin="round" />
      <rect className="drawing__line drawing__surface" x="118" y="148" width="64" height="104" rx="4" strokeWidth="3" />
      <rect className="drawing__glow" x="128" y="158" width="44" height="84" rx="2" />
      <path className="drawing__flame" d="M150 184 c-6 8 -8 14 -8 18 a8 8 0 0 0 16 0 c0 -4 -2 -10 -8 -18z" />
      <path className="drawing__line" d="M150 210 v4" strokeWidth="1.8" strokeLinecap="round" />
      <rect className="drawing__line drawing__surface" x="143" y="214" width="14" height="28" rx="2" strokeWidth="2.4" />
      <path className="drawing__line drawing__surface" d="M112 252 H188 V262 a4 4 0 0 1 -4 4 H116 a4 4 0 0 1 -4 -4 Z" strokeWidth="3" strokeLinejoin="round" />
    </>
  ),
  clipboard: (
    <>
      <rect className="drawing__line drawing__surface" x="96" y="112" width="108" height="150" rx="8" strokeWidth="3" />
      <rect className="drawing__line" x="108" y="130" width="84" height="120" rx="2" strokeWidth="1.8" opacity=".55" />
      <rect className="drawing__accent-fill" x="128" y="102" width="44" height="20" rx="6" />
      <circle className="drawing__surface" cx="150" cy="110" r="3" />
      <rect className="drawing__line" x="118" y="148" width="14" height="14" rx="3" strokeWidth="2" />
      <path className="drawing__line" d="M121 155 l3 3 l5 -6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="drawing__line" d="M140 155 h40" strokeWidth="1.8" strokeLinecap="round" opacity=".55" />
      <rect className="drawing__line" x="118" y="176" width="14" height="14" rx="3" strokeWidth="2" />
      <path className="drawing__line" d="M121 183 l3 3 l5 -6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="drawing__line" d="M140 183 h32" strokeWidth="1.8" strokeLinecap="round" opacity=".55" />
      <rect className="drawing__line" x="118" y="204" width="14" height="14" rx="3" strokeWidth="2" />
      <path className="drawing__line" d="M140 211 h36" strokeWidth="1.8" strokeLinecap="round" opacity=".55" />
    </>
  ),
  briefcase: (
    <>
      <path className="drawing__line" d="M126 170 V158 Q126 148 136 148 H164 Q174 148 174 158 V170" strokeWidth="3" strokeLinecap="round" />
      <rect className="drawing__line drawing__surface" x="76" y="170" width="148" height="94" rx="8" strokeWidth="3" />
      <path className="drawing__line" d="M76 202 H224" strokeWidth="2" opacity=".55" />
      <path className="drawing__line" d="M106 170 V264 M194 170 V264" strokeWidth="1.8" opacity=".4" />
      <rect className="drawing__accent-fill" x="140" y="194" width="20" height="16" rx="3" />
      <circle className="drawing__surface" cx="150" cy="202" r="2.4" />
    </>
  ),
};

function useMotionAllowed() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllowed(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);
  return allowed;
}

export default function Drawing({ name, tone = "light", motion, frame = "arch", className = "" }: Props) {
  const allowed = useMotionAllowed();
  const svgRef = useRef<SVGSVGElement>(null);
  const [played, setPlayed] = useState(false);
  const opens = allowed && motion === "open";

  // "open": start shut, then play once when half the drawing is in view.
  useEffect(() => {
    if (!opens || played || !svgRef.current) return;
    const svg = svgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        svg.querySelectorAll<SVGAnimationElement>("[data-opening]").forEach((a) => a.beginElement());
        setPlayed(true);
      },
      { threshold: 0.5 },
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, [opens, played]);

  const sways = allowed && (motion === "swing" || motion === "open");
  const classes = `drawing drawing--${tone}${className ? ` ${className}` : ""}`;

  if (name in STILLS) {
    return (
      <svg className={classes} viewBox="0 0 300 300" fill="none" aria-hidden="true" focusable="false">
        <path className="drawing__accent" d={ARCH} strokeWidth="3" strokeLinecap="round" />
        {STILLS[name as StillName]}
        <path className="drawing__line" d="M52 268 H248" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "valuables") {
    return (
      <svg ref={svgRef} className={classes} viewBox="0 0 300 300" fill="none" aria-hidden="true" focusable="false">
        <path className="drawing__accent" d={ARCH} strokeWidth="3" strokeLinecap="round" />
        {/* the painting on its wire */}
        <path className="drawing__line" d="M164 86 L188 72 L212 86" strokeWidth="1.8" strokeLinejoin="round" opacity=".55" />
        <circle cx="188" cy="72" r="2.4" className="drawing__line-fill" />
        <rect className="drawing__line drawing__surface" x="140" y="86" width="96" height="72" rx="3" strokeWidth="3" />
        <rect className="drawing__line" x="148" y="94" width="80" height="56" rx="1.5" strokeWidth="1.8" opacity=".7" />
        <path className="drawing__line" d="M154 142 q16 -18 32 -6 q12 -10 36 4" strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
        <circle className="drawing__line" cx="206" cy="110" r="5" strokeWidth="1.8" opacity=".7" />
        {/* the pocket watch, hanging from its hook on a gold chain */}
        <path className="drawing__line" d="M86 114 h14" strokeWidth="3" strokeLinecap="round" />
        <g>
          {sways && (
            <animateTransform attributeName="transform" type="rotate" dur="6s" repeatCount="indefinite" calcMode="spline"
              keyTimes="0;0.16;0.34;0.5;0.64;1"
              keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0 0 1 1"
              values="0 93 114;5 93 114;-4 93 114;2 93 114;0 93 114;0 93 114" />
          )}
          <path className="drawing__accent" d="M93 117 V158" strokeWidth="2.2" strokeLinecap="round" />
          <circle className="drawing__line" cx="93" cy="165" r="6" strokeWidth="2.4" />
          <rect className="drawing__line drawing__surface" x="89" y="171" width="8" height="7" rx="1.5" strokeWidth="2.4" />
          <circle className="drawing__line drawing__surface" cx="93" cy="204" r="26" strokeWidth="3" />
          <circle className="drawing__line" cx="93" cy="204" r="20" strokeWidth="1.8" opacity=".55" />
          <path className="drawing__line" d="M93 188 v4 M109 204 h-4 M93 220 v-4 M77 204 h4" strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
          <path className="drawing__line" d="M93 204 V192 M93 204 l8 5" strokeWidth="2" strokeLinecap="round" />
          <circle cx="93" cy="204" r="2.2" className="drawing__line-fill" />
        </g>
        {/* the open ring box, its gold stone */}
        <path className="drawing__line drawing__surface" d="M156 236 L160 200 Q161 195 166 195 H218 Q223 195 224 200 L228 236" strokeWidth="3" strokeLinejoin="round" />
        <path className="drawing__line" d="M163 207 H221" strokeWidth="2" opacity=".55" />
        <circle className="drawing__line" cx="192" cy="228" r="13" strokeWidth="3" />
        <path className="drawing__accent-fill" d="M184 213 l8 -9 l8 9 l-8 8z" />
        <rect className="drawing__line drawing__surface" x="152" y="234" width="80" height="32" rx="7" strokeWidth="3" />
        <path className="drawing__line" d="M52 268 H248" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "frontDoor") {
    return (
      <svg ref={svgRef} className={classes} viewBox="0 0 300 300" fill="none" aria-hidden="true" focusable="false">
        <path className="drawing__accent" d={ARCH} strokeWidth="3" strokeLinecap="round" />
        <path className="drawing__line drawing__glow" d="M100 268 V150 H200 V268" strokeWidth="3" strokeLinejoin="round" />
        <path className="drawing__line" d="M100 150 V136 H200 V150" strokeWidth="3" strokeLinejoin="round" />
        <path className="drawing__line drawing__surface" d={opens ? DOOR_SHUT : DOOR_AJAR} strokeWidth="3" strokeLinejoin="round">
          {opens && (
            <animate data-opening attributeName="d" begin="indefinite" dur="1.4s" fill="freeze"
              calcMode="spline" keyTimes="0;1" keySplines={EASE} values={`${DOOR_SHUT};${DOOR_AJAR}`} />
          )}
        </path>
        <circle className="drawing__accent-fill" cx="152" cy="212" r="3.6" />
        <path className="drawing__line" d="M84 268 H216" strokeWidth="3" strokeLinecap="round" />
        <path className="drawing__accent" d="M118 278 H182" strokeWidth="5" strokeLinecap="round" />
        <path className="drawing__line drawing__surface" d="M230 268 h28 l-4 -22 h-20z" strokeWidth="3" strokeLinejoin="round" />
        <path className="drawing__line" d="M244 246 c-2 -14 -12 -18 -18 -26 M244 246 c1 -16 8 -24 16 -30 M244 246 c0 -12 -2 -22 0 -34" strokeWidth="2.4" strokeLinecap="round" />
        <circle className="drawing__accent-fill" cx="232" cy="219" r="4" />
        <circle className="drawing__accent-fill" cx="260" cy="214" r="4" />
      </svg>
    );
  }

  const onPlanks = frame === "planks";
  return (
    <svg ref={svgRef} className={classes} viewBox={onPlanks ? PLANKS_VIEWBOX : "0 0 300 300"} fill="none" aria-hidden="true" focusable="false">
      {!onPlanks && <path className="drawing__accent" d={ARCH} strokeWidth="3" strokeLinecap="round" />}
      {/* lid, behind the keepsakes when open */}
      <path className="drawing__line drawing__surface" d={opens ? LID_SHUT : LID_OPEN} strokeWidth="3" strokeLinejoin="round">
        {opens && (
          <animate data-opening attributeName="d" begin="indefinite" dur="1.6s" fill="freeze"
            calcMode="spline" keyTimes="0;1" keySplines={EASE} values={`${LID_SHUT};${LID_OPEN}`} />
        )}
      </path>
      <path className="drawing__line" d={opens ? SEAM_SHUT : SEAM_OPEN} strokeWidth="2" opacity=".55">
        {opens && (
          <animate data-opening attributeName="d" begin="indefinite" dur="1.6s" fill="freeze"
            calcMode="spline" keyTimes="0;1" keySplines={EASE} values={`${SEAM_SHUT};${SEAM_OPEN}`} />
        )}
      </path>
      {/* the keepsakes, hidden inside the box until the lid opens */}
      <g transform={opens ? "translate(0 64)" : "translate(0 0)"}>
        {opens && (
          <animateTransform data-opening attributeName="transform" type="translate" begin="indefinite" dur="1.9s"
            fill="freeze" calcMode="spline" keyTimes="0;0.2;1" keySplines={`0 0 1 1;${EASE}`} values="0 64;0 64;0 0" />
        )}
        <g transform="rotate(-9 118 160)">
          <rect className="drawing__line drawing__surface" x="96" y="130" width="46" height="56" rx="3" strokeWidth="3" />
          <rect className="drawing__line" x="103" y="137" width="32" height="42" rx="1.5" strokeWidth="1.8" opacity=".7" />
          <path className="drawing__accent" d="M119 174 V156 M119 160 q-7 -3 -8 -10 q7 1 8 8 M119 156 q6 -4 7 -11 q-7 2 -7 9" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <path className="drawing__line drawing__surface" d="M166 136 h20 M169 136 c0 8 -12 10 -12 24 c0 9 7 14 19 14 s19 -5 19 -14 c0 -14 -12 -16 -12 -24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path className="drawing__line" d="M160 158 q16 6 32 0" strokeWidth="1.8" opacity=".6" />
      </g>
      <rect className="drawing__line drawing__surface" x="75" y="185" width="150" height="80" rx="9" strokeWidth="3" />
      <path className="drawing__line" d="M75 201 H225" strokeWidth="2" opacity=".55" />
      {/* the gold tag on its string */}
      <g>
        {sways && (
          <animateTransform attributeName="transform" type="rotate" dur="5s" repeatCount="indefinite" calcMode="spline"
            keyTimes="0;0.14;0.3;0.46;0.6;1"
            keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0 0 1 1"
            values="0 150 202;7 150 202;-5 150 202;2.5 150 202;0 150 202;0 150 202" />
        )}
        <path className="drawing__accent" d="M150 202 q2 9 10 14" strokeWidth="1.8" strokeLinecap="round" />
        <path className="drawing__accent-fill" d="M158 214 h30 q5 0 7 4 l3 6 l-3 6 q-2 4 -7 4 h-30 q-5 0 -5 -5 v-10 q0 -5 5 -5z" />
        <circle className="drawing__surface" cx="163" cy="224" r="2.2" />
        <path className="drawing__surface-line" d="M170 221 h18 M170 227 h12" strokeWidth="1.6" strokeLinecap="round" opacity=".9" />
      </g>
      {onPlanks ? (
        PLANKS.map((points) => <polygon key={points} className="drawing__planks" points={points} />)
      ) : (
        <path className="drawing__line" d="M52 268 H248" strokeWidth="3" strokeLinecap="round" />
      )}
    </svg>
  );
}
