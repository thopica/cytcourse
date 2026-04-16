import { siteConfig } from "@/config/site";
import styles from "./Guarantee.module.css";

export default function Guarantee() {
  const { guarantee } = siteConfig;

  return (
    <section className={`section section--alt ${styles.guarantee}`}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.badge}>
            <div className={styles.badgeInner}>
              <span className={styles.badgePct}>100%</span>
              <span className={styles.badgeLabel}>MONEY BACK</span>
              <span className={styles.badgeSub}>GUARANTEE</span>
            </div>
          </div>
          <h2 className={styles.headline}>{guarantee.headline}</h2>
          {guarantee.paragraphs.map((p, i) => {
            // Bold the refund sentence
            if (i === 1)
              return (
                <p key={i}>
                  If the course isn&apos;t right for you,{" "}
                  <strong>you can request a full refund within 30 days — no questions asked</strong>.
                </p>
              );
            return <p key={i}>{p}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
