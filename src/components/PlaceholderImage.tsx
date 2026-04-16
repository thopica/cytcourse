import styles from "./PlaceholderImage.module.css";

interface Props {
  label: string;
  aspect?: "landscape" | "square" | "portrait";
}

export default function PlaceholderImage({ label, aspect = "landscape" }: Props) {
  const cls = [
    styles.placeholder,
    aspect === "square" ? styles.square : "",
    aspect === "portrait" ? styles.portrait : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
