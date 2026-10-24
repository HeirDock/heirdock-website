import { useEffect, useRef, useState } from "react";

// HeirDock's line drawings (source of truth: design/illustrations/drawings.py),
// inline so their colours come from tokens: .drawing--light / --navy / --tint
// set the line, accent and surface colours in components.css.
//
// Motion is opt-in per placement and never on the server: the prerender and
// first paint are the still drawing. After hydration, and only when the
// viewer has not asked for reduced motion, "swing" sways the keepsake's tag,
// and "open" lifts the lid (or swings the door ajar) once, the first time the
// drawing scrolls into view.

type Props = {
  name: "keepsake" | "frontDoor";
  tone?: "light" | "navy" | "tint";
  motion?: "swing" | "open";
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

export default function Drawing({ name, tone = "light", motion, className = "" }: Props) {
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

  return (
    <svg ref={svgRef} className={classes} viewBox="0 0 300 300" fill="none" aria-hidden="true" focusable="false">
      <path className="drawing__accent" d={ARCH} strokeWidth="3" strokeLinecap="round" />
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
      <path className="drawing__line" d="M52 268 H248" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
