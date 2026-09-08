import Image from "next/image";
import styles from "./Match.module.css";

const WORDS = ["Rire", "Vibrer", "Danser", "De l'authenticité", "Être transporter"];

export default function Match() {
  return (
    <section id="match" className={styles.match}>
      <Image
        src="/images/match.jpg"
        alt="Coupes de champagne entrechoquées avec des stickers Bride Squad, ambiance EVJF"
        fill
        sizes="100vw"
        className={styles.photo}
      />
      <div className={styles.scrim} />

      <div className={`wrap ${styles.content}`}>
        <h2 className={styles.headline}>On matche si tu veux&nbsp;?!</h2>

        <ul className={styles.words}>
          {WORDS.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Dit moi tout&nbsp;!
        </a>
      </div>
    </section>
  );
}
