import { siteConfig } from "@/config/site";
import styles from "./Intro.module.css";

export default function Intro() {
  const { intro } = siteConfig;

  return (
    <section id={intro.id} className={`section ${styles.intro}`}>
      <div className="container">
        <h2 className={styles.headline}>{intro.headline}</h2>
        <ul className="check-list">
          {intro.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
