import { useState } from 'react';
import styles from './Navbar.module.css';
import Button from './Button.jsx';
import { navLinks } from '../data/siteData.js';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoTitle}>Joorabchian</div>
          <div className={styles.logoSubtitle}>Group</div>
        </div>

        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} nav-item ${link.italic ? styles.navLinkItalic : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" className={styles.ctaButton}>
          Get in touch
        </Button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M0 1h16M0 6h16M0 11h16" stroke="#8cb8c5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`${styles.mobileNavLink} nav-item`}>
                {link.label === 'works' ? 'Works' : link.label}
              </a>
            ))}
            <Button href="#contact" className={styles.mobileCtaButton}>
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
