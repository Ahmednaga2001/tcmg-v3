import React, { useState } from 'react';
import styles from './page.module.css';
import Input from '@/components/ui/Input';
import Image from 'next/image';
import { EmailRegister } from '../emailRegister/EmailRegister';

export const EmailLogin = ({ onNextStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [openRegister, setOpenRegister] = useState(false); // Track whether the register form is open

  const handleOpenRegister = () => {
    setOpenRegister(true); // Open the register form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep(); // Trigger the next step on form submission
  };

  return (
    <>
      {!openRegister ? (
        <div className={styles.registerCard}>
          <span className={styles.header}>مرحبًا بك في المجموعة التجارية والبحرية للمحاماة</span>
          <form onSubmit={handleSubmit}>
            <Input
              style={{
                background: "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
                color: '#fff'
              }}
              label="البريد الالكتروني"
              imgPath="/assets/icons/form/ic_round-email.svg"
              placeholder="البريد الالكتروني"
              alt="email icon"
              type="email"
              color={"#fff"}

            />
            <Input
              style={{
                background: "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
                color: '#fff'
              }}
              label="كلمة السر"
              imgPath="/assets/icons/form/eye-slash.svg"
              placeholder="كلمة السر"
              alt="eye-slash icon"
              type="password"
              color={"#fff"}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <button type="submit" className={styles.registerWay}>
              المتابعة
              <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />
            </button>
          </form>
          <p className={styles.footer}>
            <span>أول مرة لك هنا ؟</span>
            <span onClick={handleOpenRegister} style={{ cursor: 'pointer' }}> إنضم إلينا </span> {/* Use onClick */}
          </p>
        </div>
      ) : (
        <EmailRegister onNextStep={onNextStep} /> // Show the registration form when "إنضم إلينا" is clicked
      )}
    </>
  );
};
