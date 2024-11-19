import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Team from '@/components/shared/client/Team/Team'
import Link from 'next/link';


const HomeTeam = () => {
  return (
    <section className={styles.homeTeam}>
      <div className={styles.heading}>
        <div>
          <Image src="/assets/icons/crown.svg" width={60} height={25} alt='Crown Icon' />
          <h2>خبراؤنا</h2>
        </div>
        <p>
          تتكون الهيكلة الإدارية للمجموعة التجارية والبحرية من أشهر محامين مصر أصحاب الخبرات في تخصصات القضايا المحلية والدولية المختلفة. حيث نضم مجموعة من الكوادر مجموعة من الكوادر البشرية المتخصصة في مجالات القانون المختلفة. ولأن الجودة والسرعة هي شعارنا؛ نعمل بروح الفريق لدمج الخبرات والمعرفة المتراكمة في دعم عملائنا الكرام على تحقيق أهدافهم القانونية.
        </p>

      </div>
      <Team/>
      

    </section>
  )
}

export default HomeTeam;