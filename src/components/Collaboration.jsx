import styles from './Collaboration.module.css';
import CollabRow from './CollabRow.jsx';
import { collaborationAreas } from '../data/siteData.js';

export default function Collaboration() {
  return (
    <section id="collaboration" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Areas of Collaboration</h2>

        <div className={styles.grid}>
          {collaborationAreas.map((area) => (
            <CollabRow
              key={area.title}
              title={area.title}
              video={area.video}
              poster={area.poster}
              items={area.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
