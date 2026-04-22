import { siteConfig } from "@/config/site";
import styles from "./Guarantee.module.css";

export default function Guarantee() {
  const { guarantee } = siteConfig;

  return (
    <section className={`section ${styles.guarantee}`}>
      <div className="container">
        <div className={styles.card}>
          <img
            src="/images/money-back-guarantee.png"
            alt="100% money back guaranteed badge"
            className={styles.badgeImage}
          />
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
