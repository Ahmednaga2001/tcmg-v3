import Image from "next/image";
import styles from "./page.module.css";
const paths = [
  "/assets/icons/legalconsultations/star2.png",
  "/assets/icons/legalconsultations/star1.png",
  "/assets/icons/legalconsultations/star1.png",
  "/assets/icons/legalconsultations/star1.png",
];

const DividerTwo = () => {
  return (
    <div className={styles.dividerTwo}>
      <span></span>
      <div className={styles.contentWrapper}>
        <p>تقييم 4.8 ،109 تعليقاً</p>
        <div className={styles.imgContainer}>
          {paths.map((p, index) => (
            <Image 
              key={index}
              src={p} 
              width={24} 
              height={24} 
              alt="star icon"
            />
          ))}
        </div>
      </div>
      <span></span>
    </div>
  );
};

export default DividerTwo;
