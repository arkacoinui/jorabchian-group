import React, { useEffect, useState } from 'react';

/**
 * Full-screen splash shown on first load. Stays up for a short minimum
 * time (so it doesn't just flash) and until the page has fully loaded,
 * then fades out and unmounts itself.
 */
export default function Preloader({ accent = '#E4611F' }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const minDelay = new Promise((resolve) => setTimeout(resolve, reduceMotion ? 0 : 600));
    const pageLoaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));

    let cancelled = false;
    Promise.all([minDelay, pageLoaded]).then(() => {
      if (cancelled) return;
      setFading(true);
      setTimeout(() => setVisible(false), reduceMotion ? 0 : 500);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="psg-preloader" style={{ opacity: fading ? 0 : 1, pointerEvents: fading ? 'none' : 'auto' }} aria-hidden="true">
      <div className="psg-preloader-bars">
        <span className="psg-preloader-bar" style={{ background: accent }} />
        <span className="psg-preloader-bar" style={{ background: accent }} />
      </div>
      <div className="psg-preloader-label">LOADING</div>
    </div>
  );
}
