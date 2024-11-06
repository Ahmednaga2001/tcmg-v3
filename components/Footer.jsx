import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
      <div>
          <Link href="join-us">
            <h2>إنضم إلينا </h2>
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="Arrow Left"
              width={50}
              height={50}
            />
          </Link>
        </div>
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
      
      </div>
      <div className={styles.midSection}>
        <div className={styles.left}>
          <ul>
            <li className={styles.boldLink}>خدماتنا</li>
            <li>
              <Link href="legal-services">الخدمات القانونية</Link>
            </li>
          
            <li>
              <Link href="establishing-companies">تأسيس الشركات</Link>
            </li>
            <li>
              <Link href="corporate">أعمال الشركات</Link>
            </li>
            <li>
              <Link href="practices">الممارسات</Link>
            </li>
            <li>
              <Link href="sectors">القطاعات</Link>
            </li>

            <li>
              <Link href="power-of-attorney">توكيل محامي</Link>
            </li>
            <li>
              <Link href="ask-a-lawyer">إسأل محامي</Link>
            </li>
          </ul>
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.linkItem}>
            <span className={styles.boldLink}>
              من نحن
            </span>
            <Link href="about-us">تعرف علينا</Link>
            <Link href="lawyers">فريق العمل</Link>
          </div>
          <div className={styles.linkItem}>
            <span  className={styles.boldLink}>
              إنضم إلينا
            </span>
            <Link href="join-us">إبدأ رحلتك معنا</Link>
            <Link href="internship">المتدربين</Link>
            <Link href="protocol">العلاقات العامة</Link>
            <Link href="careers">المحامين</Link>
          </div>
          <div className={styles.linkItem}>
            <span  className={styles.boldLink}>
            أخبار ورؤي 
            </span>
            <Link href="article-display">المقالات</Link>
           
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.linkItem}>
            <span className={styles.boldLink}>تواصل معنا </span>
            <Link href="offices">الفروع</Link>
          </div>
          <div className={styles.social}>
            <span className={styles.boldLink}>تابعنا علي</span>
            <div className={styles.socialIcons}>
              <Link href="https://www.linkedin.com/company/tcmglawco" target="_blank">
                <Image
                  src="assets/icons/linkedin.svg"
                  alt="LinkedIn Icon"
                  width={25}
                  height={25}
                  quality={100}
                />
              </Link>
              <Link href="https://x.com/tcmglaw" target="_blank">
                <Image
                  src="assets/icons/twitter.svg"
                  alt="Twiter Icon"
                  width={25}
                  height={25}
                  quality={100}
                />
              </Link>
              <Link href="https://youtube.com/@tcmglaw" target="_blank">
                <Image
                  src="assets/icons/youtube.svg"
                  quality={100}
                  alt="Youtube Icon"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="https://www.instagram.com/tcmglaw" target="_blank">
                <Image
                  src="assets/icons/instgram.svg"
                  alt="Instgram Icon"
                  width={25}
                  height={25}
                  quality={100}
                />
              </Link>
              <Link href="https://m.facebook.com/@tcmglaw/" target="_blank">
                <Image
                  src="assets/icons/facebook.svg"
                  alt="Facebook Icon"
                  width={25}
                  height={25}
                  quality={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.centerLinks}>
        <Link href="subscriptions">
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
        <p>
          تعد المجموعة التجارية والبحرية للمحاماة أكبر مكتب محاماة متكامل في
          تقديم الخدمات القانونية للأفراد والشركات.{" "}
        </p>
        <p>
          جميع حقوق النسخ والنشر محفوظة المجموعة التجارية والبحرية للمحاماة
          ©2019 ©2024{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
