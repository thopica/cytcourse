import styles from "./PrintInstructions.module.css";

export default function PrintInstructions() {
  return (
    <section className={styles.section} aria-labelledby="print-next-heading">
      <h2 id="print-next-heading" className={styles.heading}>
        What to do next
      </h2>
      <ul className={styles.list}>
        <li>Print the downloaded file on a transparency sheet using an inkjet printer.</li>
        <li>Use the highest quality print setting available.</li>
        <li>
          In the print dialog, choose <strong>300 dpi</strong> if your printer offers it for
          best sharpness.
        </li>
        <li>Let the ink dry for at least 5 minutes before using.</li>
        <li>Refer to Module 4 of the course for the full exposure process.</li>
      </ul>
    </section>
  );
}
