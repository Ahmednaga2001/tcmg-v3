"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const OfferingCard = ({ id, title, desc }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  

  return (
    <div className={styles.card}>
      <div className={styles.topCard} onClick={toggleVisibility}>
        <span>{id}</span>
        <h3>{title}</h3>
     {
      !isVisible && (
        <div className={styles.imgContainer} onClick={toggleVisibility}>
        <Image
              src="/assets/icons/form/arrowdown.svg"
              alt="arrow-down.png"
              width={13}
              height={7}
              quality={100}
              className={`${styles.accordionArrowIcon} ${isVisible ? "" : ""}`}
            />
        </div>
      )
     }
      </div>
      <div className={`${styles.bottomCard} ${isVisible ? styles.visible : ""} ${styles.transition}`}>
     <div>
       <p className={`${styles.description} `}>
        {desc}
      </p>
      {
      isVisible && (
        <div className={styles.imgBack} onClick={toggleVisibility}>
        <Image
             
              src="/assets/icons/form/arrowdown.svg"
              alt="arrow-down.png"
              width={13}
              height={7}
              quality={100}
              className={`${styles.accordionArrowIcon} ${isVisible ? "" : ""}`}
            />
        </div>
      )
     }
     </div>
      </div>

    </div>
  );
};

export default OfferingCard;
