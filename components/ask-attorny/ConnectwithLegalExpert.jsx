import styles from "@/components/ask-attorny/ask-attrony.module.css";
import Image from "next/image";
const ConnectwithLegalExpert = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/askattorny/manuel-jimenez-BiyR1kDQpoE-unsplash 1.png"
          className={styles.img}
          width={407}
          height={533}
          alt="اسأل محامي في مصر من مكتب TCMG"
        />
      </div>
      <div className={styles.content}>
       <h2>تواصل مع خبراء القانون: احصل على إجابات شاملة لاستفساراتك مع مكاتب TCMG للمحاماة</h2>
       <p>استخدم فورم اسأل محامي للحصول على استشارات قانونية متخصصة وشاملة تغطي جميع جوانب القانون, مع مكاتب TCMG للمحاماة. إذا كنت تواجه تحديات شخصية أو تجارية؛ فإن فريق المحامين المتميز الخاص بنا, مستعد لدعمك في الإجابة عن جميع استفساراتك القانونية بكفاءة ودقة. ذلك بالاستناد على أحدث التقنيات المستخدَمَة والمعرفة القانونية العميقة. نحن نسعى دائماً لتقديم أفضل الحلول التي تلبي احتياجاتك بشكل مثالي. اسال محامي من محامينا الآن واحصل على إجابات لكل أسئلتك القانونية, واستفِد من خبرتنا الطويلة في كافة مجالات القانون.
       </p>     
      </div>
    </section>
  );
};

export default ConnectwithLegalExpert;
