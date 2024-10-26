import Image from "next/image"
import styles from "./page.module.css"
const JoinAbout = () => {
  return (
    <section className={styles.about}>
        <div className={styles.parent}>
        <div>
          <h2>من نحن؟</h2>
          <p>
            المجموعة التجارية والبحرية للمحاماة هي مؤسسة قانونية رائدة في مصر
            والوطن العربي تتخصص في تقديم خدمات متميزة في مجال القانون. نُعد
            مركزًا موثوقًا به للإستشارات القانونية والتمثيل القانوني, حيث نجمع
            بين الخبرة العميقة والخدمة المتميزة لعملائنا. يضم مكتبنا فريق متميز
            من المحامين والمستشارين القانونيين الذين يتمتعون بخبرة واسعة في
            مختلف مجالات القانون, مما يمكِّنهم من تقديم حلول فعّالة ومبتكرة
            لقضايا عملائهم.
          </p>
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
