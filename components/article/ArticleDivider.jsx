import Image from 'next/image'
import styles from "@/app/post/page.module.css"
export default function ArticleDivider({data}) {
  return (
    <div className={styles.divider}>
        <p>
        {data.title}
            <Image src={"/assets/icons/form/arrow-left-black.png"} width={24} height={24} alt='arrow-left icon'/>
        </p>
    </div>
  )
}
