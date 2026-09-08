import Image from "next/image";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="tarifs" className={styles.section}>
      <div className="wrap">
        <h2 className={styles.title}>
          Un photographe de mariage ça coûte combien&nbsp;?
        </h2>

        <div className={styles.grid}>
          <div className={styles.photo}>
            <Image
              src="/images/prix-left.jpg"
              alt="La mariée souriante, voile porté par le vent, sur une terrasse"
              fill
              sizes="(max-width: 900px) 100vw, 26vw"
              className={styles.img}
            />
          </div>

          <div className={styles.text}>
            <p>
              Avant tout, derrière chaque photo se cache un parcours. J&rsquo;ai
              ainsi suivi une formation au Canada, complétée par plusieurs
              formations en ligne spécialisées en photographie de mariage.
              C&rsquo;est cet investissement personnel et ma personnalité qui font
              toute la différence dans la qualité du rendu final.
            </p>
            <p>
              Il y a ensuite le matériel. Boîtiers professionnels, objectifs,
              flash, stockage sécurisé. L&rsquo;équipement représente plusieurs
              milliers d&rsquo;euros, régulièrement renouvelé pour vous garantir le
              meilleur résultat.
            </p>
            <p>
              Enfin, votre journée ne se résume pas au jour J. En effet,
              chaque mariage représente en moyenne 12 à 14 heures sur place,
              auxquelles s&rsquo;ajoutent de longues heures de post-production&nbsp;:
              sélection, retouche et livraison soignée de chaque image. C&rsquo;est
              pourquoi le tarif d&rsquo;un photographe professionnel reflète bien
              plus qu&rsquo;une simple présence&nbsp;! Il reflète une expertise, une
              passion et un engagement total envers votre histoire.
            </p>
          </div>

          <div className={styles.photo}>
            <Image
              src="/images/prix-right.jpg"
              alt="Les mariés front contre front, souriants, le jour du mariage"
              fill
              sizes="(max-width: 900px) 100vw, 26vw"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
