"use client";
import { useState } from "react";
import styles from "./page.module.css";

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
      </div>
      <div className={`${styles.bottomCard} ${isVisible ? styles.visible : ""} ${styles.transition}`}>
      <p className={`${styles.description} `}>
        {desc}
      </p>
      </div>
    </div>
  );
};

export default OfferingCard;
