import Image from "next/image";
import styles from "./WhyPhotographer.module.css";

export default function WhyPhotographer() {
  return (
    <section id="pourquoi" className={styles.section}>
      <div className={styles.photoCol}>
        <Image
          src="/images/photographe-mariage-landes.jpg"
          alt="Les mariés main dans la main, bras levés, au coucher du soleil"
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
          className={styles.photo}
        />
        <h2 className={styles.title}>
          Pourquoi investir
          <br />
          dans un
          <br />
          photographe&nbsp;?
        </h2>
      </div>

      <div className={styles.contentCol}>
        <div className={styles.topRow}>
          <div className={styles.bridePhoto}>
            <Image
              src="/images/photographe-mariage-landes2.jpg"
              alt="Portrait de la mariée sous son voile, lumière de fin de journée"
              fill
              sizes="(max-width: 900px) 60vw, 260px"
              className={styles.photo}
            />
          </div>

          <div className={styles.paragraph}>
            <p>
              Votre mariage est une journée unique, magique, qui va filer à
              toute allure. Une fois la fête finie, que vous restera-t-il&nbsp;?
              Les{" "}
              <mark className={styles.highlight}>
                souvenirs s&rsquo;estompent, mais vos photos, elles, restent pour
                toujours&nbsp;!
              </mark>
            </p>
            <p>
              C&rsquo;est là que j&rsquo;interviens. Choisir un bon photographe, c&rsquo;est
              s&rsquo;offrir la garantie de revivre chaque éclat de rire, chaque
              larme de joie et chaque regard complice avec la même intensité.
            </p>
            <p>
              Mon rôle est de capturer la spontanéité et la magie de votre
              amour sans que vous n&rsquo;ayez à vous soucier de rien. Ensemble,
              créons le premier trésor de votre nouvelle vie de mariés&nbsp;!&nbsp;!
            </p>
          </div>
        </div>

        <h3 className={styles.quote}>
          La photo de mariage c&rsquo;est plus
          <br />
          qu&rsquo;un simple clic&nbsp;!
        </h3>
      </div>
    </section>
  );
}
