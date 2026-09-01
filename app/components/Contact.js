import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <span className="eyebrow" style={{ color: "var(--cream)" }}>
            Contact
          </span>
          <h2 className={`section-heading ${styles.heading}`}>
            Racontons
            <br />
            votre <em>jour&nbsp;J</em>.
          </h2>
          <p className={styles.p}>
            Dites-m&rsquo;en un peu plus sur votre mariage &mdash; date, lieu, ambiance
            envisagée &mdash; et je reviens vers vous sous 48h avec les disponibilités
            et un devis.
          </p>

          <dl className={styles.infos}>
            <div>
              <dt>Email</dt>
              <dd>bonjour@linstantj-photo.fr</dd>
            </div>
            <div>
              <dt>Téléphone</dt>
              <dd>06 00 00 00 00</dd>
            </div>
            <div>
              <dt>Zone</dt>
              <dd>Gironde · Landes · Pays Basque</dd>
            </div>
          </dl>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <label>
              <span>Prénoms</span>
              <input type="text" name="names" placeholder="Manon &amp; Thibault" required />
            </label>
            <label>
              <span>Date du mariage</span>
              <input type="date" name="date" />
            </label>
          </div>
          <label>
            <span>Lieu envisagé</span>
            <input type="text" name="place" placeholder="Château, plage, mairie..." />
          </label>
          <label>
            <span>Votre message</span>
            <textarea name="message" rows={4} placeholder="Parlez-moi de vous, de votre journée, de son ambiance..." />
          </label>
          <button type="submit" className="btn btn-red">
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}
