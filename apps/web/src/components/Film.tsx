import { useRef, useState } from "react";

// The 30-second film in the Home hero. Until someone presses play it is the
// poster with one large play button, so it reads as a video at a glance; the
// player's own controls take over once it starts. Captions are there but off
// until someone turns them on in the player.
export default function Film() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    video.current?.focus();
    void video.current?.play();
  };

  return (
    <div className="film">
      <video
        ref={video}
        className="film__media"
        controls={started}
        /* No Download item in the menu and no "Save video as" on right-click.
           This hides the obvious routes; the file itself stays public. */
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        onPlay={() => setStarted(true)}
        preload="none"
        playsInline
        poster="/media/heirdock-intro-30s-poster-v1.jpg"
        width={1280}
        height={720}
        tabIndex={started ? 0 : -1}
      >
        <source src="/media/heirdock-intro-30s-v1.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" label="English" src="/media/heirdock-intro-30s.en.vtt" />
      </video>
      {!started && (
        <button type="button" className="film__play" onClick={play} aria-label="Play the 30-second film">
          <svg className="film__play-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
}
