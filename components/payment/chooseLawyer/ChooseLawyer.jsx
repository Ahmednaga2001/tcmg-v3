import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
export default function ChooseLawyer({onNextStep,info}) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onNextStep(); // Trigger next step on form submission
      };
    return (
        <div className={styles.chooseLawyer}>
            <div className={styles.lawyerCard}>
                <div className={styles.cardContent}>
                    <div className={styles.heading}>
                        <span className={styles.bullet}></span>
                        <span className={styles.lawyerName}>{info.name}</span>

                    </div>
                    <p className={styles.desc}>{info.desc}</p>
                </div>
                <div className={styles.cardImg}>
                    <Image
                        src={info.imgPath}
                        alt={info.name}
                        width={183}
                        height={203}
                        quality={100}
                    />
                </div>
            </div>
            <button className={styles.btn} onClick={handleSubmit}>
                المتابعة
                <Image  src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />

            </button>
        </div>
    )
}

