import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'
const AboutOurExperts = () => {
  return (
    <section className={styles.aboutOurExperts}>
    <h2 className={styles.headingTeam}>
      فريقنا من المحامين والمستشارين الخبراء
    </h2>

    <div className={styles.team}>
      <p>
        فريق العمل الناجح هو الإنجاز الأكثر أهمية في أي عمل وبشكل خاص في
        مجال المحاماة, فهو يمثل فرصة مميزة لتبادل الخبرات ومشاركة المعلومات
        الحديثة, وتحقيق أكبر عدد ممكن من الإنجازات بما يحقق من هدف مكاتبنا
        وتوصيل رسالة العدالة لأكبر عدد ممكن من المواطنين المصريين والعرب
        أجمعين, يضم مكتبنا نخبة من أكبر وأشهر محامين مصر خبرة في شتى مجالات
        القانون, مستعدون لتقديم أفضل ما لديهم دعمًا لعملائنا الكرام بتقديم
        أنسب الحلول لجميع المشاكل القانونية بما فيها الأكثر تعقيدًا.
      </p>
      <Link href="#" className={styles.abLink}>
        مشاهدة كامل فريق العمل
        <Image
          src="assets/icons/about/arrow-left.svg"
          alt="Arrow Left Small"
          width={30}
          height={30}
        />
      </Link>
    </div>
  </section>
  )
}

export default AboutOurExperts
