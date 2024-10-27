import Image from "next/image";
import styles from "./page.module.css";
import Branches from "@/client/homePage/Branches";
import Parteners from "@/client/homePage/Parteners";
import HomeHero from "@/components/home/homeHero/HomeHero";
import HomeCarousel from "@/components/home/client/homeCarousel/HomeCarousel";
import HomeWhyUs from "@/components/home/homeWhyUs/HomeWhyUs";
import Customers from "@/components/shared/customers/Customers";
import Stats from "@/components/shared/stats/Stats";
import HomeScroll from "@/components/home/client/homeScroll/HomeScroll";
import HomeArticleScroll from "@/components/home/client/homeScroll/HomeArticleScroll";
import HomeTeam from "@/components/home/client/homeTeam/HomeTeam";

const services = [
  {
    id: 1,
    img: "/assets/images/homePage/تأسيس الشركات.png",
    header: "تأسيس الشركات",
    alt: "مكتب قانوني لتأسيس شركات في مصر",
    body: "هل ترغب في تأسيس شركة في مصر؟ نعمل على تقديم الدعم لأعمال الشركات المختلفة بمستوى مميز من الأداء. حيث نقدم الدعم في تأسيس الشركات في مصر والسعودية والإمارات بمختلف أنواعها، وإعداد عقود التأسيس واللوائح الداخلة، بالإضافة إلى مساعدة العملاء على اختيار نوع الشركة، وتوفير الدعم في كافة مراحل التأسيس والإعداد.",
  },
  {
    id: 2,
    img: "/assets/images/homePage/الاستشارات القانونية.png",
    header: "الاستشارات القانونية",
    alt: "مكتب محاماة واستشارات قانونية في مصر",
    body: "نفخر بتقديم الاستشارات القانونية  من مستشار قانوني مُحنك مع دعم من أكبر محامين مصر المتخصصين في مجالات القانون المختلفة والمستعدين لتقديم المشورة والرأي القانوني حول القضايا المختلفة للأفراد والشركات مع تقديم أفضل الحلول الموثوقة لمشكلاتهم القانونية وهذه الخدمة لكل من يبحث عن رقم محامي للاستشارة.",
  },
  {
    id: 3,
    img: "/assets/images/homePage/توكيل محامي .png",
    header: "توكيل محامي",
    alt: "توكيل محامي من مكتب محاماة دولي",
    body: "هل تواجه أي صعوبة في حل مسائلك القانونية؟ نقدم من خلال مجموعة مكاتب TCMG خدمة توكيل محامي يتمتع بكفاءة عالية وخبرة كافية في شتى فروع القانون, بما يلزم لتقديم دعم قانوني قوي أو إتمام إجراءات قانونية نيابة عنك, سواء كنتَ فردًا أو شركةً.",
  },
];

const cases = [
  {
    id: 1,
    img: "/assets/images/homePage/اسواقالمال.png",
    header: "أسواق المال ",
    alt: "شركة محاماة خبيرة في أسواق المال",
    body: "تقوم المجموعة بدورًا مهمًا في أسواق المال من خلال تقديم الاستشارات القانونية المتخصصة في القضايا المالية والمصرفية. نعمل على ضمان الامتثال الكامل للوائح المالية, وتمثيل عملائنا أمام الهيئات التنظيمية والمحاكم المالية؛ مما يساهم في حماية حقوقهم وتعزيز استثماراتهم بأعلى معايير الأمان والشفافية.",
  },
  {
    id: 2,
    img: "/assets/images/homePage/الاندماج.png",
    header: "الإندماج والإستحواذ",
    alt: " خدمة الدمج والاستحواذ القانونية",
    body: "في TCMG, نقوم بدورٍ فعًّال للشركات في عمليات الأندماج والأستحوازك, حيث نعمل على ضمان الامتثال الكامل للقوانين واللوائح المحلية والدولية, ونسعى لتحقيق أهداف عملائنا الاستراتيجية بكفاءة عالية. نمثل أيضًا عملاءنا في التفاوض وإبرام العقود؛ مما يساعدهم في تحقيق نمو مستدام وتوسيع نطاق أعمالهم بطريقة منظمة وفعًّالة",
  },
  {
    id: 3,
    img: "/assets/images/homePage/بنكية.png",
    header: "الخدمات البنكية والمالية",
    alt: "مكاتب محاماة مالية",
    body: "هل تبحث عن استشارات قانونية موثوقة في القطاعين البنكي والمالي؟ نساعد كلًا من للشركات والمؤسسات في هذا المجال عن طريق ضمان الامتثال الكامل للوائح المالية والمصرفية وتمثيلهم أمام الهيئات التنظيمية والمحاكم المختصة. نسعى إلى تقديم حلول قانونية مبتكرة تدعم النمو المالي وتعزز الثقة والاستقرار في استثمارات عملائنا.",
  },
  {
    id: 4,
    img: "/assets/images/homePage/تطوير عقاري.png",
    header: "التطوير العقاري والإنشاءات",
    alt: "إكمال الإجراءات القانونية للتطوير العقاري",
    body: "هل ترغب في دعم قانوني لمشروعات التطوير العقاري والإنشاءات؟ سنساعد الشركات في العمل على إعداد ومراجعة عقود الإنشاءات والتطوير, وضمان الامتثال للوائح والقوانين المحلية والدولية. نحرص على تقديم الدعم القانوني لعملائنا لضمان نجاح مشروعاتهم وحمايتهم من المخاطر القانونية المحتملة",
  },
  {
    id: 5,
    img: "/assets/images/homePage/تحكيم تجاري.png",
    header: "التحكيم التجاري",
    alt: "مكتب تحكيم تجاري معتمدة",
    body: "هل تواجه نزاعات تجارية وتحتاج إلى حل سريع وفعال؟ في المجموعة التجارية والبحرية, نعمل على تقديم استشارات قانونية متخصصة للشركات, وتمثيلهم أمام هيئات التحكيم المحلية والدولية. نضمن حماية حقوقك التجارية والحصول على حلول سريعة وعادلة, بما يتوافق مع المعايير القانونية العالمية",
  },
  {
    id: 6,
    img: "/assets/images/homePage/نقل وشحن.png",
    header: "النقل والشحن",
    alt: "خدمات نقل وشحن موثوقة",
    body: "في المجموعة التجارية والبحرية للمحاماة, نقدم دعمًا قانونيًا شاملاً لكل الشركات العاملة في قطاع النقل والشحن البحري أو حتى البري. نعمل على إتمام عقود النقل, حل النزاعات المتعلقة بالشحن وأيضًا تقديم استشارات قانونية متخصصة لضمان الامتثال للقوانين الدولية وحتى المحلية",
  },
  {
    id: 7,
    img: "/assets/images/homePage/التقاضي.png",
    header: "التقاضي",
    alt: "مكتب محاماة دولى فى مصر للتقاضي",
    body: "تقدم المجموعة التجارية والبحرية للمحاماة خبرات متعمقة للشركات في تقديم الدعم القانوني أمام المحاكم المختلفة. نعمل على تحليل القضايا بدقة, إعداد مرافعات قوية وأيضًا تقديم حجج قانونية مدعومة بأدلة قوية.",
  },
];




const customers = [
  {
    id: 1,
    img: "/assets/images/homePage/lawyers/Ellipse 4.png",
    name: "دكتور عمرو حسان",
    category: "مهندس إماراتي خبير",
    body: "جهود إستثنائية في دعم الموكلين والعمل على خطاهم. سعيد بتعاملي مع المجموعة التجارية والبحرية وممتن لما قدموه لي من خدمات",
  },
  {
    id: 2,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "دكتور خالد الحوشي",
    category: "مدير ماليات",
    body: "دقة عالية وسرعة في الإداء وتعامل راقي مع محامو المكتب. بدعمهم تتحقق الأهداف وتحل المشكلات القانونية، شكراً لكم ",
  },
  {
    id: 3,
    img: "/assets/images/homePage/lawyers/image 6.png",
    name: "أستاذة فاطمة عيسى",
    category: "رائدة أعمال",
    body: "خدمات قانونية على أعلى مستوى تدعم عالم المال والأعمال، والأفضل من ذلك خبرة المحامين وسرعة الأداء والرد. شكراً جزيلاً على هذا الخبرات اللامعة",
  },
  {
    id: 4,
    img: "/assets/images/homePage/lawyers/Ellipse 2(1).png",
    name: "أستاذ عمرو الشراكي",
    category: "مستثمر ورجل أعمال",
    body: "تعاقدي مع مكتب المحامي محمد أبو ضيف وشركائه الخبراء مكَّنني على تحقيق أهدافي القانونية بداية من كتابة العقود وحتى تأسيس الشركة في مصر الحبيبة. حقاً أنا أقدر ذلك",
  },
];

const articles = [
  {
    id: 1,
    header: "محامي في مصر",
    date: "28 يناير   . 9 دقائق",
    body: "على مر السنين وقد تم الاعتراف بالمحامي المصري كونه أحد أجدر رجال القانون في تولي المسائل القانونية, فقد عُرِف بعقليته الاستراتيجية العالية وامتلاكه المقدرة الفائقة في إدارة الأزمات وفض المنازعات المحلية والدولية في كثير من بلاد الوطن العربي في شتى فروع القانون.",
    img: "/assets/images/homePage/articles/محامي في مصر.png",
  },
  {
    id: 2,
    header: "تأسيس شركة في السعودية",
    date: "28 يناير   . 9 دقائق",
    body: "هي خطوة جوهرية للعديد من رواد الأعمال والمستثمرين الراغبين في استغلال الفرص الاقتصادية المتاحة في البلاد، حيث تعد المملكة العربية السعودية واحدة من أكبر الاقتصادات في الشرق الأوسط وتتمتع ببيئة استثمارية مشجعة ومتطورة.",
    img: "/assets/images/homePage/articles/تأسيس شركة في السعودية.png",
  },
  {
    id: 3,
    header: "تأسيس شركة في السعودية",
    date: "28 يناير   . 9 دقائق",
    body: "هي خطوة جوهرية للعديد من رواد الأعمال والمستثمرين الراغبين في استغلال الفرص الاقتصادية المتاحة في البلاد، حيث تعد المملكة العربية السعودية واحدة من أكبر الاقتصادات في الشرق الأوسط وتتمتع ببيئة استثمارية مشجعة ومتطورة.",
    img: "/assets/images/homePage/articles/تأسيس شركة في السعودية2.png",
  },
  {
    id: 4,
    header: "حماية الملكية الفكرية",
    date: "28 يناير   . 9 دقائق",
    body: "تعد أحد أفرع الملكية حيث لا تقتصر على كونها ملكية مادية فقط خاصة بالعقارات، ويندرج تحتها براءات الاختراع وحقوق النشر والعلامات التجارية؛ لذا وقد باتت الحاجة تتطلب توكيل المحامي المختص بحماية الملكية الفكرية.",
    img: "/assets/images/homePage/articles/حماية الملكية الفكرية.png",
  },
];



export const metadata = {
  title: "Home",
  description : "هل تبحث عن شركة محاماة دولية في مصر؟ اتصل الآن بمكتب محاماة TCMG، واحصل على دعم قانوني متميز لجميع الاحتياجات القانونية، في كلا الصعيدين المحلي والدولي.",
  keywords : "مكتب محاماة دولي في مصر، شركة محاماة في مصر، مكتب محاماة واستشارات قانونية"
};
function Home() {
  return (
    <div className={styles.page}>
      <HomeHero />
      <HomeCarousel />
      <HomeWhyUs />
      <HomeScroll cases={cases} services={services} />
      <HomeTeam />
      <Stats />
      {/* <Customers customers={customers} /> */}

      <HomeArticleScroll articles={articles} />
      <Branches />
      <Parteners />
    </div>
  );
}









export default Home;