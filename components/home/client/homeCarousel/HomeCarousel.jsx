"use client";

import React, { useRef } from "react";

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
    body : "بخبرة قانونية واسعة، نقدم استشارات قانونية شاملة لجميع العملاء، مُقدمة من نخبة من أكفأ المحامين المتمرسين. فدورنا كشركة موثوقة للمحاماة والاستشارات القانونية هو دعم الموكلين المحليين والدوليين بالحلول القانونية المتكاملة التي تلبي احتياجاتهم. اطلب الآن استشارة قانونية من مكتبTCMG للمحاماة وتواصل مع أفضل مستشار قانوني متخصص قادر على حل قضاياك وتحقيق أهدافك.",
    img: "assets/symbols/bottomL.svg",
    span: "اطلب الأن أستشارة فورية",
  },
  {
    id: 2,
    header: "مكتب محاماة دولي بمعايير أداء عالمية",
    body : "نسعى جاهدين لأن نكون مكتب محاماة واستشارات قانونية موثوق؛ لذا نعمل على تقديم حلول قانونية دقيقة ومتكاملة للشركات والأفراد في مختلف المجالات. نضم في شركة المحاماة الخاصة بنا فريق من المستشارين القانونيين أصحاب الخبرات الواسعة والعميقة في مجالات القانون المختلفة؛ لذا فإن دعمنا القانوني قادر على حماية حقوقك وتحقيق أهدافك القانونية.",
    img: "assets/symbols/topL.svg",
    span: "تواصل معنا عبر البريد الإلكتروني",
  },
];
const HomeCarousel = () => {

  return (
    <section className={styles.carousel} id="home-carousel">
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




