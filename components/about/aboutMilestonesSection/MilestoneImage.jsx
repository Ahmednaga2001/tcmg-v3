import styles from "@/components/about/aboutMilestonesSection/aboutMilestonesSection.module.css";
import Image from 'next/image'

const MilestoneImage = ({path,alt}) => {  
  return (
    <div className={styles.milestoneImageContainer}>
    <Image  src={path} width={478} height={295}  className={styles.img}  alt={alt}/>
    </div>
  )
}

export default MilestoneImage
