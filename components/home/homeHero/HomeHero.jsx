'use client'

import Image from "next/image";
import styles from "./page.module.css";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          المجموعة التجارية والبحرية للمحاماة اختيارك الأول لدعم قانوني قوي
        </h1>
        <p>
          خبرة متراكمة, تقنيات مبتكرة ونتائج فعّالة: مزايا يتمتع بها محامين
          ومستشارين المكتب؛ خدمةً للحق القانوني وتحقيقًا للعدالة, بمستوى متطور
          من الخدمات القانونية الشاملة وأعمال الشركات.
        </p>
        <div className={styles.animation}>
          <iframe src="https://lottie.host/embed/296b3114-2400-47ea-8a1d-903e52e49002/2tBJMaFFKd.json" style={{ border: 'none', marginTop: '50px' }}></iframe>
          <p className="link">
            أكتشف المزيد
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
