import Image from "next/image";
import styles from "./page.module.css";
const Discover = () => {
  return (
    <section className={styles.discover}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/internship/imageone.png"
          className={styles.img}
          width={407}
          height={533}
          alt="التدريب في مكتب محاماة موثوق"
          style={{color:"#fff"}}
        />
      </div>
      <div className={styles.content}>
        <h2>اكتشف تميزك فى مجال القانون</h2>
       <p>في المجموعة التجارية والبحرية للمحاماة، نؤمن بشدة أن التدريب هو أساس بناء مهنة قانونية ناجحة. لذا، نوفر برنامج تدريب محامين حديثي التخرج الذين يطمحون للتقدم والتطور في مجالهم المهني. خلال تدريبك معنا، ستتاح لك الفرصة الفريدة للتدريب في مكتب محاماة كبير يساعدك في تطوير مهاراتك القانونية العملية والاستفادة من خبرات فريقنا المتميز من المحامين. ستتعلم أعلى معايير الجودة والأخلاقيات المهنية، وستشارك في معالجة القضايا القانونية التي تمثل تحديات حقيقية في عالم القانون.</p>
      
      </div>
    </section>
  );
};

export default Discover;
