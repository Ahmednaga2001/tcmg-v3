"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import styles from "./page.module.css";
const info = [
  {
    id : 1,
    title: "تأسيس شركة فردية ",
    desc : "إذا كنت مبتدئ في مجال الأعمال والسوق التجاري, لا تدع التعقيدات القانونية تعيق خطوات تنفيذ مشروعك الريادي. تقدم بطلب توكيل محامي من المجموعة التجارية والبحرية, يتولَّى حل تلك التعقيدات عبر خدمامتنا الشاملة في تأسيس الشركات الفردية."
  },
  {
    id:2,
    title: "تأسيس شركة مساهمة",
    desc : "توكيل محامي متخصص من مكتب تأسيس شركات خبير, هو الخطوة التالية لمتابعة عملك التجاري بقوة. دعنا نتولى عنك تأسيس شركة مساهمة مصرية مع الاهتمام بأمور توثيق العقود القانونية وتدوين الشروط اللازمة لجميع أطراف المساهمة وتوزيع الأسهم بشكل عادل تحقيقًا لقانون الشركات في مصر ودول الشرق الأوسط والصين."
  },
  {
    id:3,
    title: "تأسيس شركة ذات مسؤولية محدودة",
    desc : "إذَا كنت تواجه صعوبة في توزيع مسؤوليات الشركاء, وتبحث عن حلول قانونية سهلة وفعالة؛ مجموعة TCMG هي الجهة الأنسب والعون الأفضل لأداء تلك المهمة, بقديم استشارات قانونية مكثفة لتأسيس شركة ذات مسؤولية محدودة ناجحة."
  },
  {
    id:4,
    title: "تأسيس شركة التضامن",
    desc : "هل تطمح إلى تأسيس شركة تضامن ولا تعرف من أين تبدأ؟ في مكاتب TCMG نقدم لك بالخبرة والدعم القانوني التام في خدمة تأسيس شركة التضامن التي تطمح إليها, مع توفير الإرشاد الكامل وتجهيز كافة المستندات المطلوبة مع أفضل مكتب تأسيس شركات؛ للسير خطوة بخطوة بنجاح."
  },
  {
    id:5,
    title: "تأسيس شركة المحاصة",
    desc : "تبحث عن طريقة سهلة وموثوقة لبدء تأسيس شركة المحاصة الخاصة بك؟ نحن في مكاتب المجموعة التجارية والبحرية للمحاماة, نقدم جميع خدمات تأسيس الشركات القانونية التي ستحتاجها لإتمام أعمال الشركات, وتوثيق العقود الرسمية في الجهات القانونية لتبدأ مزاولة نشاطك التجاري بأمان."
  },
  {
    id:6,
    title: "تأسيس شركة الشخص الواحد",
    desc : "مكتب تأسيس شركات TCMG, طريقك الأنسب لبدء اجراءات تأسيس شركتك المستقلَّة, بالاستناد على خبرائنا في التوجيه وإعداد كافة الاتفاقيات والمستندات اللازمة, وصولاً لمرحلة التسجيل الرسمي للشركة. انطلق بكل ثقة بشركتك في عالم الأعمال والتجارة."
  },
];
const EstablishCompanyTypes = () => {
  return (
    <section className={styles.companiesTypes}>
      <h2>ما هي أنواع الشركات التي نختص بها؟</h2>
      <div className={styles.swiperContainer} id="companiesTypes">
        <Swiper
          spaceBetween={30}
          effect="fade"
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".prev",
            prevEl: ".next",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-width": "12px",
            "--swiper-pagination-bullet-height": "12px",
          }}
        >
          {info.map((el) => (
            <SwiperSlide key={el.id} className={styles.swiperSlide}>
              <div className={styles.content}>
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev prev" style={{position: 'absolute' , left: '20px'}}/>
        <div className="swiper-button-next next" />
      </div>
    </section>
  );
};

export default EstablishCompanyTypes;
