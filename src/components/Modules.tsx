import { siteConfig } from "@/config/site";
import styles from "./Modules.module.css";
import PlaceholderImage from "./PlaceholderImage";

export default function Modules() {
  const { modules } = siteConfig;

  return (
    <section id={modules.id} className={`section ${styles.modules}`}>
      <div className="container">
        <h2 className="section__title">{modules.headline}</h2>
        <div className={styles.list}>
          {modules.items.map((mod, i) => (
            <div key={i} className={styles.module}>
              <div className={styles.content}>
                <h3 className={styles.modTitle}>{mod.title}</h3>
                <div className={styles.imageWrap}>
                <PlaceholderImage label={mod.title} />
              </div>
                <p className={styles.modSub}>{mod.subtitle}</p>
                <ul className="check-list">
                  {mod.bullets.map((b, j) => (
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
