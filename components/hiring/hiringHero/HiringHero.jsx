import styles from "./page.module.css"
const HiringHero = () => {
  return (
    <section className={styles.hero}>
        <h1 className={styles.dt}>
        انضم إلى فريقنا:  اليك فرص وظائف محامين مميزة في المجموعة التجارية والبحرية للمحاماة ،  واستعد لتجربة فريدة ، تفتح أفقاً جديداً في مجالك المهني. 
                </h1>
        <div className={styles.mob}>
          <h1>
          انضم إلى فريقنا:
          </h1>
          <h2>
          اليك فرص وظائف محامين مميزة
          </h2>
          <p> 
          في المجموعة التجارية والبحرية للمحاماة ،  واستعد لتجربة فريدة ، تفتح أفقاً جديداً في مجالك المهني
          </p>
        </div>
      </section> 
  )
}

export default HiringHero
