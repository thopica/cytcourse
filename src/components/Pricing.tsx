"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const { pricing } = siteConfig;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const previousSessionId = window.sessionStorage.getItem("checkout_session_id");

      if (previousSessionId) {
        // Best-effort cleanup for stale open sessions before creating a new one.
        await fetch("/api/checkout/expire", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session_id: previousSessionId }),
        });
      }

      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (res.ok && data.url) {
        if (data.sessionId) {
          window.sessionStorage.setItem("checkout_session_id", data.sessionId);
        }
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Checkout failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id={pricing.id} className={`section ${styles.pricing}`}>
      <div className="container">
        <h2 className={styles.headline}>{pricing.headline}</h2>
        <div className={styles.copy}>
          {pricing.paragraphs.map((p, i) => {
            // Bold the second paragraph for emphasis
            if (i === 1) return <p key={i} className={styles.bold}>{p}</p>;
            return <p key={i}>{p}</p>;
          })}
        </div>

        <div className={styles.card}>
          <div className={styles.priceRow}>
            <span className={styles.originalPrice}>{pricing.originalPrice}</span>
            <span className={styles.currentPrice}>{pricing.currentPrice}</span>
          </div>
          <p className={styles.subtext}>{pricing.priceSubtext}</p>

          <button
            className={`btn btn--cta btn--full ${styles.ctaBtn}`}
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Redirecting..." : pricing.ctaButton.label}
          </button>
          {error ? <p className={styles.error}>{error}</p> : null}

          <div className={styles.trust}>
            <span className={styles.trustLock}>🔒 {pricing.trustBadges[0]}</span>
            <div className={styles.badges}>
              {pricing.trustBadges.slice(1).map((badge, i) => (
                <span key={i} className={styles.badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
