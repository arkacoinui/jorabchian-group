import styles from './AboutMe.module.css';
import Button from './Button.jsx';

export default function AboutMe() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h2 className={styles.heading}>About me</h2>
            <p className={styles.intro}>Hi, I'm Ali Joorabchian.</p>
            <p className={styles.paragraph}>
              With over 17 years of experience in 3D animation and industrial visualization, I lead a production
              team specializing in industrial animation, real-time applications, and interactive experiences.
            </p>
          </div>

          <div className={styles.colRight}>
            <p className={styles.paragraph}>
              Over the years, we've collaborated with animation studios, production companies, and engineering
              teams on projects ranging from product visualization and industrial process simulations to VR
              training and interactive applications.
              <br />
              <br />
              We understand the importance of technical accuracy, clear communication, and reliable project
              delivery. Our team integrates seamlessly into existing production pipelines, respects deadlines and
              NDAs, and is committed to producing high-quality work that clients can depend on.
            </p>
            <div>
              <Button href="#" className={styles.ctaButton}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <polygon points="3,2 13,7 3,12" fill="#fff" />
                </svg>
                Introduction video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
