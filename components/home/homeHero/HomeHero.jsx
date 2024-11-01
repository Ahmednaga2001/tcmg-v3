'use client'
import styles from "./page.module.css";


const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
        انطلق نحو مستقبل قانوني أفضل مع مكتب  TCMG للمحاماة        </h1>
        <p>
        مرحبًا بكم في المجموعة التجارية والبحرية للمحاماة، حيث نقدم حلولًا قانونية شاملة تلبي احتياجات الشركات والأفراد على حد سواء. منذ تأسيسنا عام 1986، نسعى لنكون أكبر شركة محاماة دولية في مصر والشرق الأوسط؛ لذا نعمل جاهدين على تقديم أعلى معايير الاحترافية والدعم القانوني المتكامل. فريقنا من المحامين الخبراء جاهزون دائمًا لمساعدتكم على تحقيق أهدافكم القانونية وضمان حقوقكم. نحن هنا لنكون شريككم الموثوق في جميع المسائل القانونية، في حال كنتم تبحثون عن مكتب محاماة دولى فى مصر.
        </p>
        <div className={styles.animation}>
          <iframe src="https://lottie.host/embed/5c8cb5db-732f-4f67-b717-5f739c8980b2/R8K8DXZUOR.json" style={{ border: 'none', marginTop: '96px', width: '46px' , height: '46px'}}></iframe>
          <p className="link">
            أكتشف المزيد
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
