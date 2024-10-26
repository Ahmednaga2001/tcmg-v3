import Image from 'next/image'
import styles from "@/app/article/page.module.css"
export default function ArticleDivider() {
  return (
    <div className={styles.divider}>
        <p>
        توكيل محامي علامات تجارية في مصر 
            <Image src={"/assets/icons/form/arrow-left-black.png"} width={24} height={24} alt='arrow-left icon'/>
        </p>
    </div>
  )
}
