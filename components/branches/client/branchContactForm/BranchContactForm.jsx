"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import CheckBox from "@/components/ui/CheckBox";
import Button from "@/components/ui/Button";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { TailSpin } from "react-loader-spinner";
import { notifyError, notifySuccess } from "@/components/notify/Notify";
import Api from "@/components/config/Api";
const BranchContactForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);
  const [isloading, setisloading] = useState(false);

  const contact_us_form = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      clientType: "",
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
      clientType: Yup.string().required("مطلوب"),

      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "يجب أن توافق على سياسة الخصوصية")
        .required("مطلوب"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      setisloading(true);
      try {
        const response = await Api.post("/contact-us", values);

        setisloading(false);
        notifySuccess("تم الارسال بنجاح");
        contact_us_form.resetForm();
      } catch (error) {

        setisloading(false);
        const errorMsg = error?.response?.data?.error?.[0]?.msg || "حدث خطأ ما";
        seterror(errorMsg);
        notifyError(errorMsg);
      }
    },
  });

  const options = [{ value: "أفراد" }, { value: "مؤسسات وشركات" }];
  return (
    <section className={styles.contactForm}>
      <div className={styles.formPage}>
        <h2>استمارة التواصل </h2>
        <form action="" onSubmit={contact_us_form.handleSubmit}>
          <div className={styles.names}>
            <div className={styles.errorWrapper}>
              <Input
                label="الاسم الاول"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="الاسم الاول"
                alt={"person icon"}
                name={"first_name"}
                value={contact_us_form.values.first_name}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.first_name &&
              contact_us_form.errors.first_name ? (
                <div className={styles.error}>
                  {contact_us_form.errors.first_name}
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
                value={contact_us_form.values.last_name}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.last_name &&
              contact_us_form.errors.last_name ? (
                <div className={styles.error}>
                  {contact_us_form.errors.last_name}
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
              value={contact_us_form.values.email}
              change={contact_us_form.handleChange}
              blur={contact_us_form.handleBlur}
            />
            {contact_us_form.touched.email && contact_us_form.errors.email ? (
              <div className={styles.error}>{contact_us_form.errors.email}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="رقم الهاتف"
              imgPath="/assets/icons/form/ic_round-phone.svg"
              placeholder="رقم الهاتف"
              alt={"phone icon"}
              name={"phone"}
              value={contact_us_form.values.phone}
              change={contact_us_form.handleChange}
              blur={contact_us_form.handleBlur}
            />
            {contact_us_form.touched.phone && contact_us_form.errors.phone ? (
              <div className={styles.error}>{contact_us_form.errors.phone}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              head={"فئة العميل"}
              options={options}
              name="clientType"
              id="clientType"
              selectedOption={contact_us_form.values.clientType}
              setSelectedOption={(value) => {
                contact_us_form.setFieldValue("clientType", value); // Update Formik state
              }}
              onChange={contact_us_form.handleChange} // Bind Formik onChange
              onBlur={contact_us_form.handleBlur} // Bind Formik onBlur
            />
            {contact_us_form.touched.clientType &&
            contact_us_form.errors.clientType ? (
              <div className={styles.error}>
                {contact_us_form.errors.clientType}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <TextArea
              label="اكتب رسالتك هنا"
              placeholder="اكتب رسالتك هنا"
              id="message"
              name="message"
              value={contact_us_form.values.message}
              change={contact_us_form.handleChange}
              blur={contact_us_form.handleBlur}
            />
            {contact_us_form.touched.message &&
            contact_us_form.errors.message ? (
              <div className={styles.error}>
                {contact_us_form.errors.message}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <CheckBox
              label="إوافق على سياسة الخصوصية"
              name="agreeToPrivacy"
              checked={contact_us_form.values.agreeToPrivacy} // Control the checkbox
              onChange={contact_us_form.handleChange} // Use Formik's onChange
              onBlur={contact_us_form.handleBlur} // Use Formik's onBlur
              error={
                contact_us_form.touched.agreeToPrivacy &&
                contact_us_form.errors.agreeToPrivacy
              }
            />
          </div>
          {isloading ? (
            <>
              <div className="loader">
                <Button disabled text="إرسال استمارة التواصل" />
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
            <Button text="إرسال استمارة التواصل" />
          )}
        </form>
        {/* <p className="err">{error}</p>
        <p className="success">{success}</p> */}
      </div>
    </section>
  );
};

export default BranchContactForm;
