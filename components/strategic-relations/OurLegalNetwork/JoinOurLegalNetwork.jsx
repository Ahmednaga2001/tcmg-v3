import Image from "next/image";
import styles from "./page.module.css";
const JoinOurLegalNetwork = () => {
  return (
    <section className={styles.legalNetwork}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/strategicrelations/Mask group.png"
          className={styles.img}
          width={425}
          height={555}
          alt="بروتوكول تعاون مع TCMG"
          style={{color:"#fff"}}
        />
      </div>
      <div className={styles.content}>
       <h2>انضم إلي شبكتنا القانونية </h2>
       <p>تسعى مكاتب TCMG للمحاماة بجدية وطموح لبناء شراكات استراتيجية قوية مع مكاتب المحاماة الأخرى. فنحن نؤمن بأن التعاون مع مكاتب المحاماة الرائدة يمثل فرصة لتبادل المعرفة والخبرات, وتعزيز التعاون المشترك في مجال القانون. يتيح هذا التعاون لنا تقديم خدمات متميزة لعملائنا وتعزيز مسارنا المهني في سوق القانون الدولي. بناءً على روح الشراكة والاحترام المتبادل؛ فنحن نسعى جاهدين لتحقيق النجاح المشترك والتطور المستمر للجانبين.
       </p>
      
      </div>
    </section>
  );
};

export default JoinOurLegalNetwork;
