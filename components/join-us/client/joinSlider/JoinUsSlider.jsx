"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade,Pagination } from "swiper/modules";
import styles from "./page.module.css"
import Image from 'next/image';
const info = [
    {
      id: 1,
      title : "بدء شراكات استراتيجية مع مكاتب وشركات محاماة دولية في دول أخرى",
      desc : "نتطلع بحماس لفكرة تعزيز شبكتنا العالمية؛ من خلال إقامة شراكات استراتيجية مع مكاتب وشركات محاماة دولية. هذا التعاون سيسمح لنا بتوسيع نطاق خدماتنا وتعميق تأثيرنا في المشهد القانوني العالمي من خلال تبادل الخبرات والموارد. نهدف إلى تقديم حلول قانونية أكثر شمولية ومبتكرة؛ مما يٌمكِّننا من مواجهة التحديات القانونية المعقدة بفعالية أكبر. نتطلع لبناء علاقات تعاونية مع مكاتب وشركات محاماة في كل دول العالم تعود بالنفع على كل الأطراف المشاركة وتسهم في نمو وتطور قطاعنا.",
      path : "/assets/images/joinus/topleftL.png",
   
    },
    {
      id: 2,
      title : "انضمام محامين جدد لتعزيز قدراتنا القانونية",
      desc : "نسعى دائمًا في TCMG، إلى توسيع فريقنا بضم محامين جدد متميزين يشاركوننا رؤيتنا وشغفنا بالتميز القانوني. حيث نؤمن بأن الأفكار المبتكَرَة والجديدة يمكن أن تعزز قدراتنا وتوسِّع نطاق خدماتنا؛ لذا يُعد انضمام محامين جدد إلى فريقنا فرصة لهم لتطوير مهاراتهم في بيئة داعمة وتحفيزية، ولنا للاستفادة من مهاراتهم الفريدة في تحقيق أهدافنا المشتركة وتقديم أفضل الحلول القانونية لعملائنا.",
      path : "/assets/images/joinus/bottomL.png"
    },
    {
      id : 3,
      title : "عمل برنامج تدريب محامين جدد لتقوية فريقنا القانوني",
      desc : "نطمح إلى إطلاق برنامج تدريب متكامل لمحامين جدد؛ بهدف تعزيز قدرات فريقنا القانوني وضمان استمرارية التميز في خدماتنا. نهدف من خلال هذا البرنامج إلى تزويد المحامين الطموحين بالمعرفة العميقة والمهارات العملية اللازمة لمواجهة التحديات القانونية المعاصرة بكفاءة. نؤمن بأن تطوير الجيل القادم من المحامين سيساهم ليس فقط في نموهم المهني، بل وفي تعزيز قدراتنا الجماعية كفريق واحد يسعى للريادة في المجال القانوني.",
      path : "/assets/images/joinus/toprightL.png"
    }
  ];
const JoinUsSlider = () => {
  return (
    <section className={styles.swiperOne}>
      <h2>إلى ماذا نتطلع</h2>
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
    >
      {info.map((el) => (
        <SwiperSlide key={el.id} className={styles.swiperSlide}>
          <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{el.title}</h3>
            <p>{el.desc}</p>
          </div>
          <Image src={el.path} width={265} height={222} alt={el.path}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default JoinUsSlider
