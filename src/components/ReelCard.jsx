import { useEffect, useRef } from 'react';
import { Heart, Play } from 'lucide-react';
import useInView from '../hooks/useInView.js';

/**
 * One episode: the Instagram cover, or the clip itself when `reel.video` is set
 * (muted, looping, plays only while on screen). The whole card links to the reel.
 */
export default function ReelCard({ reel }) {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({ once: false, threshold: 0.5 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [inView]);

  return (
    <a ref={ref} className="reel-card" href={reel.href} target="_blank" rel="noopener noreferrer">
      <div className="reel-card__media">
        {reel.video ? (
          <video ref={videoRef} src={reel.video} poster={reel.poster} muted loop playsInline preload="none" />
        ) : (
          <img src={reel.poster} alt="" width="360" height="640" loading="lazy" />
        )}
        <span className="reel-card__shade" aria-hidden="true" />
        <span className="reel-card__day">{reel.day}</span>
        <span className="reel-card__views">
          <Play size={10} fill="currentColor" aria-hidden="true" />
          {reel.views}
        </span>
      </div>
      <p className="reel-card__caption">{reel.caption}</p>
      {reel.likes && (
        <p className="reel-card__likes">
          <Heart size={12} fill="currentColor" aria-hidden="true" />
          {reel.likes}
        </p>
      )}
      <span className="sr-only">
        {reel.day}, {reel.views}. Opens on Instagram.
      </span>
    </a>
  );
}
