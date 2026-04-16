import { Suspense } from "react";
import styles from "./success.module.css";
import SuccessContent from "./SuccessContent";

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className={styles.page}>
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.iconWarning}`}>!</div>
            <h1 className={styles.headline}>Verifying your payment...</h1>
            <p className={styles.text}>
              Please wait while we confirm your Stripe checkout session.
            </p>
            <a href="/" className={styles.link}>
              Back to homepage
            </a>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
