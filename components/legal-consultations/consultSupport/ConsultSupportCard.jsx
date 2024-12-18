"use client";

import styles from "./page.module.css";
import Image from "next/image";

const ConsultSupportCard = ({title , path , w , h,alt}) => {
  return (
    <div className={styles.card}>
    <div className={styles.topCard}>
        <Image src = {path} width={w} height={h} alt={alt}/>
    </div>
    <span>{title}</span>
  </div>
  )
}

export default ConsultSupportCard;



