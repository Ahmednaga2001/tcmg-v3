"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";



const Team = ({ lawyers }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    // <section className={styles.team}>
    <div className={styles.swiperContainerWrapper} id="featureSlide">
      <div className={styles.swiperContainer}>
        <Swiper
          effect={"coverflow"}
          spaceBetween={100}
          centeredSlides={true} // Center the active slide
          slidesPerView={'auto'}
          grabCursor={true}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }
          }
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          onSlideChange={handleSlideChange}
        >
          {lawyers?.map((lawyer, index) => (
            <SwiperSlide
              className={styles.swiperSlide}
              key={lawyer.id}
              style={{
                // border: activeIndex === index ? "1px solid #ffffff74" : "none",
                // opacity: activeIndex === index ? 1 : 0.7,
                // transition: "border 0.3s , opacity 0.2s",
                // transform: activeIndex === index ? "scale(1.1)" : "scale(1)",

              }}
            >
              <div className={styles.card}>
                <Image
                quality={100}
                  src={lawyer.img}
                  alt={lawyer.alt}
                  width={279}
                  height={300}
                />
                <p>{lawyer.name}</p>
                <p>{lawyer.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    // </section>
  );
};

export default Team;
