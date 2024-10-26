import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const EstablishHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>تأسيس الشركات وريادة الأعمال في مصر بأعلى الامتيازات </h1>
        <p>
          مع المجموعة التجارية والبحرية للمحاماة،
          <br />
          أصبح حلم ريادة الأعمال وتأسيس شركة راسخة واقعاً.
        </p>
        <Link href="#"  
            className={styles.assets}
        >
          تعرف على المزيد
          <Image
            src="/assets/icons/establish/arrowleft.png"
            width={20}
            height={20}
            alt="arrow-left"
          />
        </Link>
      </div>
    </section>
  );
};

export default EstablishHero;
