import type { ReactElement } from "react";

// Duotone brand glyphs: a navy body with one small gold accent, the same
// recipe as the app's BrandIcon (heirdock-platform). Decorative only; the
// text beside each glyph carries the meaning. Colours come from .glyph__* in
// components.css; size with font-size or width on .glyph.

type Name = "camera" | "tag" | "people" | "document" | "phone" | "lock" | "eye" | "shield" | "house" | "box";

const GLYPHS: Record<Name, ReactElement> = {
  camera: (
    <>
      <path className="glyph__main" d="M4 7h3l1.6-2h6.8L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
      <circle className="glyph__cut" cx="12" cy="13" r="3.6" />
      <circle className="glyph__accent" cx="12" cy="13" r="1.9" />
    </>
  ),
  tag: (
    <>
      <path className="glyph__main" d="M3 12.6V4a1 1 0 0 1 1-1h8.6a1 1 0 0 1 .7.3l7.4 7.4a1 1 0 0 1 0 1.4l-8.6 8.6a1 1 0 0 1-1.4 0l-7.4-7.4a1 1 0 0 1-.3-.7z" />
      <circle className="glyph__accent" cx="7.5" cy="7.5" r="1.8" />
    </>
  ),
  people: (
    <>
      <circle className="glyph__main" cx="8" cy="8" r="3.2" />
      <circle className="glyph__main" cx="16" cy="8" r="3.2" />
      <path className="glyph__main" d="M2.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5zM10.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5z" />
      <path className="glyph__accent" d="M12 13.2l-1.6-1.5a1.1 1.1 0 0 1 1.6-1.5 1.1 1.1 0 0 1 1.6 1.5z" />
    </>
  ),
  document: (
    <>
      <path className="glyph__main" d="M6 2.5h8l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4A1.5 1.5 0 0 1 6 2.5z" />
      <path className="glyph__cut-line" d="M8.5 11h7M8.5 14h7" strokeWidth="1.4" strokeLinecap="round" />
      <circle className="glyph__accent" cx="15.5" cy="18" r="2.2" />
    </>
  ),
  phone: (
    <>
      <rect className="glyph__main" x="6" y="2.5" width="12" height="19" rx="2.5" />
      <circle className="glyph__accent" cx="12" cy="18.5" r="1.1" />
    </>
  ),
  lock: (
    <>
      <path className="glyph__main-line" d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10" strokeWidth="2" />
      <rect className="glyph__main" x="5" y="10" width="14" height="11" rx="2" />
      <circle className="glyph__accent" cx="12" cy="15.5" r="1.6" />
    </>
  ),
  eye: (
    <>
      <path className="glyph__main" d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle className="glyph__accent" cx="12" cy="12" r="3" />
    </>
  ),
  shield: (
    <>
      <path className="glyph__main" d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6z" />
      <path className="glyph__accent-line" d="M8.5 12l2.4 2.4 4.6-4.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  house: (
    <>
      <path className="glyph__main" d="M3 11.2 12 3.5l9 7.7V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <rect className="glyph__cut" x="9.5" y="13.5" width="5" height="7.5" rx="0.6" />
      <circle className="glyph__accent" cx="13.3" cy="17.3" r="0.9" />
    </>
  ),
  box: (
    <>
      <path className="glyph__main" d="M3 8.5 12 4l9 4.5v10L12 23l-9-4.5z" />
      <path className="glyph__cut-line" d="M3 8.5 12 13l9-4.5M12 13v10" strokeWidth="1.2" />
      <path className="glyph__accent-line" d="M7.5 6.2 16.5 10.7v3" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
};

export default function BrandGlyph({ name, className = "" }: { name: Name; className?: string }) {
  return (
    <svg className={`glyph${className ? ` ${className}` : ""}`} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      {GLYPHS[name]}
    </svg>
  );
}
