"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useEffect, useState } from "react";
import ImageSlider from "./ImgSlider";
import SelectSlider from "./SelectSlider";

const data = [
  {
    title: "1- اختر الاستشارة المطلوبة",
    desc : "اختر نوع الاستشارة الذي يناسب احتياجاتك سواء استشارة قانونية فورية عبر الاتصال أو تحديد موعد لزيارتنا بمكتبنا بالقاهرة, أو من خلال حجز استشارات قانونية اونلاين عبر تحديد موعد اجتماع مع مستشار قانوني متخصص.",
    images: [
      {
        path: "/assets/icons/legalconsultations/whatsup.svg",
        label: "اجتماع اونلاين",

      },
      {
        path: "/assets/icons/legalconsultations/استشارة مكتبية.svg",
        label: "استشارة مكتبية",
      },
    ],
    w: 115,
    h: 116,
  },
  {
    title: "2- احجز موعدك",
    desc : "حدد موعد الاستشارة القانونية بكل مرونة؛ باختيار اليوم المطلوب لعقد الاستشارة والتوقيت المناسب خلال ساعات عملنا بما يناسب وقتك الثمين وسيكون المستشار القانوني مستعد للتواصل معك في الوقت المُحدد.",
    path: "/assets/images/legalconsultations/Calender.svg",
    alt : "اختر موعد استشارتك القانونية",
    w: 300,
    h: 302,
  },
  {
    title: "3- املئ استمارة الاستشارة",
    desc : "املأ استمارة الاستشارة القانونية ببياناتك الصحيحة, كالاسم ورقم الموبايل والبريد الإلكتروني واكتب نبذة عن قضيتك المراد عقد الاستشارة من أجلها، وأخيراً حدِّد تخصص المستشار القانوني المطلوب.",
    // path: "/assets/images/legalconsultations/استمارة الاستشارة.png",
    w: 468,
    h: 64,
    data: [
      {
        title: "نوع الاستشارة",
        label: "النوع",
        path: "/assets/icons/legalconsultations/dropdownbutton.png",
        w: 14,
        h: 8,
      },
      {
        title: "تخصص الاستشارة",
        label: "التخصص",
        path: "/assets/icons/legalconsultations/dropdownbutton.png",
        w: 14,
        h: 8,
        alt : "Drop Down Icon"
      },
      {
        title: " اسم العميل",
        label: "العميل",
        path: "/assets/icons/legalconsultations/user.png",
        w: 27,
        h: 27,
        alt : "User Icon"
      },
    ],
  },
  {
    title: "4- أتمم مدفوعاتك بآمان",
    desc : "كن على يقين أن مدفوعاتك ستتم بأمان؛ فلدينا نظام حماية وأمان صارم على المدفوعات. واطمئن فلن يتم حفظ بيانات البطاقة الائتمانية خاصتك على الموقع، بمجرد أن يتم الدفع ستحجز استشارتك بأعلى قدر من الأمان والخصوصية.",
    path: "/assets/images/legalconsultations/card.png",
    path2: "/assets/images/legalconsultations/card2.png",
    alt : 'دفع ثمن الاستشارة اونلاين',
    w: 248,
    h: 178,
    w2: 209,
    h2: 131,
  },
  {
    title: "5- احصل على الدعم القانوني",
    desc : `بعد إتمام كل الخطوات, أنت الآن مستعد لعقد استشارتك مع المحامي المتخصص والمستعد لدعمك في قضيتك وهدفك القانوني المنشود؛ فلن تنتهي استشاره قانونيه حتى تصل لحلول فعالة قادرة على تحقيق مرادك.
بادر بحجز استشارتك الآن مع أفضل المتخصصين في مصر.
`,
    path: "/assets/images/legalconsultations/user.png",
    alt : "الحصول على استشارة محامي",
    w: 197,
    h: 197,
  },
];

const ConsultNowEasy = () => {
  return (
    <section className={styles.startcompany}>
      <div className={styles.heading}>
        <h2>اطلب استشارتك الآن بكل سهولة</h2>
        <p>5 خطوات تضع قوة المشورة القانونية بين يديك</p>
      </div>
      <div className={styles.startcompanyparent}>
        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[0].title}</h3>
            <p>{data[0].desc}</p>
          </div>
          <div className={styles.line}>
            <Image
              src="/assets/symbols/about/circle.svg"
              className={styles.circleImg}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.Img}>
            <ImageSlider
              images={data[0].images}
              width={data[0].w}
              height={data[0].h}
            />
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.Img}>
            <Image
              src={data[1].path}
              width={data[1].w}
              height={data[1].h}
              alt={data[1].alt}
            />
          </div>
          <div className={styles.line}>
            <Image
              src="/assets/symbols/about/circle.svg"
              className={styles.circleImg}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.content}>
            <h3>{data[1].title}</h3>
            <p>{data[1].desc}</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[2].title}</h3>
            <p>{data[2].desc}</p>
          </div>
          <div className={styles.line}>
            <Image
              src="/assets/symbols/legalconsultations/circle.svg"
              className={styles.circleImg}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.Img}>
            <SelectSlider data={data[2].data} />
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.Img}>
            <div className={styles.card}>
              <Image
                src={data[3].path}
                width={data[3].w}
                height={data[3].h}
                alt={data[3].alt}
              />
              <Image
                src={data[3].path2}
                width={data[3].w2}
                height={data[3].h2}
                alt={data[3].alt}
                className={styles.img2}
              />
            </div>
          </div>
          <div className={styles.line}>
            <Image
              src="/assets/symbols/about/circle.svg"
              className={styles.circleImg}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.content}>
            <h3>{data[3].title}</h3>
            <p>{data[3].desc}</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[4].title}</h3>
            <p>{data[4].desc}</p>
          </div>
          <div className={styles.line}>
            <Image
              src="/assets/symbols/about/circle.svg"
              className={styles.circleImg}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.Img}>
            <Image
              src={data[4].path}
              width={data[4].w}
              height={data[4].h}
              alt={data[4].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultNowEasy;
