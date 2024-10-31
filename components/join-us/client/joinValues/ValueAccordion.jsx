"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

const ValueAccordion = ({ title, path, desc }) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
  <div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionItemHeader} onClick={handleIsOpenOne}>
          <div className={styles.headerContent}>
            <Image
              src={path}
              width={60}
              height={60}
              alt={title}
              className={styles.accordionItemIcon}
            />
            <span>{title}</span>
          </div>
          <Image
            src="/assets/icons/strategicrelations/arrow-down.png"
            alt="Drop Icon"
            width={11}
            height={6}
            className={`${styles.accordionArrowIcon} ${isOpenOne ? "" : ""}`}
          />
        </div>
        <div
          className={`${styles.accordionContent} ${
            isOpenOne ? styles.open : ""
          }`}
        >
          <p>{desc}</p>
          <Image
            src="/assets/icons/strategicrelations/ep_arrow-down-bold.png"

            width={11}
            height={6}
            onClick={handleIsOpenOne}
            alt="Up Icon"
            className={styles.bottomIcon}
          />
        </div>
      </div>
      </div>
  );
};

export default ValueAccordion;
