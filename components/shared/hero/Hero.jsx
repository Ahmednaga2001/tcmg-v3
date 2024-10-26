import Image from "next/image";
import styles from "./page.module.css"
const Hero = ({title,path,w,h}) => {
  console.log(w,h);
  
  return (
    <section className={styles.hero}>
      <div>
        <Image src={path} width={w||200}  quality={100} height={h || 200} alt={path}/>
      </div>
      <h1>{title}</h1>
    </section>
  )
}

export default Hero
