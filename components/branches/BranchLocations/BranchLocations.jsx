import Image from "next/image";
import CardImg from "../CardImg";
import styles from "./page.module.css";
const BranchLocations = () => {
  return (
    <section className={styles.locations}>
      <div className={styles.egyLocations}>
        <h2>جمهورية مصر العربية</h2>
        <div className={styles.parent}>
          <div className={styles.parentLocations}>
            <div className={styles.locationOne}>
              <h3>العباسية (الفرع الرئيسي)</h3>
              <p>
                5 أبراج الملتقى - ميدان العباسية - بجانب محكمة شمال القاهرة
                الابتدائية
              </p>
              <span>11517</span>
              <span>القاهرة - مصر</span>
              <a href="#" className={styles.locationLink}>
                <Image src="/assets/icons/form/Map pin.png" width={16} height={16} alt="location icon" />
                الفرع علي الخريطة
                <Image src="/assets/icons/form/arrow-left-white.png" width={16} height={16} alt="location icon" />
              </a>
            </div>
            <div className={styles.locationTwo}>
              <h3>رمسيس</h3>
              <p>83 برج مصر للتأمين - شارع رمسيس - أمام سنترال رمسيس</p>
              <span>11522</span>
              <span>القاهرة - مصر</span>
              <a href="#" className={styles.locationLink}>
                <Image src="/assets/icons/form/Map pin.png" width={16} height={16} alt="location icon" />
                الفرع علي الخريطة
                <Image src="/assets/icons/form/arrow-left-white.png" width={16} height={16} alt="location icon" />
              </a>
            </div>
          </div>
          <div className={styles.cardImg}>
            <CardImg
              classStyle="egyImg"
              w={537}
              h={642}
              path="/assets/images/branches/Egypt.png"
              alt="فروع مكتب TCMG بالقاهرة"
            />
          </div>
        </div>
      </div>

      <div className={styles.dubaiLocation}>
        <h2>الإمارات العربية المتحدة</h2>
        <div className={styles.parent}>
          <div className={styles.cardImg}>
            <CardImg
              classStyle="egyImg"
              w={551}
              h={475}
              path="/assets/images/branches/dubai.png"
              alt="فروع المجموعة التجارية والبحرية في الإمارات"
            />
          </div>
          <div className={styles.parentLocations}>
            <div className={styles.locationOne}>
              <h3>دبى</h3>
              <p>(بالتعاون مع زايد الشحي للمحاماة)</p>
              <span>مبنى المسعود - شارع آل مكتوم - بورسعيد</span>
              <span>3669</span>
              <span>دبي – الإمارات العربية المتحدة</span>
            </div>
            <div className={styles.locationTwo}>
              <h3> دبي</h3>
              <p>(بالتعاون مع ذا ويلث تيلر لخدمات رجال الأعمال ذ.م.م)</p>
              <span>48 مبنى بروج محور الشيخ زايد</span>
              <span>دبى - الامارات العربية المتحدة</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.saudiaLocation}>
        <h2>المملكة العربية السعودية</h2>
        <div className={styles.parent}>
          <div className={styles.parentLocations}>
            <div className={styles.location}>
              <h3>الرياض</h3>
              <p>(بالتعاون مع الجبار و المزارقة للمحاماة)</p>
              <span>مخرج 7 - طريق عائمان بن عثمان</span>
              <span>11536</span>
              <span>الرياض - المملكة العربية السعودية</span>
            </div>
          </div>
          <div className={styles.cardImg}>
            <CardImg
              classStyle="egyImg"
              w={536.32}
              h={305}
              path="/assets/images/branches/alriyadh.png"
              alt="مكتب محاماة TCMG في السعودية"
            />
          </div>
        </div>
      </div>


      <div className={styles.chinaLocation}>
        <h2>الصين</h2>
        <div className={styles.parent}>
          <div className={styles.cardImg}>
            <CardImg
              classStyle="egyImg"
              w={551}
              h={305}
              path="/assets/images/branches/china.png"
              alt="مكاتب المجموعة التجارية والبحرية في الصين"
            />
          </div>
          <div className={styles.parentLocations}>
            <div className={styles.location}>
              <h4>تشنغدو</h4>
              <p> (بالتعاون مع شركة سيتشوان ينجلينج هيشي للمحاماة)</p>
              <span>
                المكتب الرئيسي : الطابق 26، مبنى تشنغوا للعلوم والتكنولوجيا،
              </span>
              <span> رقم 157، القسم 2، طريق جيانشي الشمالي،</span>
              <span>منطقة تشنغهوا، مدينة تشنغدو، مقاطعة سيتشوان، الصين </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ammanLocation}>
        <h2>الأردن</h2>
        <div className={styles.parent}>
          <div className={styles.parentLocations}>
            <div className={styles.location}>
              <h3>عمان</h3>
              <p>(بالتعاون مع شركة المرسي لأعمال المحاماة )</p>
              <span>  خلدا - بالقرب من اشارات البنك العربي </span>
              <span>مجمع رقم 116</span>
              <span>الصينعمّان  - خلدا - الأردن</span>
            </div>
          </div>
          <div className={styles.cardImg}>
            <CardImg
              classStyle="egyImg"
              w={536.32}
              h={305}
              path="/assets/images/branches/jordan.png"
              alt="فروع مكتب محاماة TCMG في الأردن"
            />
          </div>
        </div>
      </div>

      <div className={styles.palestineLocation}>
        <h2>فلسطين</h2>
        <div className={styles.parent}>
          <div className={styles.cardImg}>
            <CardImg
              classStyle="egyImg"
              w={551}
              h={275}
              path="/assets/images/branches/palstin.png"
              alt="مكتب المجموعة التجارية والبحرية في فلسطين"
            />
          </div>

          <div className={styles.parentLocations}>
            <div className={styles.location}>
              <h4>جنين</h4>
              <p>(بالتعاون مع فريحات للمحاماة)</p>
              <span>برج فريحات ط١ - شارع حيفا - بجانب بنك القاهرة عمان </span>
              <span>جنين - فلسطين</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchLocations;
