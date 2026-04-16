import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const { footer, siteName } = siteConfig;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          {footer.links.map((link, i) => (
            <a key={i} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
        <p className={styles.copy}>{footer.copyright}</p>
      </div>
    </footer>
  );
}
