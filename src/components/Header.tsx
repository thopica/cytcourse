"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Header.module.css";

type Props = {
  /** Hide nav, burger, and CTA (e.g. tool page). */
  logoOnly?: boolean;
};

export default function Header({ logoOnly = false }: Props) {
  const { header, siteName } = siteConfig;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} ${logoOnly ? styles.innerLogoOnly : ""}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoText}>{siteName}</span>
        </a>

        {!logoOnly ? (
          <>
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>

            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
              {header.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={header.ctaButton.href}
                className={styles.navCta}
                onClick={() => setMenuOpen(false)}
              >
                {header.ctaButton.label}
              </a>
            </nav>
          </>
        ) : null}
      </div>
    </header>
  );
}
