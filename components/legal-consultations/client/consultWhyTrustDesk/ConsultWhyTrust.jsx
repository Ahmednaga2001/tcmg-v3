"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";



const data = [
  {
    path: "/assets/icons/legalconsultations/rating (1) 1.svg",
    title: " عملاء سعداء",
    targetNumber: 2800,
    alt: "عدد العملاء السعداء",
  },
  {
    path: "/assets/icons/legalconsultations/عدد مستشارين المكتب 2.svg",
    title: " مستشارين المكتب",
    targetNumber: 50,
    alt: "عدد مستشارين مكتب TCMG",
  },
  {
    path: "/assets/icons/legalconsultations/union-1.svg",
    title: "سنين الخبرة",
    targetNumber: 30,
    alt: "سنوات خبرة فريقنا القانوني",
  },
  {
    path: "/assets/icons/legalconsultations/agree.svg",
    title : "إستشارة ناجحة",
    targetNumber: 2900,
    alt : "إستشارة ناجحة"
  },


];

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef); // Use the variable here
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 20, targetNumber)); // Increment by 10 or adjust as needed
      }, 50); // Adjust interval duration as needed

      return () => clearInterval(interval);
    }
  }, [isVisible, count, targetNumber]);

  return <p ref={ref}>{count}+</p>;
};

const ConsultWhyTrust = () => {
  return (
    <section className={styles.whyUs}>
      <h2>حقائق وأرقام تثبت جدارتنا</h2>
      <p>
        توجد العديد من المكاتب القانونية الاستشارية بمصر, ولكن TCMG تأتي على رأس
        القائمة؛ بفضل جهود مستشاريها المتخصصين وعملائها السعداء بتقديم أفضل
        استشارات قانونية. وهذه بعض الإحصاءات المميزة حول المكتب:{" "}
      </p>
      <div className={styles.cards}>
        
          {data.map((item, index) => (
              <div key={index} className={styles.card}>
             <div className={styles.imgContainer}>
             <Image
                  src={item.path}
                  width={66}
                  height={66}
                  alt={item.alt} // Use title for alt attribute
                />
             </div>
                <Counter targetNumber={item.targetNumber} />
                <span>{item.title}</span>
              </div>
          ))}
      </div>
    </section>
  );
};

export default ConsultWhyTrust;
