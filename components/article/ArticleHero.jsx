import styles from "/app/post/page.module.css"
 const ArticleHero = ({ data }) => {
  return (
    <section className={styles.articleHero}>
      <span> 29 يناير . 2024</span>
      <h1>
        {data.title.slice(0,25)}
      <br/>
      {
        data.title.slice(25)
      }
      </h1>
    </section>
  )
}

export default ArticleHero
