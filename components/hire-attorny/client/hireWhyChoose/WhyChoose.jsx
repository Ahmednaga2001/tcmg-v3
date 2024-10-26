"use client";
import styles from "./page.module.css"
import WhyChooseAccordion from "./WhyChooseAccordion";
const data = [
  {
    title: "تحقيق الأهداف القانونية",
    desc: "يمكننا ضمان لك بعد انتهائك من إجراءات توكيل محامي, تحقيق جميع أهدافك القانونية باحترافية عالية وفي أسرع وقت ممكن.",
    path: "/assets/icons/hireattorny/icon1.svg",
    w : 48,
    h : 35
  },
  {
    title: "الترافع أمام المحاكم",
    desc: "ينوب عنك المحامي الذي وكّلته في قضاياك القانونية بالمثول أمام المحاكم بقوة؛ دفاعًا عن حقوقك, واستشهادًا بنصرة قضيتك.",
    path: "/assets/icons/hireattorny/icon2.svg",
    w : 48,
    h : 42
  },
  {
    title: "بناء علاقات استراتيجية",
    desc: "يسعى محامونا في المجموعة التجارية والبحرية لبناء علاقات استراتيجة مع عملائنا تقويةً للعلاقات الناشئة بين المحامي والموكِّل.",
    path: "/assets/icons/hireattorny/icon3.svg",
    w : 48,
    h : 29
  },
];
const HireWhyChoose = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.whyChooseContent}>
        <h2>لماذا تختار المجموعة البحرية والتجارية للمحاماة؟</h2>
        <p>
          الآن قد تتساءل عن لماذا تقوم بعمل توكيل محامي من المجموعة التجارية
          والبحرية للمحاماة، وما هي إجراءات توكيل محامي لدينا. ذلك أن عملية
          التوكيل تتطلب الكثير من البحث لاختيار المحامي الأنسب للتوكيل؛ لتحقيق
          النتائج المرجوَّة وجمع معلومات ذات موثوقية عالية. إليك معايير فريق
          العمل لدينا من المحامين المتخصصين تأكيدًا على صحة اختيارك لنا في خطوتك
          بتوكيل محامي
        </p>
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
      </div>
    </section>
  );
};

export default HireWhyChoose;
