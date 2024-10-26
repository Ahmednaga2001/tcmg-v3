"use client";
import styles from "@/components/ask-attorny/ask-attrony.module.css";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import Image from "next/image";
import { useState } from "react";
const majorOptions = [
  {
    value : "أفراد"
  },
  {
    value : "مؤسسات وشركات"
  }
]
const officeOptions = [
  {
    value: "القاهرة",
  },  
  {
    value: "دبى",
  },
  {
    value: "الرياض",
  },
  {
    value : "تشنغدو"
  },
  {
    value : "عمان"
  },
  {
    value : "جنين"
  }
]
const AskLawyerForm = () => {
  const [selectedmajor , setSelectedmajor]=useState()
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <section className={styles.askLawyerForm}>
      <div className={styles.formPage}>
        <h2>استمارة أسأل محامي</h2>
        <form action="">
          <div className={styles.names}>
          <Input
              label="الاسم الاول"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="الاسم الاول"
              alt={"person icon"}
            />

            <Input
              label="اسم العائلة"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="اسم العائلة"
              alt={"person icon"}
            />
          </div>

          <Input
            label="البريد الالكتروني"
            imgPath="/assets/icons/form/ic_round-email.svg"
            placeholder="البريد الالكتروني"
            alt={"email icon"}
          />

          <Input
            label="رقم الهاتف"
            imgPath="/assets/icons/form/ic_round-phone.svg"
            placeholder="رقم الهاتف"
            alt={"phone icon"}
          />
            <SelectComponent
            head={"عنوان الاستفسار"}
            options={officeOptions}
            selectedOption={selectedOffice}
            setSelectedOption={setSelectedOffice}
            imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
            w={24}
            h={24}
          />
          <SelectComponent
            head={" فئة العميل"}
            options={majorOptions}
            selectedOption={selectedmajor}
            setSelectedOption={setSelectedmajor}
            imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
            w={24}
            h={24}
          />
        
        <div className={styles.inp}>
            <textarea name="" id="" placeholder="كيف سمعت عنا؟"></textarea>
            <span>؟</span>
          </div>
          <div className={styles.inp}>
            <textarea name="" id="" placeholder="اكتب استفسارك القانوني هنا"></textarea>
          </div>
         
          <CheckBox label="اوافق على الشروط والاحكام" />

          <button>
            إرسال
            <Image
              src="/assets/icons/askattorny/arrow-left.png"
              alt="Arrow Left Small"
              width={26}
              height={26}
            />
          </button>
        </form>
      </div>
      
    </section>
  );
};

export default AskLawyerForm;
