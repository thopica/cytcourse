import { siteConfig } from "@/config/site";
import styles from "./terms.module.css";

export const metadata = {
  title: `Terms & Conditions — ${siteConfig.siteName}`,
};

export default function TermsPage() {
  const { footer } = siteConfig;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.backLink}>
            ← Back
          </a>
          <span className={styles.siteName}>{siteConfig.siteName}</span>
        </div>
      </header>

      <main className={styles.content}>
        <h1 className={styles.title}>Terms &amp; Conditions</h1>
        <p className={styles.meta}>Last updated: 23.04.2026</p>

        <div className={styles.businessInfo}>
          <strong>Business Name:</strong> Meister Online Services<br />
          <strong>Support Email:</strong> thomasmeister6@gmail.com<br />
          <strong>Country of Governing Law:</strong> Switzerland
        </div>

        <p className={styles.intro}>
          These Terms &amp; Conditions (&ldquo;Agreement&rdquo;) govern the purchase and use of
          digital products provided by Meister Online Services. By purchasing or accessing any of
          our digital products, you agree to these Terms.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Digital Products</h2>
          <div className={styles.body}>
            <p>We provide digital educational products including, but not limited to:</p>
            <ul className={styles.list}>
              <li>Online courses</li>
              <li>Recorded trainings</li>
              <li>Downloadable materials</li>
              <li>Digital resources</li>
            </ul>
            <p>Access is granted electronically after successful payment.</p>
            <p>Access remains available for as long as the product is offered, unless otherwise stated.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Payments</h2>
          <div className={styles.body}>
            <p>All prices are displayed at checkout.</p>
            <p>Payments are processed through secure third-party payment providers.</p>
            <p>You are responsible for providing accurate billing information.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Refunds</h2>
          <div className={styles.body}>
            <p>
              If a refund policy is offered, the applicable refund period and conditions will be
              stated on the product sales page at the time of purchase.
            </p>
            <p>
              Refund requests must be submitted within the timeframe specified on the sales page.
            </p>
            <p>
              Due to the digital nature of our products and immediate access to materials, no
              refunds will be granted outside the stated refund period.
            </p>
            <p>
              Nothing in these Terms limits any mandatory consumer protection rights under
              applicable law.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
          <div className={styles.body}>
            <p>All content is protected by intellectual property laws.</p>
            <p>
              You may not copy, reproduce, distribute, modify, share, resell, upload, or publicly
              display any part of the product without prior written permission.
            </p>
            <p>
              Sharing login credentials or redistributing materials may result in termination of
              access without refund.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Account Suspension</h2>
          <div className={styles.body}>
            <p>
              We reserve the right to suspend or terminate access if these Terms are violated or
              if fraudulent behavior, including chargeback abuse, is detected.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. No Guarantees</h2>
          <div className={styles.body}>
            <p>We provide educational information only.</p>
            <p>
              We do not guarantee financial results, business outcomes, or specific performance
              results.
            </p>
            <p>Your results depend on your own effort and circumstances.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
          <div className={styles.body}>
            <p>
              To the maximum extent permitted by law, we are not liable for indirect, incidental,
              or consequential damages arising from use of our products.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Governing Law</h2>
          <div className={styles.body}>
            <p>These Terms are governed by the laws of Switzerland.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>{footer.copyright}</p>
      </footer>
    </div>
  );
}
