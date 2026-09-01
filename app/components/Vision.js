import Image from "next/image";
import styles from "./Vision.module.css";

export default function Vision() {
  return (
    <section id="vision" className={styles.vision}>
      <div className={styles.bg}>
        <div className={styles.whitePanel} />
        <div className={styles.photoPanel}>
          <Image
            src="/images/vision.jpg"
            alt="Invités et mariés dansant et riant pendant la fête, lunettes en forme de cœur"
            fill
            sizes="(max-width: 900px) 100vw, 81vw"
            className={styles.photo}
          />
        </div>
      </div>

      <h2 className={styles.title}>Vision</h2>

      <div className={styles.card}>
        <p>
          C&rsquo;est l&rsquo;union de deux âmes, la promesse d&rsquo;un avenir à deux, mais
          aussi une explosion de joie à partager avec ceux que vous aimez.
        </p>
        <p>
          C&rsquo;est pourquoi ma vision, &laquo;&nbsp;Fiesta Del Amore&nbsp;&raquo;, se
          concentre sur ces deux piliers essentiels&nbsp;: l&rsquo;émotion brute, les
          larmes de bonheur et les regards échangés qui scellent votre amour.
          Mais c&rsquo;est aussi la fête, le lâcher-prise, les rires entre amis, les
          pas de danse endiablés. Car c&rsquo;est cette combinaison unique qui fait la
          magie de votre journée.
        </p>
        <p>
          Mon objectif est de vous offrir un <strong>SOUVENIR</strong> qui ne se
          contente pas de raconter votre histoire, mais qui vous fasse revivre
          chaque émotion&nbsp;! Du &laquo;&nbsp;oui&nbsp;&raquo; le plus solennel au dernier
          pas de danse. Préparez-vous à rire, à pleurer, et à vous émerveiller
          en redécouvrant la parfaite harmonie entre votre amour et la fête que
          vous avez créée.
        </p>
      </div>
    </section>
  );
}
