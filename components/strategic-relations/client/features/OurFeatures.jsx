import FeatureAccordion from "./FeatureAccordion";
import styles from "./page.module.css";
const data = [
  {
    title: "الخبرة والاحترافية",
    desc : "مع مكاتب TCMG للمحاماة, يمكنكم الاستفادة من خدماتنا المقدمة بخبرة واحترافية؛ مما تضمن لكم التفوق والنجاح. كمكاتب محاماة متميزة, ندعوكم للانضمام إلى شبكتنا القانونية، حيث نقدم الخدمات والحلول القانونية المبتكرة والفعّالة التي ستمكنكم من التفوق والتميز في سوق القانون التنافسي. اعتمدوا على فريقنا المحترف لتحقيق نتائج استثنائية وبناء بروتوكول تعاون مستدام.",
    path: "/assets/icons/strategicrelations/الخبرة والاحترافية.png",
  },
  {
    title: "الابتكار والتميز",
    desc : "بالشراكة مع مكاتب TCMG للمحاماة ستكتشفون عالم الابتكار والإبداع في مجال القانون؛ فنحن نتفوق في تقديم حلول قانونية مبتكرة ومتطورة تلبي احتياجات العملاء بكفاءة ودقة. بعمل  بروتوكول تعاون معنا؛ يمكنكم تحقيق النجاح وتجاوز التحديات بطرق جديدة ومبتكرة.",
    path: "/assets/icons/strategicrelations/الابتكار والتميز.png",
  },
  {
    title : "المصداقية والسمعة",
    desc : "بالشراكة مع مكاتب TCMG للمحاماة يمكنكم الاستفادة من السمعة الطيبة والمصداقية العالية في مجال القانون. حيث نضمن لعملائنا الحصول على خدمات قانونية موثوقة ومتميزة.قم بالإنضمام إلى شبكة قانونية واسعة؛ واضمن النجاح والتفوق في جميع جوانب القانوني الدولي.",
    path : "/assets/icons/strategicrelations/المصداقية والسمعة.png"
  },
  {
    title: "الشراكة الاستراتيجية",
    desc : "اكتشفوا القوة في التعاون مع مكاتب TCMG للمحاماة؛ فنحن نقدم لكم بروتوكول تعاون يجمع بين الكفاءة والاحترافية لتحقيق النجاح المشترك. اعتمدوا على شبكتنا القانونية الواسعة والشراكات الاستراتيجية المستدامة لتعزيز مكانتنا سوياً في سوق القانون وتحقيق النتائج المبهرة.",
    path: "/assets/icons/strategicrelations/الشراكة الاستراتيجية.png",
  },

];
const OurFeatures = () => {
  return (
    <section className={styles.features}>
      <div className={styles.topContent}>
        <h2>مميزات الشراكة مع مكاتب TCMG للمحاماة</h2>
      </div>
      <div className={styles.accordionParent}>
        <FeatureAccordion
          title={data[0].title}
          desc={data[0].desc}
          path={data[0].path}
        />
        <FeatureAccordion
          title={data[1].title}
          desc={data[1].desc}
          path={data[1].path}
        />
        <FeatureAccordion
          title={data[2].title}
          desc={data[2].desc}
          path={data[2].path}
        />
        <FeatureAccordion
          title={data[3].title}
          desc={data[3].desc}
          path={data[3].path}
        />
      </div>
    </section>
  );
};

export default OurFeatures;
