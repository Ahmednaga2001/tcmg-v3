"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css"; 

const data = [
  {
    id: 1,
    title: "المتابعة",
    desc : "يلتزم محامونا في المجموعة التجارية والبحرية للمحاماة بمتابعة الموكل بأحدث التغيرات في تأسيس الشركات خلال فترة القضية والاستئناف, وإبقائها على علم بمتغيرات القضية وقرارات القضاة.",
    path: "/assets/icons/establish/المتابعة1.svg",
    w: 82,
    h: 82,
    alt : "متابعة العملاء"
  },
  {
    id: 2,
    title: "الجودة",
    desc : "يراعي فريق العمل لدينا باعتبارنا مكتب تأسيس شركات الجودة والمهارة في أداء واجبهم القانوني والاستجابة بإتقان لكافة متطلبات الموكلين والتأكيد على ضمان نجاح القضية بشكل احترافي.",
    path: "/assets/icons/establish/الجودة1.svg",
    w: 82,
    h: 82,
    alt : "جودة خدمات تأسيس الشركات"
  },
  {
    id: 3,
    title: "التخصص",
    desc : "محامونا متخصصون، فمن خلال فرق متنوعة متخصصة في تأسيس الشركات الفردية و الشركات ذات المسؤوليات المحدودة في مصر والوطن العربي ما يضمن نجاحك كرائد أعمال.​",
    path: "/assets/icons/establish/التخصص1.svg",
    w: 82,
    h: 82,
    alt : "التخصص كمكتب تأسيس شركات"
  },
  {
    id: 4,
    title: "المشاورة",
    desc : "من خلال موقعنا، املء استمارة الاستشارات القانونية ، واحصل على استشارة قانونية من أفضل مكتب تأسيس شركات مع مستشار قانوني متخصص قادر على مساعدتك في اتخاذ القرار المناسب الذي يضمن نجاحك وبقاء عملك في القمة.",
    path: "/assets/icons/establish/المشاورة1.svg",
    w: 82,
    h: 82,
    alt : "المشاورة"
  },
  {
    id: 5,
    title: "النتائج",
    desc : "نحن نلتزم مع كل عملائنا الكرام بنتائج معينة يهدف إليها العملاء، لذا نبذل قصارى جهدنا لتكون النتائج النهائية لتأسيس شركة فردية أو أي نوع أخر لشركات الأعمال مرضية لرجل الأعمال؛ والذي يبث روح التفاؤل به للانطلاق بقوة.",
    path: "/assets/icons/establish/النتائج 1.svg",
    w: 82,
    h: 82,
    alt : "أفضل النتائج"
  },
  {
    id: 6,
    title: "السرعة",
    desc : "  يمكنك معرفة الفترة الزمنية لتأسيس شركتك من خلال نطاق العمل المخصص لك مع مكتب تأسيس شركات TCMG. كن مطمئنًا ، ستنتهي جميع عمليات الإجراءات والشؤون القانونية في غضون أيام قليلة ، وبعد ذلك يمكنك الإعلان عن شركتك.",
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




