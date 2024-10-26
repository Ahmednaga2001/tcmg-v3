import Image from "next/image";
import styles from "./page.module.css"
const ArticleCard = () => {
  return (
    
      
            <div className={styles.card}>
              <div className={styles.topData}>
                <span>24 يناير , 2024</span>
                <span>بواسطة محي الدين </span>
              </div>
              <div className={styles.cardImg} >
                <Image src="/assets/images/article/572701_5f94cee90b53461e8ada682ae47889b1~mv2 1.png" alt="article Image" width={394} height={394} />
              </div>
              <p>تسجيل العلامة التجارية: دليلك لتوكيل أفضل محامي علامات تجارية لعام 2024</p>

            </div>
 

  );
};

export default ArticleCard;
