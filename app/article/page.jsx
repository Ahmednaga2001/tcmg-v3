import ArticleHero from "@/components/article/ArticleHero"
import styles from "./page.module.css"
import ArticleServiceTwo from "@/components/article/ArticleServiceTwo"
import ArticleServiceThree from "@/components/article/ArticleServiceThree"
import ArticleServiceOne from "@/components/article/ArticleServiceOne"
import AerticleServiceFive from "@/components/article/AerticleServiceFive"
import ArticleServieSix from "@/components/article/ArticleServieSix"
import ArticleContact from "@/components/article/ArticleContact"
import ArticleMarks from "@/components/article/ArticleMarks"
import ArticleConclution from "@/components/article/ArticleConclution"
export const metadata = {
  title: "المقالات",

};
 const Aertice = () => {
  return (
    <div className={styles.atriclePage}>
        <ArticleHero/>
        <section className={styles.atricleService}>
        <ArticleServiceOne/>
        <ArticleServiceTwo/>
        <ArticleServiceThree/>
        <AerticleServiceFive/>
        <ArticleServieSix/>
        </section>
        <ArticleContact/>
        <ArticleConclution/>
        <ArticleMarks/>
        
    </div>
  )
}
export default  Aertice