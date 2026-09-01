import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="histoire" className={styles.about}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.textCol}>
          <span className="eyebrow">La photographe</span>
          <h2 className="section-heading">
            Je capture ce qui se passe
            <br />
            quand plus personne
            <br />
            ne <em>regarde l&rsquo;objectif</em>.
          </h2>
          <p className={styles.p}>
            Je m&rsquo;appelle Camille. Depuis huit ans, je suis les mariages entre
            vignes girondines, forêts landaises et côte basque &mdash; toujours à
            pied, jamais de mise en scène figée. Mon travail consiste à disparaître
            un peu pour que vous restiez vous-mêmes : un regard échangé contre un
            mur d&rsquo;enduit, une main serrée avant d&rsquo;entrer, un fou rire pendant les
            discours.
          </p>
          <p className={styles.p}>
            Le résultat : une centaine de photos qui ressemblent vraiment à votre
            journée, et pas à celle du couple d&rsquo;à côté.
          </p>

          <ul className={styles.stats}>
            <li>
              <strong>120+</strong>
              <span>mariages photographiés</span>
            </li>
            <li>
              <strong>3</strong>
              <span>régions couvertes</span>
            </li>
            <li>
              <strong>8&nbsp;ans</strong>
              <span>d&rsquo;expérience</span>
            </li>
          </ul>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.frame}>
            <Image
              src="/images/hero.png"
              alt="Détail d'un mariage photographié en Gironde"
              fill
              sizes="(max-width: 900px) 90vw, 420px"
              className={styles.img}
            />
          </div>
          <span className={styles.caption}>Bordeaux, Gironde &mdash; juin</span>
        </div>
      </div>
    </section>
  );
}
