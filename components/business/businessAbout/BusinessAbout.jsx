import Image from "next/image";
import styles from "./page.module.css";
import Team from "@/components/shared/client/Team/Team";
import Link from "next/link";

const BusinessAbout = () => {
  return (
    <section className={styles.expert}>
      <h2>
      فريق قانوني متكامل بخبرات تزيد عن الـ20 عامًا

      </h2>
      <div className={styles.content}>
        <p>
        منذ تأسيس المجموعة التجارية والبحرية للمحاماة، وقد بدأنا رحلتنا بابتكار وتفوق مستمر في تقديم الخدمات القانونية وخاصًة خدمات رجال الأعمال. على مر السنوات، نجحنا في تحقيق إنجازات بارزة تعزز من سمعتنا كمجموعة مكاتب قانونية رائدة في مصر والشرق الوسط. نلتزم بالاحترافية والتفاني في العمل، عن طريق تقديم دعم قانوني متكامل للشركات؛ مما يساهم في تعزيز نجاحها وتوسيع قاعدة تواجدها في سوق الاعمال. نحن نواصل التزامنا بالتفوق والتطور؛ مما يعكس رؤية واضحة لمستقبل مشرق لك.
        </p>
        <Image
          src="/assets/images/business/c1 __ 2.png"
          width={135}
          height={135}
          alt="L Image"
        />
      </div>
      <Team/>
      {/* <Link href="lawyers" className={styles.link}>
      تعرف علينا
  <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24} alt="arrow left icon" />
</Link> */}
    </section>
  );
};

export default BusinessAbout;
