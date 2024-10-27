import OfferingCard from "./OfferingCard"
import styles from "./page.module.css"
const data = [
  {
      id : 1,
      title : "تحليل دقيق لقضيتك",
      desc : "نقدم خدمات قانونية مع خبرائنا؛ لتوفير ما يناسب عملائنا من جلسات استشارية مكثفة؛ لفهم شتى جوانب القضية وتحديد الأهداف القانونية بدقة."
  },
  {
      id : 2,
      title : "إعداد الاستراتيجية",
      desc : "خدمات مكتب المحاماة التي نقدمها كفريق متكامل من المتخصصين، تعمل على الجمْع بين جوانب القضية، وإيجاد أكثر الحلول القانونية المناسبةً."
  },
  {
      id : 3,
      title : "التنفيذ والدعم",
      desc : "نعمل على تنفيذ تلك الاستراتيجية، مع تحديد جدولة زمنية وجمع الشهود والمثول أمام المحاكم بقوة لنصرة قضيتك."
  },
  {
      id : 4,
      title : "المتابعة والتقييم",
      desc : "نقدم كذلك ضمن باقة الخدمات القانونية الإضافية، متابعة أحداث القضية حفاظًا على حقوقك والتأكد من سلامتها ضد الجاني."
  }
]
const LegalServiceOurOfferings = () => {
  return (
    <section className={styles.ourofferings}>
      <h2>كيف ندعمك على تحقيق هدفك القانوني؟</h2>
    <div className={styles.parent}>
      {
        data.map((el)=>{
            return (
              <div key={el.id}>
              <OfferingCard  id={el.id} title = {el.title} desc={el.desc} />
              </div>
            )
        })
      }

    </div>

</section>
  )
}

export default LegalServiceOurOfferings
0