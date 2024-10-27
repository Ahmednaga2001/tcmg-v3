import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const EstablishHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
       <h1>تأسيس الشركات بأعلى الإمتيازات داخل وخارج مصر</h1>
        <p>
        نقدم خدمات قانونية متخصصة في تأسيس الشركات بمصر، من خلال فريق من محامين الشركات الذين يضمنون أن تبدأ أعمالك على أسس قانونية صلبة. سواء كنت تخطط لتأسيس شركة محلية أو دولية، فنحن نحرص على تسهيل جميع الإجراءات القانونية والتراخيص اللازمة لضمان نجاح مشروعك. نحن نؤمن بأن النجاح يبدأ بخطوات صحيحة، ولهذا فإن مكاتب TCMG الرائدة في مجال تأسيس الشركات نقدم لك الدعم الكامل في كل مرحلة من مراحل تأسيس شركتك الريادية، مع الالتزام بأعلى معايير الجودة القانونية.
        </p>
        <Link href="#"  
            className={styles.assets}
        >
بادر الآن بتأسيس شركتك الخاصة
<Image
            src="/assets/icons/establish/arrowleft.png"
            width={20}
            height={20}
            alt="arrow-left"
          />
        </Link>
      </div>
    </section>
  );
};

export default EstablishHero;
