import styles from "./page.module.css";
import ValueAccordion from "./ValueAccordion";
const data = [
  {
    title: "التأثير",
    desc: "في مكتبنا، نتبنى مهمة ترك بصمة إيجابية في المجتمع من خلال تقديم دعم قانوني يؤثر بشكل ملموس في حياة الأفراد. نعمل بتفاني لتعزيز العدالة والمساواة، ونسعى إلى تطوير استراتيجيات وحلول قانونية تخدم هذه الأهداف. نحن حريصون على مشاركة خبراتنا وتعزيز التعاون بين مكاتب المحاماة لتحقيق تأثير أكبر وأكثر فاعلية في المجتمع.",
    path: "/assets/icons/joinus/التأثير .png",
  },
  {
    title: "التميز",
    desc: "التميز في TCMG هو التزامنا الدائم بتقديم حلول قانونية مبتكرة وفعّالة؛ لذا نسعى جاهدين لتحقيق أعلى مستويات الجودة في كل ما نقوم به، مع التركيز على تقديم خدمات قانونية تتجاوز جميع توقعات العملاء. التميز في مكتبنا ليس مجرد هدف نسعى إليه، بل هو مبدأ نعمل به يوميًا لنضمن أفضل النتائج.",
    path: "/assets/icons/joinus/التميز.png",
  },
  {
    title: "الكفاءة",
   desc : "في TCMG، الكفاءة عندنا هي حجر الزاوية في كل ما نقدمه. حيث نلتزم بتقديم خدمات قانونية بسرعة ودقة، مع الحفاظ على أعلى معايير الجودة. من خلال العمل باحترافية؛ نضمن تحقيق نتائج فعَّالة تلبي جميع احتياجات عملائنا وتفوق توقعاتهم.",
    path: "/assets/icons/joinus/الكفاءة.png",
  },
  {
    title : "التعاون",
    desc : "نؤمن بقيمة التعاون وروح الفريق كوسائل أساسية لتحقيق النجاح. نحن نشجع على التواصل وتبادل الأفكار والتجارب بين أفراد الفريق وشركائنا؛ مما يساعدنا على إيجاد الحلول المثلى للمسائل القانونية التي نواجهها.",
    path : "/assets/icons/joinus/التعاون.png"
  }
];
const JoinValues = () => {
  return (
    <section className={styles.values}>
      <div className={styles.topContent}>
        <h2>تعرف على قيمنا</h2>
        <p>
        في مكاتبنا، نسعى جاهدين لتقديم حلول قانونية مبتكرة ومميزة وأيضًا بناء علاقات متينة مع عملائنا قائمة على الثقة والاحترام. نؤمن بأن القيم هي التي تشكل أساس نجاحنا، فهي المرآة التي تعكس رؤيتنا وطموحاتنا. لذلك، نحرص على دمج هذه القيم في كل جوانب عملنا. من قيمنا ما يلي:
        </p>
      </div>
      <div className={styles.accordionParent}>
        {
          data.map((el) => (
            <ValueAccordion
              key={el.title}
              title={el.title}
              path={el.path}
              desc={el.desc}
            />
          ))
        }
     
      </div>
    </section>
  );
};

export default JoinValues;
