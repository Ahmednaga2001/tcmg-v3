import styles from "@/app/post/page.module.css"
 const ArticleConclution = ({data}) => {
  return (
    <section className={styles.articleConclution}>
          <h2>الخاتمة</h2>
          <p>{data.desc}</p>
    </section>
  )
}
export default ArticleConclution