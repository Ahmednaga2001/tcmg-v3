"use client";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import styles from "./page.module.css";
import Image from "next/image";
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

const SubForm = () => {
 
  return (
    <section className={styles.RequestLawyer}>
      <h2>معلومات التواصل</h2>
      <div className={styles.formPage}>
       
        <form >
              <Input
                label="الاسم الاول"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="الاسم الاول"
                alt={"person icon"}
                name={"f_name"}
                display="block"
              />

              <Input
                label="اسم العائلة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="اسم العائلة"
                alt={"person icon"}
                name={"l_name"}
                display="block"

              />

            <Input
              label="البريد الالكتروني"
              imgPath="/assets/icons/form/ic_round-email.svg"
              placeholder="البريد الالكتروني"
              alt={"email icon"}
              name={"email"}
              display="block"

            />
            <Input
              label="المدينة"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder="المدينة"
              alt={"email icon"}
              name={"email"}
              display="block"

            />
            <Input
              label="الدولة"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder="الدولة"
              alt={"email icon"}
              name={"email"}
              display="block"

            />

         
      
            <SelectComponent
            options={sectors}
            label={"القطاعات"}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              head={"إختر القطاعات من القائمة"}   
            />
      


            <SelectComponent
              label={"الممارسات"}
                   head={"إختر الممارسات من القائمة "}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              options={practices}
         />
        
         

        
           <div className={styles.agreeToPrivacy}>
           <CheckBox
            label={"أوافق على سياسة الخصوصية و سياسة الإستخدام "}
              name="agreeToPrivacy" // Bind the checkbox to Formik state
           
           
            />
           </div>
           <button type="submit" className={styles.registerWay}>
          اشتراك
            <Image
              src="/assets/icons/form/arrow-left-black.png"
              width={24}
              height={24}
              alt="arrow-left icon"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubForm;
