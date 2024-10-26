import Image from 'next/image'
import styles from "./branches.module.css"
const CardImg = ({w,h,path,classStyle,alt}) => {    
  return (
    <div className={styles[classStyle]}>
    <Image
      src={path}
      width={w}
      height={h}
      alt={alt}
    />
  </div>
  )
}

export default CardImg
