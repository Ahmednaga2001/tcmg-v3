"use client";
import SelectComponentThree from "@/components/ui/selectComponentThree/SelectComponentThree";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import LawyersCard from "../articleCard/ArticleCard";
import ArticleCard from "../articleCard/ArticleCard";
const practices = [
  { id: 1, value: "الأندماج والاستحواذ" },
  { id: 2, value: "قضايا أسواق المال" },
  { id: 3, value: "قضايا التمويل والأوراق المالية" },
  { id: 4, value: "التحكيم التجاري الدولي" },
  { id: 5, value: "التجارة الدولية" },
  { id: 6, value: "قضايا الاتصالات" },
  { id: 7, value: "قضايا المعاملات المصرفية" },
  { id: 8, value: "أعمال الشركات" },
  { id: 9, value: "قضايا الأموال العامة" },
  { id: 10, value: "قضايا الإنشاءات والمقاولات" },
  { id: 11, value: "القضايا العقارية" },
  { id: 12, value: "الملكية الفكرية" },
  { id: 13, value: "قضايا التنفيذ والإفلاس" },
  { id: 14, value: "قضايا الضرائب" },
  { id: 15, value: "قضايا التأمين" },
  { id: 16, value: "القضايا الإدارية" },
  { id: 17, value: "القضايا الجنائية" },
  { id: 18, value: "القضايا المدنية" },
  { id: 19, value: "إستشارة قانونية" },
  { id: 20, value: "استشارة قانونية مميزة VIP" },
];

const sectors = [
  { id: 1, value: "العقارات" },
  { id: 2, value: "الخدمات المالية" },
  { id: 3, value: "الرعاية الصحية" },
  { id: 4, value: "الفنادق والترفيه" },
  { id: 5, value: "التجزئة والمستهلك" },
  { id: 6, value: "التصنيع" },
  { id: 7, value: "النقل والشحن البحري" },
  { id: 8, value: "النقل" },
  { id: 9, value: "السيارات" },
  { id: 10, value: "التأمين" },
  { id: 11, value: "التعليم" },
  { id: 12, value: "وسائل الإعلام" },
  { id: 13, value: "الطاقة" },
  { id: 14, value: "الاتصالات" },
];

const locations = [
  { id: 1, value: "مصر" },
  { id: 2, value: "الإمارات" },
  { id: 3, value: "السعودية" },
  { id: 4, value: "الصين" },
  { id: 5, value: "فلسطين" },
];

const cities = [
  { id: 1, value: "الجيزة" },
  { id: 2, value: "الإسكندرية" },
  { id: 3, value: "القاهرة" },
  { id: 4, value: "العاشر من رمضان" },
];
const lawyersInfo = [
  {
    id: 1,
    title: "محمد أبو ضيف ",
    category: "المؤسس والرئيس التنفيذي",
    imgPath:
      "/assets/images/lawyers/المحامي خلف حسين محامي مدني في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 2,
    title: "هشام محمود",
    category: "التطوير العقاري والتقاضي",
    imgPath:
      "/assets/images/lawyers/المحامي هشام محمود محامي جنائي في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 3,
    title: "خلف حسين",
    category: "التقاضى",
    imgPath:
      "/assets/images/lawyers/المحامي خلف حسين محامي مدني في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 4,
    title: "سهى خيري",
    category: "التمويل والبنوك",
    imgPath: "/assets/images/lawyers/المحامية سهي خيري.png",
  },
  {
    id: 5,
    title: "فوزية يحيي",
    category: "صياغة العقود",
    imgPath:
      "/assets/images/lawyers/المحامية فوزية يحيي محامية صياغة عقود في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 6,
    title: "كرم موريس",
    category: "أعمال الشركات",
    imgPath:
      "/assets/images/lawyers/المحامي كرم موريس محامي شركات في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 7,
    title: "ميادة محمود",
    category: "صياغة العقود",
    imgPath: "/assets/images/lawyers/photo frame.png",
  },
  {
    id: 8,
    title: "آية محمد",
    category: "النقل والشحن البحري",
    imgPath: "/assets/images/lawyers/photo frame (1).png",
  },
  {
    id: 9,
    title: "رمضان رزق",
    category: "التجزئة والمستهلك والتقاضي",
    imgPath:
      "/assets/images/lawyers/المحامي رمضان رزق محامي إحوال شخصية المج.png",
  },
  {
    id: 10,
    title: "دعاء قنديل",
    category: "الدمج والاستحواذ وصياغة العقود",
    imgPath: "/assets/images/lawyers/photo frame (2).png",
  },
  {
    id: 11,
    title: "أحمد السعيد",
    category: "التحكيم التجاري وأسوق المال",
    imgPath: "/assets/images/lawyers/photo frame (3).png",
  },
  {
    id: 12,
    title: "محمد سعيد",
    category: "الملكية الفكرية وتأسيس الشركات",
    imgPath:
      "/assets/images/lawyers/المحامي محمد السعيد محامي زواج اجانب في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 13,
    title: "أحمد عمارة",
    category: "التأمين",
    imgPath: "/assets/images/lawyers/photo frame (4).png",
  },
  {
    id: 14,
    title: "حسام نور",
    category: "العلامات التجارية",
    imgPath:
      "/assets/images/lawyers/المحامي حسام نور محامي عقاري في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
];

const ArticleForm = () => {
  const [name, setName] = useState("");
  const [practice, setPractice] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedLoction, setSelectedLoction] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [FilteredLawyers, setFilteredLawyers] = useState(lawyersInfo);
  
  
  
 const handleSubmit = (e) => {
  const l = []
  e.preventDefault();
  FilteredLawyers.filter((lawyer) => {
    if (lawyer.title.toLowerCase().includes(name.toLowerCase())) {
      l.push(lawyer)
    }
    setFilteredLawyers(l)
  })

 }
  return (
    <section className={styles.l}>
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
              head={"القطعات"}
            />
          </div>
          <div className={styles.practices}>
            <SelectComponentThree
              options={practices}
              selectedOption={practice}
              setSelectedOption={setPractice}
              head={"السنة"}
            />
          </div>
       
          <div className={styles.locations}>
            <SelectComponentThree
              options={locations}
              selectedOption={selectedLoction}
              setSelectedOption={setSelectedLoction}
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

      <div className={styles.display}>
     
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
        
      
        
            
           
      </div>
    </section>
  );
};

export default ArticleForm;