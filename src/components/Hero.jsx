import styles from './Hero.module.css';
import Button from './Button.jsx';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <video className={styles.bgVideo} src="/videos/header-bg.mp4" autoPlay loop muted playsInline />
      <div className={styles.overlay} />
      <div className={styles.grid} />
      <div className={styles.glowRight} />
      <div className={styles.glowLeft} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Available for projects</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleAccent}>Production partner</span>
          <br />
          <span className={styles.titleMain}>
            for Industrial Visualization
            <br />
            &amp; Interactive Solutions
          </span>
        </h1>

        <p className={styles.subtitle}>
          Industrial-grade 3D animation, real-time Unreal Engine applications, and interactive web experiences —
          built for technical industries.
        </p>

        <div className={styles.actions}>
          <Button href="#collaboration" className={styles.ctaButton}>
            Explore my work
          </Button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="#2c5a6a" strokeWidth="1.2" />
          <rect x="5.5" y="4" width="3" height="5" rx="1.5" fill="#2c5a6a" />
        </svg>
      </div>
    </section>
  );
}
