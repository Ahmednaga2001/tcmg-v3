

import styles from "./page.module.css";
import WhyChooseAccordion from "./WhyChooseAccordion";
const data = [
  {
    title: "بناء علاقات استراتيجية",
  desc : "يسعى محامونا في المجموعة التجارية والبحرية للمحاماة لبناء علاقات استراتيجية مع عملائنا لتقوية العلاقات الناشئة بين المحامي والموكل.",
  path: "/assets/icons/hireattorny/بناء علاقات استراتيجية.svg",
  },
  {
   title: "الترافع أمام المحاكم",
   desc : "يمكنك عمل توكيل محامي، حتى ينوب عنك المحامي الذي وكلته في قضاياك القانونية بالمثول أمام المحكمة بقوة؛ دفاعاً عن حقوقك واستشهاداً بنصرة قضاياك.",
path: "/assets/icons/hireattorny/الترافع أمام المحاكم.svg",
  },
  {
 title: "تحقيق الأهداف القانونية",
    desc : "نضمن لك بعد انتهائك من إجراءات عمل توكيل قضايا للمحامي، أنك ستتمكن من تحقيق جميع أهدافك القانونية باحترافية عالية وبأسرع وقت ممكن.",
    path : "/assets/icons/hireattorny/تحقيق الأهداف القانونية.svg"
  },
 
  {
    title : "تقديم مشورة متخصصة",
    desc : "نختصّ بتقديم استشارات قانونية متخصصة للإجابة على استفساراتكم بعد فهم قضاياكم؛ بخبرتنا القانونية، نحن خياركم لتحقيق أهدافكم بكفاءة وسرعة.",
    path : "/assets/icons/hireattorny/تقديم مشورة متخصصة.svg"
  }
];
const HireWhyChoose = () => {
  return (
    <section className={styles.features}>
      <div className={styles.topContent}>
       <h2>لماذا تختار المجموعة البحرية والتجارية للمحاماة؟</h2>
       <p>عملية توكيل محامي تطلب التمهل في التفكير لاختيار المحامي المناسب لتحقيق النتائج المرجوة. لذلك قد تتساءل، لماذا عليك القيام بعمل توكيل للمحامي مجموعة مكاتب TCMG. إليك معايير فريق العمل لدينا من المحامين المتخصصين تأكيدًا على صحة اختيارك لنا في خطوتك بتوكيل خاص للمحامي:</p>
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

export default HireWhyChoose;
