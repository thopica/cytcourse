"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Pricing.module.css";

const paymentLogos = [
  { label: "PayPal", src: "/images/payment/paypal.png" },
  { label: "Visa", src: "/images/payment/visa.png" },
  { label: "MasterCard", src: "/images/payment/mastercard.png" },
  { label: "Discover", src: "/images/payment/discover.png" },
  { label: "Amex", src: "/images/payment/amex.png" },
];

export default function BuyCard() {
  const { pricing } = siteConfig;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const previousSessionId = window.sessionStorage.getItem("checkout_session_id");

      if (previousSessionId) {
        await fetch("/api/checkout/expire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
        <span className={styles.trustLock}>
          <svg
            className={styles.lockIcon}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0 1 10 0v2h.5A1.5 1.5 0 0 1 17 10.5v6A1.5 1.5 0 0 1 15.5 18h-11A1.5 1.5 0 0 1 3 16.5v-6A1.5 1.5 0 0 1 4.5 9H5Zm2 0V7a3 3 0 1 1 6 0v2H7Z"
              clipRule="evenodd"
            />
          </svg>
          {pricing.trustBadges[0]}
        </span>
        <div className={styles.badges}>
          {paymentLogos.map((logo) => (
            <img
              key={logo.label}
              src={logo.src}
              alt={logo.label}
              className={styles.badgeLogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
