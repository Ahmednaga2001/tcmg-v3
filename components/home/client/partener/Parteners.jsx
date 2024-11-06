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
  {
    id : "8",
    img : "/assets/images/homePage/partners/Frame 427321792.png",
    w : 112,
    h : 81
  },
  {
    id : "9",
    img : "/assets/images/homePage/partners/LOGO 1.png",
    w : 152,
    h : 103
  },
  {
    id : "10",
    img : "/assets/images/homePage/partners/846267_354348 1.png",
    w : 172,
    h : 82
  },
  {
    id : "11",
    img : "/assets/images/homePage/partners/344768973_1269518143646550_1976666299951207228_n 1.png",
    w : 114,
    h : 81
  },
  {
    id : "12",
    img : "/assets/images/homePage/partners/logo 1 (1).png",
    w : 202,
    h : 62
  },
  {
    id : "13",
    img : "/assets/images/homePage/partners/277734692_344158171062444_2748486069442598100_n 2.png",
    w :100,
    h : 85
  }
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
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                380: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
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
              grabCursor={true}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[Navigation, Autoplay, Pagination]} // Added modules back
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id} className={styles.partner}>
                  <div className={styles.logo} key={partner.id} style={{width: '330px'}}>
                    <Image
                      src={partner.img}
                      alt={partner.img}
                      width={partner.w}
                      height={partner.h}
                      quality={100}
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
