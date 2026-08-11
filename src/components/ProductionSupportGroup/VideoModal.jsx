import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon, PauseIcon, PlayTriangleIcon } from './icons';

/**
 * Fullscreen video popup player.
 * - Click the dark overlay (outside the player) to close.
 * - Click the video, or the center button, to toggle play/pause.
 * - Esc key and the close button also dismiss it.
 */
export default function VideoModal({ src, title, accent = '#E4611F', onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video player'}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(10,13,19,0.88)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px,4vw,40px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 960,
          background: '#12161F',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          overflow: 'hidden',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(10,13,19,0.65)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
          }}
        >
          <CloseIcon color="#fff" size={16} />
        </button>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#000' }}>
          <video
            ref={videoRef}
            src={src}
            autoPlay
            playsInline
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{ width: '100%', height: '100%', display: 'block', cursor: 'pointer' }}
          />
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(10,13,19,0.55)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              opacity: isPlaying ? 0 : 1,
              transition: 'opacity 0.2s ease',
              pointerEvents: isPlaying ? 'none' : 'auto',
            }}
          >
            {isPlaying ? <PauseIcon size={22} color="#fff" /> : <PlayTriangleIcon size={22} color="#fff" />}
          </button>
        </div>

        {title && (
          <div style={{ padding: '14px 18px', color: '#e7e9ed', fontWeight: 600, fontSize: 14, borderTop: `1px solid ${accent}22` }}>
            {title}
          </div>
        )}
      </div>
    </div>
  );
}
