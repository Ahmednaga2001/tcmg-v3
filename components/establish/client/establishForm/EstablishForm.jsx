"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import TextArea from "@/components/ui/TextArea";
import React from "react";
import styles from "./page.module.css";
import CheckBox from "@/components/ui/CheckBox";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { TailSpin } from "react-loader-spinner";
import Api from "@/components/config/Api";
import { notifyError, notifySuccess } from "@/components/notify/Notify";

const options = [
  {
    value: "أفراد",
  },
  {
    value: "مؤسسات وشركات",
  },
];
const EstablishForm = () => {
  const Intern_Graduation_Form = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      address: "",
      numberOfPartners: "",
      companyType: "",
      capital: "",
      agreeToPrivacy: false,
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .min(20, "يجب أن يكون على الأقل 20 حرفًا")
        .required("مطلوب"),
      first_name: Yup.string()
        .max(10, "يجب أن يكون 10 أحرف أو أقل")
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),
              last_name: Yup.string()
        .max(10, "يجب أن يكون 10 أحرف أو أقل")
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
      numberOfPartners: Yup.string()
        .matches(/^\d+$/, "رقم الشركاء غير صالح")
        .required("مطلوب"),
      address: Yup.string().required("مطلوب"),
      capital: Yup.string()
        .matches(/^\d+$/, "يرجى إدخال أرقام فقط")
        .required("مطلوب"),
      companyType: Yup.string().required("مطلوب"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "يجب عليك الموافقة على سياسة الخصوصية")
        .required("مطلوب"),
    }),
    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values) => {
      setisloading(true); 
      try {
        const response = await Api.post("/establishing-companies", values); 
        
        setisloading(false); 
        notifySuccess("تم الارسال بنجاح"); 
        Intern_Graduation_Form.resetForm();
      } catch (error) {
        
        setisloading(false); 
        const errorMsg = error?.response?.data?.error?.[0]?.msg || "حدث خطأ ما";
        seterror(errorMsg);
        notifyError(errorMsg); 
      }
    },
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);
  const [isloading, setisloading] = useState(false);

  return (
    <section className={styles.RequestLawyer}>
      <div className={styles.formPage}>
        <h2>استمارة تأسيس الشركات</h2>
        <form action="" onSubmit={Intern_Graduation_Form.handleSubmit}>
          <div className={styles.names}>
            <div className={styles.errorWrapper}>
              <Input
                label="الاسم الاول"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="الاسم الاول"
                alt={"person icon"}
                name={"first_name"}
                value={Intern_Graduation_Form.values.first_name}
                change={Intern_Graduation_Form.handleChange}
                blur={Intern_Graduation_Form.handleBlur}
              />
              {Intern_Graduation_Form.touched.first_name &&
              Intern_Graduation_Form.errors.first_name ? (
                <div className={styles.error}>
                  {Intern_Graduation_Form.errors.first_name}
                </div>
              ) : null}
            </div>
            <div className={styles.errorWrapper}>
              <Input
                label="اسم العائلة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="اسم العائلة"
                alt={"person icon"}
                name={"last_name"}
                value={Intern_Graduation_Form.values.last_name}
                change={Intern_Graduation_Form.handleChange}
                blur={Intern_Graduation_Form.handleBlur}
              />
              {Intern_Graduation_Form.touched.last_name &&
              Intern_Graduation_Form.errors.last_name ? (
                <div className={styles.error}>
                  {Intern_Graduation_Form.errors.last_name}
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="البريد الالكتروني"
              imgPath="/assets/icons/form/ic_round-email.svg"
              placeholder="البريد الالكتروني"
              alt={"email icon"}
              name={"email"}
              value={Intern_Graduation_Form.values.email}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.email &&
            Intern_Graduation_Form.errors.email ? (
              <div className={styles.error}>
                {Intern_Graduation_Form.errors.email}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="رقم الهاتف"
              imgPath="/assets/icons/form/ic_round-phone.svg"
              placeholder="رقم الهاتف"
              alt={"phone icon"}
              name={"phone"}
              value={Intern_Graduation_Form.values.phone}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.phone &&
            Intern_Graduation_Form.errors.phone ? (
              <div className={styles.error}>
                {Intern_Graduation_Form.errors.phone}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="عدد الشركاء"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="عدد الشركاء"
              alt="person icon"
              name={"numberOfPartners"}
              value={Intern_Graduation_Form.values.numberOfPartners}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.numberOfPartners &&
            Intern_Graduation_Form.errors.numberOfPartners ? (
              <div className={styles.error}>
                {Intern_Graduation_Form.errors.numberOfPartners}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              options={options}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              head={"نوع الشركة"}
              selectedOption={Intern_Graduation_Form.values.companyType}
              setSelectedOption={(value) => {
                Intern_Graduation_Form.setFieldValue("companyType", value); // Update Formik state
              }}
              onChange={Intern_Graduation_Form.handleChange} // Bind Formik onChange
              onBlur={Intern_Graduation_Form.handleBlur} // Bind Formik onBlur
            />
            {Intern_Graduation_Form.touched.companyType &&
            Intern_Graduation_Form.errors.companyType ? (
              <div className={styles.error}>
                {Intern_Graduation_Form.errors.companyType}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="رأس المال"
              placeholder="رأس المال"
              alt="money icon"
              name={"capital"}
              value={Intern_Graduation_Form.values.capital}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.capital &&
            Intern_Graduation_Form.errors.capital ? (
              <div className={styles.error}>
                {Intern_Graduation_Form.errors.capital}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="المقر"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder="المقر"
              alt="location icon"
              name={"address"}
              value={Intern_Graduation_Form.values.address}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.address &&
            Intern_Graduation_Form.errors.address ? (
              <div className={styles.error}>
                {Intern_Graduation_Form.errors.address}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <TextArea
              label="اكتب رسالتك هنا"
              placeholder="اكتب رسالتك هنا"
              id="message"
              name="message"
              value={Intern_Graduation_Form.values.message}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.message &&
            Intern_Graduation_Form.errors.message ? (
              <div className={styles.error}>
                {Intern_Graduation_Form.errors.message}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <CheckBox
              label="إوافق على سياسة الخصوصية"
              name="agreeToPrivacy"
              checked={Intern_Graduation_Form.values.agreeToPrivacy} // Control the checkbox
              onChange={Intern_Graduation_Form.handleChange} // Use Formik's onChange
              onBlur={Intern_Graduation_Form.handleBlur} // Use Formik's onBlur
              error={
                Intern_Graduation_Form.touched.agreeToPrivacy &&
                Intern_Graduation_Form.errors.agreeToPrivacy
              }
            />
          </div>

          {isloading ? (
            <>
              <div className="loader">
                <Button disabled text="ارسال" />
                <TailSpin
                  visible={true}
                  height="30"
                  width="30"
                  color="#eee"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            </>
          ) : (
            <Button text="ارسال" />
          )}
        </form>
        {/* <p className="err">{error}</p>
        <p className="success">{success}</p> */}
      </div>
    </section>
  );
};

export default EstablishForm;
