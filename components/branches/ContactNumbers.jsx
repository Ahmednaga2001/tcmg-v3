import styles from "@/components/branches/branches.module.css";
import CardImg from "./CardImg";
const ContactNumbers = () => {
  return (
    <section className={styles.contactNumbers}>
      <div className={styles.egyLocations}>
        <h2>جمهورية مصر العربية</h2>
        <div className={styles.parent}>
          <div className={styles.parentLocations}>
            <div className={styles.locationInfo}>
              <h4>رقم الهاتف</h4>
              <a href="tel:+201276299998">201276299998+</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>الرقم الأرضي</h4>
              <a href="tel:+20222636983">20222636983</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>بريد التواصل الرسمي</h4>
              <a href="mailto:contact@tcmglaw.com">contact@tcmglaw.com</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>بريد العلاقات الاستراتيجة</h4>
              <a href="mailto:pr@tcmglaw.com">pr@tcmglaw.com</a>
            </div>
          </div>
          <div className={styles.cardImg}>
            <div className={styles.overlay}></div>
            <CardImg
              classStyle="egyImg"
              w={335.33}
              h={475}
              path="/assets/images/branches/cairo.png"
              alt=" طرق التواصل مع مجموعة مكاتب TCMG"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactNumbers;
