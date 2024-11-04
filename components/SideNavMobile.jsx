"use client";
import toggleSideNav from "@/utils/toggleSideNav";
import styles from "./SideNavMob.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const data = [
  {
    l0 : {t : "الخدمات القانونية",ref : "legal-services"},
    l1: { t: "الإستشارات القانونية", ref: "legal-advice" },
    l2: { t: "تأسيس الشركات", ref: "establishing-companies" },
    l3: { t: "أعمال الشركات", ref: "corporate" },
    l4: {
      t: "الممارسات",
      ref: "practices",
      options: [
     "تأسيس الشركات",
        "التقاضي",
        "الملكية الفكرية",
        "الضرائب",
        "التأمين",
        "العقارات",
        "الأموال العامة",
        "التوظيف",
        "جميع الممارسات" 
      ],
    },
    l5: {
      t: "القطاعات",
      ref: "sectors",
      options: [
        "أسواق المال",
        "الإندماج والاستحواذ",
        "التحكيم التجاري",
        "التطوير العقاري والإنشاءات",
        "الخدمات البنكية والمالية",
        "الرعاية الصحية",
        "التجزئة والمستهلك",
        "التقاضي",
        "جميع القطاعات"
      ],
    },
    l6: { t: "توكيل محامي", ref: "power-of-attorney" },
    l7: { t: "إسأل محامي", ref: "ask-a-lawyer" },
  },
];

const joinUs = [
  {
    l1: { t: "المتدربين", ref: "internship" },
    l2: { t: "المحامين", ref: "careers" },
    l3: { t: "العلاقات العامة", ref: "protocol" },
  },
];

const aboutUs = [
  {
    l1 : {title : "تعرف علينا" , ref : "/about-us"},
    l2: { title: "فريق العمل" },
  },
];

const news = [
  {
    l1: { title: "المقالات", ref: "article" },
  },
];
const contact = [
  {
    l1: {
      title: "جميع الفروع ",
      ref: "offices"
    },
    options: [
      {
        t: "القاهرة",
        ref: "#egypt" // Link to Egypt section
      },
      {
        t: "دبي",
        ref: "#uae" // Link to UAE section
      },
      {
        t: "الرياض",
        ref: "#saudi-arabia" // Link to Saudi Arabia section
      },
      {
        t: "تشنغدو",
        ref: "#china" // Link to China section
      },
      {
        t: "عمّان",
        ref: "#jordan" // Link to Jordan section
      },
      {
        t: "جنين",
        ref: "#palestine" // Link to Palestine section
      }
    ]
  }
];


function SideNavMob({ isOpen, toggleSideNav }) {
  const [activeItem, setActiveItem] = useState(null);
  const [showPractice, setShowPractice] = useState(false);
  const [showSector, setShowSector] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [title, setTitle] = useState("");

  const handleItemClick = (index, title) => {
    setActiveItem(index);
    setTitle(title);
    setShowPractice(false);
    setShowSector(false);
  };

  const handleBackClick = () => {
    setActiveItem(null);
    setTitle("");
  };
  const handlePracticeToggle = () => {
    setShowPractice((prev) => !prev);
  };

  const handleSectorToggle = () => {
    setShowSector((prev) => !prev);
  };
  const handleBranchToggle = () => {
    setShowBranches((prev) => !prev);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.sideNav} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.5 }}>
          <div className={styles.header}>
            <div className={styles.right}>
              <Image src="/assets/icons/Hamburger Menu close.svg" style={{cursor : "pointer"}} alt="Close" width={20} height={20} onClick={toggleSideNav} />
              <Image src="/assets/icons/searchwhite.svg" alt="Search" width={20} height={20} />
              <Image src="/assets/icons/Language Icon.svg" width={20} height={20} alt="Language" />
            </div>
            <div className={styles.logo}>
              <Image src="/assets/icons/logo/Logo.svg" alt="Logo" width={120} height={40} />
            </div>
          </div>

          {activeItem==null && (
            <div className={styles.sideLinks}>
              <span onClick={() => handleItemClick(0, "من نحن")}>
                من نحن
                <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24}/>
                </span>
              <span onClick={() => handleItemClick(2, "إنضم الينا")}>
                إنضم الينا
                <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24}/>
                </span>
              <span onClick={() => handleItemClick(1, "خدماتنا")}>
              خدماتنا
                <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24}/>
                </span>
              <span onClick={() => handleItemClick(4, "أخبار وروي")}>
                أخبار وروي
                <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24}/>

                </span>
              <span onClick={() => handleItemClick(3, "تواصلوا معنا")}>
                تواصلوا معنا
                <Image src="/assets/icons/form/arrow-left-white.png" width={24} height={24}/>
                </span>
            </div>
          )}

          <div className={styles.mainContent}>
            {activeItem !== null && (
              <div className={styles.infoHeader}>
                <span className={styles.boldTitle}>{title}</span>
                <div className={styles.prev} onClick={handleBackClick}>
                  <span>الرجوع</span>
                  <div>
                  <Image src="/assets/icons/greater.svg" width={5} height={9} alt="greater icon" />
                  <Image src="/assets/icons/greater.svg" width={5} height={9} alt="greater icon" />
                  </div>
                </div>
              </div>
            )}

            {activeItem === 0 && (
              <motion.div className={styles.card}  
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              >
                  <Link onClick={toggleSideNav} className={styles.itemLink} href={aboutUs[0].l1.ref}>
                  {aboutUs[0].l1.title}
                </Link>
                <Link onClick={toggleSideNav} className={styles.itemLink} href="#">
                  {aboutUs[0].l2.title}
                </Link>
                {/* <a href="#" className={styles.registerLink}>
          احجز استشارتك الآن
          <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow left" />
        </a> */}
                </motion.div>
            )}

{activeItem === 2 && (
  <motion.div 
    className={styles.card}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
  >
    {joinUs.map((el, index) => (
      <div key={index} className={styles.card}>
        <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l1.ref}>{el.l1.t}</Link>
        <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l2.ref}>{el.l2.t}</Link>
        <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l3.ref}>{el.l3.t}</Link>
      </div>
    ))}
  </motion.div>
)}


            {activeItem === 1 && data.map((el, index) => (
              <motion.div key={index} className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l0.ref}>{el.l0.t}</Link>
                <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l1.ref}>{el.l1.t}</Link>
                <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l2.ref}>{el.l2.t}</Link>
                <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l3.ref}>{el.l3.t}</Link>
                
                <div onClick={() => setShowPractice((prev) => !prev)} className={styles.prLink}>
                  <Link onClick={toggleSideNav} href={el.l4.ref}>{el.l4.t}</Link>
                  <Image src={showPractice ? '/assets/icons/form/closeacc.svg' : '/assets/icons/form/openacc.svg'} width={24} height={24} />
                </div>
                <div className={`${styles.practiceLinkContainer} ${showPractice ? styles.show : ''}`}>
                    {el.l4.options.map((option, idx) => (
                      <Link onClick={toggleSideNav}  key={idx} href={el.l4.ref}>{option}</Link>
                    ))}
                  </div>

                <div onClick={() => setShowSector((prev) => !prev)} className={styles.prLink}>
                  <Link onClick={toggleSideNav} href={el.l5.ref}>{el.l5.t}</Link>
                  <Image src={showSector ? '/assets/icons/form/closeacc.svg' : '/assets/icons/form/openacc.svg'} width={24} height={24} />
                </div>
                <div className={`${styles.practiceLinkContainer} ${showSector ? styles.show : ''}`}>
                    {el.l5.options.map((option, idx) => (
                      <Link onClick={toggleSideNav}  key={idx} href={el.l5.ref}>{option}</Link>
                    ))}
                    </div>

                <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l6.ref}>{el.l6.t}</Link>
                <Link onClick={toggleSideNav} className={styles.itemLink} href={el.l7.ref}>{el.l7.t}</Link>
                {/* <a href="#" className={styles.registerLink}>
          احجز استشارتك الآن
          <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow left" />
        </a> */}
              </motion.div>
            ))}

{activeItem === 3 && data.map((el, index) => (
              <motion.div key={index} className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              >
           
             
             

                <div onClick={() => setShowBranches((prev) => !prev)} className={styles.prLink}>
                  <Link onClick={toggleSideNav} href={contact[0].l1.ref}>{contact[0].l1.title}</Link>
                  <Image src={showBranches ? '/assets/icons/form/closeacc.svg' : '/assets/icons/form/openacc.svg'} width={24} height={24} />
                </div>
                <div className={`${styles.practiceLinkContainer} ${showBranches ? styles.show : ''}`}>
                    {contact[0].options.map((option, idx) => (
                      <Link onClick={toggleSideNav}  key={idx} href={`offices${option.ref}`}>{option.t}</Link>
                    ))}
                    </div>

           
                {/* <a href="#" className={styles.registerLink}>
          احجز استشارتك الآن
          <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow left" />
        </a> */}
              </motion.div>
            ))}



            {activeItem === 4 && news.map((el, index) => (
              <motion.div key={index} className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link className={styles.itemLink} href={el.l1.ref}>{el.l1.title}</Link>
        {/* <a href="#" className={styles.registerLink}>
          احجز استشارتك الآن
          <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow left" />
        </a> */}
              </motion.div>
            ))}
          </div>

          {
 isOpen&& (
    <motion.div className={styles.bottom}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    >
      <div className={styles.login}>
        <Image src="/assets/icons/form/solar_user-bold.png" width={24} height={24} />
        تسجيل الدخول
      </div>
      <div className={styles.reg}>
        <span>احجز استشارتك الآن</span>
        <p>قم بحجز موعد معنا، استفد من استشارتنا القانونية بسهولة وفي الوقت الذي يناسبك.</p>
        <a href="#" className={styles.registerLink}>
          احجز استشارتك الآن
          <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow left" />
        </a>
      </div>
    </motion.div>
  )
}

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideNavMob;