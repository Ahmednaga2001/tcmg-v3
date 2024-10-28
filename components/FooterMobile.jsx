import Image from "next/image";
import styles from "./FooterMobile.module.css";
import Link from "next/link";
function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topIcons}>
        <div>
          <Link href="join-us" target="_blank" className={styles.mainLink}>
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
          <Link href="legal-consultations" target="_blank" className={styles.mainLink}>
            <h2>الإستشارات القانونية </h2>
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
            <div>
              <Link href="about-us" target="_blank" className={styles.boldLink}>
                <li>من نحن</li>
              </Link>
              <li>فريق العمل</li>
            </div>
            <div>
              <Link href="legal-services" target="_blank" className={styles.boldLink}>
                <li>الخدمات القانونيه</li>
              </Link>
              <div className={styles.links}>
                <div className={styles.rightLinks}>
                  <Link href="legal-consultations">
                    <li>الإستشارات القانونية</li>
                  </Link>
                  <Link href="corporate">
                    <li>أعمال الشركات</li>
                  </Link>
                  <Link href="sectors">
                    <li>القطاعات</li>
                  </Link>
                  <Link href="ask-a-lawyer">
                    <li>إسأل محامي</li>
                  </Link>
                </div>
                <div className={styles.leftLinks}>
                  <Link href="legal-consultations">
                    <li>تأسيس الشركات</li>
                  </Link>
                  <Link href="corporate">
                    <li>أعمال الشركات</li>
                  </Link>
                  <Link href="sectors">
                    <li>القطاعات</li>
                  </Link>
                  <Link href="ask-a-lawyer">
                    <li>إسأل محامي</li>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link href="join-us" target="_blank" className={styles.boldLink}>
                <li>انضم الينا</li>
              </Link>
              <Link href="internship">
                <li>المتدربين</li>
              </Link>
              <Link href="careers">
                <li>المحامين</li>
              </Link>
            </div>
            <div>
              <li className={styles.boldLink}>تواصلو معنا</li>
              <Link href="offices">
                <li>القروع</li>
              </Link>
            </div>
            <div>
              <li className={styles.boldLink}>اخبار ورؤي</li>
              <li>مراجع قانونية</li>
            </div>
          </ul>
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

      <div className={styles.centerLinks}>
          <Link href="">
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
          <p>تعد المجموعة التجارية والبحرية للمحاماة أكبر مكتب محاماة متكامل في تقديم الخدمات القانونية للأفراد والشركات. </p>
          <p>جميع حقوق النسخ والنشر محفوظة المجموعة التجارية والبحرية للمحاماة ©2019 ©2024 </p>
        </div>
    </footer>
  );
}

export default FooterMobile;
