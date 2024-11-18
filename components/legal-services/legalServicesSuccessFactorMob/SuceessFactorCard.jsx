import styles from "./page.module.css"
import Image from "next/image";
const SuceessFactorCard = ({ title, desc, path, w1, h1, w2, h2 }) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <div className={styles.topOverlay}>
          <Image src={path} width={w2} height={h2} alt={path} />
          <h3>{title}</h3>
        </div>
        <p>{desc}</p>
      </div>
      <div className={styles.topCard}>
        <Image src={path} width={w1} height={h1} alt={path} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SuceessFactorCard;
