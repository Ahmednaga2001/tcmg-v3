import styles from "./page.module.css"
import Image from 'next/image'
const CardImg = ({imgStyle , path ,alt}) => {      
  return (
    <Image src={path} width={280} height={280} className={styles[imgStyle]} alt={alt}/>

  )
}

export default CardImg
