import Link from "next/link"
import styles from "./page.module.css"
import Image from "next/image"
const LegalServicesHero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
          <h1>خدمات قانونية تضع قوة القانون بين يديك</h1>
          <p>
          مكاتب TCMG خيارك الأمثل في الحصول على خدمات قانونية للأفراد، المؤسسات والشركات مقدمة من أكبر مكتب محاماة في مصر بخبرات قانونية فاقت الـ 30 عاما تحت شعار "مستوي جديد من الحلول القانونية".
          </p>
          <span className={styles.linkContainer}>
            <Link className="link" href="about-us">
              تعرف علينا
              <Image
                src="/assets/icons/joinus/arrow-left.png"
                width={20}
                height={20}
                alt="arrow-left.png"
              />
            </Link>
          </span>
        </div>
      </section>
  )
}

export default LegalServicesHero
