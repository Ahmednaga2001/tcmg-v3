import Hero from '@/components/shared/hero/Hero'
import Services from '@/components/shared/services/Services'
import styles from './page.module.css'

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
      <Hero title = {"الممارسات"} path={"/assets/images/practices/hero.svg"}/>
      <Services data = {data}/>
          </section>
  )
}

export default Practices
