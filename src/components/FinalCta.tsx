"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  const { pricing } = siteConfig;
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={`section section--alt ${styles.cta}`}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className={styles.headline}>Ready to Build Your Dragon?</h2>
        <p className={styles.sub}>
          Join now and get instant access to all 5 modules, bonus materials,
          and lifetime updates.
        </p>
        <div className={styles.priceRow}>
          <span className={styles.original}>{pricing.originalPrice}</span>
          <span className={styles.current}>{pricing.currentPrice}</span>
        </div>
        <button
          className={`btn btn--cta ${styles.btn}`}
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? "Redirecting..." : pricing.ctaButton.label}
        </button>
        <p className={styles.trust}>🔒 Secure checkout · 30-day money-back guarantee</p>
      </div>
    </section>
  );
}
