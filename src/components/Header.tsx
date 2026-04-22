"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Header.module.css";

export default function Header() {
  const { header, siteName } = siteConfig;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoText}>{siteName}</span>
        </a>

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
      </div>
    </header>
  );
}
