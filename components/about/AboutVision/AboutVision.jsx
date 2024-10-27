import styles from "@/components/about/AboutVision/page.module.css";
import VisionCard from "./VisonCard";
import VisionImage from "./VisionImg";
const data = [
  {
    title: "التوسع علي النطاق المحلي",
    desc: "نفخر أننا حققنا أولى طموحتنا بالتوسع في مصر وفتح فروع في القاهرة والإسكندرية وتوصيل خدماتنا القانونية لأكبر عدد ممكن من العملاء, أفرادًا أو شركاتٍ أو أي كيان قانوني آخر. باعتبارنا أحد مكاتب المحاماة الرائدة في مصر بمعايير عالمية المستوى.",
    path: "/assets/images/about/visionimg1.png",
    alt : "توسع على نطاق محلي"
  },
  {
    title: "التوسع على النطاق الإقليمي",
    desc : "قمنا بتنسيق بروتوكولات تعاون دولية عدة مع مكاتب وشركات محاماة دولية رائدة من الدول العربية كالمملكة العربية السعودية والإمارات العربية المتحدة والكويت وقطر والاردن وعمان وغيرها من الدول العربية الشقيقة. وتطلع TCMG لزيادة التعاون ليشمل شتى بقاع دول العالم لخدمة موكلينا وتسهيل الإجراءات القانونية عليهم.",
    path: "/assets/images/about/visionimg2.png",
    alt : "توسع على نطاق إقليمي",
  },
  {
    title: "التوسع على النطاق الدولي",
    desc : "بعد التوسع التي قامت به المجموعة التجارية والبحرية على النطاق الإقليمي ونشر رسالتنا، سنبدأ برسم خطتنا سعيًا لتوسيع نطاق خدماتنا القانونية في جميع دول العالم، وذلك من خلال فتح فروع جديدة للمجموعة التجارية والبحرية للمحاماة؛ للاستجابة لطلبات عملائنا المتزايدة من الأفراد والشركات من العملاء الأجانب، أو العملاء العرب الذين يمارسون أعمالهم في مختلف أنحاء العالم.",
    path: "/assets/images/about/visionimg3.png",
    alt : "توسع على نطاق دولي",
  },
  {
    title: "رفع معدل فاعلية الحلول القانونية",
    desc : "نؤمن بأن العمل الجدي هو الركيزة الأساسية التي تسعى إليها المجموعة التجارية والبحرية للمحاماة منذ تاريخ نشأتها. وهي تكمن في إعطاء الحلول القانونية المتكاملة لعملائها، بشكل فريد ومتميز وغير تقليدي.",
    path: "/assets/images/about/visionimg4.png",
    alt : "حلول قانونية فعالة",
  },
  {
    title: "تحسين مستوى العمل الداخلي والخارجي",
    desc : "استطاعت مجموعة TCMG من خلال سنوات من التناضل والممارسة، أن تضع آلية في حل القضايا القانونية لعملائها والتعامل معها. ومنها الالتزام بمبدأ التكامل والتفاوض إذا تطلب الأمر ذلك. حتى أصبحنا على القدر الكافي من الخبرة لمباشرة الأعمال القانونية خارج جمهورية مصر العربية وداخلها.",
    path: "/assets/images/about/visionimg5.png",
    alt : "خدمات قاونية على المستوى الداخلي والخارجي",
  },
  {
    title: "تسهيل الحلول القضائية لعملائنا",
    desc: "نسعى جاهدين لأجل بناء رؤية كاملة لمستقبل مليء بالطموح والأهداف المحددة. رؤيتنا تكمن في تسهيل الحلول القضائية للعملاء، ومباشرة الإجراءات القانونية وخدمة مصالحهم وأهدافهم.",
    path: "/assets/images/about/visionimg6.png",
    alt : "تسهيل الحلول القضائية",
  },
  {
    title: "رفع معايير جودة خدماتنا القانونية",
    desc : "نسعى دائما لرفع معايير الجودة لدينا وتقديم الخدمات القانونية المختلفة بشكل متطور ممتزج بخبراتنا التي تجاوزت الثلاثة عقود. تهدف TCMG لأن نصبح شركة محاماة مصرية رائدة في مصر والشرق الأوسط.",
    path: "/assets/images/about/visionimg7.png",
    alt : "الالتزام بمعايير الجودة",
  },
  {
    title: "تعزيز مبادئ العدالة والمساواة",
    desc : "يمثل مسعانا الأول وطموحنا الأسمى من تأسيس مكاتب المجموعة التجارية والبحرية للمحاماة، هو تأصيل معنى العدالة في كافة أرجاء مصر والوطن العربي، باسترجاع الحقوق المسلوبة وحمايتها والحفاظ عليها ضد أي اعتداء خارجي.",
    path: "/assets/images/about/visionimg8.png",
    alt : "تعزيز مبادئ العدل والمساواة"
  },
];


const AboutVision = () => {
  return (
    <>
      <section className={styles.aboutVision}>
        <h2 className={styles.aboutSectionHeading}>رؤيتنا للمستقبل</h2>
        <div className={styles.visionSectionContainer}>
          {data.slice(0, 3).map((item, index) => (
            <div className={styles.visionItem} key={item.title + index}>
              {index % 2 === 0 ? (
                <>
                  <VisionCard
                    visionContentStyle="visioncontent"
                    title={item.title}
                    desc={item.desc}
                  />
                  <VisionImage
                    imgStyle="imgLeft"
                    path={item.path}
                    alt={item.alt}
                  />
                </>
              ) : (
                <>
                  <VisionImage
                    imgStyle="imgRight"
                    path={item.path}
                    alt={item.alt}

                  />
                  <VisionCard
                    visionContentStyle="visioncontentleft"
                    title={item.title}
                    desc={item.desc}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.aboutVision}>
        <h2 className={styles.aboutSectionHeading}>
          الهدف والمهمة الراسخين منذ تاريخ النشأة
        </h2>
        <div className={styles.visionSectionContainer}>
          {data.slice(3).map((item, index) => (
            <div className={styles.visionItem} key={item.title + index}>
              {index % 2 === 0 ? (
                <>
                  <VisionImage
                    imgStyle="imgRight"
                    path={item.path}
                    alt={item.alt}

                  />
                  <VisionCard
                    visionContentStyle="visioncontentleft"
                    title={item.title}
                    desc={item.desc}
                  />
                </>
              ) : (
                <>
          <VisionCard
            visionContentStyle="visioncontent"
            title={item.title}
            desc={item.desc}
          />
          <VisionImage
            imgStyle="imgLeft"
            path={item.path}
            alt={item.alt}

          />
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutVision;
