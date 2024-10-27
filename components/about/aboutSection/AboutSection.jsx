import styles from "@/components/about/aboutSection/AboutSection.module.css"
import Image from "next/image"
const AboutSection = () => {
  return (
    <section className={styles.aboutLawFSection}>
    <div className={styles.aboutSectionContainer}>
      <div className={styles.aboutContent}>
        <h2>من هي المجموعة التجارية والبحرية للمحاماة ؟</h2>
        <p>
        المجموعة التجارية والبحرية للمحاماة والاستشارات القانونية، هي أحد مكاتب المحاماة الكبيرة في مصر لصاحبها المحامي محمد أبو ضيف، صاحبة الريادة في مجال المحاماة والقانون بخبرة محامين ومستشارين بما يزيد عن 30 عامٍ من التعلم والممارسة، وتحقيق سلسلة لا تنتهي من النجاحات المتوالية، بما يثبت كفائتنا في تطبيق القانون ونشر العدالة في مصر والشرق الأوسط أجمع.
        </p>
      </div>
      <div className={styles.imageBox}>
        <Image
          src="/assets/symbols/about/topL.png"
          alt="Group for Commercial and Maritime Law logo"
          width={140}
          height={141}
          className={styles.img}
        />
        <Image
          src="/assets/symbols/about/bottomL.png"
          alt="Symbol representing legal excellence"
          width={140}
          height={141}
          className={styles.overlayedImage}
        />
      </div>
    </div>
  </section>
  )
}

export default AboutSection
