import styles from './Collaboration.module.css';

export default function CollabRow({ title, video, poster, items }) {
  return (
    <div className={styles.card}>
      <video className={styles.video} src={video} poster={poster} controls preload="metadata" />

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.listItem}>
              <span className={styles.dot} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
