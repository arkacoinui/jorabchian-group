import React from 'react';

function StrokeIcon({
  size = 18,
  color = '#E4611F',
  strokeWidth = 1.6,
  viewBox = '0 0 24 24',
  style,
  children,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {children}
    </svg>
  );
}

export const CubeIcon = (props) => (
  <StrokeIcon {...props}>
    <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" />
    <line x1="12" y1="3" x2="12" y2="12" />
    <line x1="12" y1="12" x2="20" y2="7.5" />
    <line x1="12" y1="12" x2="4" y2="7.5" />
  </StrokeIcon>
);

export const TargetIcon = ({ color = '#E4611F', ...props }) => (
  <StrokeIcon color={color} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill={color} />
  </StrokeIcon>
);

export const UsersIcon = (props) => (
  <StrokeIcon {...props}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="8" r="3" />
    <rect x="2" y="14" width="10" height="7" rx="3" />
    <rect x="12" y="14" width="10" height="7" rx="3" />
  </StrokeIcon>
);

export const ShieldXIcon = (props) => (
  <StrokeIcon {...props}>
    <path d="M12 3 20 6 20 12C20 17 16.5 20.5 12 21 7.5 20.5 4 17 4 12L4 6Z" />
    <line x1="9.5" y1="10" x2="14.5" y2="15" />
    <line x1="14.5" y1="10" x2="9.5" y2="15" />
  </StrokeIcon>
);

export const ShieldIcon = (props) => (
  <StrokeIcon {...props}>
    <path d="M12 3 20 6 20 12C20 17 16.5 20.5 12 21 7.5 20.5 4 17 4 12L4 6Z" />
  </StrokeIcon>
);

export const GlobeIcon = (props) => (
  <StrokeIcon {...props}>
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </StrokeIcon>
);

export const ChartIcon = (props) => (
  <StrokeIcon {...props}>
    <polyline points="4,17 9,11 13,14 20,6" />
    <polyline points="15,6 20,6 20,11" />
  </StrokeIcon>
);

export const GearIcon = (props) => (
  <StrokeIcon {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19 12a7 7 0 0 1-.5 2.6l1.6 1.4-1.5 2.6-2-.7a7 7 0 0 1-2.2 1.3L14 22h-3l-.4-2.2a7 7 0 0 1-2.2-1.3l-2 .7-1.5-2.6 1.6-1.4A7 7 0 0 1 6 12" />
  </StrokeIcon>
);

export const ClockIcon = (props) => (
  <StrokeIcon {...props}>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="12" x2="12" y2="7" />
    <line x1="12" y1="12" x2="15.5" y2="13.5" />
  </StrokeIcon>
);

export const MailIcon = (props) => (
  <StrokeIcon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3,7 12,13 21,7" />
  </StrokeIcon>
);

export const MonitorIcon = (props) => (
  <StrokeIcon {...props}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </StrokeIcon>
);

export const CodeIcon = (props) => (
  <StrokeIcon {...props}>
    <polyline points="9,8 4,12 9,16" />
    <polyline points="15,8 20,12 15,16" />
  </StrokeIcon>
);

export const SlidersIcon = (props) => (
  <StrokeIcon {...props}>
    <line x1="7" y1="4" x2="7" y2="20" />
    <circle cx="7" cy="9" r="2" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <circle cx="12" cy="15" r="2" />
    <line x1="17" y1="4" x2="17" y2="20" />
    <circle cx="17" cy="7" r="2" />
  </StrokeIcon>
);

export const LayersIcon = (props) => (
  <StrokeIcon {...props}>
    <polygon points="12,3 21,8 12,13 3,8" />
    <polyline points="3,13 12,18 21,13" />
    <polyline points="3,17 12,22 21,17" />
  </StrokeIcon>
);

export const UvIcon = (props) => (
  <StrokeIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </StrokeIcon>
);

export const DropletIcon = (props) => (
  <StrokeIcon {...props}>
    <path d="M12 2C12 2 5 10 5 15A7 7 0 0 0 19 15C19 10 12 2 12 2Z" />
  </StrokeIcon>
);

export const RigIcon = (props) => (
  <StrokeIcon {...props}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <line x1="8" y1="8" x2="16" y2="16" />
    <circle cx="12" cy="12" r="1.5" />
  </StrokeIcon>
);

export const ActivityIcon = (props) => (
  <StrokeIcon {...props}>
    <polyline points="3,12 8,12 10,6 14,18 16,12 21,12" />
  </StrokeIcon>
);

export const RenderIcon = (props) => (
  <StrokeIcon {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="2" />
    <polyline points="4,18 9,13 13,17 16,14 20,18" />
  </StrokeIcon>
);

export const CpuIcon = (props) => (
  <StrokeIcon {...props}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="10" y="10" width="4" height="4" />
    <line x1="12" y1="1" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="23" />
    <line x1="1" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="23" y2="12" />
  </StrokeIcon>
);

export const CheckIcon = (props) => (
  <StrokeIcon strokeWidth={2.4} {...props}>
    <polyline points="5,13 9,17 19,7" />
  </StrokeIcon>
);

export const RingsIcon = (props) => (
  <StrokeIcon {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
  </StrokeIcon>
);

export const CircuitLinkIcon = (props) => (
  <StrokeIcon {...props}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="16" r="3" />
    <line x1="10.5" y1="9.5" x2="13.5" y2="14.5" />
  </StrokeIcon>
);

export const WindowBarIcon = (props) => (
  <StrokeIcon {...props}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <line x1="7" y1="8" x2="17" y2="8" />
  </StrokeIcon>
);

export const PhotoIcon = (props) => (
  <StrokeIcon {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <circle cx="9" cy="10" r="1.6" />
    <polyline points="5,17 9,13 12,15.5 15,12.5 19,16" />
  </StrokeIcon>
);

export const DiagonalLinkIcon = (props) => (
  <StrokeIcon strokeWidth={1.8} {...props}>
    <circle cx="7" cy="7" r="2.5" />
    <circle cx="17" cy="17" r="2.5" />
    <path d="M9 8.5 15 15.5" />
  </StrokeIcon>
);

export const PinIcon = (props) => (
  <StrokeIcon strokeWidth={1.8} {...props}>
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21C12 21 19 14.5 19 9A7 7 0 0 0 5 9C5 14.5 12 21 12 21Z" />
  </StrokeIcon>
);

export const PlayTriangleIcon = ({ size = 16, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <polygon points="6,4 20,12 6,20" />
  </svg>
);

export const PauseIcon = ({ size = 16, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

export const CloseIcon = (props) => (
  <StrokeIcon strokeWidth={2} {...props}>
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </StrokeIcon>
);
