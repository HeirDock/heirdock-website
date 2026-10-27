// The planks: the logo's dock boards, three of them narrowing toward the
// back, ends cut at 45 degrees. A divider between sections, or, with
// `loading`, the mark inside a button while a form sends (the boards light
// from the front back). Decorative only; the text beside it carries the
// meaning. Colour is currentColor, so it takes the colour of its context.
// Spec: the "HeirDock brand motifs" design canvas, idea C.

type Props = {
  loading?: boolean;
  className?: string;
};

export default function Planks({ loading = false, className = "" }: Props) {
  const classes = `planks${loading ? " planks--loading" : ""}${className ? ` ${className}` : ""}`;
  return (
    <svg className={classes} viewBox="0 0 96 34" aria-hidden="true" focusable="false">
      <polygon className="planks__board" points="0,34 96,34 90,28 6,28" />
      <polygon className="planks__board" points="12,22 84,22 78,16 18,16" />
      <polygon className="planks__board" points="24,10 72,10 66,4 30,4" />
    </svg>
  );
}
