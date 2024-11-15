import Image from "next/image";
import styles from "./FooterMobile.module.css";
import Link from "next/link";

function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topIcons}>
        <div>
          <Link href="join-us" className={styles.mainLink}>
            <h2>إنضم إلينا</h2>
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="Arrow Left"
              width={16.36}
              height={16.36}
            />
          </Link>
        </div>
        <div>
          <Link href="legal-advice" className={styles.mainLink}>
            <h2>الإستشارات القانونية</h2>
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="Arrow Left"
              width={16.36}
              height={16.36}
            />
          </Link>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.bottomLinks}>
          <ul>
            <li className={styles.space}>
              <span className={`${styles.boldLink} ${styles.space}`}>من نحن</span>
              <ul>
                <li><Link href="about-us">خبراؤنا</Link></li>
                <li><Link href="lawyers">فريق العمل</Link></li>
              </ul>
            </li>
            <li className={styles.space}>
              <span className={`${styles.boldLink} ${styles.space}`}>خدماتنا</span>
              <div className={styles.links}>
                <div className={styles.rightLinks}>
                  <ul>
                    <li><Link href="legal-services">الخدمات القانونية</Link></li>
                    <li><Link href="establishing-companies">تأسيس الشركات</Link></li>
                    <li><Link href="practices">الممارسات</Link></li>
                    <li><Link href="power-of-attorney">توكيل محامي</Link></li>
                  </ul>
                </div>
                <div className={styles.leftLinks}>
                  <ul>
                    <li><Link href="legal-advice">الاستشارات القانونية</Link></li>
                    <li><Link href="corporate">أعمال الشركات</Link></li>
                    <li><Link href="sectors">القطاعات</Link></li>
                    <li><Link href="ask-a-lawyer">إسأل محامي</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.space}>
              <span className={`${styles.boldLink} ${styles.space}`}>إنضم إلينا</span>
              <div className={styles.links}>
                <div className={styles.rightLinks}>
                  <ul>
                    <li><Link href="join-us">إبدأ رحلتك معنا</Link></li>
                    <li><Link href="careers">المحامين</Link></li>
                  </ul>
                </div>
                <div className={styles.leftLinks}>
                  <ul>
                    <li><Link href="internship">
                    المتدربين</Link></li>
                    <li><Link href="protocol">العلاقات العامة</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={`${styles.boldLink} ${styles.space}`}>اخبار ورؤي</li>
            <li><Link href="article-display">المقالات</Link></li>
            <li className={`${styles.boldLink} ${styles.space}`}>تواصل معنا</li>
            <li><Link href="offices">الفروع</Link></li>
          </ul>
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
                alt="Twitter Icon"
                width={25}
                height={25}
                quality={100}
              />
            </Link>
            <Link href="https://youtube.com/@tcmglaw" target="_blank">
              <Image
                src="assets/icons/youtube.svg"
                alt="YouTube Icon"
                width={25}
                height={25}
                quality={100}
              />
            </Link>
            <Link href="https://www.instagram.com/tcmglaw" target="_blank">
            <Image
                  src="assets/icons/instgram.svg"
                  alt="Instagram Icon"
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

      <div className={styles.centerLinks}>
        <Link href="subscriptions">
          <h2 className={styles.linkText}>إشترك</h2>
        </Link>
        <Link href="privacy-policy">
          <h2 className={styles.linkText}>سياسة الخصوصية</h2>
        </Link>
        <Link href="">
          <h2 className={styles.linkText}>خريطة الموقع</h2>
        </Link>
      </div>

      <div className={styles.info}>
        <p>
          تعد المجموعة التجارية والبحرية للمحاماة أكبر مكتب محاماة متكامل في
          تقديم الخدمات القانونية للأفراد والشركات.
        </p>
        <p>
          جميع حقوق النسخ والنشر محفوظة المجموعة التجارية والبحرية للمحاماة
          ©2019 ©2024
        </p>
      </div>
    </footer>
  );
}

export default FooterMobile;
