import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div>
          <Link href="legal-consultations" target="_blank">
            <h2>الإستشارات القانونية </h2>
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
            <h2>إنضم إلينا </h2>
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
            <Link href="legal-services">
              <li>الخدمات القانونية </li>
            </Link>
            <Link href="legal-consultations">
              <li>الإستشارات القانونية</li>
            </Link>
            <Link href="establishing-companies">
              <li>تأسيس الشركات</li>
            </Link>
            <Link href="corporate">
              <li>أعمال الشركات</li>
            </Link>
            <Link href="practices">
              <li>الممارسات</li>
            </Link>
            <Link href="sectors">
              <li>القطاعات </li>
            </Link>

            <Link href="hire-attorny" target="blank">
              <li>توكيل محامي</li>
            </Link>
            <Link href="ask-a-lawyer">
              <li>إسأل محامي</li>
            </Link>
          </ul>
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.linkItem}>
            <Link href="about-us" className={styles.boldLink}>من نحن</Link>
            <span>فريق العمل</span>
          </div>
          <div className={styles.linkItem}>
            <Link href="about-us" className={styles.boldLink}>إنضم إلينا</Link>
            <Link href="internship">المتدربين</Link>
            <Link href="protocol">العلاقات العامة</Link>
            <Link href="careers">المحامين</Link>
          </div>
          <div className={styles.linkItem}>
            <Link href="أخبار ورؤي" className={styles.boldLink}>من نحن</Link>
            <span>مراجع قانونية</span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.linkItem}>
            <span className={styles.boldLink}>تواصلوا معنا</span>
            <Link href="offices">الفروع</Link>
            <span>الأسئلة الشائعة</span>
          </div>
            <div className={styles.social}>
          <span className={styles.boldLink}>تابعنا علي</span>
          <div className={styles.socialIcons}>
            <span>
              <Image
                src="assets/icons/linkedin.svg"
                alt="LinkedIn Icon"
                width={25}
                height={25}
                quality={100}
              />
            </span>
            <span>
              <Image
                src="assets/icons/twitter.svg"
                alt="Twiter Icon"
                width={25}
                height={25}
                quality={100}
              />
            </span>
            <span>
              <Image
                src="assets/icons/youtube.svg"
                quality={100}
                alt="Youtube Icon"
                width={25}
                height={25}
              />
            </span>
            <span>
              <Image
                src="assets/icons/instgram.svg"
                alt="Instgram Icon"
                width={25}
                height={25}
                quality={100}
              />
            </span>
            <span>
              <Image
                src="assets/icons/facebook.svg"
                alt="Facebook Icon"
                width={25}
                height={25}
                quality={100}
              />
            </span>
          </div>
        </div>
          </div>
        </div>

        <div className={styles.centerLinks}>
          <Link href="">
            <span className={styles.boldLink}>إشترك</span>
          </Link>
          <Link href="privacy-policy">
            <span className={styles.boldLink}>سياسة الخصوصية</span>
          </Link>
          <Link href="">
            <span className={styles.boldLink}>خريطة الموقع</span>
          </Link>
        </div>

        <div className={styles.info}>
          <p>تعد المجموعة التجارية والبحرية للمحاماة أكبر مكتب محاماة متكامل في تقديم الخدمات القانونية للأفراد والشركات. </p>
          <p>جميع حقوق النسخ والنشر محفوظة المجموعة التجارية والبحرية للمحاماة ©2019 ©2024 </p>
        </div>
  
    </footer>
  );
}

export default Footer;

