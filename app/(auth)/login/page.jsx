"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";

 const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.registerCard}>
      <div className={styles.wrapper}>
        <span className={styles.header}>
          مرحبًا بك في المجموعة التجارية والبحرية للمحاماة
        </span>
        <form onSubmit={handleSubmit}>
          <Input
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
              color: "#fff",
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
              background:
                "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
              color: "#fff",
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
            <Image
              src="/assets/icons/form/arrow-left-black.png"
              width={24}
              height={24}
              alt="arrow-left icon"
            />
          </button>
          <p className={styles.footer}>
            <span>أول مرة لك هنا ؟</span>
            <Link href="/signup" style={{ cursor: "pointer" }}> تسجيل حساب جديد</Link>{" "}
            {/* Use onClick */}
          </p>
        </form>
      </div>
    </div>
  );
};


export default Login;