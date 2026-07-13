import styles from './CollaborationModels.module.css';
import { collaborationModels } from '../data/siteData.js';

export default function CollaborationModels() {
  return (
    <section id="models" className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>COLLABORATION MODELS</h3>
        <div className={`${styles.grid} models-grid`}>
          {collaborationModels.map((model) => (
            <div key={model.number} className={styles.card}>
              <div className={styles.number}>{model.number}</div>
              <h4 className={styles.cardTitle}>{model.title}</h4>
              <p className={styles.cardDescription}>{model.description}</p>
              <ul className={styles.list}>
                {model.points.map((point) => (
                  <li key={point} className={styles.listItem}>
                    <span className={styles.bullet}>•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
