import styles from "./Itinerary.module.css";

const STOPS = [
  {
    code: "33",
    name: "Gironde",
    detail:
      "Chartreuses, vignobles et bassin d'Arcachon. La lumière dorée des propriétés viticoles, du côté de Saint-Émilion à la dune du Pilat.",
    km: "km 0",
  },
  {
    code: "40",
    name: "Landes",
    detail:
      "Pinède, lacs et plages sauvages. Les mariages qui finissent pieds nus dans le sable, entre Hossegor et Mimizan.",
    km: "km 90",
  },
  {
    code: "64",
    name: "Pays Basque",
    detail:
      "Corniche, montagne et villages à colombages. Biarritz, Saint-Jean-de-Luz, Espelette — la mer et les sommets le même jour.",
    km: "km 190",
  },
];

export default function Itinerary() {
  return (
    <section id="itineraire" className={styles.section}>
      <div className="wrap">
        <span className="eyebrow" style={{ color: "var(--cream)" }}>
          Le territoire
        </span>
        <h2 className={`section-heading ${styles.heading}`}>
          Un terrain de jeu,
          <br />
          pas une carte de visite.
        </h2>

        <div className={styles.route}>
          <div className={styles.line} aria-hidden="true" />
          {STOPS.map((stop) => (
            <div className={styles.stop} key={stop.code}>
              <div className={styles.marker}>
                <span className={styles.dot} />
                <span className={styles.code}>{stop.code}</span>
              </div>
              <span className={styles.km}>{stop.km}</span>
              <h3 className={styles.name}>{stop.name}</h3>
              <p className={styles.detail}>{stop.detail}</p>
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          Déplacement inclus sur les trois départements &mdash; au-delà, on en parle
          simplement de vive voix.
        </p>
      </div>
    </section>
  );
}
