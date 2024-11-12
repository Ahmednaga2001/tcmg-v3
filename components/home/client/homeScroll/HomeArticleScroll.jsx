import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
import { ServiceOrCaseItem } from './ServiceOrCaseItem '
import { ServiceOrCaseItemSlider } from './ServiceOrCaseItemSlider'
import Link from 'next/link'
export default function HomeArticleScroll({articles}) {
  return (
    <article className={`${styles.scroll} ${styles.articles}`}>
    <div className={styles.right}>
      <h2>أحدث المقالات</h2>
      <p>
        تعلم أكثر من المكتبة القانونية المتكاملة وامتلك معرفة أوسع وأعمق في
        البيئة القانونية من خلال استكشاف أحدث التطورات والمستجدات، واستفد من
        مجموعة متنوعة من المصادر القانونية المتكاملة.
      </p>
      <Link href="article" className="link">
        إقرا المزيد
        <Image
          src="assets/icons/arrow-left.svg"
          alt="Arrow Left Small"
          width={20}
          height={20}
        />
      </Link>
    </div>
    <div className={styles.left}>

<ServiceOrCaseItem services={articles} />

</div>
<div className={styles.leftSlider}>
<ServiceOrCaseItemSlider services={articles}/>

</div>
  </article>
  )
}
