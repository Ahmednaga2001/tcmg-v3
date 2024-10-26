import React,{useState} from 'react';
import styles from './page.module.css';
import Input from '@/components/ui/Input';
import Image from 'next/image';
import { EmailLogin} from '../emailLogin/EmailLogin';

export const Register = ({ onNextStep }) => {
  const [openLogin , setOpenLogin] = useState(false)
  const handleGoogleLogin = () => {
    onNextStep(); 
  };

  const handleFacebookLogin = () => {
    onNextStep();
  };

  const handleAppleLogin = () => {
    onNextStep();
  };

  const handleEmailLogin = () => {
    setOpenLogin(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <section>
      {
        !openLogin ? (
          <div className={styles.registerCard}>
        <span className={styles.header}>التسجيل باستخدام حسابك</span>
        <form onSubmit={handleSubmit}>
          <div className={styles.registerWay} onClick={handleGoogleLogin}>
            <span>تسجيل الدخول بـــ Google</span>
            <Image src="/assets/icons/payment/google.svg" width={32} height={32} alt="Google Icon" />
          </div>
          <div className={styles.registerWay} onClick={handleFacebookLogin}>
            <span>تسجيل الدخول بـــ Facebook</span>
            <Image src="/assets/icons/payment/facebook.svg" width={32} height={32} alt="Facebook Icon" />
          </div>
          <div className={styles.registerWay} onClick={handleAppleLogin}>
            <span>تسجيل الدخول بـــ Apple</span>
            <Image src="/assets/icons/payment/apple.svg" width={32} height={32} alt="Apple Icon" />
          </div>
          <div className={styles.registerWay} onClick={handleEmailLogin} >
            <span>تسجيل الدخول بـــ Email</span>
            <Image src="/assets/icons/payment/email.svg" width={32} height={32} alt="Email Icon" />
          </div>
          <div className={styles.or}>
            <span></span>
            <span>أو تابع كضيف</span>
            <span></span>
          </div>
          <Input
            style={{ backgroundColor : '#0D152C',backdropFilter: 'blur(22px)', color: '#fff' , border : "1px solid #fff" }}
            color={"#fff"}
            label="البريد الالكتروني"
            imgPath="/assets/icons/form/ic_round-email.svg"
            placeholder="البريد الالكتروني"
            type='email'
            alt="email icon"
          />
          <button type="submit" className={styles.registerWay}>
            المتابعة
            <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />
          </button>
        </form>
      </div>
        ):
        <EmailLogin onNextStep={onNextStep}/>
      }
    </section>
  );
};
