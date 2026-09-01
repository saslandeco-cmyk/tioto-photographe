import Image from "next/image";
import styles from "./Tioto.module.css";

export default function Tioto() {
  return (
    <section id="tioto" className={styles.section}>
      <Image
        src="/images/tioto.jpg"
        alt="Le photographe, verre à la main, dans une baignoire vintage en marbre"
        fill
        sizes="100vw"
        className={styles.photo}
      />
      <div className={styles.scrim} />

      <div className={`wrap ${styles.content}`}>
        <h2 className={styles.title}>Tioto, c&rsquo;est qui&nbsp;?</h2>

        <div className={styles.columns}>
          <div className={styles.left}>
            <p>
              Je m&rsquo;appelle Thomas, je suis le papa de la petite Nina née en
              2021.
            </p>
            <p>
              Il a été important pour moi de recentrer ma vie sur les
              personnes qui me sont chères après sa naissance difficile.
            </p>
            <p>
              J&rsquo;ai donc décidé de mettre ma carrière d&rsquo;artisan photographe /
              vidéaste en avant afin de pouvoir concilier travail et vie
              personnelle.
            </p>
            <p>
              En 2022, nous avons déménagé au Pays Basque. Ce changement nous
              a permis de travailler et d&rsquo;élever notre fille dans une région
              que nous affectionnons tous les deux.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Doté d&rsquo;un humour &laquo;&nbsp;de papa&nbsp;&raquo; selon ma femme, vous
              pourrez compter sur moi pour vous mettre à l&rsquo;aise pendant les
              préparatifs ainsi que la séance couple.
            </p>
            <p>
              Je souhaite mettre à l&rsquo;honneur votre amour, votre histoire avant
              tout&nbsp;!
            </p>
            <p>
              Je veux de l&rsquo;authentique et du spontané, mais ne vous inquiétez
              pas, je serai là pour vous guider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
