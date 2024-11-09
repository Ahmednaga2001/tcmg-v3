import Image from "next/image";
import styles from "./page.module.css"
const LawyersCard = ({title , category , imgPath}) => {
  return (
    <div className={styles.lawyerCard}>
      <div className={styles.cardImg}>
        <Image
          src={imgPath}
          alt="title"
          width={136}
          height={169}
        />
      </div>
      <div className={styles.cardContent}>
        <span className={styles.lawyerName}>{title}</span>
        <span className={styles.lawyerCategory}>{category.toString()}</span>
        {/* <span className={styles.lawyerPhone}>
          +201276299998
          <Image
            src={"/assets/icons/form/phone frame.png"}
            width={19}
            height={19}
            alt="Phone Icon"
          />
        </span>
        <a href="mailto:corporate@tcmglaw.com" className={styles.lawyerEmail}>
          corporate@tcmglaw.com
          <Image
            src={"/assets/icons/form/email-light.png"}
            width={19}
            height={19}
            alt="Email Icon"
          />
        </a> */}
        <span className={styles.lawyerDownloadCv}>
          <Image
            src={"/assets/icons/form/downloadedicon.png"}
            width={24}
            height={24}
            alt="Cv Icon"
          />
          السيرة الذاتية
          <Image
            src={"/assets/icons/form/arrow-left-white.png"}
            width={24}
            height={24}
            alt="arrow left icon"
          />
        </span>
      </div>
    </div>
  );
};

export default LawyersCard;
