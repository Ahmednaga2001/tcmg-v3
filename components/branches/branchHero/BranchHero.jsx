import Image from "next/image"
import styles from "./page.module.css"
const BranchHero = () => {
  return (
    <section className={styles.hero}>
       <h2>فروع مكاتب TCMG للمحاماة </h2>
        <div className={styles.content}>
          <p>
          هل تبحث عن أقرب فروع مكاتب المحامين لك؟ لا داعى للبحث، نحن بجانبك لنساعدك في كافة الإستشارات الخدمات القانونية الخاصة بك مع مكاتب المجموعة التجارية والبحرية للمحاماة بمصر ودول الوطن العربي، وأيضأً ستجدنا في الصين.
            <br className={styles.br}/>  يمكنك الآن الاعتماد على خدماتنا لما لنا من سجل نجاحات مشرف على الصعيدين المحلي والدولي، ننتظرك في مكاتبنا المختلفة حول العالم لنتمكن من مساعدتك بأقصي درجة.
          </p>
        </div>
      </section>
  )
}

export default BranchHero
