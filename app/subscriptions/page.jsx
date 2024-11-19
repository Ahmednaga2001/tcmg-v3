import Hero from '@/components/shared/hero/Hero'
import SubForm from '@/components/subscriptions/subForm/SubForm'
import React from 'react'
import styles from "./page.module.css"
export const metadata = {
  title: "الاشتراك",

};
export default function Subscriptions() {
  return (
    <div className={styles.subPage}>
           <section className={styles.hero}>
        <h1>الإشتراك</h1>
      </section>
        <SubForm/>
    </div>
  )
}
