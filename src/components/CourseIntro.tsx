import { siteConfig } from "@/config/site";
import styles from "./CourseIntro.module.css";

export default function CourseIntro() {
  const { courseIntro } = siteConfig;

  return (
    <section className={`section ${styles.courseIntro}`}>
      <div className="container" style={{ textAlign: "center" }}>
        <p className={styles.eyebrow}>{courseIntro.headline}</p>
        <h2 className={styles.title}>{courseIntro.title}</h2>
        <div className={styles.imageWrap}>
          <img src={courseIntro.image} alt={courseIntro.imageAlt} />
        </div>
      </div>
    </section>
  );
}
