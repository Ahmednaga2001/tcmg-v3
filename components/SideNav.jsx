"use client";
import toggleSideNav from "@/utils/toggleSideNav";
import styles from "./SideNav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const data = [
  {
    title: "نقدم خدمات قانونية المتكاملة على المستوى المحلي والإقليمي والدولي",
    l0: { t: "الخدمات القانونية", ref: "legal-services" },
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
        "جميع الممارسات",
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
        "جميع القطاعات",
      ],
    },
    l6: { t: "توكيل محامي", ref: "power-of-attorney" },
    l7: { t: "إسأل محامي", ref: "ask-a-lawyer" },
  },
];

const joinUs = [
  {
    title:
      "إنضم إلينا في المجموعة التجارية والبحرية للمحاماة: حيث نحقق النجاح معًا في عالم المحاماة",
    l0: { t: "إبدأ رحلتك معنا", ref: "join-us" },
    l1: { t: "المتدربين", ref: "internship" },
    l2: { t: "المحامين", ref: "careers" },
    l3: { t: "العلاقات العامة", ref: "protocol" },
  },
];

const aboutUs = [
  {
    title:
      "المجموعة التجارية والبحرية للمحاماة والاستشارات القانونية: خبرة قانونية شاملة على المستوى المحلي والإقليمي والدولي",
    l1: { title: "تعرف علينا", ref: "about-us" },
    l2: { title: "فريق العمل", ref: "lawyers" },
  },
];

const news = [
  {
    title:
      "حلول قانونية متكاملة مع المجموعة التجارية والبحرية للمحاماة: دليلك لفهم القانون: خطوة بخطوة نحو المحاماة",
    l1: { title: "المقالات", ref: "news-insights" },
  },
];

const branches = [
  {
    title:
      "تواصل معنا للحصول على استشارتك القانونية اليوم وتحقيق نحاجك القانوني",

    l1: {
      t: "الفروع",
      ref: "offices",
    },
    options: [
      {
        t: "جميع الفروع",
        ref: "",
      },
      {
        t: "القاهرة",
        ref: "#egypt", // Link to Egypt section
      },
      {
        t: "دبي",
        ref: "#uae", // Link to UAE section
      },
      {
        t: "الرياض",
        ref: "#saudi-arabia", // Link to Saudi Arabia section
      },
      {
        t: "تشنغدو",
        ref: "#china", // Link to China section
      },
      {
        t: "عمّان",
        ref: "#jordan", // Link to Jordan section
      },
      {
        t: "جنين",
        ref: "#palestine", // Link to Palestine section
      },
    ],
  },
];
function SideNav({ isOpen, toggleSideNav }) {
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
        <motion.div
          className={styles.sideNav}
          id="sideNav"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.layout}>
            <motion.div
              className={styles.side}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/" onClick={toggleSideNav} className={styles.logo}>
                <Image
                  src="/assets/icons/logo/Logo.svg"
                  alt="Logo"
                  width={200}
                  height={70}
                />
              </Link>
              <div className={styles.sideLinks}>
                <span
                  className={activeItem === 0 ? styles.active : ""}
                  onClick={() => handleItemClick(0)}
                >
                  من نحن
                  <Image
                    quality={100}
                    src={
                      activeItem === 0
                        ? "/assets/icons/form/arrow-left-black.png"
                        : "/assets/icons/form/arrow-left-white.png"
                    }
                    width={24}
                    height={24}
                    alt="arrow left icon"
                  />
                </span>
                <span
                  className={activeItem === 2 ? styles.active : ""}
                  onClick={() => handleItemClick(2)}
                >
                  خدماتنا
                  <Image
                    quality={100}
                    src={
                      activeItem === 2
                        ? "/assets/icons/form/arrow-left-black.png"
                        : "/assets/icons/form/arrow-left-white.png"
                    }
                    width={24}
                    height={24}
                    alt="arrow left icon"
                  />
                </span>
                <span
                  className={activeItem === 1 ? styles.active : ""}
                  onClick={() => handleItemClick(1)}
                >
                  إنضم الينا
                  <Image
                    quality={100}
                    src={
                      activeItem === 1
                        ? "/assets/icons/form/arrow-left-black.png"
                        : "/assets/icons/form/arrow-left-white.png"
                    }
                    width={24}
                    height={24}
                    alt="arrow left icon"
                  />
                </span>

                <span
                  className={activeItem === 3 ? styles.active : ""}
                  onClick={() => handleItemClick(3)}
                >
                  أخبار وروي
                  <Image
                    quality={100}
                    src={
                      activeItem === 3
                        ? "/assets/icons/form/arrow-left-black.png"
                        : "/assets/icons/form/arrow-left-white.png"
                    }
                    width={24}
                    height={24}
                    alt="arrow left icon"
                  />
                </span>
                <span
                  className={activeItem === 4 ? styles.active : ""}
                  onClick={() => handleItemClick(4)}
                >
                  تواصل معنا
                  <Image
                    quality={100}
                    src={
                      activeItem === 4
                        ? "/assets/icons/form/arrow-left-black.png"
                        : "/assets/icons/form/arrow-left-white.png"
                    }
                    width={24}
                    height={24}
                    alt="arrow left icon"
                  />
                </span>
              </div>

              <div className={styles.bottom}>
                <Link href="login" onClick={toggleSideNav} className={styles.login}>
                  <Image
                    src="/assets/icons/form/solar_user-bold.png"
                    width={24}
                    height={24}
                  />
                  تسجيل الدخول
                </Link>
                <div className={styles.reg}>
                  <span>احجز استشارتك الآن</span>
                  <p>
                    قم بحجز موعد معنا، استفد من استشارتنا القانونية بسهولة وفي
                    الوقت الذي يناسبك.
                  </p>
                  <Link onClick={toggleSideNav} href={`legal-advice#reserve`}>
                    احجز استشارتك الآن
                    <Image
                      src="/assets/icons/form/arrow-left-black.png"
                      width={24}
                      height={24}
                      alt="arrow left"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.header}>
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
                  <div className={styles.toggle} onClick={toggleSideNav}>
                    <Image
                      src="/assets/icons/Hamburger Menu close.svg"
                      alt="Hamburger Icon"
                      width={47}
                      height={47}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.mainContent}>
                {activeItem === 0 &&
                  aboutUs.map((el, index) => (
                    <div key={index} className={styles.card}>
                      <h2>{el.title}</h2>
                      <div className={styles.links}>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l1.ref}
                        >
                          {el.l1.title}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l2.ref}
                        >
                          {el.l2.title}
                        </Link>
                      </div>
                    </div>
                  ))}

                {activeItem === 1 &&
                  joinUs.map((el, index) => (
                    <div key={index} className={styles.card}>
                      <h2>
                        {el.title.slice(0, 50)}
                        <br />
                        {el.title.slice(50)}
                      </h2>
                      <div className={styles.links}>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l0.ref}
                        >
                          {el.l0.t}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l1.ref}
                        >
                          {el.l1.t}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l2.ref}
                        >
                          {el.l2.t}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l3.ref}
                        >
                          {el.l3.t}
                        </Link>
                      </div>
                    </div>
                  ))}

                {activeItem === 2 &&
                  data.map((el, index) => (
                    <div key={index} className={styles.card}>
                      <h2>{el.title}</h2>
                      <div className={styles.links}>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l0.ref}
                        >
                          {el.l0.t}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l1.ref}
                        >
                          {el.l1.t}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l2.ref}
                        >
                          {el.l2.t}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l3.ref}
                        >
                          {el.l3.t}
                        </Link>
                        <div
                          onClick={handlePracticeToggle}
                          className={styles.prLink}
                        >
                          <Link onClick={toggleSideNav} href={el.l4.ref}>
                            {el.l4.t}
                          </Link>
                          <Image
                            src={
                              showPractice
                                ? "/assets/icons/form/closeacc.svg"
                                : "/assets/icons/form/openacc.svg"
                            }
                            width={24}
                            height={24}
                            alt={showPractice ? "Close icon" : "Open icon"}
                          />
                        </div>
                        <div
                          className={`${styles.practiceLinkContainer} ${
                            showPractice ? styles.show : ""
                          }`}
                        >
                          {el.l4.options.map((option, idx) => (
                            <Link
                              onClick={toggleSideNav}
                              key={idx}
                              href={el.l4.ref}
                            >
                              {option}
                            </Link>
                          ))}
                        </div>
                        <div
                          onClick={handleSectorToggle}
                          className={styles.prLink}
                        >
                          <Link onClick={toggleSideNav} href={el.l5.ref}>
                            {el.l5.t}
                          </Link>
                          <Image
                            src={
                              showSector
                                ? "/assets/icons/form/closeacc.svg"
                                : "/assets/icons/form/openacc.svg"
                            }
                            width={24}
                            height={24}
                            alt={showSector ? "Close icon" : "Open icon"}
                          />
                        </div>
                        <div
                          className={`${styles.practiceLinkContainer} ${
                            showSector ? styles.show : ""
                          }`}
                        >
                          {el.l5.options.map((option, idx) => (
                            <Link
                              onClick={toggleSideNav}
                              key={idx}
                              href={el.l5.ref}
                            >
                              {option}
                            </Link>
                          ))}
                        </div>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l6.ref}
                        >
                          {el.l6.t}
                        </Link>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l7.ref}
                        >
                          {el.l7.t}
                        </Link>
                      </div>
                    </div>
                  ))}

                {activeItem === 3 &&
                  news.map((el, index) => (
                    <div key={index} className={styles.card}>
                      <h2>
                        <h2>
                          {el.title.slice(0, 60)}
                          <br />
                          {el.title.slice(60)}
                        </h2>
                      </h2>
                      <div className={styles.links}>
                        <Link
                          onClick={toggleSideNav}
                          className={styles.itemLink}
                          href={el.l1.ref}
                        >
                          {el.l1.title}
                        </Link>
                      </div>
                    </div>
                  ))}

                {activeItem === 4 &&
                  branches.map((el, index) => (
                    <div key={index} className={styles.card}>
                      <h2>{el.title}</h2>
                      <div className={styles.links}>
                        <Link onClick={toggleSideNav} href={el.l1.ref}>
                          {el.l1.t}
                        </Link>
                      </div>
                      <div className={styles.branchesOptions}>
                        {el.options.map((option, idx) => (
                          <Link
                            onClick={toggleSideNav}
                            key={idx}
                            href={"offices" + option.ref}
                          >
                            {option.t}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideNav;
