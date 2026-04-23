import { siteConfig } from "@/config/site";
import styles from "./Pricing.module.css";
import BuyCard from "./BuyCard";

export default function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section id={pricing.id} className={`section ${styles.pricing}`}>
      <div className="container">
        <h2 className={styles.headline}>{pricing.headline}</h2>
        <div className={styles.copy}>
          {pricing.paragraphs.map((p, i) => {
            if (i === 1) return <p key={i} className={styles.bold}>{p}</p>;
            if (i === 6) return <p key={i} className={styles.priceCallout}>{p}</p>;
            return <p key={i}>{p}</p>;
          })}
        </div>

        <BuyCard />
      </div>
    </section>
  );
}
