"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import styles from "./page.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    header: "استشارات قانونية بمعايير عالمية المستوى",
    body: "بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي نخبة من أكفأ المحامين المتمرسين وأفضل الشركاء  بمستوى جديد من الحلول القانونية المتكاملة. اطلب الآن استشارة قانونية فورية وتواصل مع أفضل مستشار قانوني واحصل على الدعم القانوني لحل قضاياك وتحقيق أهدافك.",
    img: "assets/symbols/bottomL.svg",
    span: "اطلب الأن أستشارة فورية",
  },
  {
    id: 2,
    header: "مكتب محاماة دولي بمعايير أداء عالمية",
    body: "تعد المجموعة التجارية والبحرية أكبر مكتب محاماة دولي في مصر، وهذا يرجع لحجم القضايا الكبير التي تسلمها المكتب، والعملاء الدوليين والمحليين الذين تعاملوا معنا، بالإضافة إلى حجم وقوة العلاقات العامة وبروتوكولات التعاون المرتبطة بالمكتب. وقد اتخد المكتب مقره الرئيسي في قلب مدينة القاهرة ليكون منارة لتحقيق الأهداف القانونية لكافة عملائنا الكرام. تواصل الآن مع أفضل شركة محاماة رائدة في مصر.",
    img: "assets/symbols/topL.svg",
    span: "تواصل معنا عبر البريد الإلكتروني",
  },
];
const HomeCarousel = () => {
  return (
    <section className={styles.carousel}>
    <Swiper
      spaceBetween={30}
      effect="fade"
      pagination={{
        clickable: true,
        horizontalClass: "--swiper-pagination-horizontal",
        type: "bullets",
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-width": "12px",
        "--swiper-pagination-bullet-height": "12px",
      }}>
      {data.map((el) => (
        <SwiperSlide key={el.id} className={styles.carousel}>
          <div className={styles.caroChild}>
            <h2>{el.header}</h2>
            <div className={styles.bodyContent}>
              <p>{el.body}</p>
              <Image src={el.img} alt={el.img} width={130} height={100} />
            </div>
            <div>
            <span className="link">
              {el.span}
              <Image
                src="assets/icons/arrow-left.svg"
                alt={el.img}
                width={20}
                height={20}
              />
            </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default HomeCarousel




