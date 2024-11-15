import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";
const JoinIntern = () => {
  return (
    <section className={styles.startInternship}>
      <div className={styles.parent}>
        <div className={styles.content}>
          <h2>ابدأ تدريبك المهني معنا</h2>
          <p>
          نولي اهتمامًا كبيرًا لتدريب المحامين الشبان ذوي الشهادات العليا. حيث نعتبرهم مستقبلنا ونسعى جاهدين لتمكينهم وتطوير مهاراتهم القانونية؛ لذا نقدم برنامج تدريب متميز؛ حيث نتيح لك الفرصة للمشاركة في القضايا الحقيقية واكتساب الخبرات العملية. إذا كنت محاميًا شابًا يبحث عن فرصة للتدريب لبناء مسار مهني ناجح؛ فنحن هنا لنقدم لك الدعم والتوجيه اللازمين في هذه الرحلة المهنية المميزة.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/images/joinus/topleftL.png"
            width={238}
            height={222}
            alt="/assets/images/joinus/topleftL.png"
          />
          <Image
            src="/assets/images/joinus/bottomL.png"
            width={238}
            height={222}
            alt="/assets/images/joinus/bottomL.png"
          />
        </div>
      </div>
     <span className={styles.linkContainer}>
     <Link className="link"  href="/internship">
        اعرف التفاصيل
        <Image
          src="/assets/icons/joinus/arrow-left.png"
          width={20}
          height={20}
          alt="arrow-left.png"
        />
      </Link>
     </span>
    </section>
  );
};

export default JoinIntern;
