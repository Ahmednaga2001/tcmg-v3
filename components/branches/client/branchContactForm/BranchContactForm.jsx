"use client"
import React, { useState } from 'react';
import styles from "./page.module.css";
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import CheckBox from '@/components/ui/CheckBox';
import Button from '@/components/ui/Button';
import SelectComponent from '@/components/ui/selectComponent/SelectComponent';

const BranchContactForm = () => {
  const options = [
    {  value: "أفراد" },
    {  value: "مؤسسات وشركات" }
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section className={styles.contactForm}>
      <div className={styles.formPage}>
        <h2>استمارة التواصل </h2>
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
          <SelectComponent head={"فئة العميل"}  
          options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}
          imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
          w={24}
          h={24}
          />
          <TextArea label="الرسالة" placeholder="اكتب رسالتك هنا" />
         
          <CheckBox label="أوافق على سياسة الخصوصية" />
          <Button text="إرسال استمارة التواصل" />
        </form>
      </div>
    </section>
  );
};

export default BranchContactForm;
