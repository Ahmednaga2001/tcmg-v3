"use client";
import SelectComponentThree from "@/components/ui/selectComponentThree/SelectComponentThree";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import LawyersCard from "../lawersCard/LawyersCard";
import { AnimatePresence, motion } from "framer-motion";

const practices = [
  { id: 1, value: "تأسيس الشركات" },
  { id: 2, value: "التقاضي" },
  { id: 3, value: "الملكية الفكرية" },
  { id: 4, value: "التحكيم التجاري الدولي" },
  { id: 5, value: "الضرائب" },
  { id: 6, value: "التأمين" },
  { id: 7, value: "العقارات" },
  { id: 8, value: "الأموال العامة" },
  { id: 9, value: "التوظيف" },
];

const sectors = [
  { id: 1, value: "أسواق المال" },
  { id: 2, value: "الإندماج والاستحواذ" },
  { id: 3, value: "التحكيم التجاري" },
  { id: 4, value: "التطوير العقاري والإنشاءات" },
  { id: 5, value: "الخدمات البنكية والمالية" },
  { id: 6, value: "الرعاية الصحية" },
  { id: 7, value: "التجزئة والمستهلك" },
  { id: 8, value: "التقاضي" },
];

const locations = [
  { id: 1, value: "مصر" },
  { id: 2, value: "السعودية" },
  { id: 3, value: "الإمارات" },
  { id: 4, value: "الصين" },
  { id: 5, value: "فلسطين" },
];

const cities = [
  { id: 1, value: "القاهرة" },
  { id: 2, value: "الجيزة" },
  { id: 3, value: "الإسكندرية" },
  { id: 4, value: "العاشر من رمضان" },
];

const lawyersInfo = [
  {
    id: 1,
    title: "محمد أبو ضيف ",
    major : "المؤسس والرئيس التنفيذي",
    sectors: ["التطوير العقاري", "الخدمات البنكية", "الرعاية الصحية", "التجزئة والمستهلك", "التقاضي"],
    practices: ["التقاضي", "الضرائب", "العقارات", "الأموال العامة"],
    imgPath: "/assets/images/lawyers/المحامي محمد أبو ضيف الرئيس التنفيذي  .jpg",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 2,
    title: "هشام محمود",
    major : "التطوير العقاري والتقاضي",
    sectors: ["التطوير العقاري", "التقاضي"],
    practices: ["التقاضي", "الضرائب", "العقارات", "الأموال العامة", "التوظيف"],
    imgPath: "/assets/images/lawyers/المحامي هشام محمود محامي جنائي في المجموعة التجارية والبحرية للمحاماة_edited.webp",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 3,
    title: "خلف حسين",
    major : "التقاضي",
    sectors: ["التقاضي"],
    practices: ["التقاضي", "العقارات"],
    imgPath: "/assets/images/lawyers/المحامي خلف حسين محامي مدني في المجموعة التجارية والبحرية للمحاماة_edited.webp",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 4,
    title: "سهى خيري",
    major : "التمويل والبنوك",
    sectors: ["الخدمات البنكية"],
    imgPath: "/assets/images/lawyers/المحامية سهي خيري  محامية بنوك في المجموعة التجارية والبحرية للمحاماة_edited.webp",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 5,
    title: "فوزية يحيي",
    major : "صياغة العقود والتقاضي",
    sectors: ["التقاضي"],
    practices: ["التقاضي"],
    imgPath: "/assets/images/lawyers/المحامية فوزية يحيي محامية صياغة عقود في المجموعة التجارية والبحرية للمحاماة_edited.webp",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 6,
    title: "كرم موريس",
    major : "أعمال الشركات",
    sectors: ["الخدمات البنكية"],
    practices: ["تأسيس الشركات", "الملكية الفكرية"],
    imgPath: "/assets/images/lawyers/المحامي كرم موريس محامي شركات في المجموعة التجارية والبحرية للمحاماة_edited.webp",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 7,
    title: "ميادة محمود",
    major : "صياغة العقود",
    imgPath: "/assets/images/lawyers/المحامية ميادة محمد محامي تجاري في المجموعة التجارية والبحرية للمحاماة_edited.webp",
    sectors: [""],
    practices: [""],
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 8,
    title: "آية محمد",
    major : "النقل والشحن البحري",
    imgPath: "/assets/images/lawyers/المحامية أية محمد محامية عقود دولية وشحن بحري في المجموعة التجارية والبحرية للمحاماة_edite.webp",
    sectors: [""],
    practices: [""],
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 9,
    title: "رمضان رزق",
    major : "التجزئة والمستهلك والتقاضي",
    sectors: ["التجزئة والمستهلك", "التقاضي", "التأمين"],
    practices: ["التقاضي", "العقارات"],
    imgPath: "/assets/images/lawyers/المحامي رمضان رزق محامي إحوال شخصية المج.webp",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 10,
    title: "دعاء قنديل",
    major : "الإندماج و الإستحواذ وصياغة العقود",
    sectors: ["أسواق المال", "الإندماج", "التحكيم التجاري", "الرعاية الصحية", "التجزئة والمستهلك"],
    practices: ["العقارات", "التوظيف"],
    imgPath: "/assets/images/lawyers/دعاء.jpeg",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 11,
    title: "أحمد سعيد",
    major : "التحكيم التجاري وأسوق المال",
    sectors: ["الإندماج", "التحكيم التجاري", "التطوير العقاري", "الخدمات البنكية", "الرعاية الصحية", "التجزئة والمستهلك"],
    practices: ["تأسيس الشركات", "الملكية الفكرية", "التأمين", "العقارات", "التوظيف"],
    imgPath: "/assets/images/lawyers/احمد سعيد.jpeg",
    location: "مصر",
    city: "القاهرة",
  },
  {
    id: 12,
    title: "محمد سعيد",
    major:"الملكية الفكرية وتأسيس الشركات",
    location: "مصر",
    city: "القاهرة",
    practices: ["تأسيس الشركات", "الملكية الفكرية"],
    imgPath: "/assets/images/lawyers/المحامي محمد السعيد محامي زواج اجانب في المجموعة التجارية والبحرية للمحاماة_edited.webp",
  },
  {
    id: 13,
    title: "أحمد عمارة",
    major : "التأمين",
    location: "مصر",
    sectors: [""],
    practices: [""],
    city: "القاهرة",
    imgPath: "/assets/images/lawyers/المحامي أحمد عمارة محامي مدني في المجموعة التجارية والبحرية للمحاماة_edited.webp",
  },
  {
    id: 14,
    title: "حسام نور",
    major :"العلامات التجارية",
    sectors: [""],
    practices: [""],
    location: "مصر",
    city: "القاهرة",
    imgPath: "/assets/images/lawyers/المحامي حسام نور محامي عقاري في المجموعة التجارية والبحرية للمحاماة_edited.webp",
  },
];

const LawyersForm = () => {
  const [name, setName] = useState("");
  const [practice, setPractice] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedLoction, setSelectedLoction] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [FilteredLawyers, setFilteredLawyers] = useState(lawyersInfo);
  const [visibleLawyersCount, setVisibleLawyersCount] = useState(9);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450); // Set isMobile if width < 450px
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let filtered = lawyersInfo.filter((lawyer) => {
      let match = true;

      if (name && !lawyer.title.toLowerCase().includes(name.toLowerCase())) {
        match = false;
      }

      if (practice && !lawyer.practices?.includes(practice)) {
        match = false;
      }

      if (selectedSector && !lawyer.sectors?.includes(selectedSector)) {
        match = false;
      }

      if (selectedLoction && selectedLoction !== "مصر") {
        match = false;
      }

      if (selectedCity && selectedCity !== "القاهرة") {
        match = false;
      }

      return match;
    });

    setFilteredLawyers(filtered);
    setVisibleLawyersCount(9);
    setIsFormVisible(false);
  };

  const handleShowMore = () => {
    setVisibleLawyersCount(FilteredLawyers.length);
  };

  const visibleLawyers = FilteredLawyers.slice(0, visibleLawyersCount);

  const handleClear = () => {
    setName("");
    setPractice(null);
    setSelectedSector(null);
    setSelectedLoction(null);
    setSelectedCity(null);
  };

  const noResultsMessage = !FilteredLawyers.length && (
    <div className={styles.noResultsMessage}>
      <p>لا توجد نتائج مطابقة للبحث.</p>
    </div>
  );

  return (
    <section className={styles.l}>
       {
        !isFormVisible && (
          <div className={styles.Mob} onClick={() => setIsFormVisible(!isFormVisible)}>
        <span>تصفية</span>
        <Image src={"/assets/icons/form/mynaui_filter-solid.svg"} width={32} height={32} alt="filter icon" />
      </div>
        )
      }

      <AnimatePresence>
        {isMobile && (
          <motion.div
            key={isFormVisible ? "formContainerVisible" : "formContainerHidden"}
            className={`${styles.formContainer} ${isFormVisible ? styles.visible : ""}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 0.3 } }}
            transition={{ duration: 0.3 }}
          >
            <form action="" onSubmit={handleSubmit}>
              <div className={styles.inputsSearchContainer}>
                <div className={styles.mobClear}>
                  <Image
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    src={"/assets/icons/form/closeIcon.svg"}
                    width={16}
                    height={16}
                    alt="close icon"
                  />
                  <span onClick={handleClear}>مسح الكل</span>
                </div>
                <div className={styles.customInput}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    placeholder="الاسم"
                  />
                </div>
                <div className={styles.jobDesc}>
                  <SelectComponentThree head={"المسمى "} />
                </div>
                <div className={styles.practices}>
                  <SelectComponentThree
                    options={practices}
                    selectedOption={practice}
                    setSelectedOption={setPractice}
                    head={"الممارسات"}
                  />
                </div>
                <div className={styles.sectors}>
                  <SelectComponentThree
                    options={sectors}
                    selectedOption={selectedSector}
                    setSelectedOption={setSelectedSector}
                    head={"القطعات"}
                  />
                </div>
                <div className={styles.locations}>
                  <SelectComponentThree
                    options={locations}
                    selectedOption={selectedLoction}
                    setSelectedOption={setSelectedLoction}
                    head={"الموقع"}
                  />
                </div>
                <div className={styles.cities}>
                  <SelectComponentThree
                    options={cities}
                    selectedOption={selectedCity}
                    setSelectedOption={setSelectedCity}
                    head={"المدينة"}
                  />
                </div>

                <div className={styles.search}>
                  <button type="submit">
                    بحث
                    <Image
                      src={"/assets/icons/form/arrow-left-black.png"}
                      width={24}
                      height={24}
                      alt="arrow left icon"
                    />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}

        {!isMobile && ( // Show the form without animation on larger screens
          <div className={styles.formContainer}>
            <form action="" onSubmit={handleSubmit}>
              <div className={styles.inputsSearchContainer}>
                <div className={styles.mobClear}>
                  <span onClick={handleClear}>مسح الكل</span>
                </div>
                <div className={styles.customInput}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    placeholder="الاسم"
                  />
                </div>
                <div className={styles.jobDesc}>
                  <SelectComponentThree head={"المسمى "} />
                </div>
                <div className={styles.practices}>
                  <SelectComponentThree
                    options={practices}
                    selectedOption={practice}
                    setSelectedOption={setPractice}
                    head={"الممارسات"}
                  />
                </div>
                <div className={styles.sectors}>
                  <SelectComponentThree
                    options={sectors}
                    selectedOption={selectedSector}
                    setSelectedOption={setSelectedSector}
                    head={"القطاعات"}
                  />
                </div>
                <div className={styles.locations}>
                  <SelectComponentThree
                    options={locations}
                    selectedOption={selectedLoction}
                    setSelectedOption={setSelectedLoction}
                    head={"الموقع"}
                  />
                </div>
                <div className={styles.cities}>
                  <SelectComponentThree
                    options={cities}
                    selectedOption={selectedCity}
                    setSelectedOption={setSelectedCity}
                    head={"المدينة"}
                  />
                </div>

                <div className={styles.search}>
                  <button type="submit">
                    بحث
                    <Image
                      src={"/assets/icons/form/arrow-left-black.png"}
                      width={24}
                      height={24}
                      alt="arrow left icon"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </AnimatePresence>

      {noResultsMessage}
      <div className={styles.display}>
        {visibleLawyers.map((lawyer) => (
          <LawyersCard
            key={lawyer.id}
            title={lawyer.title}
            category={lawyer.major}
            imgPath={lawyer.imgPath}
          />
        ))}
      </div>

      {visibleLawyersCount < FilteredLawyers.length && (
        <div className={styles.showMoreButton}>
          <span onClick={handleShowMore}>مشاهدة المزيد</span>
          <Image src={"/assets/icons/form/arrow-left-white.png"} width={24} height={24} alt="arrow left icon" />
        </div>
      )}
    </section>
  );
};

export default LawyersForm;
