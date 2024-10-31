import Image from "next/image"
import styles from "./page.module.css"
const JoinAbout = () => {
  return (
    <section className={styles.about}>
        <div className={styles.parent}>
        <div>
          <h2>من نحن؟</h2>
          <p>
          المجموعة التجارية والبحرية للمحاماة مؤسسة قانونية رائدة في مصر والوطن العربي, نتخصص في تقديم خدمات متميزة في مجال القانون, حيث نُعد مكتبًا موثوقًا للإستشارات القانونية والتمثيل القانوني. نجمع بين الخبرة العميقة والخدمة المتميزة لعملائنا، وتضم مكاتبنا فريقًا متميزًا من المحامين والمستشارين القانونيين الذين يتمتعون بخبرة واسعة في مختلف مجالات القانون؛ مما يمكِّنهم من تقديم حلول فعّالة ومبتكرة لقضايا عملائهم
          </p>
          <p className={styles.child3}>تعرف علينا</p>
          <Image
          src="/assets/images/joinus/bottomL.png"
          width={135}
          height={135}
          alt="bottomL image"
        />
        </div>
        <Image
          src="/assets/images/joinus/topL.png"
          width={135}
          height={135}
          alt="topL image"
        />
        </div>
      </section>
  )
}

export default JoinAbout
