import Hero from '@/components/shared/hero/Hero'
import Services from '@/components/shared/services/Services'
import styles from './page.module.css'
// const data = [
//   "الأندماج والاستحواذ","Capital Markets - قضايا أسواق المال","قضايا التمويل والأوراق المالية",
//   "التحكيم التجاري الدولي","التجارة الدولية","قضايا الاتصالات","Banking -قضايا المعاملات المصرفية",
//   "Corporate - أعمال الشركات","Public Funds - قضايا الأموال العامة","Construction -قضايا الإنشاءات والمقاولات",
//   "Real Estate - القضايا العقارية","Intellectual Property - الملكية الفكرية","Bankruptcy - قضايا التنفيذ والإفلاس",
//   "Tax - قضايا الضرائب","Insurance -قضايا التأمين","Administrative - القضايا الإدارية","Criminal Law - القضايا الجنائية",
//   "Civil - القضايا المدنية","Legal Consultation - إستشارة قانونية","استشارة قانونية مميزة VIP"
// ]
const data = [
  "تأسيس الشركات",
        "التقاضي",
        "الملكية الفكرية",
        "الضرائب",
        "التأمين",
        "العقارات",
        "الأموال العامة",
        "التوظيف",
        "جميع الممارسات" 
]
export const metadata={
  title : "Practices",
}
const Practices = () => {
  
  return (
    <section className={styles.practices}>
      <Hero title = {"الممارسات"} path={"/assets/images/practices/hero.jpg"}/>
      <Services data = {data}/>
          </section>
  )
}

export default Practices
