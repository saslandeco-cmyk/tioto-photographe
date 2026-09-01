import Image from "next/image";
import styles from "./PhotoBanner.module.css";

export default function PhotoBanner() {
  return (
    <section className={styles.section}>
      <Image
        src="/images/couloir.jpg"
        alt="Les mariés se tiennent la main en souriant, dans un couloir de cinéma vintage"
        fill
        sizes="100vw"
        className={styles.photo}
      />
      <span className={styles.caption}>Sortie de cérémonie, Landes</span>
    </section>
  );
}
