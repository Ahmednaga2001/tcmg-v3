import React from "react";
import styles from "@/components/about/aboutMilestonesSection/aboutMilestonesSection.module.css";
const MilestoneCard = ({ title, desc, year }) => {
  return (
    <div className={styles.milestoneCard}>
        <h3>{year}</h3>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default MilestoneCard;
