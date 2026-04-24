import { siteConfig } from "@/config/site";
import styles from "./Hero.module.css";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>{hero.headline}</h1>
        <p className={styles.sub}>{hero.subheadline}</p>
        <div className={styles.imageWrap}>
          <img src={hero.image} alt={hero.imageAlt} />
        </div>
      </div>
    </section>
  );
}
