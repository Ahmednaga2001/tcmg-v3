"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";


const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    alt: "رئيس تنفيذي لمكاتب TCMG للمحاماة ",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
  },
  {
    id: 2,
    name: "هشام محمود",
    category: "التطوير العقاري والتقاضي",
    alt: "محامي جنائي في مصر",
    img: "/assets/images/homePage/lawyers/هشام محمود.png",
  },
  {
    id: 3,
    name: "خلف حسين",
    category: "التقاضي",
    alt: "محامي مدني في مصر",
    img: "/assets/images/homePage/lawyers/خلف حسين.png",

  },
  {
    id: 4,
    name: "سهى خيري",
    category: "التمويل والبنوك",
    alt: "محامي بنوك في مصر",
    img: "/assets/images/homePage/lawyers/سهي خيري.png",
  },
  {
    id: 5,
    name: "كرم موريس",
    category: "أعمال الشركات",
    alt: "محامي شركات في مصر",
    img: "/assets/images/homePage/lawyers/كرم موريس.png",
  },
];
const Team = () => {

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
      <Link href="lawyers" className="link">
      مشاهدة كامل خبراؤنا    
          <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24} alt='View Icon' />
        </Link>
    </div>
    // </section>
  );
};

export default Team;
