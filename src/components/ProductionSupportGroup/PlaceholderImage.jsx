import React from 'react';

/**
 * Renders a real image when `src` is provided, otherwise falls back to an
 * inline SVG placeholder that matches the dark UI so the layout is complete
 * before real media is dropped in. See the README section "Replacing
 * placeholder media" for how to swap `src` in with real files.
 */
export default function PlaceholderImage({
  label = 'Image placeholder',
  shape = 'rounded',
  radius = 12,
  src,
  alt,
  style,
}) {
  const shapeStyle = shape === 'circle' ? { borderRadius: '50%' } : { borderRadius: radius };

  if (src) {
    return (
      <img
        src={src}
        alt={alt || label}
        style={{
          ...shapeStyle,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          ...style,
        }}
      />
    );
  }

  return (
    <div
      style={{
        ...shapeStyle,
        background: '#171B24',
        border: '1px dashed rgba(255,255,255,0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: '#5b6472',
        textAlign: 'center',
        padding: 12,
        overflow: 'hidden',
        ...style,
      }}
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#5b6472" strokeWidth="1.4">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <polyline points="4,18 9,13 13,17 16,14 20,18" />
      </svg>
      <span style={{ fontSize: 11.5, lineHeight: 1.4, maxWidth: 200 }}>{label}</span>
    </div>
  );
}
