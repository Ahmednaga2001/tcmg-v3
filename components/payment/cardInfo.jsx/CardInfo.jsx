import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
export default function CardInfo() {
  return (
    <div className={styles.cardInfo}>
        <span className={styles.heading}>ملخص الإستشارة</span>
        <div className={styles.row}>
            <div className={styles.col}>
                <span>استشاؤة هاتفية</span>
                <span>المدة : حتى الاربعاء</span>
                <span>الجلسات : 1</span>
            </div>
            <span className={styles.price}>299.00 EGY</span>
        </div>
        <div className={styles.col} style={{borderBottom:"1px solid black" , borderTop:"1px solid black" , paddingTop:"10px" , paddingBottom:"10px"}}>
            <div >
                <Image src="/assets/icons/payment/Group.png" alt="Cupon Icon" width={14} height={14}/>
                <span>إضافة كود القسيمة</span>
            </div>
            <div className={styles.cupon}>
                <input type="text" />
                <button>تطبيق</button>
            </div>
        </div>
        <div className={styles.col}>
            <div className={styles.row}>
                <span>الاجمالى الجزئى</span>
                <span>299.00 EGY</span>
            </div>
            <div className={styles.row}>
                <span>ضريبة قيمة مضافة (10%)</span>
                <span>29.00</span>
            </div>
            <div className={`${styles.row} ${styles.totalParent}`}>
                <span className={styles.total}>الإجمالي</span>
                <span className={styles.total}>2100 EGY</span>
            </div>
        </div>
    </div>
  )
}
