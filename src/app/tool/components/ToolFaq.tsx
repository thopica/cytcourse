import styles from "./ToolFaq.module.css";

const ITEMS = [
  {
    q: "Does my photo leave my device?",
    a: "No. Conversion runs entirely in your browser. Nothing is uploaded to our servers.",
  },
  {
    q: "Which file types can I use?",
    a: "JPG, PNG, WEBP, and HEIC (HEIC works best in Safari; otherwise export as JPG from your phone).",
  },
  {
    q: "Why flip the image?",
    a: "The negative is mirrored so when you print on transparency and expose, the final cyanotype matches your original composition.",
  },
  {
    q: "What does the contrast slider do?",
    a: "It boosts mid-tone separation before inversion. Higher values usually give bolder blues and whites in the print.",
  },
  {
    q: "Why is my HEIC file not loading?",
    a: "Some browsers cannot decode HEIC. Export the photo as JPG or PNG and upload again.",
  },
];

export default function ToolFaq() {
  return (
    <section className={styles.section} aria-labelledby="tool-faq-heading">
      <h2 id="tool-faq-heading" className={styles.heading}>
        FAQ
      </h2>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item.q} className={styles.item}>
            <h3 className={styles.question}>{item.q}</h3>
            <p className={styles.answer}>{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
