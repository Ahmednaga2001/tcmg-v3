import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/ui/Input";
import Image from "next/image";
import { EmailLogin } from "../emailLogin/EmailLogin";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";

export const Register = ({ onNextStep }) => {
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);

  const register_form = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "الرجاء إدخال بريد إلكتروني صالح"
     
        )
        .required("مطلوب"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      onNextStep();

      // axios
      //   .post("https://tcmg-production-0be9.up.railway.app/contact-us", values)
      //   .then((res) => {
      //     console.log("say", res.data);
      //     setsuccess(res.data.status);
      //     setTimeout(() => {
      //       setsuccess(null);
      //     }, 3000);
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data.error[0].msg);
      //     seterror(err.response.data.error[0].msg);
      //     setTimeout(() => {
      //       seterror(null);
      //     }, 3000);
      //   });
      console.log(values);
    },
  });

  const [openLogin, setOpenLogin] = useState(false);
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
    setOpenLogin(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <section>
      {!openLogin ? (
        <div className={styles.registerCard}>
          <span className={styles.header}>التسجيل باستخدام حسابك</span>
          <form onSubmit={register_form.handleSubmit}>
            <div className={styles.registerWay} onClick={handleGoogleLogin}>
              <span>تسجيل الدخول بـــ Google</span>
              <Image
                src="/assets/icons/payment/google.svg"
                width={32}
                height={32}
                alt="Google Icon"
              />
            </div>
            <div className={styles.registerWay} onClick={handleFacebookLogin}>
              <span>تسجيل الدخول بـــ Facebook</span>
              <Image
                src="/assets/icons/payment/facebook.svg"
                width={32}
                height={32}
                alt="Facebook Icon"
              />
            </div>
            <div className={styles.registerWay} onClick={handleAppleLogin}>
              <span>تسجيل الدخول بـــ Apple</span>
              <Image
                src="/assets/icons/payment/apple.svg"
                width={32}
                height={32}
                alt="Apple Icon"
              />
            </div>
            <div className={styles.registerWay} onClick={handleEmailLogin}>
              <span>تسجيل الدخول بـــ Email</span>
              <Image
                src="/assets/icons/payment/email.svg"
                width={32}
                height={32}
                alt="Email Icon"
              />
            </div>
            <div className={styles.or}>
              <span></span>
              <span>أو تابع كضيف</span>
              <span></span>
            </div>
            <div className={styles.errorWrapper}>
              <Input
                label="البريد الالكتروني"
                imgPath="/assets/icons/form/ic_round-email.svg"
                placeholder="البريد الالكتروني"
                alt={"email icon"}
                name={"email"}
                value={register_form.values.email}
                change={register_form.handleChange}
                blur={register_form.handleBlur}
              />
              {register_form.touched.email && register_form.errors.email ? (
                <div className={styles.error}>{register_form.errors.email}</div>
              ) : null}
            </div>
            <button type="submit" className={styles.registerWay}>
              المتابعة
              <Image
                src="/assets/icons/form/arrow-left-black.png"
                width={24}
                height={24}
                alt="arrow-left icon"
              />
            </button>
          </form>
          <p className="err">{error}</p>
          <p className="success">{success}</p>
        </div>
      ) : (
        <EmailLogin onNextStep={onNextStep} />
      )}
    </section>
  );
};
