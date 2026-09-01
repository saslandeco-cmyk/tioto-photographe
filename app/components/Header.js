"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const LINKS = [
  { href: "#histoire", label: "L'histoire" },
  { href: "#itineraire", label: "Le territoire" },
  { href: "#prestations", label: "Prestations" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          L&rsquo;INSTANT&nbsp;<span>J</span>
        </a>

        <nav className={styles.nav}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={`btn btn-red ${styles.cta}`}>
          Vérifier ma date
        </a>

        <button
          className={styles.burger}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-red" onClick={() => setOpen(false)}>
            Vérifier ma date
          </a>
        </div>
      )}
    </header>
  );
}
