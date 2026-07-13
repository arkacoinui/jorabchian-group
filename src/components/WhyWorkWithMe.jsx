import styles from './WhyWorkWithMe.module.css';
import { whyCards } from '../data/siteData.js';

export default function WhyWorkWithMe() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why work with me</h2>
        <div className={`${styles.grid} why-grid`}>
          {whyCards.map((card) => (
            <div key={card.title} className={`${styles.card} why-card`}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
