import { Fragment } from 'react';
import styles from './Workflow.module.css';

export default function WorkflowItem({ title, steps, technologies, isOpen, onToggle }) {
  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={onToggle}>
        <div className={styles.headerLeft}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <polygon points="2,2 14,8 2,14" fill="#F57C00" />
          </svg>
          <h4 className={styles.title}>{title}</h4>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        >
          <path d="M4 6l4 4 4-4" stroke="#F57C00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {isOpen && (
        <div className={styles.body}>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <Fragment key={step}>
                {i > 0 && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M0 5h12M8 1l4 4-4 4"
                      stroke="#F57C00"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span className={styles.step}>{step}</span>
              </Fragment>
            ))}
          </div>
          <div className={styles.tech}>
            <span className={styles.techLabel}>Technologies</span>
            <span className={styles.techValue}>{technologies}</span>
          </div>
        </div>
      )}
    </div>
  );
}
