"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";
import styles from "./success.module.css";

type CheckoutSessionState = {
  id: string;
  status: string | null;
  payment_status: string | null;
  customer_email: string | null;
};

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<CheckoutSessionState | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function verifySession() {
      if (!sessionId) {
        setError("Missing session reference. Please try checkout again.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/checkout/session?session_id=${encodeURIComponent(sessionId)}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? "Could not verify your payment.");
        }

        if (!cancelled) {
          setSession(data);
        }
      } catch (fetchError) {
        if (!cancelled) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Could not verify your payment."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void verifySession();

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const isPaid = useMemo(() => {
    if (!session) {
      return false;
    }

    return session.status === "complete" && session.payment_status === "paid";
  }, [session]);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={`${styles.icon} ${!isPaid ? styles.iconWarning : ""}`}>
          {isPaid ? "✓" : "!"}
        </div>
        <h1 className={styles.headline}>
          {loading
            ? "Verifying your payment..."
            : isPaid
              ? "You're In!"
              : "Payment Not Completed"}
        </h1>
        {loading ? (
          <p className={styles.text}>
            Please wait while we confirm your Stripe checkout session.
          </p>
        ) : null}
        {error ? <p className={`${styles.text} ${styles.error}`}>{error}</p> : null}
        {!loading && !error && isPaid ? (
          <p className={styles.text}>
            Thank you for purchasing <strong>{siteConfig.stripe.productName}</strong>. Check your
            email{session?.customer_email ? ` (${session.customer_email})` : ""} for login details
            and instant access to all course materials.
          </p>
        ) : null}
        {!loading && !error && !isPaid ? (
          <p className={styles.text}>
            Your checkout session is <strong>{session?.status ?? "unknown"}</strong> with payment
            status <strong>{session?.payment_status ?? "unknown"}</strong>. Please return to the
            homepage and try again.
          </p>
        ) : null}
        <a href="/" className={styles.link}>
          Back to homepage
        </a>
      </div>
    </div>
  );
}
