import styles from "@/app/article/page.module.css"
import Image from "next/image"
 const ArticleMarks = () => {
  return (
    <section className={styles.articleMarks}>
           
        <div className={styles.topContent}>
        <h2>العلامات:</h2>
       <div className={styles.marksContainer}>
           <p>محامي علامات تجارية</p>
           <p>تسجيل العلامات التجارية</p>
           <p>تسجيل العلامات التجارية في مصر</p>
           <p>تكاليف تسجيل علامة تجارية في مصر </p>
           <p>تسجيل العلامة التجارية بالسعودية</p>
           <p>كيفية تسجيل علامة تجارية في مصر </p>
           <p>تسجيل العلامة التجارية بالإمارات</p>
       </div>
        </div>
       <div className={styles.bottom}>
         <h4>أخبار ومقالات </h4>
         <div className={styles.socialIcons}>
         <Image src={"/assets/icons/article/instgram.svg"} width={52} height={52} alt="Instgram Icon"/>
        <Image src={"/assets/icons/article/Group (2).svg"} width={52} height={52} alt="Icon"/>
        <Image src={"/assets/icons/article/youtube.svg"} width={52} height={52} alt="Youtube Icon"/>
        <Image src={"/assets/icons/article/facebook.svg"} width={52} height={52} alt="Facebook Icon"/>
        <Image src={"/assets/icons/article/linkedin.svg"} width={52} height={52} alt="LinkedIn Icon"/>
        <Image src={"/assets/icons/article/twitter.svg"} width={52} height={52} alt="Twitter Icon"/>
         </div>
       </div>
    </section>
  )
}
export default ArticleMarks