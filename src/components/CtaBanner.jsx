import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          For the detailed overview of our production workflow, sample timeline and pricing structures, please{' '}
          <span className={styles.highlight}>contact me via Email / Whatsapp / Google Meet</span> to discuss your
          concerns face to face.
        </p>
      </div>
    </section>
  );
}
