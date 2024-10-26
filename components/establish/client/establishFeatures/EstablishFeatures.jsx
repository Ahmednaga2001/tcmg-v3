"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css"; 

const data = [
  {
    id: 1,
    title: "المتابعة",
    desc: "يلتزم محامونا في المجموعة التجارية والبحرية للمحاماة بمتابعة الموكل خلال فترة القضية والاستئناف, وإبقاؤهم على علم بمتغيرات القضية وقرارات القضاة.",
    path: "/assets/icons/establish/المتابعة1.svg",
    w: 82,
    h: 82,
    alt : "متابعة العملاء"
  },
  {
    id: 2,
    title: "الجودة",
    desc: "يراعي فريق العمل لدينا الجودة والمهارة في أداء واجبهم القانوني والاستجابة بإتقان لكافة متطلبات الموكلين والتأكيد على ضمان نجاح القضية بشكل احترافي.",
    path: "/assets/icons/establish/الجودة1.svg",
    w: 82,
    h: 82,
    alt : "جودة خدمات تأسيس الشركات"
  },
  {
    id: 3,
    title: "التخصص",
    desc: "تضم مكاتبنا فريق عمل كبير يشمل كافة تخصصات القانون للتغطية على جميع المشاكل والمسائل القانونية مستعدين للإجابة عن أي استفسار مُوَجَّه لهم.",
    path: "/assets/icons/establish/التخصص1.svg",
    w: 82,
    h: 82,
    alt : "التخصص كمكتب تأسيس شركات"
  },
  {
    id: 4,
    title: "المشاورة",
    desc: "تتميز فئة المستشارين في TCMG الاستماع الجيد إلى مشكلة الموكل, والاستنتاجية وفن اختيار الأسئلة, وربط الأحداث للوصول إلى الحل القانوني الأنسب لمسألته.",
    path: "/assets/icons/establish/المشاورة1.svg",
    w: 82,
    h: 82,
    alt : "المشاورة"
  },
  {
    id: 5,
    title: "النتائج",
    desc: "نحرص في المجموعة التجارية والبحرية للمحاماة على تحقيق النتائج المرجوة من الموكلين والعملاء والحرص على نيل رضاهم بتنفيذ الاستراتيجيات المتقَنَة.",
    path: "/assets/icons/establish/النتائج 1.svg",
    w: 82,
    h: 82,
    alt : "أفضل النتائج"
  },
  {
    id: 6,
    title: "السرعة",
    desc: "يراعي كل من محامونا ومستشارونا الاستجابة السريعة لطلبات الاستشارة والتوكيل, كذلك السرعة في تنفيذ واجباتهم القانونية تجاه الموكلين, مع مراعاة الدقة.",
    path: "/assets/icons/establish/Quickly.svg",
    w: 82,
    h: 82,
    alt : "سرعة إنهاء الإجراءات القانونية"
  },
];

const EstablishFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const getCurrentItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % data.length; 
      items.push({
        ...data[index],
        isActive: i === 1, 
        opacity: i === 1 ? 1 : 0.4, 
      });
    }
    return items;
  };

  const currentItems = getCurrentItems();

  return (
    <section className={styles.uniqueServiceFeatures}>
      <h2>ما يميز خدمتنا في تأسيس الشركات عن باقي مكاتب المحاماة</h2>
      <div className={styles.container}>
      <div className={styles.cardContainer}>
        {currentItems.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            style={{
              opacity: item.opacity,
              transition: "opacity 1s", 
              transform: item.isActive ? 'scale(1.1)' : 'scale(1)', 
            }}
          >
            <Image
              src={item.path}
              width={item.w}
              height={item.h}
              alt={item.alt}
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>{item.id}</span>
          </div>
        ))}
      </div>
        <div onClick={handleNext} className={styles.nextbutton}>
          
        </div>
        <div onClick={handlePrev} className={styles.prevbutton}>
          
        </div>
      </div>
    </section>
  );
};

export default EstablishFeatures;




