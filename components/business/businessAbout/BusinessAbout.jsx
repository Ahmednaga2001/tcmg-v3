import Image from "next/image";
import styles from "./page.module.css";
import Team from "@/components/shared/client/Team/Team";
import Link from "next/link";
const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
    alt : "محمد أبو ضيف"
  },
  {
    id : 2,
    name : "آية محمد",
    category : "النقل والشحن",
    img : "/assets/images/homePage/lawyers/آية محمد.png",
    alt : "آية محمد",

  },
  {
    id : 3,
    name : "دعاء قنديل",
    category : "صياغة العقود وقانون الشركات",
    img : "/assets/images/homePage/lawyers/دعاء قنديل.png",
    alt : "دعاء قنديل",

  },{
    id : 4,
    name : "أحمد سعيد",
    category : "التحكيم التجاري وقانون الشركات",
    img : "/assets/images/homePage/lawyers/أحمد سعيد.png",
    alt : "أحمد سعيد",

  },
  {
    id : 5,
    name : "سهى خيري",
    category : "التمويل والبنوك",
    img : "/assets/images/homePage/lawyers/سهي خيري.png",
    alt : "سهى خيري",

  }

];
const BusinessAbout = () => {
  return (
    <section className={styles.expert}>
      <h2>
      فريق قانوني متكامل بخبرات تزيد عن الـ20 عامًا

      </h2>
      <div className={styles.content}>
        <p>
        منذ تأسيس المجموعة التجارية والبحرية للمحاماة، وقد بدأنا رحلتنا بابتكار وتفوق مستمر في تقديم الخدمات القانونية وخاصًة خدمات رجال الأعمال. على مر السنوات، نجحنا في تحقيق إنجازات بارزة تعزز من سمعتنا كمجموعة مكاتب قانونية رائدة في مصر والشرق الوسط. نلتزم بالاحترافية والتفاني في العمل، عن طريق تقديم دعم قانوني متكامل للشركات؛ مما يساهم في تعزيز نجاحها وتوسيع قاعدة تواجدها في سوق الاعمال. نحن نواصل التزامنا بالتفوق والتطور؛ مما يعكس رؤية واضحة لمستقبل مشرق لك.
        </p>
        <Image
          src="/assets/images/business/c1 __ 2.png"
          width={135}
          height={135}
          alt="L Image"
        />
      </div>
      <Team lawyers={lawyers}/>
      {/* <Link href="lawyers" className={styles.link}>
      تعرف علينا
  <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24} alt="arrow left icon" />
</Link> */}
    </section>
  );
};

export default BusinessAbout;
