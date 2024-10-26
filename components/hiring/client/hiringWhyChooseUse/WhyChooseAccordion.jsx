"use client";
import styles from "./page.module.css"
import Image from "next/image";
import { useState } from "react";

const WhyChooseAccordion = ({ title, path, desc }) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
    <div>
      <div className={styles.accordionItem} >
        <div className={`${styles.accordionItemHeader} ${isOpenOne ? styles.open : ""}`} onClick={handleIsOpenOne}>
            <Image
              src="/assets/icons/hiring/arrow-right.png"
              width={33}
              height={25}
              alt={title}
              className={styles.accordionItemIcon}
            />
            <span>{title}</span>
            <Image
              src="/assets/icons/hiring/arrow-left-icon.png"
              width={33}
              height={25}
              alt={title}
              className={styles.accordionItemIcon}
            />
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

export default WhyChooseAccordion;
