import Image from "next/image";
import styles from "./page.module.css";
const BusinessRoadToExcellence = () => {
  return (
    <section className={styles.legalinstructions}>
      <h2>مسيرتك نحو تحقيق التميز والنجاح المستدام</h2>
      <div className={styles.boxs}>
        <div className={styles.box}>
          <div className={styles.boxRight}>
            <p>
            في عالم الأعمال اليوم، حيث المنافسة شديدة والتحديات متعددة، لا يكفي أن تكون جيدًا فحسب؛ بل يجب أن تسعى باستمرار لتحقيق التفوق والتميز. في المجموعة التجارية والبحرية للمحاماة، نحن ندرك تمامًا أن النجاح المستدام يتطلب أكثر من مجرد تقديم خدمات قانونية. سنكون شريكك الاستراتيجي، وسنسعى جاهدين لتوفير الإرشاد القانوني والابتكار الذي تحتاجه لتجاوز التحديات واغتنام الفرص.
            </p>
          </div>
          <div className={styles.boxLeft}>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg1}
              alt="circle image"
              width={30}
              height={30}
            />
            <div className={styles.line}></div>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg2}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxLeft}>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg1M}
              alt="circle image"
              width={30}
              height={30}
            />
            <div className={styles.lineM}></div>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg2M}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.boxRight}>
           <p>تغطي خدمات رجال الاعمال كافة جوانب أعمالك التجارية، سواء كنت تتطلع إلى توسيع نطاق عملياتك من خلال الاندماج والاستحواذ أو تحتاج إلى حماية حقوقك من خلال التحكيم التجاري؛ فإننا نوفر لك الخبرة والدعم اللازمين لضمان سير أعمالك بسلاسة وكفاءة. فريقنا من المحامين المتخصصين يعملون بتفانٍ تام لتقديم استشارات قانونية مخصصة تلبي احتياجاتك الفريدة؛ مما يساعدك على اتخاذ قرارات استراتيجية تعزز من قوة شركتك ومكانتها في سوق العمل.</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxRight}>
         <p>نحن ملتزمون بتقديم خدمات متقدمة لرجال الاعمال؛ تساعدك على بناء سمعة قوية والحفاظ على استدامة أعمالك. من خلال خدماتنا الشاملة والمبتكرة، سنساعدك على التكيف مع التغيرات السريعة في بيئة الأعمال العالمية وتجاوز جميع التحديات القانونية التي قد تواجهها. نحن هنا لنكون شريكك في النجاح وتوفير لك الأمان القانوني والثقة التي تحتاجها للتركيز على ما تفعله بشكل أفضل، أي سنقود شركتك نحو التميز والنجاح المستدام.</p>
          </div>
         
        </div>
      
      </div>
    </section>
  );
};

export default BusinessRoadToExcellence;
