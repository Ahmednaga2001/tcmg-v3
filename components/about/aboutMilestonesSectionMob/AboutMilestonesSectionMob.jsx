"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade,Navigation,Pagination } from "swiper/modules";
import styles from "./page.module.css";
import { useState } from "react";
import {motion} from "framer-motion"
const cardInfo = [
  {
    year: "1986",
    title: "إطلاق مكتب المحامي محمد أبو ضيف الأول بالأسكندرية",
    desc: "في مارس من عام 1986 قام المحامي محمد أبو ضيف بتأسيس أول مكتب محاماة باتخاذ مقر له في مدينة الإسكندرية، ليكون شعار المكتب الأول توفير الحماية القانونية للموكلين",
    imagePath : "/assets/images/about/alex.png",
    alt : "المكتب الأول للمجموعة التجارية والبحرية",
  },
  {
    year: "1996",
    title: "إطلاق المكتب الثاني في قلب مدينة القاهرة",
    desc: "تم إفتتاح مكتبنا الثاني للمحاماة والاستشارات القانونية في مدينة القاهرة الكبري ليصبح المقر الرئيسي للمكتب في قلب المدينة وذلك لنوسع من نطاق أعمالنا في كافة المدن المصرية",
    imagePath :"/assets/images/about/cairo.png",
    alt : "المكتب الثاني لمجموعة TCMG بالقاهرة" 
  },
  {
    year: "2005",
    title: "بناء فريق عمل متكامل من أكبر المحامين والمستشارين",
    desc: "إستقطب المكتب نخبة من أكبر محامين مصر والمتخصصين في مجالات القانون المختلفة رافعًا شعار تقديم مستوى جديد من الحلول القانونية عالية المستوى بطريقة فريدة ومبتكرة",
    imagePath : "/assets/images/about/building.png",
    alt : "بناء فريق متكامل", 
  },
  {
    year: "2008",
    title: "الإطلاق الأول للمجموعة التجارية والبحرية للمحاماة",
    desc: "تم إطلاق المجموعة التجارية والبحرية للمحاماة بكل قوة بغرض تقديم خدمات قانونية بمعايير عالمية المستوى لخدمة العملاء الكرام على الصعيد المحلي والدولي وسعياً من فريق العمل بأن تصبح أكبر مكتب محاماة دولي في مصر.",
    imagePath : "/assets/images/about/space.png",
    alt : "لإطلاق الأول للمجموعة التجارية والبحرية"
  },
  {
    year: "2016",
    title: "الاحتفال بمرور 30 عاماً من العطاء القانوني",
    desc : "احتفل مكتب TCMG بمرور 30 عاماً من العطاء القانوني للعملاء الكرام من الأفراد والشركات والمؤسسات في مصر والشرق الأوسط وبكون المجموعة أعرق مكتب محاماة مصري يدعم الموكلين منذ 1986 في كل المدن المصرية والعربية.",
    imagePath : "/assets/images/about/anniversary.png",
    alt : "30 عام من العطاء القانوني",
  },
  {
    year: "2020",
    title: "بروتوكول تعاون دولي مع مكتب زايد الشحي بالإمارات",
    desc: "بدء المكتب بروتوكول تعاون دولي مع مكتب المحامي زايد الشحي في دبي بالإمارات العربية المتحدة بغرض التوسع في العطاء القانوني في مصر والشرق الأوسط.",
    imagePath:"/assets/images/about/Maskgroup.png",
    alt : "تعاون دولي مع مكتب زايد الشحي بالإمارات"
  },
  {
    year: "2023",
    title: "بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة في الرياض",
    desc : "بدء المكتب بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة في الرياض بالمملكة العربية السعودية بغرض التوسع في العطاء القانوني؛ حتى يصبح مكتب TCMG أحد أفضل مكاتب المحاماة الدولية في مصر.",
    imagePath : "/assets/images/about/anniversary2.png",
    alt : "تعاون دولي مع الحبار و المزارقة بالرياض",
  },
  {
    year: "2024", 
    title: "أحداث خاصة بسنة 2024",
    desc: "عرض الأحداث الجديدة لعام 2024.",
    imagePath: "/assets/images/about/2024.png",
    alt: "أحداث 2024",
  },
];

const events2024 = [
  {
    title: "بروتوكول تعاون دولي مع شركة سيتشوان ينجلينج هيشي للمحاماة",
    desc: `
  بدء المكتب بروتوكول تعاون دولي مع سيتشوان ينجلينج هيشي في الصين بتشغندو بغرض التوسع في العطاء القانوني على النطاق الدولي، ولكي يصبح مكتب المجموعة التجارية والبحرية للمحاماة أحد أفضل مكاتب المحاماة الدولية في مصر.
  `,
  imagePath : "/assets/images/about/Maskgroup2.png",
  alt : "تعاون دولي مع سيتشوان ينجلينج هيشي في الصين"
  },
  {
    title : "بروتوكول تعاون دولي مع ذا ويلث تيلر لخدمات رجال الأعمال",
    desc : "بدء المكتب بروتوكول تعاول دولي مع  ذا ويلث تيلر في دبي  بالإمارات العربية المتحدة بغرض  التوسع في العطاء القانوني في مصر والشرق الأوسط.",
      imagePath : "/assets/images/about/anniversary5.png",
      alt : "بروتوكول تعاون دولي مع ذا ويلث تيلر لخدمات رجال الأعمال",
    },
  {
    title : "بروتوكول تعاون دولي مع فريحات للمحاماة",
    desc : "بدء المكتب بروتوكول تعاول دولي مع فريحات للمحاماة بجنين للتوسع في العطاء القانوني في مصر والشرق الأوسط.",
       imagePath : "/assets/images/about/Mask group4.png",
       alt : "بروتوكول تعاون دولي مع فريحات للمحاماة",
      },
  {
    title : "بروتوكول تعاون دولي مع شركة المرسي لأعمال المحاماة",
    desc : "بدء المكتب بروتوكول تعاول دولي مع شركة المرسي لأعمال المحاماة عمان بالأردن بغرض  التوسع في العطاء القانوني في مصر والشرق الأوسط.",
    imagePath : "/assets/images/about/anniversary (1).png",
    alt : "بروتوكول تعاون دولي مع شركة المرسي لأعمال المحاماة",

  }
];




export default function AboutMilestonesSectionMob() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show2024Events, setShow2024Events] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setShow2024Events(cardInfo[swiper.realIndex].year === "2024");
  };

  const displayedCard = cardInfo[activeIndex];

  return (
    <section>
      <div className={styles.swiperContainer} id="Milestones">
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          slidesPerView={3}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Navigation]}
        >
          {cardInfo.map((el, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <span className={index === activeIndex ? styles.active : ""}>
                {el.year}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev prev" />
        <div className="swiper-button-next next" />
      </div>

      <div className={styles.slider}>
        {show2024Events ? (
          events2024.map((event, index) => (
            <motion.div key={index} className={styles.slide} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }} 
            >
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
              <img src={event.imagePath} alt={event.alt} className={styles.image} />
            </motion.div>
          ))
        ) : (
          <motion.div className={styles.slide} 
          key={displayedCard.year}

          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.5 }} 
          >
            <h3>{displayedCard.title}</h3>
            <p>{displayedCard.desc}</p>
            <img src={displayedCard.imagePath} alt={displayedCard.alt} className={styles.image} />
          </motion.div>
        )}
      </div>
    </section>
  );
}