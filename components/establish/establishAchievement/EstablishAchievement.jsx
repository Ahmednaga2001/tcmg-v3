import styles from "./page.module.css";
import VisionImg from "./VisionImg";
import VisonCard from "./VisonCard";

const data = [
    {
        title: "تأسيس شركة في مصر",
        desc: "إلى عملائنا من رجال الأعمال والمبتدئين في مصر, نقدم لكم خدمات قانونية شاملة لأعمال الشركات, متوافقة مع جميع احتياجاتك وشروطك؛ لضمان تأسيس الشركة التي تحلم بها, مبنية على أساس قانوني قوي وداعم لممارسة نشاطك التجاري بأمان.",
        path: "/assets/images/establish/egypt.png",
        alt : " تأسيس شركات في مصر"
    },
    {
        title: "تأسيس شركة في السعودية",
        desc: "دع خبراءنا يقومون نيابةً عنك بتأسيس شركتك في المملكة العربية السعودية. ونشر رسالتك من عملك التجاري وتحقيق الأرباح دون التعرض لأي مخالفات أو مساءلات قانونية. المجموعة التجارية والبحرية وجهتك لتأسيس شركة أحلامك المميزة بكل سهولة ويسر.",
        path: "/assets/images/establish/saudia.png",
        alt : "تأسيس شركة في السعودية"
    },
    {
        title: "تأسيس شركة في الإمارات",
        desc: "هل تحلم بتأسيس شركة رائدة في الإمارات؟ نقدم لك في مكاتب المجموعة التجارية والبحرية خدمة تأسيس شركات مميزة, بداية مع توثيق العقود وصولاً إلى الحصول على التصاريح القانونية من الجهات المعنية بتأسيس شركتك بنجاح في دبي.",
        path: "/assets/images/establish/dubai.png",
        alt : "تأسيس شركة في الإمارات"
    },
    {
        title: "تأسيس شركة في الصين",
        desc: "دعنا نحقق هدفك في تأسيس شركتك في الصين. قد يكون هذا المسعى بعيد المنال لبعض رجال الأعمال, لكن مع مكاتب TCMG يمكنك الاعتماد علينا لتحقيق هذا الهدف عنك؛ بحل كافة التعقيدات وإتمام كافة الإجراءات القانونية اللازمة.",
        path: "/assets/images/establish/china.png",
        alt : "تأسيس شركة في الصين"
    }
];

const EstablishAchievement = () => {
  return (
    <section className={styles.countries}>
      <h2>ما هي الدول التي نقدم خدمة تأسيس الشركات بها؟</h2>
      <div className={styles.parentvision}>
        {data.map((item, index) => (
          <div className={styles.vision} key={index}>
            {index % 2 === 0 ? (
              <>
                <VisonCard
                  visionContentstyle="visioncontent"
                  title={item.title}
                  desc={item.desc}
                />
                <VisionImg imgStyle="imgleft" path={item.path} title = {item.title} alt = {item.alt} />
              </>
            ) : (
              <>
                <VisionImg imgStyle="imgright" path={item.path} title = {item.title} alt={item.alt} />
                <VisonCard
                  visionContentstyle="visioncontentleft"
                  title={item.title}
                  desc={item.desc}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default EstablishAchievement;
