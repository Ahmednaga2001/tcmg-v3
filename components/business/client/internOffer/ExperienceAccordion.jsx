"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

const ExperienceAccordion = ({ title, path, desc }) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
    <div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionItemHeader} onClick={handleIsOpenOne}>
          
            <span>{title}</span>
        </div>
        <div
          className={`${styles.accordionContent} ${
            isOpenOne ? styles.open : ""
          }`}
        >
          <p>{desc}</p>

        </div>
      </div>
    </div>
  );
};

export default ExperienceAccordion;
