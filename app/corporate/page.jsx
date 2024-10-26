import React from 'react'
import styles from "./page.module.css"
import BusinessHero from '@/components/business/businessHero/BusinessHero'
import BusinessAchieveSuccess from '@/components/business/hireingAchieveSuccess/BusinessAchieveSuccess'
import BusinessRoadToExcellence from '@/components/business/businessRoadToExcellence/BusinessRoadToExcellence'
import BusinessExperience from '@/components/business/client/internOffer/BusinessExperience'
import BusinessAbout from '@/components/business/businessAbout/BusinessAbout'
import Team from '@/components/shared/client/Team/Team'
import Slider from '@/components/shared/client/slider/Slider'
import TcmgPartnership from '@/components/business/tcmgPartnership/TcmgPartnership'
const data = [
  {
    imgPath : "/assets/images/business/slideimg1.png",
    title : "إزدهار شركتك ونجاحها .. مسؤوليتنا",
    desc : "المجموعة التجارية والبحرية للمحاماة شريكك الأول لتحقيق أهدافك وتطوير أعمالك على أسس متينة."
  },
  {
    imgPath : "/assets/images/business/slideimg2.png",
    title : "حلول قانونية مبتكرة تدعم نمو الأعمال في مصر والشرق الأوسط",
    desc : "تقدم مكاتب TCMG حلولاً قانونية مبتكرة لدعم نجاح وتوسع أعمال الشركات، من التأسيس إلى الريادة بكل احترافية."
  },
  {
    imgPath : "/assets/images/business/slideimg3.png",
    title : "إزدهار شركتك ونجاحها .. مسؤوليتنا,",
    desc : "المجموعة التجارية والبحرية للمحاماة شريكك الأول لتحقيق أهدافك وتطوير أعمالك على أسس متينة."
  }
]

export const metadata={
  title : "Corporate",
  description : "خدمات الشركات ورجال الأعمال من مكاتب TCMG، قدم طلب لخدمات أعمال الشركات وتمتع بدعم قانوني قوي في مصر والشرق الأوسط في الدمج والاستحواذ والضرائب وأكثر.",
  keywords : "خدمات رجال الأعمال، أعمال الشركات"
}
const page = () => {
  return (
    <div className={styles.buisnessPage}>
      <BusinessHero/>
      <BusinessAchieveSuccess/>
      <BusinessRoadToExcellence/>
      <BusinessExperience/>
      <BusinessAbout/>
      
      <Slider data = {data}/>
      <TcmgPartnership/>
    </div>
  )
}

export default page
