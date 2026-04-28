import { siteConfig } from "@/config/site";
import styles from "./Stacking.module.css";

export default function Stacking() {
  const { stacking } = siteConfig;

  return (
    <section id={stacking.id} className={`section ${styles.stacking}`}>
      <div className="container">
        <h2 className={styles.headline}>{stacking.headline}</h2>
        <div className={styles.imageWrap}>
          <img src={stacking.image} alt={stacking.imageAlt} />
        </div>
        <ul className={`check-list ${styles.list}`}>
          {stacking.items.map((item, i) => (
            <li key={i}>
              <strong>{item.bold}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
