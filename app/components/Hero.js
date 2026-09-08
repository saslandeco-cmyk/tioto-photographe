import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <Image
        src="/images/photographe-mariage-landes1.jpg"
        alt="Un couple de mariés se tient la main et se regarde devant un mur enduit, en Gironde"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.scrim} />

      <div className={`wrap ${styles.content}`}>
        <div className={styles.bottomRow}>
          <h1 className={styles.tagline}>
            Photographe de mariage
            <br className={styles.br} /> Gironde&nbsp;–&nbsp;Landes&nbsp;–&nbsp;Pays&nbsp;Basque
          </h1>
        </div>
      </div>

      <a href="#histoire" className={styles.scroll} aria-label="Défiler vers le contenu">
        <span />
      </a>
    </section>
  );
}
