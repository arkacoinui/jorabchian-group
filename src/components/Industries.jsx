import styles from './Industries.module.css';
import { industries } from '../data/siteData.js';

export default function Industries() {
  return (
    <section id="industries" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Industries Section</h2>
        <div className={`${styles.grid} industries-grid`}>
          {industries.map((industry) => (
            <div key={industry.label} className={`${styles.card} industry-card`}>
              <div className={styles.icon}>{industry.icon}</div>
              <div className={styles.label}>{industry.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
