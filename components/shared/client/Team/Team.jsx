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
          navigation={{
            nextEl: ".prev",
            prevEl: ".next",
          }}
          // breakpoints={{
          //   380: {
          //     slidesPerView: 1,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 1.7,
          //     spaceBetween: 20,
          //   },
          //   1000: {
          //     slidesPerView: 2.5,
          //     spaceBetween: 20,
          //   },
          //   1200: {
          //     slidesPerView: 3,
          //     spaceBetween: 40,
          //   },
          // }}
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
