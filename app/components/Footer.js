import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span className={styles.logo}>
          L&rsquo;INSTANT&nbsp;<em>J</em>
        </span>
        <p className={styles.meta}>
          Photographe de mariage &mdash; Gironde, Landes &amp; Pays Basque
        </p>
        <p className={styles.copy}>© {new Date().getFullYear()} L&rsquo;Instant J. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
