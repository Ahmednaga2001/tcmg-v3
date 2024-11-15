import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const JoinAbout = () => {
  return (
    <section className={styles.about}>
      <div className={styles.parent}>
        <div>
          <h2>من نحن؟</h2>
          <p>
            المجموعة التجارية والبحرية للمحاماة مؤسسة قانونية رائدة في مصر
            والوطن العربي, نتخصص في تقديم خدمات متميزة في مجال القانون, حيث نُعد
            مكتبًا موثوقًا للإستشارات القانونية والتمثيل القانوني. نجمع بين
            الخبرة العميقة والخدمة المتميزة لعملائنا، وتضم مكاتبنا فريقًا
            متميزًا من المحامين والمستشارين القانونيين الذين يتمتعون بخبرة واسعة
            في مختلف مجالات القانون؛ مما يمكِّنهم من تقديم حلول فعّالة ومبتكرة
            لقضايا عملائهم
          </p>
          <p className={styles.child3}>تعرف علينا</p>
          <span className={styles.linkContainer}>
     <Link className="link"  href="about-us">
        تعرف علينا
        <Image
          src="/assets/icons/joinus/arrow-left.png"
          width={20}
          height={20}
          alt="arrow-left.png"
        />
      </Link>
     </span>
          <Image
            src="/assets/images/joinus/bottomL.png"
            width={135}
            height={135}
            alt="bottomL image"
            className={styles.img}
          />
        </div>

        <Image
          src="/assets/images/joinus/topL.png"
          width={135}
          height={135}
          alt="topL image"
          className={styles.img}
        />
      </div>
    </section>
  );
};

export default JoinAbout;
