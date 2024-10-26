"use client";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import Image from "next/image";
import { useState } from "react";
const HiringGraduationForm = () => {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      
      setFileName(e.target.files[0].name);
    }
  }
  const jobOptions = [
    {
      value: "محامى",
    },
    {
      value: "موظف ادارى"
    },
    {
      value : "محاسب قانونى"
    },
    {
      value : "سكرتارية"
    },
    {
      value : "بحوث"
    },
    {
      value : "تسويق"
    },
    {
      value : "مترجم قانونى"
    },
    {
      value : "تدريب"
    }
  ];
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
  return (
    <section className={styles.graduationForm}>
      <div className={styles.formPage}>
        <h2>إستمارة التوظيف</h2>
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
            head={"اختر المكتب"}
            options={officeOptions}
            selectedOption={selectedOffice}
            setSelectedOption={setSelectedOffice}
            imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
            w={24}
            h={24}
          />
          <SelectComponent
            head={"اختر الوظيفة"}
            options={jobOptions}
            selectedOption={selectedJob}
            setSelectedOption={setSelectedJob}
            imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
            w={24}
            h={24}
          />

          <Input
            label="منطقة السكن الحالى / المحافظة"
            imgPath="/assets/icons/form/mdi_location.svg"
            placeholder={"منطقة السكن الحالى / المحافظة"}
            alt={"location icon"}
          
          />

          <div className={styles.inp}>
            <textarea name="" id="" placeholder="كيف سمعت عنا؟"></textarea>
            <span>؟</span>
          </div>

          <div className={styles.file}>
            <div className={styles.right}>
              {
                fileName ? (
                  <>
                    <p>{fileName}</p>
                  </>
                ) : (
                  <>
                    <span>قم برفع سيرتك الذاتية</span>
                    <span>( ارفع ملف مدعوم وواضح بصيغة PDF,WORD بحد اقصي 15ميجا )</span>
                  </>
                )
              }
            </div>
            <label htmlFor="file-upload" style={{display : 'none'}}>رفع ملف</label>
            <input type="file" id="file-upload" className={styles.fileInput} onChange={handleFileChange} />
            <Image
              src="/assets/icons/form/Vector.png"
              width={24}
              height={24}
              alt="Location icon"
            />
          </div>
          <CheckBox label="اوافق على الشروط والاحكام" />
          <Button text="ارسال" />
        </form>
      </div>
      <div className={styles.emailContact}>
        <p>
          بريد التواصل للمنحة الصيفية لطلاب السنة الثالثة والرابعة بكلية الحقوق{" "}
        </p>
        <a
          href="mailto:Careers@tcmglaw.com"
          style={{ textDecoration: "underline" }}
        >
          Careers@tcmglaw.com
        </a>
      </div>
    </section>
  );
};

export default HiringGraduationForm;
