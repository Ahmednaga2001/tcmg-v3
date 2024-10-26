import ConsultSupportCard from "./ConsultSupportCard"
import styles from "./page.module.css"
const data = [
    {
        title : "بناء علاقات استراتيجية قوية مع العملاء",
        path : "/assets/icons/legalconsultations/supportone.png",
        w : 132,
        h : 93,
        alt : "بناء علاقات استراتيجية قوية"
    },
    {
        title : "متابعة مخصصة لما بعد الاستشارة",
        path : "/assets/icons/legalconsultations/supporttwo.png",
        w : 115,
        h : 107,
        alt : "خدمة ما بعد أي استشاره قانونيه"
    },
    {
        title : "الدعم التام من أقوى المستشارين ",
        path : "/assets/icons/legalconsultations/supportthree.png",
        w : 87,
        h : 107,
        alt : "مستشارين قانونيين داعمين"
    },
  
]
const ConsultSupport = () => {
  return (
    <section className={styles.legalSupport}>
        <div className={styles.heading}>
            <h2>وجهتك الأولى لنصرة قضاياك وحل التعقيدات القانونية</h2>
            <p>أن تجد المحامي والمستشار القانوني المناسب للاستماع لمشاكلك القانونية بحرص, أو الإجابة على كافة الأسئلة فيما يخص شؤونك القانونية بإجابات موثوقة لتتخذ القرار القانوني الصحيح, هو أمر أصبح قليل الوجود في مكاتب وشركات المحاماة الآن, لكن مع المجموعة التجارية والبحرية مكتب محاماة واستشارات قانونية متخصص, هو المكان حيث نضم مجموعة كبيرة من أكبر محامين ومستشارين مصر خبرةً ودقة في تلبية احتياجاتك بمهارة وسرعة, مع الحفاظ على سرية كامل جلسة الاستشارة, ولضمان تقديم خدمة الاستشارات القانونية باحترافية فإننا نلتزم بالمبادئ التالية:</p>
        </div>
        <div className={styles.parent}>
          {
            data.map((el,index)=>{
                return <ConsultSupportCard  title = {el.alt} path={el.path} w={el.w} h={el.h} key={index}/>
            })
          }

        </div>
    </section>
  )
}

export default ConsultSupport
