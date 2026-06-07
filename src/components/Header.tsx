import { siteConfig } from "@/config/site";
import styles from "./Header.module.css";

type Props = {
  /** Hide nav and CTA (e.g. tool page). */
  logoOnly?: boolean;
};

export default function Header({ logoOnly = false }: Props) {
  const { header, siteName } = siteConfig;

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} ${logoOnly ? styles.innerLogoOnly : ""}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoText}>{siteName}</span>
        </a>

        {!logoOnly ? (
          <nav className={styles.nav}>
            {header.navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
            <a href={header.ctaButton.href} className={styles.navCta}>
              {header.ctaButton.label}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
