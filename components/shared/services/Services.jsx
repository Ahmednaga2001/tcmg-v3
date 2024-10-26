import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

const Services = ({data}) => {
    
  return (
    <section className={styles.services}>
      {
        data.map((item,index)=>(
            <div className={styles.service} key={index}>
            <span>{item}</span>
            <Link href="/payment">
            إحجز الآن              
              <Image
                  src="assets/icons/arrow-left.svg"
                  alt="Arrow Left Small"
                  width={20}
                  height={20}
                />
                </Link>


        </div>
        ))
      }
      
    </section>
  )
}

export default Services
