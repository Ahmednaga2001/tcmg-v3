import Image from "next/image";
import styles from "./page.module.css"
const BusinessAchieveSuccess = () => {
  return (
    <section className={styles.achieveSuccess}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/business/imageone.png"
          style={{color : "#fff"}}
          className={styles.img}
          width={407}
          height={533}
          alt="صورة تعبر عن نجاح الأعمال"
        />
      </div>
      <div className={styles.content}>
        <h2>اتجه بشركتك نحو آفاق جديدة في عالم الأعمال</h2>
        <p>
        في عالم الأعمال سريع التقلب، سنقدم لك الدعم الكامل لتوجيه شركتك نحو آفاق جديدة. سنقدم لك استشارات وخدمات قانونية متكاملة تساعدك على استكشاف الفرص الجديدة وتحقيق النمو المستدام. نعمل على توفير الدعم الكامل الذي تحتاجه لتوسيع نطاق أعمالك وتحقيق أهدافك التجارية، من خلال تطوير استراتيجيات جديدة للتعامل مع التحديات القانونية. دعنا نكون شريكك القانوني في رحلتك نحو الابتكار والتميز، حيث نقدم خدمات رجال الاعمال لدعمك في فتح أبواب النجاح وضمان تحقيق نمو مستدام        </p>
      </div>
    </section>
  );
};

export default BusinessAchieveSuccess;
