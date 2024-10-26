import React, { useState } from 'react';
import styles from './page.module.css';
import Input from '@/components/ui/Input';
import Image from 'next/image';

export const EmailRegister = ({ onNextStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [openRegister, setOpenRegister] = useState(false)
  const handleOpenRegister = () => {
    setOpenRegister(true)
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <div className={styles.registerCard}>
      <span className={styles.header}>مرحبًا بك في المجموعة التجارية والبحرية للمحاماة</span>
      <form onSubmit={handleSubmit}>
        <Input
         
          label="اسم بالكامل"
          imgPath="/assets/icons/form/solar_user-bold.png"
          placeholder="اسم بالكامل"
          alt="person icon"
          display='block'
        />
        <Input
        
          label="رقم الهاتف"
          imgPath="/assets/icons/form/ic_round-phone.png"
          placeholder="رقم الهاتف"
          alt="phone icon"
          display='block'

        />

        <Input
          
          label="البريد الالكتروني"
          imgPath="/assets/icons/form/ic_round-email.svg"
          placeholder="البريد الالكتروني"
          alt="email icon"
          type="email"
          display='block'

        />
        <Input
        
          label="كلمة السر"
          imgPath="/assets/icons/form/eye-slash.svg"
          placeholder="كلمة السر"
          alt="eye-slash icon"
          type="password"
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          display='block'

        />
        <button type="submit" className={styles.registerWay}>
          المتابعة
          <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />
        </button>
      </form>
      
    </div>
  );
};
