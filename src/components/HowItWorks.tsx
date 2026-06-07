import { siteConfig } from "@/config/site";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const { howItWorks } = siteConfig;

  return (
    <section id={howItWorks.id} className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section__title">{howItWorks.headline}</h2>
        <ol className={styles.steps}>
          {howItWorks.steps.map((step, i) => (
            <li key={i} className={styles.step}>
              <span className={styles.stepNumber}>{i + 1}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepOutcome}>{step.outcome}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
