"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./page.module.css";

const lawyers = [
  {
    id: 1,
    name: "النزاهة والسرعة في تقديم الخدمات",
    img: "/assets/images/homePage/Frame 48010.svg",
    w: 164,
    h: 182,
    alt : "حلول قانونية سريعة"
  },
  {
    id: 2,
    name: "فعالية الحلول القانونية",
    img: "/assets/images/homePage/Frame 48003.svg",
    w: 182,
    h: 182,
    alt : "حلول قانونية فعالة"
  },
  {
    id: 3,
    name: "حفظ أسرار العملاء",
    img: "/assets/images/homePage/Frame 48005.svg",
    w: 182,
    h: 164,
    alt : "مكتب محاماة موثوق"
  },
  {
    id: 4,
    name: "جمع الخبرات المختلفة",
    img: "/assets/images/homePage/Vector.svg",
    w: 221,
    h: 150,
    alt : "حلول قانونية شاملة"
  },
  {
    id: 5, // Changed duplicate id to unique id
    name: "إتمام المعاملات القانونية",
    img: "/assets/images/homePage/Frame 48008.svg",
    w: 182,
    h: 182,
    alt : "حل المشاكل القانونية"
  },
  {
    id: 6,
    name: "بناء علاقات استراتيجية دائمة",
    img: "/assets/images/homePage/Vectorx.svg",
    w: 182,
    h: 166,
    alt : "علاقات استراتيجية دائمة"
  },
  {
    id: 7,
    name: "التخصص في كافة فروع القانون",
    img: "/assets/images/homePage/Frame 48011.svg",
    w: 182,
    h: 165,
    alt : "خبراء في كل مجالات القانون"
  },
];

const HomeWhyUs = () => {
  return (
    <section className={styles.whyUs}>
      <div className={styles.heading}>
        <h2>لماذا تختارنا وبكل ثقة؟</h2>
        <p>
          يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات
          التي تسيّر آلية العمل داخل مكتبنا، بالإضافة إلى مبادئ المحامين والشركاء
          العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي
          والقانوني سعيًا منهم لتحويل مكتبنا لشركة محاماة دولية في مصر. فقد شهد
          عملاؤنا بقوة مكتبنا وثقة التعامل معنا، والمبادئ التالية ما ستجدها عند
          التعامل معنا:
        </p>
      </div>
      <div className={`${styles.swiperContainer}`} id='swiperSlide'>
        <Swiper
          effect="coverflow"
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2.5,
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
          // navigation={true}
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          modules={[Navigation, Autoplay, Pagination]} // Added modules back
        >
          {lawyers.map((lawyer) => (
            <SwiperSlide key={lawyer.id} className={styles.SwiperSlide}>
              <div className={styles.card}>
                <Image src={lawyer.img} alt={lawyer.alt} width={lawyer.w} height={lawyer.h} />
                <p>{lawyer.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeWhyUs;
