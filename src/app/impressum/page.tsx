import { siteConfig } from "@/config/site";
import styles from "../terms/terms.module.css";

export const metadata = {
  title: `Impressum — ${siteConfig.siteName}`,
};

export default function ImpressumPage() {
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
        <h1 className={styles.title}>Impressum</h1>

        <div className={styles.businessInfo}>
          <strong>Responsible for this website:</strong><br />
          Thomas Meister<br />
          Friesstrasse 22<br />
          8050 Zürich<br />
          Switzerland<br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:thomasmeister6@gmail.com"
            style={{ color: "var(--color-primary)", textDecoration: "underline" }}
          >
            thomasmeister6@gmail.com
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Content &amp; Liability Notice</h2>
          <div className={styles.body}>
            <p>
              The content of this website has been created with care. However, no guarantee is
              made for its accuracy, completeness, or timeliness. As a private individual, I
              assume no liability for any damages arising from the use of this website.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>External Links</h2>
          <div className={styles.body}>
            <p>
              This website may contain links to third-party websites. I have no influence over
              their content and accept no responsibility for it. The respective operators are
              solely responsible for their pages.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Copyright</h2>
          <div className={styles.body}>
            <p>
              All content on this website (images, texts, graphics) is subject to copyright.
              Reproduction or use without prior written consent is not permitted.
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
