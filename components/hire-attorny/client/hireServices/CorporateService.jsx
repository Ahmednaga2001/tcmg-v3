"use client";
import HireCard from "./HireCard";
import Image from "next/image";
import styles from "./page.module.css"
import { useState } from "react";
const dataOne = [
  {
    title: "أسواق المال",
    desc : "احصل على دعم محامي مالي عبر خدمات قانونية متخصصة لحماية مصالح شركتك في أسواق المال؛ لتحقيق أهدافك بأعلى معايير الأمان والشفافية.",
    path: "/assets/images/hireattorny/legal9.png",
    alt : "محامي أسواق المال"
  },
  {
    title: "الإندماج والاستحواذ",
  desc : "نوفر استشارات قانونية متخصصة للمؤسسات في الاندماج والاستحواذ تضمن سير العملية في الاتجاه الصحيح عن طريق دعم من خبير في قانون الشركات والأعمال.",
    path: "/assets/images/hireattorny/legal10.png",
    alt : "الاندماج الاستحواذ"
  },
  {
    title: "التحكيم التجاري",
 desc : "نقدم خدمات التحكيم التجاري لتسوية النزاعات الخاصة بالشركات بطريقة فعّالة وسريعة، مع الحفاظ على السرية وضمان حقوق الأطراف المعنية.",
    path: "/assets/images/hireattorny/legal11.png",
    alt : "توكيل محامي في التحكيم التجاري",
  },
  {
    title: "التطوير العقاري والإنشاءات",
  desc : "نقدم دعمًا قانونيًا شاملًا لمشاريع التطوير العقاري والإنشاءات، من خلال إعداد العقود وضمان الامتثال للقوانين والتشريعات ذات الصلة مع خبير عقارات.",
    path: "/assets/images/hireattorny/legal12.png",
    alt : "التطوير العقاري "
  },
];
const dataOneHidden = [
  {
    title: "الخدمات البنكية والمالية",
    desc: "نقدم استشارات قانونية متخصصة للشركات والمؤسسات في مجالات الخدمات البنكية والمالية؛ لضمان الامتثال التنظيمي وتعزيز المعاملات المالية بأعلى معايير الشفافية.",
    path: "/assets/images/hireattorny/legal13.png",
    alt : "الخدمات البنكية والمالية"
  },
  {
    title: "الرعاية الصحية",
    desc: "نقدم خدمات قانونية للمؤسسات الصحية لضمان الامتثال للقوانين الصحية وتقديم المشورة القانونية حول قضايا الرعاية الصحية المختلفة.",
    path: "/assets/images/hireattorny/legal14.png",
    alt : "الرعاية الصحية"
  },
  {
    title: "التجزئة والمستهلك",
    desc: "ندعم الشركات العاملة في قطاع التجزئة والمستهلك بتقديم الاستشارات القانونية المتعلقة بحماية المستهلك وتنظيم العلاقات التجارية.",
    path: "/assets/images/hireattorny/legal15.png",
    alt : "التجزئة والمستهلك"
  },
  {
    title: "التقاضي",
    desc: "نحن نُمثل الشركات في جميع مراحل التقاضي, بدءًا من تقديم الدعوى وحتى إصدار الحكم, مع التركيز على تحقيق أفضل النتائج بأعلى كفاءة وفعالية.",
    path: "/assets/images/hireattorny/legal16.png",
    alt : "التقاضي"
  },
];
const CorporateService = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleDisplay = () => {
    setIsHidden(!isHidden);
  };
  return (
    <section className={styles.attorneyrepresentation}>
     <h2>توكيل محامي شركات يدعم نمو أعمالك</h2>
      <p>
      عندما يتعلق الأمر بالخدمات القانونية للشركات، تقدم مجموعة مكاتب TCMG حلول شاملة؛ مصممة خصيصًا لتلبية احتياجات الشركات. قم بتوكيل محامي من فريقنا ذوي الخبرة الواسعة والمعرفة العميقة، وأحصل على دعم شامل لشركتك في كافة الجوانب القانونية؛ مما يضمن نجاحها واستمراريتها في بيئة الأعمال التنافسية هذه.
      </p>
      <div className={styles.cards}>
        {dataOne.map((el, index) => (
          <HireCard
            key={index}
            title={el.title}
            desc={el.desc}
            path={el.path}
            alt ={el.alt}
          />
        ))}
      </div>

      {!isHidden && (
        <div
          className={`${styles.cardsHidden} ${!isHidden ? styles.show : ""}`}
        >
          <div className={styles.cards}>
            {dataOneHidden.map((el, index) => (
              <HireCard
                key={index}
                title={el.title}
                desc={el.desc}
                path={el.path}
                alt={el.alt}
              />
            ))}
          </div>
        </div>
      )}
      <span className={styles.more} onClick={handleDisplay}>
        {isHidden ? "عرض المزيد" : "عرض أقل"}
        <Image
          src="/assets/icons/hireattorny/arrow-left.svg"
          width={30}
          height={30}
          alt="arrow-left icon"
        />
      </span>
    </section>
  );
};

export default CorporateService;
