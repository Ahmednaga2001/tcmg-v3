import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const servicesData = [
  {
    title: "تأسيس شركات",
    price: "1999",
    features: [
      "تسجيل الشركة",
      "إستراتيجية الأعمال",
      "التخطيط المالي",
      "العقود القانونية",
      "التوجيه الإداري",
      "دعم مستمر",
      "التوسع والنمو",
    ],
  },
  {
    title: "أعمال شركات",
    info: "تواصل معنا للحجز",
    features: [
      // "دعم من مستشار قانوني متخصص",
      // "خصوصية عملائنا",
      // "التوجيه القانوني",
      // "البحث القانوني في موضوع القضية",
      // "تحديد موعد الاستشارة",
      // "تقديم الاستشارة مكتوبة",
      // "امكانية الاجتماع أون لاين",
      // "المتابعة القانونية بعد الاستشارة",
      // "علاقات استراتيجية",
      "الدمج والاستحواذ",
      "تسجيل الملكية الفكرية",
      "التنفيذ والإفلاس",
      "قضايا الضرائب",
      "القضايا الإدارية"
    ],
  },
];

const CompaniesServices = () => {
  return (
    <div className={styles.companiesServices}>
      <div className={styles.container}>
        {servicesData.map((service, index) => (
       
          <div className={styles.card} key={index}>
            <div className={styles.topData}>
              <h3>{service.title}</h3>
              {service.price ? (
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{service.price}</span>
                  <span style={{paddingTop: "10px" , display: "block"}}>
                    {service.price}
                    <sub>EGY</sub>
                  </span>
                </div>
              ) : (
                <span className={styles.info}>{service.info}</span>
              )}
            </div>
            <div className={styles.bodyData}>
              <div className={styles.offer}>
                {service.price && <span></span>}
                {service.price && <span>لفترة محدودة</span>}
                {service.price && <span></span>}
              </div>
              {service.features.map((feature, idx) => (
                <span key={idx}>
                  <Image
                    src="/assets/icons/legalconsultations/Checkmark.png"
                    width={24}
                    height={24}
                    alt="check mark icon"
                  />
                  {feature}
                </span>
              ))}
            </div>
            <Link href={{
    pathname: service.title === "أعمال شركات" ? "/business-registration" : "/payment",
    query: { fromBusinessPackage: service.title === "تأسيس شركات" }
  }}>
              تحديد
              <Image
                src="/assets/icons/legalconsultations/arrow-left.png"
                width={24}
                height={24}
                alt="arrow left icon"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesServices;
