import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/ui/Button'
import Image from 'next/image'
const categoryData = [
    {
        id : 1,
        title : "زواج الأجانب",
        major : "إجراءات زواج الأجانب"
    },
    {
        id : 2,
        title : "أعمال الشركات",
        major : "تأسيس الشركات"
    },
    {
        id : 3,
        title : "تجاري وشركات",
        major : "قضايا تجاري وشركات"
    },
    {
        id : 4,
        title : "مدني",
        major : "القضايا المدنية"
    },
    {
        id : 5,
        title : "جنائي",
        major : "قضايا الجنايات"
    },
    {
        id : 6,
        title : "مجلس الدولة",
        major : "قضايا مجلس الدولة"
    },
    {
        id : 5,
        title : "أسرة",
        major : "قضايا أحوال شخصية"
    },
    {
        id : 6,
        title : "جرائم إلكترونية",
        major : "قضايا جرائم الإنترنت"
    },
    {
        id : 7,
        title : "عمال",
        major : "قضايا عمال"
    },
    {
        id : 8,
        title : "تخصصات أخري",
        major : "تخصص أخر"
    }
    
]
export const Category = ({onNextStep}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onNextStep(); // Trigger next step on form submission
      };
  return (
    <section className={styles.majors}>
        {
            categoryData.map((category) => (
                <div  className={styles.majorCard} key={category.id}>
                    <span>{category.title}</span>
                    <p><span></span>{category.major}</p>
                    <span className={styles.btn} onClick={handleSubmit}>
                        احجز الان
                        <Image src={"/assets/icons/form/arrow-left-white.png"} width={20} height={20} alt="Arrow Right" />
                    </span>
                </div>
            ))
        }

    </section>
  )
}
