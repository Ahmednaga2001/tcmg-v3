import Image from "next/image";
import styles from "./page.module.css";
import LegalServiceCard from "./LegalServiceCard";
const data = [
  {
    title: "ترخيص مزاولة النشاط ",
    desc : "نقوم بتقديم ترخيص مزاولة الأعمال لشركتك الذي يضمن استقرار وتماسك الشركة، فضلاً عن حصولك على امتيازات حصرية من أكبر مكتب تأسيس شركات في مصر.",
    path: "/assets/icons/establish/ترخيص مزاولة النشاط.svg",
    alt : "ترخيص مزاولة النشاط"
  },
  {
    title: "صياغة العقود",
desc : "نتولى أمور صياغة العقود وتوثيقها بكافة أنواعها خاصة فيما يتعلق بشؤون تأسيس الشركات داخل مصر وخارجها. كما يتولى فريق عملنا صياغة عقود العلاقات التجارية بين الشركات لضمان نجاح جميع الأطراف.",
    path: "/assets/icons/establish/صياغة العقود.svg",
    alt : "صياغة العقود"
  },
  {
    title: "تأسيس الشركات",
desc : "نحن مكتب تأسيس شركات متخصص في تقديم هذه الخدمة بكل ما يشملها من إعداد الوثائق والمستندات، وصولاً لتوثيق عقد تأسيس شركة في الجهات الرسمية، والحصول على سجل تجاري لجميع أنواع الشركات.",
    path: "/assets/icons/establish/تأسيس الشركات.svg",
    alt : "تأسيس الشركات"
  },
  {
    title: "استشارة قانونية",
   desc : "استشارة قانونية يختص محامين ومستشارين مكاتب TCMG في تقديم خدمة الاستشارات القانونية لتأسيس الشركات أيًا كان نوعها، بتقديم الدعم القانوني اللازم للمساعدة على اتخاذ القرار فيما يصب نجاح النشاط التجاري.",
    path: "/assets/icons/establish/إستشارة قانونية.svg",
    alt : " استشارة قانونية"
  },
  {
    title: "الجمعيات العمومية",
desc : "نوَلِّي في المجموعة التجارية والبحرية للمحاماة اهتمامًا بأمور الجمعيات العمومية، بتنفيذ مهام إضافة شركاء جدد أو إزالة آخرون، كذلك عمل تعديلات في صلاحيات الإدارة أو رأس مال الشركة.",
    path: "/assets/icons/establish/الجمعيات العمومية.svg",
    alt : "الجمعيات العمومية"
  },
  {
    title: "تسجيل العلامات التجارية",
desc : "نقدم خدمة تسجيل العلامة التجارية للشركات باعتبارنا مكتب تأسيس شركات؛ بهدف جلب المزيد من الفرص الاستثمارية؛ بالتالي زيادة الأرباح، وبناء أساس قوي في عالم الأعمال، بالإضافة إلى نشر اسم الشركة في السوق التجاري والحفاظ على العلامة من السرقة أو الإنتحال.",
    path: "/assets/icons/establish/تسجيل العلامات التجارية.svg",
    alt : "تسجيل العلامة التجارية"
  },
  {
    title: "تقارير الضرائب",
    desc: `تقارير الضرائب
نهتم بالتعامل الشامل مع الملفات الضريبة الخاصة بالشركات، كأحد الخدمات المالية لدينا. نقدم الدعم الكامل بتوكيل محامي ضرائب مختص بالأمور المالية؛ لتحقيق أفضل السبل لاقتصاد ماليات الشركة.`,
    path: "/assets/icons/establish/تقارير الضرائب.svg",
    alt : "تقارير الضرائب",
  },
  {
    title: "متابعة ما بعد التأسيس",
    desc: ` 
نتميز في مكاتب المجموعة التجارية والبحرية للمحاماة عن باقي مكاتب المحاماة في مصر بتقديم ميزة إضافية، وهي متابعة ما بعد خدمة تأسيس الشركات لضمان استمرارية النشاط التجاري قائم بنجاح وقوة.`,
    path: "/assets/icons/establish/متابعة ما بعد التأسيس.svg",
    alt :"متابعة ما بعد التأسيس"
  },
];
const EstablishLegalServices = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.whyChooseContent}>
      <h2>خدماتنا القانونية في تأسيس الشركات</h2>
    
        <p>
        عملنا بجد لتقديم خدمات ذكية ومرنة ومعقولة التكلفة تعود بالنفع على جميع عملائنا الراغبين في تأسيس الشركات في مصر والوطن العربي. تصفح قائمة خدماتنا ، واتصل بنا لحجز لقاء تمهيدي مع أحد خبراء مكاتب  TCMG.
        </p>
      </div>
      <div className={styles.accordionParent}>
        <LegalServiceCard
          title={data[0].title}
          path={data[0].path}
          desc={data[0].desc}
          alt = {data[0].alt}
        />
        <LegalServiceCard
          title={data[1].title}
          path={data[1].path}
          desc={data[1].desc}
          alt = {data[1].alt}

        />
        <LegalServiceCard
          title={data[2].title}
          path={data[2].path}
          desc={data[2].desc}
          alt = {data[2].alt}

        />
        <LegalServiceCard
          title={data[3].title}
          path={data[3].path}
          desc={data[3].desc}
          alt = {data[3].alt}

        />
        <LegalServiceCard
          title={data[4].title}
          path={data[4].path}
          desc={data[4].desc}
          alt = {data[4].alt}

        />
        <LegalServiceCard
          title={data[5].title}
          path={data[5].path}
          desc={data[5].desc}
          alt = {data[5].alt}

        />
      </div>
    </section>
  );
};

export default EstablishLegalServices;
