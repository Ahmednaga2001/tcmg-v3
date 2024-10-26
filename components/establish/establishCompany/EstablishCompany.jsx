"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css"
import Image from "next/image";
import { motion } from "framer-motion"
const data = [
  {
    title: "1- احجز استشارة قانونية",
    desc: "احصل على استشارة قانونية مع محامي شركات من المحامين الخبراء في المجموعة التجارية والبحرية للمحاماة لتحديد الشكل القانوني المناسب لشركتك.",
    path: "/assets/images/establish/Calender.svg",
    alt: "حجز استشارة قانونية"
  },
  {
    title: "2- قم بتوكيل محامي",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Female -Lawyer.svg",
    alt: "توكيل محامي تأسيس شركات"
  },
  {
    title: "3- إنطلق في عالم الأعمال",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Business-World.svg",
    alt: "إبدأ نجاحك التجاري"
  },
];
const EstablishCompany = () => {
  const [bgColor, setBgColor] = useState("");
  const [scale, setScale] = useState(1);
  const colorCycle = ['', "#1B2340"];
  const scaleCycle = [1, 1.3, 1];

  useEffect(() => {
    let index = 0;
    let index2 = 0;
    const interval = setInterval(() => {
      setBgColor(colorCycle[index]);
      setScale(scaleCycle[index2]);
      index = (index + 1) % colorCycle.length;
      index2 = (index + 1) % scaleCycle.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className={styles.startcompany}>
      <h2>اتبع الخطوات التالية لبدء تأسيس شركتك بنجاح</h2>
      <div className={styles.startcompanyparent}>
        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[0].title}</h3>
            <p>{data[0].desc}</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.Img}>
            <Image
              src={data[0].path}
              width={300}
              height={302}
              alt={data[0].alt}
            />
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.Img}>
            <motion.div className={styles.personImg}
              initial={{ x: 0, y: 0 }}
              animate={{ x: .5, y: .5, backgroundColor: bgColor }} // Animate between colors
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}

            >
              <Image
                src={data[1].path}
                width={145}
                height={192}
                alt={data[1].alt}
              />
            </motion.div>
          </div>
          <div className={styles.line}></div>
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
          <div className={styles.line}></div>
          <div className={styles.Img}>
            <div
              className={styles.worldImg}
            >              <Image width={181} height={192}


              src={data[2].path}
              alt={data[2].alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstablishCompany;
