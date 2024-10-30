import Hero from '@/components/shared/hero/Hero'
import SubForm from '@/components/subscriptions/subForm/SubForm'
import React from 'react'
import styles from "./page.module.css"
export default function Subscriptions() {
  return (
    <div className={styles.subPage}>
        <Hero path={"/assets/images/sub/subhero.png"} title={"الإشتراك"}/>
        <SubForm/>
    </div>
  )
}
