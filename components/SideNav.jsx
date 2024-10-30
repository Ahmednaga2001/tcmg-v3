"use client";
import toggleSideNav from "@/utils/toggleSideNav";
import styles from "./SideNav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion"
const data = [
  {
    title: "نقدم خدمات قانونية المتكاملة على المستوى المحلي والإقليمي والدولي",
    l0 : {t : "الخدمات القانونية",ref : "legal-services"},
    l1: { t: "الإستشارات القانونية", ref: "legal-advice" },
    l2: { t: "تأسيس الشركات", ref: "establishing-companies" },
    l3: { t: "أعمال الشركات", ref: "corporate" },
    l4: {
      t: "الممارسات",
      ref: "practices",
      options: [
        "الإندماج والإستحواذ",
        "قضايا الأسواق المال",
        "قضايا التمويل والأوراق المالية",
        "التحكيم التجاري الدولي",
        "التجارة الدولية",
        "قضايا الاتصالات",
        "قضايا المعاملات المصرفية",
        "أعمال الشركات",
        "قضايا الأموال العامة",
        "قضايا الإنشاءات والمقاولات",
        "القضايا العقارية",
        "الملكية الفكرية",
        "قضايا التنفيذ والإفلاس",
        "قضايا الضرائب",
        "قضايا التأمين",
        "القضايا الإدارية",
        "القضايا الجنائية",
        "القضايا المدنية",
        "القضايا الجنائية",
      ],
    },
    l5: {
      t: "القطاعات",
      ref: "sectors",
      options: [
        "العقارات",
        "الخدمات المالية",
        "الرعاية الصحية",
        "الفنادق والترفيه",
        "التجزئة والمستهلك",
        "التصنيع",
        "النقل والشحن البحري",
        "النقل",
        "السيارات",
        "التأمين",
        "التعليم",
        "وسائل الإعلام",
        "الطاقة",
        "الإتصالات",
      ],
    },
    l6: { t: "توكيل محامي", ref: "power-of-attorney" },
    l7: { t: "إسأل محامي", ref: "ask-a-lawyer" },
  },
];

const joinUs = [
  {
    title: "إنضم إلينا في المجموعة التجارية والبحرية للمحاماة: حيث نحقق النجاح معًا في عالم المحاماة",
    l0 : {t : "انضم الينا",ref : "join-us"},
    l1: { t: "المتدربين", ref: "internship" },
    l2: { t: "المحامين", ref: "careers" },
    l3: { t: "العلاقات العامة", ref: "protocol" },
  },
];

const aboutUs = [
  {
    title: "المجموعة التجارية والبحرية للمحاماة والاستشارات القانونية: خبرة قانونية شاملة على المستوى المحلي والإقليمي والدولي",
    l1: { title: "فريق العمل" },
  },
];

const news = [
  {
    title: "حلول قانونية متكاملة مع المجموعة التجارية والبحرية للمحاماة: دليلك لفهم القانون: خطوة بخطوة نحو المحاماة",
    l1: { title: "المقالات", ref: "article" },
  },
];

const branches = [
  {
    title: "تواصل معنا للحصول على استشارتك القانونية اليوم وتحقيق نحاجك القانوني",
    l1: {
      t: "الفروع",
      ref: "offices"
    },
    options: [
      {
        t: "مصر",
        ref: "#egypt" // Link to Egypt section
      },
      {
        t: "الإمارات العربية المتحدة",
        ref: "#uae" // Link to UAE section
      },
      {
        t: "المملكة العربية السعودية",
        ref: "#saudi-arabia" // Link to Saudi Arabia section
      },
      {
        t: "الصين",
        ref: "#china" // Link to China section
      },
      {
        t: "عمّان",
        ref: "#jordan" // Link to Jordan section
      },
      {
        t: "فلسطين",
        ref: "#palestine" // Link to Palestine section
      }
    ]
  }
]
function SideNav({ isOpen, toggleSideNav}) {
  const [showPractice, setShowPractice] = useState(false);
  const [showSector, setShowSector] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const handlePracticeToggle = () => {
    setShowPractice((prev) => !prev);
  };

  const handleSectorToggle = () => {
    setShowSector((prev) => !prev);
  };
  const handleBranchToggle = () => {
    setShowBranches((prev) => !prev);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
    setShowPractice(false);
    setShowSector(false);
  };
 
  return (
<AnimatePresence>
{isOpen && (
<motion.div className={styles.sideNav} id="sideNav"       initial={{ x: '100%'}} 
    animate={{ x: 0 }} 
    exit={{ x: '100%' }}     
    transition={{ duration:  .5}}       

>
      <div className={styles.layout}>
        <div className={styles.side}>
          <div className={styles.logo}>
            <Image
              src="/assets/icons/logo/Logo.svg"
              alt="Logo"
              width={200}
              height={70}
            />
          </div>
          <div className={styles.sideLinks}>
  <span className={activeItem === 0 ? styles.active : ''} onClick={() => handleItemClick(0)}>
    من نحن
    <Image 
      quality={100} 
      src={activeItem === 0 ? "/assets/icons/form/arrow-left-black.png" : "/assets/icons/form/arrow-left-white.png"} 
      width={24} 
      height={24} 
      alt="arrow left icon" 
    />
  </span>
  <span className={activeItem === 1 ? styles.active : ''} onClick={() => handleItemClick(1)}>
    إنضم الينا
    <Image 
      quality={100} 
      src={activeItem === 1 ? "/assets/icons/form/arrow-left-black.png" : "/assets/icons/form/arrow-left-white.png"} 
      width={24} 
      height={24} 
      alt="arrow left icon" 
    />
  </span>
  <span className={activeItem === 2 ? styles.active : ''} onClick={() => handleItemClick(2)}>
    خدماتنا
    <Image 
      quality={100} 
      src={activeItem === 2 ? "/assets/icons/form/arrow-left-black.png" : "/assets/icons/form/arrow-left-white.png"} 
      width={24} 
      height={24} 
      alt="arrow left icon" 
    />
  </span>
  <span className={activeItem === 3 ? styles.active : ''} onClick={() => handleItemClick(3)}>
    أخبار وروي
    <Image 
      quality={100} 
      src={activeItem === 3 ? "/assets/icons/form/arrow-left-black.png" : "/assets/icons/form/arrow-left-white.png"} 
      width={24} 
      height={24} 
      alt="arrow left icon" 
    />
  </span>
  <span className={activeItem === 4 ? styles.active : ''} onClick={() => handleItemClick(4)}>
    الفروع
    <Image 
      quality={100} 
      src={activeItem === 4 ? "/assets/icons/form/arrow-left-black.png" : "/assets/icons/form/arrow-left-white.png"} 
      width={24} 
      height={24} 
      alt="arrow left icon" 
    />
  </span>
</div>

          <div className={styles.bottom}>
            <div className={styles.login}>
              <Image src="/assets/icons/form/solar_user-bold.png" width={24} height={24}/>
         تسجيل الدخول
            </div>
            <div className={styles.reg}>
              <span>احجز استشارتك الآن</span>
              <p>قم بحجز موعد معنا، استفد من استشارتنا القانونية بسهولة وفي الوقت الذي يناسبك.</p>
              <a href="#">
              احجز استشارتك الآن
                <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow left"/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.inp}>
              <input type="text" placeholder="كيف يمكننا مساعدتك ؟" />
              <Image
                src="/assets/icons/searchwhite.svg"
                alt="Search Icon"
                width={20}
                height={20}
                className={styles.searchIcon}
              />
            </div>
            <div className={styles.toggle}  onClick={toggleSideNav}>
              <Image
                src="/assets/icons/Hamburger Menu close.svg"
                alt="Hamburger Icon"
                width={47}
                height={47}
              />
            </div>
          </div>

          <div className={styles.mainContent}>
            {activeItem === 0 && aboutUs.map((el, index) => (
              <div key={index} className={styles.card}>
                <h2>{el.title}</h2>
                <Link onClick={toggleSideNav} className={styles.itemLink} href="#">{el.l1.title}</Link>
              </div>
            ))}

            {activeItem === 1 && joinUs.map((el, index) => (
              <div key={index} className={styles.card}>
                <h2>{el.title}</h2>
                <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l0.ref}>{el.l0.t}</Link>
                <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l1.ref}>{el.l1.t}</Link>
                <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l2.ref}>{el.l2.t}</Link>
                <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l3.ref}>{el.l3.t}</Link>
              </div>
            ))}

            {activeItem === 2 && data.map((el, index) => (
              <div key={index} className={styles.card}>
                <h2>{el.title}</h2>
                <div className={styles.links}>
                  <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l0.ref}>{el.l0.t}</Link>
                  <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l1.ref}>{el.l1.t}</Link>
                  <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l2.ref}>{el.l2.t}</Link>
                  <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l3.ref}>{el.l3.t}</Link>
                  <div onClick={handlePracticeToggle} className={styles.prLink}>
                    <Link onClick={toggleSideNav}  href={el.l4.ref}>{el.l4.t}</Link>
                    <Image
                      src={showPractice ? '/assets/icons/form/closeacc.svg' : '/assets/icons/form/openacc.svg'}
                      width={24}
                      height={24}
                      alt={showPractice ? 'Close icon' : 'Open icon'}
                    />
                  </div>
                  <div className={`${styles.practiceLinkContainer} ${showPractice ? styles.show : ''}`}>
                    {el.l4.options.map((option, idx) => (
                      <Link onClick={toggleSideNav}  key={idx} href={el.l4.ref}>{option}</Link>
                    ))}
                  </div>
                  <div onClick={handleSectorToggle} className={styles.prLink}>
                    <Link onClick={toggleSideNav}  href={el.l5.ref}>{el.l5.t}</Link>
                    <Image
                      src={showSector ? '/assets/icons/form/closeacc.svg' : '/assets/icons/form/openacc.svg'}
                      width={24}
                      height={24}
                      alt={showSector ? 'Close icon' : 'Open icon'}
                    />
                  </div>
                  <div className={`${styles.practiceLinkContainer} ${showSector ? styles.show : ''}`}>
                    {el.l5.options.map((option, idx) => (
                      <Link onClick={toggleSideNav}  key={idx} href={el.l5.ref}>{option}</Link>
                    ))}
                  </div>
                  <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l6.ref}>{el.l6.t}</Link>
                  <Link onClick={toggleSideNav}  className={styles.itemLink} href={el.l7.ref}>{el.l7.t}</Link>
                </div>
              </div>
            ))}

            {activeItem === 3 && news.map((el, index) => (
              <div key={index} className={styles.card}>
                <h2>{el.title}</h2>
                <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l1.ref}>{el.l1.title}</Link>
              </div>
            ))}


{activeItem === 4 && branches.map((el, index) => (
              <div key={index} className={styles.card}>
                <h2>{el.title}</h2>
                <div className={styles.links}>
                
                  <div onClick={handleBranchToggle} className={styles.prLink}>
                    <Link  onClick={toggleSideNav}  href={el.l1.ref}>{el.l1.t}</Link>
                    <Image
                      src={showBranches ? '/assets/icons/form/closeacc.svg' : '/assets/icons/form/openacc.svg'}
                      width={24}
                      height={24}
                      alt={showBranches ? 'Close icon' : 'Open icon'}
                    />
                  </div>
                  <div className={`${styles.practiceLinkContainer} ${styles.branches} ${showBranches ? styles.show : ''}`}>
                  {el.options.map((option, idx) => (
                      <Link onClick={toggleSideNav}  key={idx} href={"offices"+option.ref}>{option.t}</Link>
                    ))}
                  </div>
              
          
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </motion.div>
)}
</AnimatePresence>
  );
}

export default SideNav;
