import Image from "next/image";
import styles from "./Gallery.module.css";

const SHOTS = [
  { pos: "20% 25%", label: "Saint-Émilion, 33", tall: true },
  { pos: "60% 55%", label: "Hossegor, 40", tall: false },
  { pos: "40% 10%", label: "Biarritz, 64", tall: false },
  { pos: "80% 60%", label: "Arcachon, 33", tall: false },
  { pos: "30% 70%", label: "Mimizan, 40", tall: true },
  { pos: "65% 20%", label: "Espelette, 64", tall: false },
];

export default function Gallery() {
  return (
    <section id="galerie" className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Galerie</span>
            <h2 className="section-heading">
              Des vrais mariages, <em>pas des poses.</em>
            </h2>
          </div>
          <p className={styles.note}>
            Extraits de reportages récents. Galerie complète et albums envoyés
            sur demande.
          </p>
        </div>

        <div className={styles.grid}>
          {SHOTS.map((s, i) => (
            <figure
              key={s.label}
              className={`${styles.tile} ${s.tall ? styles.tall : ""}`}
            >
              <Image
                src="/images/hero.png"
                alt={`Mariage photographié à ${s.label}`}
                fill
                sizes="(max-width: 800px) 50vw, 320px"
                style={{ objectPosition: s.pos }}
                className={styles.img}
              />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
