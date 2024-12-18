"use client";
import styles from "./page.module.css"
import WhyChooseAccordion from "./WhyChooseAccordion";
const data = [
  {
    title: "فرص التطوير المهني",
    desc : "في TCMG، لا نكتفي فقط بتقديم وظائف للمحامين بل أيضاً نولي اهتمامًا كبيرًا لتطوير مهارات محامينا وتوفير فرص نمو مهنية مستمرة. برنامجنا التدريبي يمكنك من استكشاف مجالات جديدة في القانون وتعزيز مهاراتك القانونية. كما نقدم فرص التقدم في الشركة والحصول على مسؤوليات أكبر؛ مما يساهم في نموك المهني وتحقيق أهدافك الشخصية في مجال المحاماة."
  },
  {
    title : "بيئة عمل محفزة",
  desc : "في مكاتب TCMG للمحاماة, على عكس معظم وظائف المحامين؛ فنحن نقدم بيئة ملهمة للمحامين, حيث يتم تشجيعك على التفوق والابتكار. نحن نقدر ونشجع التعاون وتبادل الأفكار؛ مما يساعد في بناء روح الفريق القوية وتحقيق أهدافنا المشتركة. توفر هذه البيئة العملية الدعم اللازم لك؛ لتطوير مهاراتك وتحقيق نجاحك المهني."
  },
  {
    title : "فرص دولية",
    desc : "في مكاتبنا, لا نوفر وظائف خاليه للمحامين بل نوفر لهم أيضًا فرصاً مميزة للعمل على قضايا دولية متنوعة؛ مما يمنحك تجربة تدريبية ومهنية قيمة. يمكنك الاستفادة من هذه الفرص لتوسيع خبرتك المهنية وبناء شبكات علاقات دولية قوية. وتطوير مهاراتك في مجال القانون الدولي وتوفير وظائف خالية للمحامين بالشركات الدولية لهم."
  },
  {
    title : "ثقافة العمل الاحترافية",
   desc : " في TCMG تمثل ثقافة العمل الاحترافية أساس عملنا؛ فنحن لا نوفر وظائف المحاماه فقط, بل نعتمد على الاحترام المتبادل والتعاون الفعَّال بين أفراد الفريق. نشجع على التواصل الصريح والشفافية في التعاملات؛ مما يساهم في بناء ثقة قوية بيننا وبين عملائنا, على عكس كثير من الوظائف القانونية؛ فنحن نلتزم بمعايير الجودة العالية في أداء عملنا, ونسعى جاهدين لتحقيق الرضا الكامل لعملائنا من خلال العمل بنزاهة ومسؤولية."
  }
];
const HiringWhyChooseUs = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.whyChooseContent}>
       <h2>مميزات العمل معنا</h2>
        <p>
        كفاك بحثاً الآن عن وظائف خالية للمحامين؛ فنحن في مكاتب TCMG نقدم مجموعة من الوظائف القانونية المميزة. بالإضافة لذلك, فسنقدم لك بيئة عمل ملهمة, تعطيك الفرصة لتطوير مهاراتك وتحقيق إمكانياتك الكاملة كمحامي. من المميزات التي ستجدها من خلال العمل معنا:        </p>
      </div>
      <div className={styles.accordionParent}>
        <WhyChooseAccordion
          title={data[0].title}
          desc={data[0].desc}
          path={data[0].path}
        />
        <WhyChooseAccordion
          title={data[1].title}
          desc={data[1].desc}
          path={data[1].path}
        />
        <WhyChooseAccordion
          title={data[2].title}
          desc={data[2].desc}
          path={data[2].path}
        />
        <WhyChooseAccordion
          title={data[3].title}
          desc={data[3].desc}
          path={data[3].path}
        />
      </div>
    </section>
  );
};

export default HiringWhyChooseUs;
