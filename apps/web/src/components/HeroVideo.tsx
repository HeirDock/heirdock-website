import { useEffect, useState } from "react";

const POSTER = "/media/hero-poster-v1.jpg";

export default function HeroVideo() {
  // The prerender and the first paint emit the poster only. The video mounts
  // after hydration, and only when the viewer has not asked for reduced
  // motion. Two things fall out of that: the prerendered HTML carries a real
  // <img> for crawlers and for readers without JS, and a reduced-motion
  // viewer never downloads the 2 MB clip at all - which a CSS-only
  // `display: none` would not achieve, because a hidden video still fetches.
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAnimate(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  if (!animate) {
    return (
      <div className="hero-video">
        <img
          className="hero-video__media"
          src={POSTER}
          alt=""
          width={1280}
          height={720}
        />
      </div>
    );
  }

  return (
    <div className="hero-video">
      {/* muted and playsInline are both required, for different reasons:
          without muted no browser will autoplay, and without playsInline iOS
          Safari takes the video fullscreen instead of playing it in place.
          aria-hidden and tabIndex -1 because the clip is decorative - the h1
          already carries the message, and there are no controls to reach.
          The -v1 in every filename is the cache-buster: public/ files are not
          content-hashed and are served with a one-year max-age, so a new cut
          must ship under a new name (-v2), never over this one. */}
      <video
        className="hero-video__media"
        poster={POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        {/* WebM first: VP9-capable browsers take the 1.3 MB file instead of
            the 2.0 MB one. A browser picks the first source it can play, not
            the best one, so the order is the whole mechanism. */}
        <source src="/media/hero-loop-v1.webm" type="video/webm" />
        <source src="/media/hero-loop-v1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
