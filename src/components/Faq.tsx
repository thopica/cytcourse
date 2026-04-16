"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Faq.module.css";

export default function Faq() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id={faq.id} className={`section ${styles.faq}`}>
      <div className="container">
        <h2 className="section__title">{faq.headline}</h2>
        <div className={styles.list}>
          {faq.items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
            >
              <button className={styles.question} onClick={() => toggle(i)}>
                <span>{item.question}</span>
                <span className={styles.icon}>{openIndex === i ? "−" : "+"}</span>
              </button>
              <div className={styles.answerWrap}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
