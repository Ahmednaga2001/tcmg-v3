import styles from "./page.module.css"
import Image from 'next/image'
const VisionImg = ({imgStyle , path,alt}) => {      
  return (
    <Image src={path} width={275} height={280} className={styles[imgStyle]} alt={alt} />

  )
}

export default VisionImg
