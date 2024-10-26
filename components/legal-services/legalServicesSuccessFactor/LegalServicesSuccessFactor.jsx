import SuceessFactorCard from "./SuceessFactorCard"
import styles from "./page.module.css"
const data = [
    {
      title: "الاحترافية",
      desc: "تمثل الاحترافية أحد معاييرنا الأساسية، حيث نسعى جاهدين لتقديم خدمات قانونية للشركات وجميع الكيانات، بكل مهارة وعلى مستوى عالٍ من الجودة والاحترافية. نحن نلتزم بتقديم استشارات وحلول قانونية متميزة تضمن تحقيق أفضل النتائج لعملائنا.",
      path: "/assets/icons/legalservices/settingIcon.png",
      w1 : 64,
      h1: 64,
      w2 : 48,
      h2 : 48,
      alt : "احترافية في تقديم خدمات قانونية"
      
    },
    {
      title : "السرعة والدقة",
      desc : "تسعى مكاتبنا بالمجموعة التجارية والبحرية للمحاماة دائمًا لتقديم الحلول القانونية ضمن إطار زمني قصير دون التقصير في جمع تفاصيل القضية بدقة ومهارة عاليتين.",
      path: "/assets/icons/legalservices/speedIcon.png",
      w1 : 64,
      h1: 64,
      w2 : 48,
      h2 : 48,
      w2 : 48,
      h2 : 48,
      alt : "الحفاظ على الدقة والسرعة"
    },
    {
      title : "سنوات الخبرة",
      desc : "ترجع كفاءِة محامينا بمكاتب المجموعة التجارية والبحرية في تقديم الخدمات القانونية إلى سنوات الخبرة بما يزيد عن 30 عامًا، من تنمية المهارات والخبرات المتراكمة.",
      path: "/assets/icons/legalservices/personsIcon.png",
      w1 : 64,
      h1: 64,
      w2 : 48,
      h2 : 48,
      alt : "سنوات من الخبرة في تقديم خدمات قانونية"
    },
    {
      title : "فعالية النتائج",
      desc : "يعمل فريقنا من المحامين بجدية واجتهاد سعيًا لتحقيق احتياجات الموكلين من الخدمات القانونية والحرص التام على تقديم حلول فعالة وضمان نجاح القضية.",
      path: "/assets/icons/legalservices/notesIcon.png",
      w1:61,
      h1 : 75,
      w2 : 48,
      h2 : 48,
      alt : "نتائج فعالة"
    },
  ]
const LegalServicesSuccessFactor = () => {
  return (
    <section className={styles.succeesfactors}>
    <h2>معايير نجاح مجموعة TCMG في مجال المحاماة</h2>
    <div className={styles.parent}>
     {
      data.map((el,index)=>{
        return <SuceessFactorCard title={el.title} w1={el.w1} h1={el.h1} w2={el.w2} h2={el.h2} alt={el.alt} desc={el.desc} path={el.path} key={index}/>
      })
     }

    </div>
  </section>
  )
}

export default LegalServicesSuccessFactor
