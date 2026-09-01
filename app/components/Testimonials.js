import styles from "./Testimonials.module.css";

const QUOTES = [
  {
    text: "On avait peur des photos posées pendant des heures. Camille a passé la journée avec nous sans qu'on la remarque vraiment, et le résultat raconte exactement notre mariage, rires compris.",
    name: "Manon & Thibault",
    place: "Mariage à Saint-Émilion, Gironde",
  },
  {
    text: "Elle connaît chaque recoin de la côte landaise, ça se sent : les photos utilisent la lumière et le lieu comme personne. Aucune photo qui sonne faux dans tout l'album.",
    name: "Élodie & Antton",
    place: "Mariage à Hossegor, Landes",
  },
  {
    text: "On s'est mariés à Ciboure avec la moitié de la famille en Espagne. Camille a géré la logistique sans jamais que ça se sente sur les photos. Que du naturel.",
    name: "Iratxe & Paul",
    place: "Mariage à Ciboure, Pays Basque",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className={styles.section}>
      <div className="wrap">
        <span className="eyebrow">Ce qu&rsquo;ils en disent</span>
        <h2 className="section-heading">
          Racontée par ceux <em>qui l&rsquo;ont vécue</em>.
        </h2>

        <div className={styles.grid}>
          {QUOTES.map((q) => (
            <blockquote key={q.name} className={styles.card}>
              <p>&laquo;&nbsp;{q.text}&nbsp;&raquo;</p>
              <footer>
                <strong>{q.name}</strong>
                <span>{q.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
