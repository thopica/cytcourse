import styles from "./PhotoGuidelines.module.css";

const GUIDELINES = [
  {
    title: "Good lighting",
    text: "Your dog should be in bright, even light. Avoid harsh shadows and dark corners.",
    icon: "sun",
  },
  {
    title: "Clear subject",
    text: "Your dog should fill most of the frame. Simple, uncluttered backgrounds work best.",
    icon: "frame",
  },
  {
    title: "Sharp focus",
    text: "The photo should be crisp, not blurry. The eyes especially should be sharp.",
    icon: "focus",
  },
] as const;

function Icon({ name }: { name: (typeof GUIDELINES)[number]["icon"] }) {
  if (name === "sun") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }
  if (name === "frame") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2M12 17v2M5 12H3M21 12h-2" />
    </svg>
  );
}

export default function PhotoGuidelines() {
  return (
    <section className={styles.section} aria-labelledby="guidelines-heading">
      <h2 id="guidelines-heading" className={styles.heading}>
        Before you upload, check these 3 things
      </h2>
      <ul className={styles.grid}>
        {GUIDELINES.map((item) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.cardIcon}>
              <Icon name={item.icon} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
