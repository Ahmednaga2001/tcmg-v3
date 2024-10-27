import Image from "next/image";
import styles from "./page.module.css"
const HireingAchieveSuccess = () => {
  return (
    <section className={styles.achieveSuccess}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/hiring/imageone.png"
          className={styles.img}
          width={407}
          height={533}
          alt="وظائف محامين في مصر"
          style={{color:"#fff"}}
        />
      </div>
      <div className={styles.content}>
        <h2>تجاوز الحواجز وحقق النجاح في TCMG</h2>
        <p>
        في عالم القانون المعاصر, يواجه المحامون تحديات متعددة في الحصول على وظائف خالية للمحامين؛ فهناك منافسة شديدة بين خريجي مجال القانون. لكن في ظل هذه التحديات؛ تظهر بعض وظائف المحاماة المميزة للمحامين الطموحين والمبدعين؛ فمع تطور التقنيات القانونية وزيادة تبني الابتكار في مجال القانون؛ يتاح للمحامين بعض الوظائف القانونية التي يمكن أن تساعدهم في تطوير مهاراتهم وتقديم خدمات أفضل لعملائهم. في TCMG، تُتاح فرص وظائف محامين مميزة, حيث ستعزز هذه الفرص مهاراتهم وتوسع مجالات خبرتهم في المجالات القانونية الحديثة؛ مما يمَكّنهم من تحقيق أهدافهم المهنية بنجاح.
        </p>
      </div>
    </section>
  );
};

export default HireingAchieveSuccess;
