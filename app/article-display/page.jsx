import ArticleForm from "@/components/articlDispaly/client/articleForm/ArticleForm";
import styles from "./page.module.css"
const ArticleDisplay = () => {
    return (
       
           <div className={styles.articlDisplay}>
             <ArticleForm/>
           </div>
        
    )
}

export default ArticleDisplay;