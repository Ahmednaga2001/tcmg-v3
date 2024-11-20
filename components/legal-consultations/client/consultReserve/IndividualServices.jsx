import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
const servicesData = [
  {
    id : 1,
    title: "اجتماع اونلاين",
    priceOriginal: 1999,
    priceDiscounted: 999,
    features: [
      // "دعم من مستشار قانوني متخصص",
      // "خصوصية عملائنا",
      // "التوجيه القانوني",
      // "البحث القانوني في موضوع القضية",
      // "تحديد موعد الاستشارة",
      // "تقديم الاستشارة مكتوبة"
      "الاستفسارات القانونية المتعمقة",
      "البحث القانوني وتوفير كل الحلول",
      "التواصل التفاعلي للاجابة على كل الأسئلة القانونية"
    ],
  },
  {
    id : 2,
    title: "استشارة هاتفية",
    priceOriginal: 999,
    priceDiscounted: 499,
    features: [
      // "دعم من مستشار قانوني متخصص",
      // "خصوصية عملائنا",
      // "التوجيه القانوني",
      // "البحث القانوني في موضوع القضية",
      // "تحديد موعد الاستشارة",
      "للاستفسارات القانونية العامة والسريعة",
      "استشارة قانونية فورية",
      "التواصل مع مستشار قانوني متخصص"
    ],
    isPopular: true,
  },
  {
    id:3,
    title: "استشارة مكتبية",
    priceOriginal: 2999,
    priceDiscounted: 1999,
    features: [
      // "دعم من مستشار قانوني متخصص",
      // "خصوصية عملائنا",
      // "التوجيه القانوني",
      // "البحث القانوني في موضوع القضية",
      // "تحديد موعد الاستشارة",
      // "تقديم الاستشارة مكتوبة",
      // "امكانية الاجتماع أون لاين"
      "استشارة وجهًا لوجه مع مستشار متخصص",
      "الإجابة على كافة الإستفسارات القانونية",
      "النصح والتوجيه القانوني"
    ],
  },
];
const IndividualServices = () => {
  return (
    <div className={styles.individualServices}>
     <div className={styles.container}>
     {servicesData.map((service, index) => (
        <div className={styles.card} key={index}>
          {service.isPopular && <span className={styles.popular}>الأكثر طلباً</span>}
          <div className={styles.topData}>
            <h3>{service.title}</h3>
          <div className={styles.priceContainer}>
          <span className={styles.price}>{service.priceOriginal}</span>
            <span style={{paddingTop: "10px" , display: "block"}}>
              {service.priceDiscounted}<sub>EGY</sub>
            </span>
          </div>
          </div>
          <div className={styles.bodyData}>
            <div className={styles.offer}>
              <span></span>
              <span>{service.id==1?'إجتماع Zoom , Google meet' : 'لفترة محدودة'}</span>
              <span></span>
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
          <Link 
    href={{
      pathname: service.title === "استشارة مكتبية" ? "/payment" : "",
      query: { isOfficeConsultation: service.title === "استشارة مكتبية" }
    }}
  >
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

export default IndividualServices;
