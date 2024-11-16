"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const data = [
  {
    id: 1,
    title: "1- احجز استشارة قانونية",
    desc: "احصل على استشارة قانونية في مجال تأسيس الشركات مع خبراء من المجموعة التجارية والبحرية للمحاماة؛ لتحديد الشكل القانوني المناسب لشركتك.",
    path: "/assets/images/establish/Calender.svg",
    alt: "حجز استشارة قانونية",
  },
  {
    id: 2,
    title: "2- قم بتوكيل محامي",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Female -Lawyer.svg",
    alt: "توكيل محامي تأسيس شركات",
  },
  {
    id: 3,
    title: "3- إنطلق في عالم الأعمال",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Business-World.svg",
    alt: "إبدأ نجاحك التجاري",
  },
  {
    id: 1,
    title: "1- احجز استشارة قانونية",
    desc: "احصل على استشارة قانونية في مجال تأسيس الشركات مع خبراء من المجموعة التجارية والبحرية للمحاماة؛ لتحديد الشكل القانوني المناسب لشركتك.",
    path: "/assets/images/establish/Calender.svg",
    alt: "حجز استشارة قانونية",
  },
  {
    id: 2,
    title: "2- قم بتوكيل محامي",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Female -Lawyer.svg",
    alt: "توكيل محامي تأسيس شركات",
  },
  {
    id: 3,
    title: "3- إنطلق في عالم الأعمال",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Business-World.svg",
    alt: "إبدأ نجاحك التجاري",
  },
];
const EstablishCompany = () => {
  const [bgColor, setBgColor] = useState("");
  const [scale, setScale] = useState(1);
  const colorCycle = ["", "#1B2340"];
  const scaleCycle = [1, 1.3, 1];

  const [activeIndex, setActiveIndex] = useState(0);
  const [show2024Events, setShow2024Events] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const displayedCard = data[activeIndex];
  useEffect(() => {
    let index = 0;
    let index2 = 0;
    const interval = setInterval(() => {
      setBgColor(colorCycle[index]);
      setScale(scaleCycle[index2]);
      index = (index + 1) % colorCycle.length;
      index2 = (index + 1) % scaleCycle.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className={styles.startcompany}>
      <h2>اتبع الخطوات التالية لبدء تأسيس شركتك بنجاح</h2>
      <div className={styles.swiperContainer} id="Milestones">
        <Swiper
          spaceBetween={20}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          slidesPerView={2.5}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Navigation,Autoplay]}
        >
          <div className={styles.swiperWrapper}>
            {data.map((el, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                {!(activeIndex === index) && (
                  <span className={styles.headerId}>{el.id}</span>
                )}

                <span className={styles.headerTitle}>
                  {activeIndex === index ? el.title.slice(2) : ""}
                </span>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="swiper-button-prev prev" />
        <div className="swiper-button-next next" />
      </div>

      <div className={styles.slider}>
        <motion.div
          className={styles.slide}
          key={displayedCard.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.parent}>
            <div className={styles.content}>
              <h3>{displayedCard.title}</h3>
              <p>{displayedCard.desc}</p>
            </div>
            <div className={styles.Img}>
              <Image
                src={displayedCard.path}
                width={300}
                height={302}
                alt={displayedCard.alt}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className={styles.startcompanyparent}>
        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[0].title}</h3>
            <p>{data[0].desc}</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.Img}>
            <Image
              src={data[0].path}
              width={300}
              height={302}
              alt={data[0].alt}
            />
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.Img}>
            <motion.div className={styles.personImg}
              initial={{ x: 0, y: 0 }}
              animate={{ x: .5, y: .5, backgroundColor: bgColor }} // Animate between colors
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}

            >
              <Image
                src={data[1].path}
                width={145}
                height={192}
                alt={data[1].alt}
              />
            </motion.div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.content}>
            <h3>{data[1].title}</h3>
            <p>{data[1].desc}</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[2].title}</h3>
            <p>{data[2].desc}</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.Img}>
            <div
              className={styles.worldImg}
            >              <Image width={181} height={192}


              src={data[2].path}
              alt={data[2].alt}
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default EstablishCompany;
