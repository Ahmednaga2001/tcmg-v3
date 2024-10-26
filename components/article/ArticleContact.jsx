import styles from "@/app/article/page.module.css"
const ArticleContact = () => {
  return (
    <section className={styles.articleContact}>
          <span>اتصل الآن من داخل وخارج جمهورية مصر العربية على:</span>
          <a href="tel:+201276299998">+201276299998</a>
         <span>راسلونا عبر البريد الرسمي: </span>
         <a href="mailto:contact@tcmglaw.com">contact@tcmglaw.com</a>
         </section>
  )
}
export default ArticleContact