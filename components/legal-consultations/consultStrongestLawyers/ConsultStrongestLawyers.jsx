import Team from "@/components/shared/client/Team/Team"
import styles from "./page.module.css"
const lawyers = [
    {
      id: 1,
      name: "محمد أبو ضيف",
      category: "الرئيس التنفيذي",
      img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
      alt : "الرئيس التنفيذي لأفضل مكتب استشارات قانونية"
    },
    {
      id : 2,
      name : "آية محمد",
      category : "النقل والشحن",
      img : "/assets/images/homePage/lawyers/آية محمد.png",
      alt : "مستشار النقل والشحن"
    },
    {
      id : 3,
      name : "دعاء قنديل",
      category : "صياغة العقود وقانون الشركات",
      img : "/assets/images/homePage/lawyers/دعاء قنديل.png",
      alt : "مستشار العقود وقانون الشركات"
    },{
      id : 4,
      name : "أحمد سعيد",
      category : "التحكيم التجاري وقانون الشركات",
      img : "/assets/images/homePage/lawyers/أحمد سعيد.png",
      alt : "مستشار التحكيم التجاري وقانون الشركات"
    },
    {
      id : 5,
      name : "سهى خيري",
      category : "التمويل والبنوك",
      img : "/assets/images/homePage/lawyers/سهي خيري.png",
      alt : "مستشار التمويل والبنوك"
    }
  
  ];
const ConsultStrongestLawyers = () => {
  return (
    <section className={styles.lawyers}>
       <div className={styles.content}>
       <h2>فريق من خبراء المشورة القانونية مستعدون لدعمك</h2>
       <p>تعد TCMG أفضل مكتب استشارات قانونية فورية في مصر, حيث يكرس فريق العمل والمحامون كل جهودهم وخبرتهم العميقة طيلة سنوات خدمتهم للحق القانوني داخل مصر وخارجها. يقدم خبرائنا استشاره قانونيه فورية بكل شغف لدعم الموكلين، مع تقديم أفضل الحلول القانونية المناسبة لمعطيات المشكلة؛ لضمان حل القضية واتخاذ القرار المناسب بناءً على بنود القانون في كافة المجالات.</p>
       </div>
       <div className={styles.lawyerContainer}>
        <Team lawyers={lawyers}/>
       </div>
    </section>
  )
}

export default ConsultStrongestLawyers
