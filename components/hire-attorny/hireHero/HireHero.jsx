import Link from "next/link"
import styles from "./page.module.css"
import Image from "next/image"
export default function HireHero() {
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
          <h1>
          توكيل محامي يناضل من أجل تحقيق أهدافك القانونية
          </h1>
          <p>
          هل ترغب في توكيل محامي يساعدك في حل مشاكلك القانونية؟ هل لديك أهداف قانونية ترغب في تحقيقها في أسرع وقت وبأعلى قدر من الكفاءة؟ إذاً فإن خيارك الأمثل هو الاستعانة بمكاتب TCMG للمحاماة وعمل توكيل لأحد خبرائنا؛ حتى نتمكن من تولي شؤونك القانونية عنك، بمساعدة نخبة من خبراء القانون بخبرة مهنية تخطت ال30 عاماً؛ لإيجاد حلول بمعايير عالمية، تماشيًا مع معطيات قضيتك، للفوز بها واسترجاع حقوقك المسلوبة.
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
