"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
export const ServiceOrCaseItemSlider = ({ services }) => {
  let navigation = {
    img1: "/assets/images/homePage/left.svg",
    img2: "/assets/images/homePage/right.svg",
  }
  return (
    <div className={styles.Slides}>
      <Image src={navigation.img2} alt="Description of image" width={50} height={50} className={`${styles.navigation1} prev`} />
      <Swiper
        spaceBetween={30}
        effect="fade"
        pagination={{
          clickable: true,
          horizontalClass: "--swiper-pagination-horizontal",
          type: "bullets",
        }}
        navigation={{
          nextEl: ".prev",
          prevEl: ".next",
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-width": "12px",
          "--swiper-pagination-bullet-height": "12px",
          "--swiper-navigation-top-offset": "25%",
          "--swiper-navigation-sides-offset": "0px",
        }}
      >
        {
          services.map((service, index) => (
            <SwiperSlide key={index} className={styles.SwiperSlide}>
              <div>
                <Image
                  src={service.img}
                  alt={service.img}
                  width={600}
                  height={350}
                  className={styles.image}
                />
                <h3>{service.header}</h3>
                {service.date && <span className={styles.date}>{service.date}</span>}
                <p>{service.body}</p>
                {service.ref && (
                <span className={styles.ref}>
                    <Link className="link" href={service.ref}>
                    الذهاب إلي الصفحة
                    <Image
                      src="assets/icons/arrow-left.svg"
                      alt="Arrow Left Small"
                      width={20}
                      height={20}
                    />
                  </Link>
                </span>
                )}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Image src={navigation.img1} alt="Description of image" width={50} height={50} className={`${styles.navigation2} next`} />
    </div>


  )
}
