import { siteConfig } from "@/config/site";
import styles from "./Creator.module.css";


export default function Creator() {
  const { creator } = siteConfig;

  return (
    <section className={`section section--alt ${styles.creator}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.headline}>{creator.headline}</h2>
        <div className={styles.imageWrap}>
          <img src={creator.image} alt={creator.imageAlt} />
        </div>
        <div className={styles.content}>
          {creator.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
