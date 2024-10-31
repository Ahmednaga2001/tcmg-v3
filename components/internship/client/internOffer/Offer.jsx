import styles from "./page.module.css";
import OfferAccordion from "./OfferAccordion";
const data = [
  {
    title: "تدريب قانوني مكثف",
    desc : " نقدم لك في مكاتب TCMG للمحاماة, برنامج تدريب محامين مميز صُمم خصيصاً لتنمية مهاراتك القانونية؛ فهو يجمع بين التعلم العميق والتطبيق العملي, ويجهزك لتكون خبيراً في الميدان. اغتنم الفرصة الآن لتصبح المحامي الذي تطمح إليه.",
    path: "/assets/icons/internship/تدريب قانوني مكثف.svg",
    alt : "تدريب محامين مكثف",
  },
  {
    title: "مرافق تعليمية متقدمة",
    desc : " التدريب في مكتب محاماة كبير يساعد بشكل فعَّال في تنمية مهاراتك القانونية, وهذا ما تسعى مكاتب TCMG للمحاماة بتوفيره لعملائنا من المتدربين، عبر إعداد مَرافِق تعليمية متقدمة مصممة خصيصاً لإتاحة البيئة المثالية لتنمية محامين محترفين. استَفِد من التكنولوجيا الحديثة والموارد الشاملة التي تجعل التعلم أكثر ديناميكية وتأثيرًا.",
    path: "/assets/icons/internship/مرافق تعليمية متقدمة.svg",
    alt : "التدريب في مكتب محاماة متقدم",
  },
  {
    title: "مشاريع تطبيقية",
    desc : "في برنامج تدريب المحامين الخاص ب TCMG, سيتم توفير مشاريع تطبيقية تعزز من تجربتك التعليمية وتعمق فهمك القانوني. مع كل مشروع, ستتحدى نفسك في محاكاة الواقع القانوني؛ مما يُمكِّنك من تطوير مهاراتك التحليلية والمرافعة بكفاءة عالية.",
    path: "/assets/icons/internship/مشاريع تطبيقية.svg",
    alt : "تدريب محامين حديثي التخرج على مشاريع تطبيقية"
  },
  {
    title : "التعاون ومشاركة الخبرات",
    desc : " يمكنك الاستفادة من بيئة التعاون ومشاركة الخبرات أثناء تدريب المحاماة, حيث يجتمع المحامون المبتدئون والخبراء لتبادل المعرفة والتقنيات. هذا التفاعل يعزز من مهاراتك القانونية ويوسع آفاقك المهنية؛ مما يمهد لك طريق النجاح في الساحة القضائية.",
    path : "/assets/icons/internship/التعاون ومشاركة الخبرات.svg",
    alt : " تدريب محاماة تعاوني لمشاركة الخبرات",
  }
];
const InternOffer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.topContent}>
        <h2>ما سنقدمه لك</h2>
      </div>
      <div className={styles.accordionParent}>
        <OfferAccordion
          title={data[0].title}
          desc={data[0].desc}
          path={data[0].path}
          alt={data[0].alt}
        />
        <OfferAccordion
          title={data[1].title}
          desc={data[1].desc}
          path={data[1].path}
          alt={data[1].alt}
        />
        <OfferAccordion
          title={data[2].title}
          desc={data[2].desc}
          path={data[2].path}
          alt={data[2].alt}
        />
        <OfferAccordion
          title={data[3].title}
          desc={data[3].desc}
          path={data[3].path}
          alt={data[3].alt}

        />
      </div>
    </section>
  );
};

export default InternOffer;
