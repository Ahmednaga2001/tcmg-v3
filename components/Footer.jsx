import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div>
          <Link href="legal-consultations" target="_blank">
            <h1>الإستشارات القانونية </h1>
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="Arrow Left"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div>
          <Link href="join-us" target="_blank">
            <h1>إنضم إلينا </h1>
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="Arrow Left"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div className={styles.midSection}>
        <div className={styles.left}>
          <ul>
            <Link href="hire-attorny" target="blank">
              <li>توكيل محامي</li>
            </Link>
            <li>تواصلو معنا</li>
            <Link href="legal-services">
              <li>الخدمات القانونية</li>
            </Link>
            <Link href="legal-consultations">
              <li>الإستشارات القانونية</li>
            </Link>
          </ul>
        </div>
        <div className={styles.social}>
          <span>
            <Image
              src="assets/icons/linkedin.svg"
              alt="LinkedIn Icon"
              width={25}
              height={25}
            />
          </span>
          <span>
            <Image
              src="assets/icons/twitter.svg"
              alt="LinkedIn Icon"
              width={25}
              height={25}
            />
          </span>
          <span>
            <Image
              src="assets/icons/facebook.svg"
              alt="LinkedIn Icon"
              width={25}
              height={25}
            />
          </span>
        </div>
        <div className={styles.right}>
          <ul>
            <li>فريق العمل</li>
            <Link href="about-us" target="_blank">
              <li>من نحن</li>
            </Link>
            <li>اخبار ورؤي</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.top}>
          <span>الاشعارات القانونية</span>
          <span>سياسة الخصويصة</span>
          <span>خريطة الموقع</span>
        </div>
        <div className={styles.bottom}>
          ٌتعد المجموعة التجارية والبحرية للمحاماة هي أكبر مكتب محاماة متكامل
          رائدة في تقديم الخدمات القانونية المتكاملة التي تلبي احتياجات كل من
          الأفراد والشركات.
          <br />
          جميع حقوق النسخ والنشر محفوظة © {new Date().getFullYear()} المجموعة
          التجارية والبحرية للمحاماة
        </div>
      </div>
    </footer>
  );
}

export default Footer;
