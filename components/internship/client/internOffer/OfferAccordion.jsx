"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

const OfferAccordion = ({ title, path, desc,alt }) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
    <div>
      <div className={styles.accordionItem}>
        <div className={`${styles.accordionItemHeader} ${isOpenOne ? styles.open : ""}`} onClick={handleIsOpenOne}>
          <div>
            <Image
              src={path}
              width={60}
              height={60}
              alt={alt}
              className={styles.accordionItemIcon}
            />
            <span>{title}</span>
          </div>
          <Image
            src="/assets/icons/internship/top-arrow.png"
            alt="arrow-top"
            width={20}
            height={11}
            className={`${styles.accordionArrowIcon} ${isOpenOne ? "" : ""}`}
          />
        </div>
        <div
          className={`${styles.accordionContent} ${
            isOpenOne ? styles.open : ""
          }`}
        >
          <p>{desc}</p>
          {/* <Image
            src="/assets/icons/strategicrelations/arrow-down.png"
            width={24}
            height={24}
            onClick={handleIsOpenOne}
            alt="bottomIcon"
            className={styles.bottomIcon}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default OfferAccordion;
