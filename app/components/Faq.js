"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Faq.module.css";

const FAQS = [
  {
    q: "Comment réserver notre date ?",
    a: "Par mail, insta, formulaire ou téléphone.",
  },
  {
    q: "Comment se déroule la prestation ?",
    a: "On échange d'abord sur votre journée et vos envies, puis je repère les lieux en amont. Le jour J, je reste discret·e et mobile, du premier regard aux derniers pas de danse, sans jamais interrompre le fil de la fête.",
  },
  {
    q: "Combien de photos allons recevoir ?",
    a: "Entre 400 et 600 photos retouchées pour une journée complète, livrées dans une galerie en ligne privée que vous pouvez télécharger et partager avec vos proches.",
  },
  {
    q: "Quel est le délai de livraison ?",
    a: "Une sélection de 30 photos coup de cœur sous 15 jours pour patienter, puis la galerie complète sous 6 à 8 semaines.",
  },
  {
    q: "Vous déplacez-vous partout en France ?",
    a: "Oui, avec plaisir. Les déplacements en Gironde, Landes et Pays Basque sont inclus ; au-delà, les frais sont calculés simplement selon la distance.",
  },
  {
    q: "Et si vous êtes malade ?",
    a: "Je fais partie d'un collectif de photographes de confiance capables de me remplacer en cas d'imprévu, pour que votre jour J reste couvert quoi qu'il arrive.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.textCol}>
        <h2 className={styles.title}>Questions fréquentes&nbsp;?!</h2>

        <ul className={styles.list}>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className={styles.toggle} aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && <p className={styles.answer}>{item.a}</p>}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.photoCol}>
        <Image
          src="/images/photographe-mariage-bordeaux1.jpg"
          alt="Les mariés s'enlacent tendrement sur la plage"
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
          className={styles.photo}
        />
      </div>
    </section>
  );
}
