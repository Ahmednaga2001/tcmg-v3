"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import styles from "@/app/page.module.css";
import Image from "next/image";

const info = [
  {
    id: 1,
    title: "استشارات قانونية بمعايير عالمية المستوى",
    desc: ` بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي
            نخبة من أكفأ المحامين المتمرسين وأفضل الشركاء بمستوى جديد من الحلول
            القانونية المتكاملة. اطلب الآن استشارة قانونية فورية وتواصل مع أفضل
            مستشار قانوني واحصل على الدعم القانوني لحل قضاياك وتحقيق أهدافك.`,
    path: "assets/symbols/bottomL.svg",
    sub: "اطلب الأن أستشارة فورية",
  },
  {
    id: 2,
    title: "مكتب محاماة دولي بمعايير أداء عالمية",
    desc: ` بتعد المجموعة التجارية والبحرية أكبر مكتب محاماة دولي في مصر، وهذا
            يرجع لحجم القضايا الكبير التي تسلمها المكتب، والعملاء الدوليين
            والمحليين الذين تعاملوا معنا، بالإضافة إلى حجم وقوة العلاقات العامة
            وبروتوكولات التعاون المرتبطة بالمكتب. وقد اتخد المكتب مقره الرئيسي
            في قلب مدينة القاهرة ليكون منارة لتحقيق الأهداف القانونية لكافة
            عملائنا الكرام. تواصل الآن مع أفضل شركة محاماة رائدة في مصر.`,
    path: "assets/symbols/topL.svg",
    sub: "تواصل معنا عبر البريد الإلكتروني",
  },
];

const HomeSlider = () => {
  return (
    <section className={styles.homeSlider}>
      <Swiper
        spaceBetween={30}
        effect="fade"
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
      >
        {info.map((el, index) => (
          <SwiperSlide key={el.id} className={styles.swiperSlide}>
           <div className={styles.swiperContainer}>
           <div className={styles.swiperContent}>
              <h2>{el.title}</h2>
              <p>{el.desc}</p>
              <span>
                {el.sub}
                <Image
                  src="assets/icons/arrow-left.svg"
                  alt="Arrow Left Small"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div>
              <Image
                src={el.path}
                alt={`Slide ${index} Image`}
                width={130}
                height={100}
              />
            </div>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
