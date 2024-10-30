"use client";

import styles from "@/app/page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "flickity/dist/flickity.min.css";
import Image from "next/image";

const partners = [
  {
    id: "1",
    img: "/assets/images/homePage/partners/delta 1.png",
    w: 196,
    h: 64,
  },
  {
    id: "2",
    img: "/assets/images/homePage/partners/download (2).png",
    w: 86,
    h: 113,
  },
  {
    id: "3",
    img: "/assets/images/homePage/partners/download (3).png",
    w: 140,
    h: 132,
  },
  {
    id: "4",
    img: "/assets/images/homePage/partners/download.png",
    w: 207,
    h: 87,
  },
  {
    id: "5",
    img: "/assets/images/homePage/partners/download (4).png",
    w: 125,
    h: 128,
  },
  {
    id: "6",
    img: "/assets/images/homePage/partners/download (5).png",
    w: 173,
    h: 136,
  },
  {
    id: "7",
    img: "/assets/images/homePage/partners/images.png",
    w: 175,
    h: 51,
  },
];

function Parteners() {
  const flickityOptions = {
    initialIndex: 2,
    groupCells: false,
    pageDots: false,
    prevNextButtons: false,
  };

  return (
    <>
      <h1 style={{ textAlign: "center", padding: "40px" }}>أحدث عملائنا</h1>
      <section className={styles.partners} style={{padding: '20px 0px'}}>
            <Swiper
              effect="coverflow"
              spaceBetween={100}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[Navigation, Autoplay, Pagination]} // Added modules back
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id} className={styles.partner}>
                  <div className={styles.logo} key={partner.id} style={{width: '280px'}}>
                    <Image
                      src={partner.img}
                      alt={partner.img}
                      width={partner.w}
                      height={partner.h}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
      </section>
    </>
  );
}

export default Parteners;
