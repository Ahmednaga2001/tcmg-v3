import styles from "@/components/ask-attorny/ask-attrony.module.css";
import Image from "next/image";
const ConnectwithLegalExpert = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/askattorny/manuel-jimenez-BiyR1kDQpoE-unsplash 1.png"
          className={styles.img}
          width={407}
          height={533}
          alt="اسأل محامي في مصر من مكتب TCMG"
        />
      </div>
      <div className={styles.content}>
        <h2>اسأل محامي في مصر واحصل على إجابات قانونية سريعة</h2>
      <p>صٌممت استمارة إسأل محامي مصري للرد السريع وغير المعمق عن الأسئلة والاستفسارات القانونية من محامين مكاتب TCMG، وبالتالي هي لا تغني عن خدمة الاستشارات القانونية الي تقدم دعم قانون مخصص ولمركز للقضايا والأهداف القانونية. فإذا كان لديك استفسار وترغب في اجابة عليه يمكنك ملئ استمارة اسال محامي في مصر وسيتم الرد عليك في أقرب وقت ممكن.</p>
      </div>
    </section>
  );
};

export default ConnectwithLegalExpert;
