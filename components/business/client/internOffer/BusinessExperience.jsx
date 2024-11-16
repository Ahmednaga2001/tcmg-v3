import styles from "./page.module.css"
import ExperienceAccordion from "./ExperienceAccordion";
const data = [
  {
    title: "تقديم مشورة متكاملة",
    desc : "نقدم استشارات قانونية شاملة في مجالات الدمج والاستحواذ، القانون التجاري وأيضًا قانون الضرائب، مع التركيز على دعم النمو والتوسع وحل النزاعات بكفاءة.",
    path: "/assets/icons/corporate/تقديم مشورة متكاملة.svg",
  },
  {
    title: "فهم عميق للأسواق",
    desc : "دينا معرفة شاملة بكلًا من الأسواق المحلية والدولية؛ لذلك يمكننا من تقديم استشارات قانونية تتماشى مع تطورات السوق ومتطلبات الأعمال.",
    path: "/assets/icons/corporate/فهم عميق للأسواق.svg",
  },
  {
    title: "دعم استراتيجي مستدام",
    desc : "نركز على بناء شَراكَات طويلة الأمد مع عملائنا من خلال تقديم دعم استراتيجي مستمر ومساعدتهم في تحقيق أهدافهم على المدى الطويل",
     path: "/assets/icons/corporate/دعم استراتيجي مستدام.svg",
  },
  {
    title : "التزام بالجودة والاحترافية",
    desc : "نلتزم بتقديم خدمات رجال الاعمال بشكل احترافي يلبي احتياجات كافة الشركات، مع التركيز على جميع التفاصيل؛ مما يعزز ثقة عملائنا ويضمن تحقيق أفضل النتائج.",
    path: "/assets/icons/corporate/التزام بالجودة والاحترافية.svg",
  },
  {
    title : "تجربة عميقة ومتنوعة",
    desc : "نقدم خبرة قانونية واسعة ومتخصصة في التعامل مع تحديات الشركات عبر مختلف القطاعات؛ مما يتيح لنا تقديم حلول فعّالة لدعم نمو شركتك وتعزيز نجاحها في السوق.",
    path: "/assets/icons/corporate/تجربة عميقة ومتنوعة.svg",
  },
  
  {
    title: "استجابة سريعة ومرونة",
    desc : "نعمل على تقديم خدمات رجال الاعمال بسرعة ومرونة، مع تقديم استجابات سريعة وحلول قانونية تتناسب مع ظروف السوق المتغيرة.",
    path: "/assets/icons/corporate/استجابه سريعه ومرنه.svg",
  },
 

];
const BusinessExperience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.topContent}>
       {/* <h2>ما يميز خدمات رجال الأعمال لدينا عن غيرنا من مكاتب المحاماة</h2> */}
       <h2>لماذا تختار مكاتب TCMG؟</h2>
       <p>تتميز مكاتب TCMG بخبرتها الواسعة وفريقها القانوني المتخصص في كافة أعمال الشركات. حيث نقدم حلولًا مبتكرة وشاملة تلبي احتياجات عملائنا بفعالية واحترافية. وإليك مبادئنا في العمل</p>
      </div>
      <div className={styles.accordionParent}>
        {
          data.map((item, index) => {
            return (
              <ExperienceAccordion
                key={index}
                title={item.title}
                desc={item.desc}
                path={item.path}
               
              />
            )
          })
        }
      </div>
    </section>
  );
};

export default BusinessExperience;
