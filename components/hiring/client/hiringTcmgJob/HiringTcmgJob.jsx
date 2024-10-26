"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import SelectComponentTwo from '@/components/ui/selectComponentTwo/SelectComponentTwo';
import Image from 'next/image';
const HiringTcmgJob = () => {
    const [selectedJob, setSelectedJob] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const optionsOne=[
  
      {
        value : "خدمات الأعمال",
      },
      {
        value : "معاون مستوى مبتدئ",
      },
      {
        value : "معاون ذو خبرة",
      },
      {
        value : "تدريب",
      },
      {
        value : "محامى متدرب"
      }
    ]
    const optionsTwo=[
      {
        value : "القاهرة"
      },
      {
        value : "دبى"
      },
      {
        value : "الرياض"
      },
      {
        value : "تشغندو"
      },
      {
        value : "عمان"
      },{
        value : "جنين"
      }
    ]
    return (
      <section className={styles.internshipTcmg}>
        <div className={styles.parent}>
         <h3>تبحث عن فرصة توظيف في
         TCMG</h3>
          <form action="">
          <div className={styles.selectParent}>
            <SelectComponentTwo options={optionsOne} head={"المسمى الوظيفى"}  selectedOption={selectedJob} 
                setSelectedOption={setSelectedJob}  />
         
            <SelectComponentTwo options={optionsTwo} head={"الموقع"} selectedOption={selectedLocation} 
                setSelectedOption={setSelectedLocation} />
          </div>
          <button>
              عرض النتائج
              <Image
                src="/assets/icons/internship/arrow-left.png"
                alt="Arrow Left Small"
                width={26}
                height={26}
              />
            </button>
          </form>
        </div>
      </section>
  )
}

export default HiringTcmgJob
