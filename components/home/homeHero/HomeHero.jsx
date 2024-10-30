'use client'
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
          <iframe src="https://lottie.host/embed/5c8cb5db-732f-4f67-b717-5f739c8980b2/R8K8DXZUOR.json" style={{ border: 'none', marginTop: '96px', width: '46px' , height: '46px'}}></iframe>
          <p className="link">
            أكتشف المزيد
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
