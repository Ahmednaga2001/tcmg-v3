import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/ui/Input";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckBox from "@/components/ui/CheckBox";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";

export const EmailRegister = ({ onNextStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

 
  const majorOptions = [
    {
      value: "أفراد",
    },
    {
      value: "مؤسسات وشركات",
    },
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      questionCategory: "",
      date: "",
      agreeToPrivacy: true,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "يجب أن يكون 30 أحرف أو أقل")
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "يرجى إدخال بريد إلكتروني صالح"
        )
        .required("مطلوب"),
      phone: Yup.string()
        .matches(/^[0-9]{11}$/, "رقم الهاتف يجب أن يكون مكونًا من 11 رقمًا فقط")
        .required("مطلوب"),
      password: Yup.string()
        .min(6, "يجب أن تكون كلمة المرور مكونة من 6 أحرف على الأقل")
        .required("مطلوب")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
          "كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، ورقم"
        ),
      confirmPassword: Yup.string()
        .required("مطلوب")
        .oneOf([Yup.ref("password"), null], "كلمة السر غير متطابقة"),
      questionCategory: Yup.string().required("مطلوب"), // Validation for office
      date: Yup.date()
        .required("مطلوب")
        .max(new Date(), "التاريخ لا يمكن أن يكون في المستقبل"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "يجب أن توافق على سياسة الخصوصية")
        .required("مطلوب"),
    }),

    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values) => {
      console.log(values);
      onNextStep()
    },
  });

  return (
    <div className={styles.registerCard}>
      <span className={styles.header}>
        مرحبًا بك في المجموعة التجارية والبحرية للمحاماة
      </span>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.errorWrapper}>
          <Input
            label="اسم بالكامل "
            imgPath="/assets/icons/form/solar_user-bold.svg"
            placeholder="الإسم بالكامل "
            name={"name"}
            value={formik.values.name}
            change={formik.handleChange}
            blur={formik.handleBlur}
            alt={"person icon"}
            display="block"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className={styles.errorWrapper}>
          <Input
            label="رقم الهاتف"
            imgPath="/assets/icons/form/ic_round-phone.svg"
            placeholder="رقم الهاتف"
            alt={"phone icon"}
            name={"phone"}
            value={formik.values.phone}
            change={formik.handleChange}
            blur={formik.handleBlur}
            display="block"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className={styles.errorWrapper}>
          <Input
            label="البريد الالكتروني"
            imgPath="/assets/icons/form/ic_round-email.svg"
            placeholder="البريد الالكتروني"
            alt={"email icon"}
            name={"email"}
            value={formik.values.email}
            change={formik.handleChange}
            blur={formik.handleBlur}
            display="block"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className={styles.errorWrapper}>
          <Input
            label="كلمة السر"
            imgPath="/assets/icons/form/eye-slash.svg"
            placeholder="كلمة السر"
            alt="eye-slash icon"
            type="password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            value={formik.values.password}
            change={formik.handleChange}
            blur={formik.handleBlur}
            name="password"
            display="block"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className={styles.errorWrapper}>
          <Input
            label="إعادة تأكيد كلمة السر"
            imgPath="/assets/icons/form/eye-slash.svg"
            placeholder="إعادة تأكيد كلمة السر"
            alt="eye-slash icon"
            type="password"
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
            value={formik.values.confirmPassword}
            change={formik.handleChange}
            blur={formik.handleBlur}
            name="confirmPassword"
            display="block"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div className={styles.errorWrapper}>
          <Input
            label="تاريخ الميلاد"
            placeholder="تاريخ الميلاد"
            alt="calendar icon"
            name="date"
            type="date"
            value={formik.values.date}
            change={formik.handleChange}
            blur={formik.handleBlur}
            display="block"
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}
        </div>

        <div className={styles.errorWrapper}>
          <SelectComponent
            head={" فئة العميل"}
            label={"فئة العميل ( إختر النوع)"}
            options={majorOptions}
            selectedOption={formik.values.questionCategory}
            setSelectedOption={(value) => {
              formik.setFieldValue("questionCategory", value);
            }}
            imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
            w={24}
            h={24}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.questionCategory && formik.errors.questionCategory ? (
            <div className="error">{formik.errors.questionCategory}</div>
          ) : null}
        </div>
        <div className={styles.errorWrapper}>
          <CheckBox
            label="أوافق على سياسة الخصوصية و سياسة الإستخدام "
            name="agreeToPrivacy"
            checked={formik.values.agreeToPrivacy}
            onChange={(e) => {
              formik.setFieldValue("agreeToPrivacy", e.target.checked);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.agreeToPrivacy && formik.errors.agreeToPrivacy}
          />
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
        <p className={styles.footer}>
            <span>أول مرة لك هنا ؟</span>
            <span onClick={handleOpenRegister} style={{ cursor: 'pointer' }}> تسجيل حساب جديد</span> {/* Use onClick */}
          </p>
      </form>
    </div>
  );
};
