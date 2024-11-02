import Image from "next/image";
import styles from "./FooterMobile.module.css";
import Link from "next/link";

function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topIcons}>
        <div>
          <Link href="join-us"  className={styles.mainLink}>
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
          <Link href="legal-advice"  className={styles.mainLink}>
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
            <li>
              <Link href="about-us"  className={styles.boldLink}>
                من نحن
              </Link>
            </li>
            <li>فريق العمل</li>
            <li className={styles.space}>
              <Link href="legal-services"  className={styles.boldLink}>
                الخدمات القانونية
              </Link>
              <div className={styles.links}>
                <div className={styles.rightLinks}>
                  <ul>
                    <li>
                      <Link href="legal-advice">الإستشارات القانونية</Link>
                    </li>
                    <li>
                      <Link href="corporate">أعمال الشركات</Link>
                    </li>
                    <li>
                      <Link href="sectors">القطاعات</Link>
                    </li>
                    <li>
                      <Link href="ask-a-lawyer">إسأل محامي</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.leftLinks}>
                  <ul>
                    <li>
                      <Link href="establishing-companies">تأسيس الشركات</Link>
                    </li>
                    <li>
                      <Link href="corporate">أعمال الشركات</Link>
                    </li>
                    <li>
                      <Link href="sectors">القطاعات</Link>
                    </li>
                    <li>
                      <Link href="ask-a-lawyer">إسأل محامي</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.space}>
              <Link href="join-us"  className={styles.boldLink}>
                انضم الينا
              </Link>
            </li>
            <li>
              <Link href="internship">المتدربين</Link>
            </li>
            <li>
              <Link href="careers">المحامين</Link>
            </li>
            <li className={`${styles.boldLink} ${styles.space}`}>تواصلو معنا</li>
            <li>
              <Link href="offices">الفروع</Link>
            </li>
            <li className={`${styles.boldLink} ${styles.space}`}>اخبار ورؤي</li>
            <li>مراجع قانونية</li>
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
                alt="Twitter Icon"
                width={25}
                height={25}
                quality={100}
              />
            </span>
            <span>
              <Image
                src="assets/icons/youtube.svg"
                quality={100}
                alt="YouTube Icon"
                width={25}
                height={25}
              />
            </span>
            <span>
              <Image
                src="assets/icons/instgram.svg"
                alt="Instagram Icon"
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
        <p>تعد المجموعة التجارية والبحرية للمحاماة أكبر مكتب محاماة متكامل في تقديم الخدمات القانونية للأفراد والشركات.</p>
        <p>جميع حقوق النسخ والنشر محفوظة المجموعة التجارية والبحرية للمحاماة ©2019 ©2024</p>
      </div>
    </footer>
  );
}

export default FooterMobile;
