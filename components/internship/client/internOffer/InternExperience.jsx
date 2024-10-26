import styles from "./page.module.css"
import ExperienceAccordion from "./ExperienceAccordion";
const data = [
  {
    title: "تطوير المهارات",
    desc : " يقدم TCMG للمحاماة لك برنامج تدريب محامين مميز, صُمم خصيصاً لتنمية مهاراتك القانونية؛ فهو يجمع بين التعلم العميق والتطبيق العملي, ويجهزك لتكون خبيراً في الميدان. اغتنم الفرصة الآن لتصبح المحامي الذي تطمح إليه",
    path: "/assets/icons/internship/تطوير المهارات.png",
    alt : " تدريب محاماة مميز لتطوير المهارات"
  },
  {
    title: "فهم أعمق للقانون",
    desc : "لتدريب في مكتب محاماة كبير يساعد بشكل فعَّال في تنمية مهاراتك القانونية. وهذا ما يسعى TCMG للمحاماة بتوفيره لعملائنا من المتدربين، بإعداد مَرافِق تعليمية متقدمة مصممة خصيصاً لإتاحة البيئة المثالية لتنمية محامين محترفين. استَفِد من التكنولوجيا الحديثة والموارد الشاملة التي تجعل التعلم أكثر ديناميكية وتأثيرًا.",
    path: "/assets/icons/internship/فهم أعمق للقانون.png",
    alt : "فهم اعمق للقانون"
  },
  {
    title: "العمل على قضايا حقيقية",
    desc : "في برنامج تدريب المحامين الخاص ب TCMG, سيتم توفير مشاريع تطبيقية تعزز من تجربتك التعليمية وتعمق فهمك القانوني. مع كل مشروع, ستتحدى نفسك في محاكاة الواقع القانوني؛ مما يمكنك من تطوير مهاراتك التحليلية والمرافعة بكفاءة عالية",
    path: "/assets/icons/internship/العمل على قضايا حقيقية.png",
    alt : " تدريب محامين للعمل على قضايا حقيقية"
  },
  {
    title : "شبكة العلاقات",
    desc : "يمكنك الاستفادة من بيئة التعاون الغنية ومشاركة الخبرات أثناء تدريب المحاماة الخاص بنا, حيث يجتمع المحامون المبتدئون والخبراء لتبادل المعرفة والتقنيات. هذا التفاعل يعزز من مهاراتك القانونية ويوسع آفاقك المهنية؛ مما يمهد لك طريق النجاح في الساحة القضائية.",
    path : "/assets/icons/internship/شبكة العلاقات.png",
    alt : "بناء شبكة قانونية قوية"
  },
  
  {
    title: "بناء الثقة والاعتمادية",
    desc : "في برنامج تدريب المحامين الخاص ب TCMG, سيتم توفير مشاريع تطبيقية تعزز من تجربتك التعليمية وتعمق فهمك القانوني. مع كل مشروع, ستتحدى نفسك في محاكاة الواقع القانوني؛ مما يمكنك من تطوير مهاراتك التحليلية والمرافعة بكفاءة عالية",
    path: "/assets/icons/internship/بناء الثقة والاعتمادية.png",
    alt : "تدريب محامين حديثي التخرج موثوق"
  },
  {
    title : "الاحترافية في العمل",
    desc : "يمكنك الاستفادة من بيئة التعاون الغنية ومشاركة الخبرات أثناء تدريب المحاماة الخاص بنا, حيث يجتمع المحامون المبتدئون والخبراء لتبادل المعرفة والتقنيات. هذا التفاعل يعزز من مهاراتك القانونية ويوسع آفاقك المهنية؛ مما يمهد لك طريق النجاح في الساحة القضائية.",
    path : "/assets/icons/internship/الاحترافية في العمل.png",
    alt : "التدريب في مكتب محاماة احترافي"
  },

];
const InternExperience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.topContent}>
        <h2>ما ستضيفه لخبرتك</h2>
        <p>في رحلتك المهنية، كل خطوة تعليمية تمثِّل بناءً لمعرفتك. من خلال برنامج تدريب المحامين الخاص بنا، لن تكتسب المعرفة فقط، بل ستُضَاف أبعادًا جديدة لخبرتك القانونية.</p>
      </div>
      <div className={styles.accordionParent}>
        <ExperienceAccordion
          title={data[0].title}
          desc={data[0].desc}
          path={data[0].path}
          alt = {data[0].alt}
        />
        <ExperienceAccordion
          title={data[1].title}
          desc={data[1].desc}
          path={data[1].path}
          alt = {data[1].alt}

        />
        <ExperienceAccordion
          title={data[2].title}
          desc={data[2].desc}
          path={data[2].path}
          alt = {data[2].alt}

        />
        <ExperienceAccordion
          title={data[3].title}
          desc={data[3].desc}
          path={data[3].path}
          alt = {data[3].alt}

        />
        <ExperienceAccordion
          title={data[4].title}
          desc={data[4].desc}
          path={data[4].path}
          alt = {data[4].alt}

        />
        <ExperienceAccordion
          title={data[5].title}
          desc={data[5].desc}
          path={data[5].path}
          alt = {data[5].alt}

        />
      </div>
    </section>
  );
};

export default InternExperience;
