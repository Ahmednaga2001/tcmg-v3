"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade,Pagination } from "swiper/modules";
import styles from "./page.module.css"
const info = [
    {
      id: 1,
      title: "بداية المجموعة التجارية والبحرية للمحاماة",
      desc: "أسس المحامي محمد أبو ضيف مكتبه الأول للمحاماة والاستشارات القانونية عام 1986 كمكتب محامي حر في مدينة الإسكندرية. ومع مرور الوقت، بدأت نجاحات المكتب تتزايد بين العملاء في القضايا المختلفة؛ والذي بدوره ساهم في بناء قاعدة جماهيرية من العملاء والموكلين من محافظتي الإسكندرية والقاهرة. ومع زيادة طلبات الخدمات القانونية كالتقاضي وفض المنازعات والتطوير العقاري، قام الإستاذ محمد أبو ضيف بتوسيع مكتبه الأول بضم نخبة من الكوادر البشرية القانونية لتلبية خدمة عملائنا الكرام. ومع مرور بضع سنين، أصبح المكتب يحمل سجل حافل من النجاحات القانونية؛ والذي ترتب عليه فتح مكتبنا الثاني في قلب مدينة القاهرة وذلك للتوسع في خدمة عملائنا الكرام في كلا المحافظتين وباقي المحافظات المصرية المجاورة. وفي تلك اللحظة ومع زيادة عدد المحامين والمستشارين القانونيين بالمكتب، نشأت فكرة ورؤية المجموعة التجارية والبحرية.",
    },
    {
      id: 2,
      title: "إطلاق المجموعة التجارية والبحرية للمحاماة",
      desc : "بفضل التخطيط الجاد والعمل الدؤوب للمحامي محمد أبو ضيف وشركاءه من خبراء القانون، تم إطلاق المجموعة التجارية والبحرية للمحاماة والاستشارات القانونية عام 1986بهدف تقديم خدمات قانونية متكاملة  للعملاء بمستوى جديد من الحلول القانونية. حيث قام الأستاذ محمد أبو ضيف -الرئيس التنفيذي - بضم نخبة من أكفأ المحامين المتخصصين في  جميع فروع القانون المختلفة بغرض تقديم خدمات قانونية عالية المستوى مثل الاستشارات القانونية وتأسيس الشركات وفض المنازعات. وبالجهد والمثابرة، تمكن المكتب من ضم نخبة متميزة من الكفاءات القانونية والخبرات والمؤهلات العلمية التي مكَّنت المكتب من سعة الإنتشار بين أقرانه وإثبات تواجده على الساحة المحلية والإقليمية على مدار ثلاثة عقود بما يتناوله من العديد من الدعاوى القضائية على اختلاف أنواعها والتي تم مباشرتها والترافع بها حتى تحقيق النصر فيها."
    },
  ];
const AboutSlider = () => {
  return (
    <section className={styles.hero}>
    <Swiper
      spaceBetween={30}
      effect="fade"
      pagination={{ clickable: true }}
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
        "--swiper-pagination-bullet-height": "12px"
      }}
      className={styles.swiperContainer}
    >
      {info.map((el) => (
        <SwiperSlide key={el.id} className={styles.swiperSlide}>
          <div className={styles.swiperContent}>
            <h2>{el.title}</h2>
            <p>{el.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default AboutSlider
