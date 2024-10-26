"use client"


import styles from "./page.module.css";
import  { useState } from 'react';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import CheckBox from '@/components/ui/CheckBox';
import Button from '@/components/ui/Button';
import SelectComponent from '@/components/ui/selectComponent/SelectComponent';

const ContactMobile = () => {
  const options = [{ value: "أفراد" }, { value: "مؤسسات وشركات" }];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section className={styles.contactForm}>
      
      <div className={styles.egyLocations}>
        <h2>جمهورية مصر العربية</h2>
        <div className={styles.parent}>
          <div className={styles.parentLocations}>
            <div className={styles.locationInfo}>
              <h4>رقم الهاتف</h4>
              <a href="tel:+201276299998">201276299998+</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>الرقم الأرضي</h4>
              <a href="tel:+20222636983">20222636983</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>بريد التواصل الرسمي</h4>
              <a href="mailto:contact@tcmglaw.com">contact@tcmglaw.com</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>بريد العلاقات الاستراتيجة</h4>
              <a href="mailto:pr@tcmglaw.com">pr@tcmglaw.com</a>
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.h2}>استمارة التواصل </h2>
      <div className={styles.formPage}>
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
export default ContactMobile;
