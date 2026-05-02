"use client";

import styles from "./ContrastSlider.module.css";

type Props = {
  id: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  disabled?: boolean;
};

export default function ContrastSlider({
  id,
  value,
  min,
  max,
  onChange,
  disabled,
}: Props) {
  return (
    <div className={styles.wrap}>
      <label htmlFor={id} className={styles.label}>
        Contrast
      </label>
      <input
        id={id}
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-describedby={`${id}-hint`}
        title="Higher contrast = more dramatic blue and white in your final print"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className={styles.value} aria-hidden="true">
        {value}
      </span>
      <p id={`${id}-hint`} className={styles.hint}>
        Higher contrast = more dramatic blue and white in your final print
      </p>
    </div>
  );
}
