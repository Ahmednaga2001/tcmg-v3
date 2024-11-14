"use client";
import SelectComponentThree from "@/components/ui/selectComponentThree/SelectComponentThree";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ArticleCard from "../articleCard/ArticleCard";
import { AnimatePresence, motion } from "framer-motion";

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
  { id: 2, value: "الإمارات" },
  { id: 3, value: "السعودية" },
  { id: 4, value: "الصين" },
  { id: 5, value: "فلسطين" },
];

const years = [
  { id: 1, value: "2023" },
  { id: 2, value: "2022" },
  { id: 3, value: "2021" },
  { id: 4, value: "2020" },
  { id: 5, value: "2019" },
  { id: 6, value: "2018" },
];
const months = [
  { id: 1, value: "يناير" },
  { id: 2, value: "فبراير" },
  { id: 3, value: "مارس" },
  { id: 4, value: "ابريل" },
  { id: 5, value: "مايو" },
  { id: 6, value: "يونيو" },
];
const ArticleForm = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClear = () => {
    setName("");
    setYear(null);
    setSelectedSector(null);
    setYear(null);
    setMonth(null);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.l}>
      {!isFormVisible && (
        <div
          className={styles.Mob}
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <span>تصفية</span>
          <Image
            src={"/assets/icons/form/mynaui_filter-solid.svg"}
            width={32}
            height={32}
            alt="filter icon"
          />
        </div>
      )}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            key={isFormVisible ? "formContainerVisible" : "formContainerHidden"}
            className={`${styles.formContainer} ${
              isFormVisible ? styles.visible : ""
            }`}
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
                    placeholder="البحث"
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
                <div className={styles.practices}>
                  <SelectComponentThree
                    options={years}
                    selectedOption={year}
                    setSelectedOption={setYear}
                    head={"السنة"}
                  />
                </div>

                <div className={styles.locations}>
                  <SelectComponentThree
                    options={months}
                    selectedOption={month}
                    setSelectedOption={setMonth}
                    head={"الشهر"}
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
      </AnimatePresence>

      {!isMobile && (
        <div
          className={`${styles.formContainer} ${
            isFormVisible ? styles.visible : ""
          }`}
        >
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.inputsSearchContainer}>
              <div className={styles.customInput}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="البحث"
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
              <div className={styles.practices}>
                <SelectComponentThree
                  options={years}
                  selectedOption={year}
                  setSelectedOption={setYear}
                  head={"السنة"}
                />
              </div>

              <div className={styles.locations}>
                <SelectComponentThree
                  options={months}
                  selectedOption={month}
                  setSelectedOption={setMonth}
                  head={"الشهر"}
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

      <div className={styles.display}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
};

export default ArticleForm;
