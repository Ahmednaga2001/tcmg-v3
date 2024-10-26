import styles from "./page.module.css";
import Image from "next/image";
const data = [
  {
    id: 1,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "المهندس حسام نصار",
    category: "مهندس إماراتي خبير",
    body: "جهود إستثنائية في دعم الموكلين والعمل على خطاهم. سعيد بتعاملي مع المجموعة التجارية والبحرية وممتن لما قدموه لي من خدمات",
  },
  {
    id: 2,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "أستاذ هيثم الشيمي",
    category: "مدير ماليات",
    body: "دقة عالية وسرعة في الإداء وتعامل راقي مع محامو المكتب. بدعمهم تتحقق الأهداف وتحل المشكلات القانونية، شكراً لكم ",
  },
  {
    id: 3,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "أستاذة فاطمة عيسى",
    category: "رائدة أعمال",
    body: "خدمات قانونية على أعلى مستوى تدعم عالم المال والأعمال، والأفضل من ذلك خبرة المحامين وسرعة الأداء والرد. شكراً جزيلاً على هذا الخبرات اللامعة",
  },
  {
    id: 4,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "أستاذ أحمد سليم",
    category: "مستثمر ورجل أعمال",
    body: "تعاقدي مع مكتب المحامي محمد أبو ضيف وشركائه الخبراء مكَّنني على تحقيق أهدافي القانونية بداية من كتابة العقود وحتى تأسيس الشركة في مصر الحبيبة. حقاً أنا أقدر ذلك",
  },
];
const Customers = ({customers}) => {
  return (
    <section className={styles.ourCustomers}>
      <div className={styles.header}>
        <h2>آراء عملائنا الكرام</h2>
        <Image
          src="/assets/icons/crown.svg"
          alt="Crown"
          width={60}
          height={25}
        />
      </div>
      <div className={styles.customers}>
        {customers && customers.map((customer) => (
          <div className={styles.customer} key={customer.id}>
            <div className={styles.top}>
              <div className={styles.left}>
                <span>{customer.name}</span>
                <br />
                <span>{customer.category}</span>
              </div>
              <div className={styles.right}>
                <Image
                  src={customer.img}
                  alt={customer.name}
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <Image
                src="/assets/icons/quote.svg"
                alt="Quote"
                width={28}
                height={23}
              />
              <p>{customer.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="link">
        <span>مشاهدة كامل الأراء</span>
        <Image
          src="/assets/icons/arrow-left.svg"
          alt="Left-Arrow"
          width={20}
          height={20}
        />
      </div>
    </section>
  );
};

export default Customers;
