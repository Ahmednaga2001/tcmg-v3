import Link from "next/link"
import styles from "./page.module.css"
import Image from "next/image"
const BusinessHero = () => {
  return (
    <section className={styles.hero}>
        <h1>
        أرتقي بشركتك نحو القمة مع المجموعة التجارية والبحرية للمحاماة 
        </h1>
        <p>شريكك القانوني الموثوق لتحقيق إنجازات ملحوظة واستدامة مستمرة</p>
     <Link href="about-us" className={styles.btn}>
        تعرف علينا
          <Image
            src="/assets/icons/form/arrow-left-white.png"
            width={20}
            height={20}
            alt="arrow-left"
          />
        </Link>
      </section>
  )
}

export default BusinessHero
