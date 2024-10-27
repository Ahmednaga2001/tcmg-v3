"use client";
import styles from "./page.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    path: "/assets/images/joinus/cairo.png",
    title: "مصر - القاهرة",
    alt : "وظائف محاماة في مصر"
  },
  {
    path: "/assets/images/joinus/saudia.png",
    title: "السعودية - الرياض",
    alt:"وظيفة محامي في السعودية",
  },
  {
    path: "/assets/images/joinus/dubai.png",
    title: "الامارات - دبي",
    alt : "وظائف قانونية في الامارات",
  },
  {
    path: "/assets/images/joinus/china.png",
    title: "الصين - تشنغدو",
    alt : "وظائف محامين في الصين"
  },
];
const JoinJobOpportunities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <section >
    <div className={styles.jobOpportunities}>
    <div className={styles.right}>
        <h2>فرص وظيفية مميزة بانتظارك</h2>
        <p>
        إذا كنت محامي مخضرم وتبحث عن فرصة للتوظيف؛ فبإمكانك الانضمام إلينا؛ حيث نبحث عن محامين متحمسين يتطلعون إلى تحديات جديدة وفرص للنمو المهني. لسنا مجرد مكاتب قانونية، بل عائلة تضم أفرادًا يسعون لبناء شبكة قانونية عالمية تتجاوز كل الحدود وتقدم خدمات مميزة. حيث سنتواجد دائمًا لتوفير بيئة داعمة ومحفزة تمكنك من تحقيق طموحاتك المهنية وتطوير مهاراتك؛ لذا إذا كنت ترغب في الانضمام إلى مجتمعنا القانوني، فيسعدنا انضمامك إلى فريقنا المتميز.
        </p>
      </div>
      <div className={styles.left}>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.8,
            },
            1024: {
              slidesPerView: 2.8,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          
          modules={[EffectCoverflow,Autoplay]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {data.map((el, index) => (
            <SwiperSlide
              key={index}
              style={{
                // opacity: activeIndex === index ? 1 : .2,
                transition: "0.3s",
              }}
              className={styles.swiperSlide}
            >
              <div className={styles.content}>
                <Image src={el.path} width={364} height={295} alt={el.alt} quality={100} />
                <p className={styles.jobTitle}>{el.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
      <Link className={styles.link} href="/hiring">
      اعرف التفاصيل
      <Image src="/assets/icons/joinus/arrow-left.png" width={24} height={24} alt="arrow-left.png"/>
      </Link>
    </section>
  );
};

export default JoinJobOpportunities;
