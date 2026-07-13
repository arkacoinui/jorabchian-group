import { useState } from 'react';
import styles from './Workflow.module.css';
import WorkflowItem from './WorkflowItem.jsx';
import { workflows } from '../data/siteData.js';

export default function Workflow() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="workflow" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How Projects Move Forward</h2>
        <div className={styles.list}>
          {workflows.map((workflow, i) => (
            <WorkflowItem
              key={workflow.title}
              title={workflow.title}
              steps={workflow.steps}
              technologies={workflow.technologies}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
