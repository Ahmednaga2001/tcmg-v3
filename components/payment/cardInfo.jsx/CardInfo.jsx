import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

export default function CardInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  const arrowSrc = isOpen ? "/assets/icons/form/dropdownblack.svg" : "/assets/icons/form/updownblack.svg";

  return (
    <div className={styles.cardInfo}>
      <div className={styles.header} onClick={toggleCard}>
        <div className={styles.headerContent}>
        <span className={styles.heading}>ملخص الإستشارة</span>
        <Image 
          src={arrowSrc}
          alt="Drop Down Icon" 
          width={10} 
          height={9}
          className={`${styles.arrow} ${isOpen ? styles.open : ''}`} 
        />
        </div>
        <span className={styles.total}>2100 EGY</span>

      </div>

      <div className={`${styles.content} ${isOpen || !isMobile ? styles.open : ''}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <span>استشارة هاتفية</span>
            <span>المدة : حتى الأربعاء</span>
            <span>الجلسات : 1</span>
          </div>
          <span className={styles.price}>299.00 EGY</span>
        </div>
        <div className={styles.col} style={{ borderBottom: "1px solid black", borderTop: "1px solid black", paddingTop: "10px", paddingBottom: "10px" }}>
          <div>
            <Image src="/assets/icons/payment/Group.png" alt="Cupon Icon" width={14} height={14} />
            <span>إضافة كود القسيمة</span>
          </div>
          <div className={styles.cupon}>
            <input type="text" />
            <button>تطبيق</button>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.row}>
            <span>الإجمالي الجزئي</span>
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
    </div>
  );
}
