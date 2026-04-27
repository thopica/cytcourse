import { siteConfig } from "@/config/site";
import styles from "./Bonuses.module.css";

export default function Bonuses() {
  const { bonuses } = siteConfig;

  return (
    <section className={`section ${styles.bonuses}`}>
      <div className="container">
        <h2 className="section__title">{bonuses.headline}</h2>
        <div className={styles.list}>
          {bonuses.items.map((bonus, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={bonus.image} alt={bonus.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.bonusTitle}>{bonus.title}</h3>
                <p>{bonus.description}</p>
                <ul className="check-list">
                  {bonus.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
