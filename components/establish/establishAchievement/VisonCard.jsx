import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const VisonCard = ({ visionContentstyle, title, desc }) => {
  return (
    <div className={styles[visionContentstyle]}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={styles.link}>
        <span className={` link`}>
          أسس الان
          <Image
            src="assets/icons/arrow-left.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </span>
      </div>
    </div>
  );
};

export default VisonCard;
