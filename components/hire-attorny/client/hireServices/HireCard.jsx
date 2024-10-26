import Image from "next/image";
import styles from "./page.module.css"
const HireCard = ({ title, desc, path,alt }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topCard}>
        <div className={styles.overlay}></div>
        <div className={styles.topCardImg}>
          <Image src={path} width={303} height={319} quality={100} alt={alt} />
          <span>{title}</span>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default HireCard;
