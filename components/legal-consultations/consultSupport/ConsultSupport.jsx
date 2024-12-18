"use client";

import ConsultSupportCard from "./ConsultSupportCard";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

let navigation = {
  img1: "/assets/images/homePage/left.svg",
  img2: "/assets/images/homePage/right.svg",
};

const data = [
  {
    title: "بناء علاقات استراتيجية قوية مع العملاء",
    path: "/assets/icons/legalconsultations/supportone.png",
    w: 132,
    h: 93,
    alt: "بناء علاقات استراتيجية قوية",
  },
  {
    title: "متابعة مخصصة لما بعد الاستشارة",
    path: "/assets/icons/legalconsultations/supporttwo.png",
    w: 115,
    h: 107,
    alt: "خدمة ما بعد أي استشاره قانونيه",
  },
  {
    title: "الدعم التام من أقوى المستشارين ",
    path: "/assets/icons/legalconsultations/supportthree.png",
    w: 87,
    h: 107,
    alt: "مستشارين قانونيين داعمين",
  },
  {
    title: "بناء علاقات استراتيجية قوية مع العملاء",
    path: "/assets/icons/legalconsultations/supportone.png",
    w: 132,
    h: 93,
    alt: "بناء علاقات استراتيجية قوية",
  },
  {
    title: "متابعة مخصصة لما بعد الاستشارة",
    path: "/assets/icons/legalconsultations/supporttwo.png",
    w: 115,
    h: 107,
    alt: "خدمة ما بعد أي استشاره قانونيه",
  },
  {
    title: "الدعم التام من أقوى المستشارين ",
    path: "/assets/icons/legalconsultations/supportthree.png",
    w: 87,
    h: 107,
    alt: "مستشارين قانونيين داعمين",
  },
];
const ConsultSupport = () => {
  return (
    <section className={styles.legalSupport}>
      <div className={styles.heading}>
     <h2>لماذا تختار مكاتب TCMG للاستشارات القانونية؟
     </h2>
        <p>
        إذا كنت تبحث عن أفضل مكتب استشارات قانونية، احجز الآن استشارتك مع خبراء TCMG؛ حيث نقدم خدماتنا على قدر كبير من التخصص والكفاءة نضمن لك بها الحماية القانونية الكاملة، ونساعدك على اتخاذ قراراتك بثقة واطمئنان فيما يخص الجانب القانوني، مع الحفاظ على سرية كامل جلسة الاستشارة القانونية. ولضمان تقديم الخدمة باحترافية؛ فإننا نلتزم بالمبادئ التالية:
        </p>
      </div>
      <div className={styles.swiperContainer} id='swiperSlide'>
        <Image
          src={navigation.img2}
          alt="Description of image"
          width={50}
          height={50}
          className={`${styles.navigation1} prev`}
        />
        <Swiper
          effect="coverflow"
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            380: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            nextEl: ".prev",
            prevEl: ".next",
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Navigation, Autoplay, Pagination]} // Added modules back
        >
          {data.map((el, index) => {
            return (
              <SwiperSlide key={index} className={styles.SwiperSlide}>
                <ConsultSupportCard
                  title={el.alt}
                  path={el.path}
                  w={el.w}
                  h={el.h}
                  alt={el.alt}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Image
          src={navigation.img1}
          alt="Description of image"
          width={50}
          height={50}
          className={`${styles.navigation2} next`}
        />
      </div>
    </section>
  );
};

export default ConsultSupport;
