import styles from "./ImagePreview.module.css";

type Props = {
  originalSrc: string | null;
  convertedSrc: string | null;
  originalAlt: string;
};

export default function ImagePreview({
  originalSrc,
  convertedSrc,
  originalAlt,
}: Props) {
  if (!originalSrc || !convertedSrc) {
    return null;
  }

  return (
    <div className={styles.grid}>
      <figure className={styles.figure}>
        <figcaption className={styles.caption}>Original</figcaption>
        <div className={styles.frame}>
          <img
            src={originalSrc}
            alt={originalAlt}
            className={styles.img}
          />
        </div>
      </figure>
      <figure className={styles.figure}>
        <figcaption className={styles.caption}>Print-ready negative</figcaption>
        <div className={styles.frame}>
          <img
            src={convertedSrc}
            alt="Converted cyanotype negative preview"
            className={styles.img}
          />
        </div>
      </figure>
    </div>
  );
}
