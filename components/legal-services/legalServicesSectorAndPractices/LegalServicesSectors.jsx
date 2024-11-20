import Link from "next/link";
import CardContent from "./CardContent";
import CardImg from "./CardImg";
import styles from "./page.module.css"
import Image from "next/image";
const data = [
  {
    id: 1,
    title: "أسواق المال",
    // desc :"نقدم استشارات قانونية متخصصة في أسواق المال, لدعم شركتك في الامتثال للتشريعات المالية وحماية استثماراتك. نعمل على ضمان تحقيق معاملات مالية شفافة وآمنة, ونقدم المشورة اللازمة لتفادي المخاطر وتعزيز النمو المالي بما يتماشى مع أعلى معايير الأمان والامتثال.",
    path: "/assets/images/legalservices/img5.png",
    alt : "خدمات قانونية في أسواق المال",
    desc : "نقدم باقة الخدمات القانونية المتخصصة في أسواق المال، لدعم شركتك في الامتثال للتشريعات المالية وحماية استثماراتك. كما أننا نعمل على ضمان تحقيق معاملات مالية شفافة وآمنة، بالإضافة إلى تقديم المشورة اللازمة لتفادي المخاطر وتعزيز النمو المالي بما يتماشى مع أعلى معايير الأمان والامتثال."
  },
  {
    id: 2,
    title: "الخدمات البنكية والمالية",
    // desc :"نقدم مجموعة واسعة من الخدمات المصرفية والمالية، تشمل على خدمات التعامل مع المنازعات المصرفية، والتمويل الإسلامي، وعمليات الاندماج والاستحواذ، بالإضافة إلى خدمات أخرى. نحن نضمن توفر فريق متخصص في القضايا المالية، يعمل على دراسة الحالات المالية والمصرفية، وتقديم تحليلات شاملة وعميقة لتقديم الحلول القانونية المناسبة في كل حالة.",
    path: "/assets/images/legalservices/img6.png",
    alt : "خدمات بنكية ومالية",
    desc : "نقدم مجموعة واسعة من الخدمات المصرفية والمالية، تشمل خدمات قانونية للتعامل مع المنازعات المصرفية، والتمويل الإسلامي، بالإضافة إلى خدمات أخرى. تدعمك مكاتب TCMG بمحامي ماليات يعمل على دراسة الحالات المالية والمصرفية، وتقديم تحليلات شاملة لتقديم الحلول القانونية المناسبة في كل حالة."
  },
  {
    id: 3,
    title: "التطوير العقاري والإنشاءات ",
    // desc : "لدينا خبرات متنوعة وتجارب ناجحة في مجال التطوير العقاري. نقدم خدماتنا في المسائل والعقود العقارية بأنواعها المختلفة، سواء كانت تجارية أو سكنية. فلدينا فريق متخصص في القضايا العقارية المتنوعة، ونفتخر بدعمنا المتميز للأفراد والشركات في تحقيق أهدافهم في التطوير العقاري. اتصل بنا الآن وسنوفر لك أفضل محامي عقارات في مصر لمساعدتك في تحقيق أهدافك القانونية.",
    path: "/assets/images/legalservices/img7.png",
    alt : "خدمات تطوير العقارات والانشاءات",
    desc : "لدينا خبرات متنوعة وتجارب ناجحة في مجال التطوير العقاري. حيث أننا نقدم باقة من الخدمات القانونية في المسائل والعقود العقارية بأنواعها المختلفة، سواء كانت تجارية أو سكنية. اتصل بنا الآن وسندعمك بأفضل محامي عقارات في مصر لمساعدتك في تحقيق أهدافك القانونية.",
  },
  {
    id: 4,
    title: "النقل و الشحن",
    // desc : "لدينا سجل حافل في تقديم خدمة الاستشارات القانونية المختلفة للقطاع البحري مثل تمويل السفن وتاجيرها، ووكالات ائتمان الصادرات، وإعادة الهيكلة، الضرائب، وتأمين الشحن، و أضررار النقل. نقدم للعملاء فيي قطاع الشحن حزمة متنوعة من الخدمات القانونية.",
    path: "/assets/images/legalservices/img8.png",
    alt : "خدمات مكتب محاماة للنقل والشحن",
    desc : "لدينا سجل حافل في تقديم خدمات قانونية مختلفة للقطاع البحري مثل تمويل السفن وتأجيرها، ووكالات ائتمان الصادرات، وإعادة الهيكلة، الضرائب، وتأمين الشحن، و أضرار النقل. كما أننا نقدم لعملائنا في قطاع الشحن حزمة متنوعة من خدمات مكتب المحاماة."
  },
];
const LegalServicesSectors = () => {
  return (
    <section className={styles.category}>
      <h2>القطعات</h2>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryCard}>
          <CardContent
            visionContentstyle="content"
            title={data[0].title}
            desc={data[0].desc}
          />
          <CardImg
            imgStyle="imgleft"
            path={data[0].path}
            title={data[0].title}
            alt = {data[0].alt}
          />
        </div>
        <div className={styles.categoryCard}>
          <CardImg
            imgStyle="imgright"
            path={data[1].path}
            title={data[1].title}
            alt = {data[1].alt}

            
          />
          <CardContent
            visionContentstyle="contentleft"
            title={data[1].title}
            desc={data[1].desc}
          />
        </div>
        <div className={styles.categoryCard}>
          <CardContent
            visionContentstyle="content"
            title={data[2].title}
            desc={data[2].desc}
          />
          <CardImg
            imgStyle="imgleft"
            path={data[2].path}
            title={data[2].title}
            alt = {data[2].alt}

          />
        </div>
        <div className={styles.categoryCard}>
          <CardImg
            imgStyle="imgright"
            path={data[3].path}
            title={data[3].title}
            alt = {data[3].alt}

          />
          <CardContent
            visionContentstyle="contentleft"
            title={data[3].title}
            desc={data[3].desc}
          />
        </div>
      </div>
      <div className={styles.linkContainer}>
        <Link href="/sectors" className={styles.linkItem}>
          تصفح القطاعات القانونية
          <Image
            src="assets/icons/legalservices/arrow-left.svg"
            alt="arrow-left"
            width={30}
            height={30}
          />
        </Link>
        {/* <Link href="#" className={styles.linkItem}>
          راسلنا عبر البريد الالكتروني
          <Image
            src="/assets/icons/legalservices/calender.png"
            alt="Calendar icon"
            width={30}
            height={30}
          />
        </Link> */}
      </div>
    </section>
  );
};

export default LegalServicesSectors;
