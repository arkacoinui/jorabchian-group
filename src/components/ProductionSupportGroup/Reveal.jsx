import React, { useEffect, useRef, useState } from 'react';

/**
 * Fades + slides its children up into place the first time they scroll
 * into view. Pass `delay` (seconds) to stagger items in a list.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`psg-reveal${visible ? ' psg-reveal-visible' : ''}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
