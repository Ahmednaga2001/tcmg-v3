import styles from './page.module.css'

const AboutMetrics = () => {
  return (
    <section className={styles.numbers}>
    <div>
      <span>7</span>
      <p>مكاتب محاماه اقليمية</p>
    </div>
    <div>
      <span>+50</span>
      <p>سنين الخبرة</p>
    </div>
    <div>
      <span>40</span>
      <p>عدد الخبراء</p>
    </div>
    <div>
      <span>300</span>
      <p>العملاء</p>
    </div>
  </section>

  )
}

export default AboutMetrics
