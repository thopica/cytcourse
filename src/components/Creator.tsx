import { siteConfig } from "@/config/site";
import styles from "./Creator.module.css";
import PlaceholderImage from "./PlaceholderImage";

export default function Creator() {
  const { creator } = siteConfig;

  return (
    <section className={`section section--alt ${styles.creator}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageWrap}>
          <PlaceholderImage label="Creator Photo" aspect="square" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.headline}>{creator.headline}</h2>
          {creator.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
