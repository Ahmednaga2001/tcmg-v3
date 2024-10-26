"use client"
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const data = [
  {
    path: "/assets/images/legalconsultations/clients.png",
    title: "عدد العملاء السعداء",
    targetNumber: 3224,
    alt : "عدد العملاء السعداء"
  },
  {
    path: "/assets/images/legalconsultations/users.png",
    title: "عدد مستشارين المكتب",
    targetNumber: 3224,
    alt : "عدد مستشارين مكتب TCMG"
  },
  {
    path: "/assets/images/legalconsultations/experiences.png",
    title: "سنوات الخبرة",
    targetNumber: 3224,
    alt : "سنوات خبرة فريقنا القانوني"
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
      <h2>لماذا تضع ثقتك بنا؟</h2>
      <p>
        توجد العديد من المكاتب القانونية الاستشارية بمصر ولكن TCMG تأتي على رأس القائمة بفضل جهود مستشاريها المتخصصين وعملائها السعداء بخدمة الاستشارات القانونية. وهذه بعض الإحصاءات المميزة حول المكتب:
      </p>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item.path}
              width={169}
              height={170}
              alt={item.alt} // Use title for alt attribute
            />
            <Counter targetNumber={item.targetNumber} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultWhyTrust;
