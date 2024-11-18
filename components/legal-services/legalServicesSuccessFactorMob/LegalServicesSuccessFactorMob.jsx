"use client";
import SuceessFactorCard from "./SuceessFactorCard"
import styles from "./page.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
const data = [
  {
    title: "الاحترافية",
    desc : "تمثل الاحترافية أحد معاييرنا الأساسية، حيث نسعى جاهدين لتقديم خدمات قانونية للشركات وجميع الكيانات، بكل مهارة وعلى مستوى عالٍ من الجودة والاحترافية. نضمن تحقيق أفضل النتائج لعملائنا بتقديم استشارات وحلول قانونية متميزة.",
    path: "/assets/icons/legalservices/settingIcon.png",
    w1 : 64,
    h1: 64,
    w2 : 48,
    h2 : 48,
    alt : "احترافية في تقديم خدمات قانونية"
    
  },
  {
    title : "السرعة والدقة",
    desc : "نسعى في TCMG دائمًا لتقديم الحلول القانونية وخدمات مكتب المحاماة ضمن إطار زمني قصير دون التقصير في جمع تفاصيل القضية بدقة ومهارة عاليتين.",
    path: "/assets/icons/legalservices/speedIcon.png",
    w1 : 64,
    h1: 64,
    w2 : 48,
    h2 : 48,
    w2 : 48,
    h2 : 48,
    alt : "الحفاظ على الدقة والسرعة"
  },
  {
    title : "سنوات الخبرة",
    desc : "ترجع كفاءِة محامينا بمكاتب المجموعة التجارية والبحرية في تقديم باقة الخدمات القانونية إلى سنوات الخبرة بما يزيد عن 30 عامًا، من تنمية المهارات والخبرات المتراكمة.",
    path: "/assets/icons/legalservices/personsIcon.png",
    w1 : 64,
    h1: 64,
    w2 : 48,
    h2 : 48,
    alt : "سنوات من الخبرة في تقديم خدمات قانونية"
  },
  {
    title : "فعالية النتائج",
    desc : "يعمل فريقنا من المحامين بجدية واجتهاد سعيًا لتحقيق احتياجات الموكلين بتقديم خدمات قانونية احترافية؛ من أجل الحرص التام على تقديم حلول فعالة وضمان نجاح القضية",
    path: "/assets/icons/legalservices/notesIcon.png",
    w1:61,
    h1 : 75,
    w2 : 48,
    h2 : 48,
    alt : "نتائج فعالة"
  },
]
const LegalServicesSuccessFactorMob = () => {
  return (
    <section className={styles.succeesfactors}>
    <h2>معايير نجاح مجموعة TCMG في مجال المحاماة</h2>
    <div className={styles.parent} id="succeesfactors">
    <Swiper
      spaceBetween={30}
      effect="fade"
      navigation={{
        nextEl: ".prev",
        prevEl: ".next",
      }}
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade,Navigation, Pagination, Autoplay]}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-width": "12px",
        "--swiper-pagination-bullet-height": "12px",
      }}>
  {data.map((el, index) => (
            <SwiperSlide key={index}>
              <SuceessFactorCard
                title={el.title}
                w1={el.w1}
                h1={el.h1}
                w2={el.w2}
                h2={el.h2}
                alt={el.alt}
                desc={el.desc}
                path={el.path}
              />
            </SwiperSlide>
          ))}
    </Swiper>
    <div className="swiper-button-prev prev" />
    <div className="swiper-button-next next" />
    </div>
  </section>
  )
}

export default LegalServicesSuccessFactorMob
