"use client";

import { useId, useState } from "react";
import styles from "./ExpandableList.module.css";

type Props = {
  label: string;
  items: string[];
};

export default function ExpandableList({ label, items }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <span className={styles.icon} aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div id={panelId} className={styles.panel}>
        <ul className={`check-list ${styles.list}`}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
