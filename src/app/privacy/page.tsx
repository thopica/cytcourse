import { siteConfig } from "@/config/site";
import styles from "../terms/terms.module.css";

export const metadata = {
  title: `Privacy Policy — ${siteConfig.siteName}`,
};

export default function PrivacyPage() {
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
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: 23.04.2026</p>

        <div className={styles.businessInfo}>
          <strong>Business Name:</strong> Meister Online Services<br />
          <strong>Country:</strong> Switzerland<br />
          <strong>Contact:</strong> thomasmeister6@gmail.com
        </div>

        <p className={styles.intro}>
          This Privacy Policy explains how Meister Online Services collects and processes
          personal data.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
          <div className={styles.body}>
            <p>We may collect:</p>
            <ul className={styles.list}>
              <li>Name</li>
              <li>Email address</li>
              <li>Billing information</li>
              <li>IP address</li>
              <li>Purchase history</li>
              <li>Technical data (browser type, device information)</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Legal Basis for Processing</h2>
          <div className={styles.body}>
            <p>Where applicable, we process personal data based on:</p>
            <ul className={styles.list}>
              <li>Contractual necessity</li>
              <li>Legitimate interest</li>
              <li>User consent</li>
              <li>Legal obligations</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How We Use Data</h2>
          <div className={styles.body}>
            <p>We use personal data to:</p>
            <ul className={styles.list}>
              <li>Deliver digital products</li>
              <li>Process payments</li>
              <li>Provide customer support</li>
              <li>Send transactional emails</li>
              <li>Send marketing communications (if consented)</li>
              <li>Improve user experience</li>
              <li>Maintain platform security</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Analytics, Advertising &amp; Profiling</h2>
          <div className={styles.body}>
            <p>
              We may use analytics and advertising technologies, including but not limited to:
            </p>
            <ul className={styles.list}>
              <li>Meta Pixel</li>
              <li>Meta Conversions API</li>
              <li>Google Analytics</li>
              <li>Microsoft Clarity</li>
              <li>HotJar</li>
              <li>Other tracking technologies</li>
            </ul>
            <p>
              These tools may collect information about your interaction with our website,
              including device data, IP address, and browsing behavior.
            </p>
            <p>
              We may use such technologies for analytics, advertising optimization, retargeting,
              and audience creation purposes.
            </p>
            <p>
              In certain cases, this may involve automated processing or profiling for marketing
              purposes.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. International Data Transfers</h2>
          <div className={styles.body}>
            <p>
              Your data may be processed or transferred to countries outside your country of
              residence, including jurisdictions that may have different data protection standards.
            </p>
            <p>
              By using our services, you acknowledge that such transfers may occur where legally
              permitted.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Payment Processing</h2>
          <div className={styles.body}>
            <p>
              Payments are processed by third-party providers. We do not store full payment
              details.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Email Marketing</h2>
          <div className={styles.body}>
            <p>If you subscribe to our mailing list, we may send marketing communications.</p>
            <p>You may unsubscribe at any time using the link provided in our emails.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Data Retention</h2>
          <div className={styles.body}>
            <p>We retain personal data as long as necessary to:</p>
            <ul className={styles.list}>
              <li>Fulfill contractual obligations</li>
              <li>Comply with legal requirements</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Your Rights</h2>
          <div className={styles.body}>
            <p>Depending on your location, you may have rights including:</p>
            <ul className={styles.list}>
              <li>Access to your data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of personal data</li>
              <li>Restriction of processing</li>
            </ul>
            <p>
              To exercise your rights, contact:{" "}
              <a href="mailto:thomasmeister6@gmail.com" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
                thomasmeister6@gmail.com
              </a>.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Data Security</h2>
          <div className={styles.body}>
            <p>
              We implement reasonable technical and organizational safeguards to protect personal
              data.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Changes</h2>
          <div className={styles.body}>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on
              this page.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>{footer.copyright}</p>
      </footer>
    </div>
  );
}
