import { siteConfig } from "@/config/site";
import styles from "./ProblemDigIn.module.css";

export default function ProblemDigIn() {
  const { problemDigIn } = siteConfig;

  return (
    <section id={problemDigIn.id} className={`section section--alt ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className="section__title">{problemDigIn.headline}</h2>

        <div className={styles.content}>
          {problemDigIn.paragraphs.map((paragraph, i) => {
            const highlightedLead = "It's surprisingly simple.";
            if (paragraph.startsWith(highlightedLead)) {
              const rest = paragraph.slice(highlightedLead.length).trimStart();
              return (
                <p key={i}>
                  <strong>{highlightedLead}</strong>{" "}
                  {rest}
                </p>
              );
            }

            return <p key={i}>{paragraph}</p>;
          })}
        </div>

        <div className={styles.closing}>
          {problemDigIn.closingLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
