import styles from "./Services.module.css";

const OFFERS = [
  {
    name: "Élopement",
    time: "2 à 4 heures",
    price: "à partir de 690€",
    detail:
      "Pour les couples qui se marient à deux, en petit comité ou en secret. Une session resserrée, un seul lieu, la lumière du bon moment.",
    items: ["1 photographe", "Galerie de 80 photos", "Repérage du lieu inclus"],
  },
  {
    name: "Journée complète",
    time: "10 à 12 heures",
    price: "à partir de 1690€",
    detail:
      "La formule la plus choisie : des préparatifs à la première danse, sans rien manquer des instants qui comptent.",
    items: ["1 photographe", "Galerie de 400+ photos", "Livraison sous 8 semaines"],
    highlight: true,
  },
  {
    name: "Destination",
    time: "Week-end / plusieurs jours",
    price: "sur devis",
    detail:
      "Pour les mariages qui s'étalent sur deux ou trois jours, entre plusieurs lieux — vignoble, plage, montagne.",
    items: ["Couverture multi-jours", "Déplacement & repérage inclus", "Album imprimé en option"],
  },
];

export default function Services() {
  return (
    <section id="prestations" className={styles.section}>
      <div className="wrap">
        <span className="eyebrow">Prestations</span>
        <h2 className="section-heading">
          Trois formats, <em>une seule approche</em>.
        </h2>

        <div className={styles.grid}>
          {OFFERS.map((o) => (
            <article
              key={o.name}
              className={`${styles.card} ${o.highlight ? styles.highlight : ""}`}
            >
              <div className={styles.cardTop}>
                <h3>{o.name}</h3>
                <span className={styles.time}>{o.time}</span>
              </div>
              <p className={styles.detail}>{o.detail}</p>
              <ul>
                {o.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className={styles.cardBottom}>
                <span className={styles.price}>{o.price}</span>
                <a href="#contact" className={styles.link}>
                  Demander un devis →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
