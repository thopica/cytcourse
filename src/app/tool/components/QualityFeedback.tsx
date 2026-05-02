import type { QualityResult } from "../lib/qualityAnalyzer";
import styles from "./QualityFeedback.module.css";

type Props = {
  result: QualityResult | null;
};

export default function QualityFeedback({ result }: Props) {
  if (!result) {
    return null;
  }

  const toneClass =
    result.status === "great"
      ? styles.boxGreat
      : result.status === "lowRes" ||
          result.status === "tooDark" ||
          result.status === "tooBright"
        ? styles.boxWarn
        : styles.boxNeutral;

  return (
    <div
      className={`${styles.box} ${toneClass}`}
      role="status"
      aria-live="polite"
    >
      <p className={styles.message}>{result.message}</p>
    </div>
  );
}
