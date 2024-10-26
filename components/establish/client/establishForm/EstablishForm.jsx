"use client"
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SelectComponent from '@/components/ui/selectComponent/SelectComponent'
import TextArea from '@/components/ui/TextArea'
import React from 'react'
import styles from './page.module.css'
import CheckBox from '@/components/ui/CheckBox'
const options = [
  {
    value: 'أفراد',
  },
  {
    value: 'مؤسسات وشركات',
  },
]
const EstablishForm = () => {
  const [selectedOption , setSelectedOption] = useState(null)
  return (
    <section className={styles.RequestLawyer}>
      <div className={styles.formPage}>
        <h2>استمارة تأسيس الشركات</h2>
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

          <Input label="عدد الشركاء" imgPath="/assets/icons/form/solar_user-bold.svg" placeholder="عدد الشركاء" alt="person icon" />


          <SelectComponent options={options}
            imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
            w={24}
            h={24}
           head={'نوع الشركة'} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

          <Input label="رأس المال" placeholder="رأس المال" alt="money icon" />

          <Input label="المقر" imgPath="/assets/icons/form/mdi_location.svg" placeholder="المقر" alt="location icon" />

          <TextArea label="اكتب رسالتك هنا" placeholder="اكتب رسالتك هنا" />

          <CheckBox label="إوافق على سياسة الخصوصية" />

          <Button text="إرسال" />
        </form>
      </div>
    </section>
  )
}

export default EstablishForm
