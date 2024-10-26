import styles from "./page.module.css";
import Image from "next/image";
const AboutOwner = () => {
  return (
    <section className={styles.owner}>
      <div className={styles.ownerImg}>
        <Image
          src="/assets/images/about/mohamedabudaif.png"
          className={styles.img}
          width={450}
          height={450}
          alt="الرئيس التنفيذي للمجموعة التجارية والبحرية"
        />
      </div>
      <div className={styles.ownerInfo}>
        <p>
          نسعى لأن نكون الأفضل بفضل جهود خبرائنا في خدمة العملاء الكرام، ونهدف
          للتقدم على الصعيد المحلي والإقليمي والعالمي بسبب إيماننا القوي بخبرات
          فريقنا القانوني ورغبتنا الجامحة في رفع شعار جديد للحلول القانونية.
        </p>
        <div className={styles.ownerInfoHeading}>
          <h3>المستشار محمد أبو ضيف</h3>
          <span>المؤسس والرئيس التنفيذي</span>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
