import Image from 'next/image'
import React from 'react'
import styles from "@/components/about/aboutMilestonesSection/aboutMilestonesSection.module.css";
const LineCard = () => {
  return (
    <div className={styles.betweencontent}>
      <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
  </div>
  )
}

export default LineCard
