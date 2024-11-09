"use client";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const practices = [
  { id: 1, value: "تأسيس الشركات" },
  { id: 2, value: "التقاضي" },
  { id: 3, value: "الملكية الفكرية" },
  { id: 4, value: "التحكيم التجاري الدولي" },
  { id: 5, value: "الضرائب" },
  { id: 6, value: "التأمين" },
  { id: 7, value: "العقارات" },
  { id: 8, value: "الأموال العامة" },
  { id: 9, value: "التوظيف" },
];

const sectors = [
  { id: 1, value: "أسواق المال" },
  { id: 2, value: "الإندماج والاستحواذ" },
  { id: 3, value: "التحكيم التجاري" },
  { id: 4, value: "التطوير العقاري والإنشاءات" },
  { id: 5, value: "الخدمات البنكية والمالية" },
  { id: 6, value: "الرعاية الصحية" },
  { id: 7, value: "التجزئة والمستهلك" },
  { id: 8, value: "التقاضي" },
];

const SubForm = () => {
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);
  const [isloading, setisloading] = useState(false);

  const sub_form = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      city: "",
      country: "",
      sector: "",
      practice: "",
      agreeToPrivacy: false,
    },
    validationSchema: Yup.object({
      country: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z](\s[A-Z][a-zA-Z])*$/, " invalid country  "),
      first_name: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required")
        .matches(/^[a-zA-Z](\s[A-Z][a-zA-Z])*$/, "name invalid "),
      last_name: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required")
        .matches(/^[a-zA-Z](\s[A-Z][a-zA-Z])*$/, "name invalid "),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "please enter a valid email"
        )
        .required("Required"),
      city: Yup.string()
        .matches(/^[a-zA-Z](\s[A-Z][a-zA-Z])*$/, " invalid city  ")
        .required("Required"),
      sector: Yup.string().required("Required"),
      practice: Yup.string().required("Required"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "You must agree to the privacy policy")
        .required("Required"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setisloading(true);

      // axios
      //   .post("https://tcmg-alpha.vercel.app/contact-us", values)
      //   .then((res) => {
      //     setisloading(false);

      //     console.log("say", res.data);
      //     setsuccess(res.data.status);
      //     setTimeout(() => {
      //       setsuccess(null);
      //     }, 3000);
      //   })
      //   .catch((err) => {
      //     setisloading(false);

      //     // console.log(err.response?.data?.error[0]?.msg);
      //     seterror(err.response?.data?.error[0]?.msg);
      //     setTimeout(() => {
      //       seterror(null);
      //     }, 3000);
      //   });
    },
  });

  return (
    <section className={styles.RequestLawyer}>
      <h2>معلومات التواصل</h2>
      <div className={styles.formPage}>
        <form onSubmit={sub_form.handleSubmit}>
          <div className={styles.errorWrapper}>
            <Input
              label="الاسم الاول"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="الاسم الاول"
              alt={"person icon"}
              name={"first_name"}
              value={sub_form.values.first_name}
              change={sub_form.handleChange}
              blur={sub_form.handleBlur}
              display="block"
            />
            {sub_form.touched.first_name && sub_form.errors.first_name ? (
              <div className="error">{sub_form.errors.first_name}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="اسم العائلة"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="اسم العائلة"
              alt={"person icon"}
              display="block"
              name={"last_name"}
              value={sub_form.values.last_name}
              change={sub_form.handleChange}
              blur={sub_form.handleBlur}
            />
            {sub_form.touched.last_name && sub_form.errors.last_name ? (
              <div className="error">{sub_form.errors.last_name}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="البريد الالكتروني"
              imgPath="/assets/icons/form/ic_round-email.svg"
              placeholder="البريد الالكتروني"
              alt={"email icon"}
              display="block"
              name={"email"}
              value={sub_form.values.email}
              change={sub_form.handleChange}
              blur={sub_form.handleBlur}
            />
            {sub_form.touched.email && sub_form.errors.email ? (
              <div className="error">{sub_form.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="المدينة"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder="المدينة"
              alt={"email icon"}
              display="block"
              name={"city"}
              value={sub_form.values.city}
              change={sub_form.handleChange}
              blur={sub_form.handleBlur}
            />
            {sub_form.touched.city && sub_form.errors.city ? (
              <div className="error">{sub_form.errors.city}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="الدولة"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder="الدولة"
              alt={"email icon"}
              display="block"
              name={"country"}
              value={sub_form.values.country}
              change={sub_form.handleChange}
              blur={sub_form.handleBlur}
            />
            {sub_form.touched.country && sub_form.errors.country ? (
              <div className="error">{sub_form.errors.country}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              options={sectors}
              label={"القطاعات"}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              head={"إختر القطاعات من القائمة"}
              name="sector"
              id="sector"
              selectedOption={sub_form.values.sector}
              setSelectedOption={(value) => {
                sub_form.setFieldValue("sector", value); // Update Formik state
              }}
              onChange={sub_form.handleChange} // Bind Formik onChange
              onBlur={sub_form.handleBlur} // Bind Formik onBlur
            />
            {sub_form.touched.sector && sub_form.errors.sector ? (
              <div className="error">{sub_form.errors.sector}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <SelectComponent
              label={"الممارسات"}
              head={"إختر الممارسات من القائمة "}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              options={practices}
              name="practice"
              id="practice"
              selectedOption={sub_form.values.practice}
              setSelectedOption={(value) => {
                sub_form.setFieldValue("practice", value); // Update Formik state
              }}
              onChange={sub_form.handleChange} // Bind Formik onChange
              onBlur={sub_form.handleBlur} // Bind Formik onBlur
            />
            {sub_form.touched.practice && sub_form.errors.practice ? (
              <div className="error">{sub_form.errors.practice}</div>
            ) : null}
          </div>

          <div className={styles.agreeToPrivacy}>
            <CheckBox
              label={"أوافق على سياسة الخصوصية و سياسة الإستخدام "}
              name="agreeToPrivacy"
              checked={sub_form.values.agreeToPrivacy} // Control the checkbox
              onChange={sub_form.handleChange} // Use Formik's onChange
              onBlur={sub_form.handleBlur} // Use Formik's onBlur
              error={
                sub_form.touched.agreeToPrivacy &&
                sub_form.errors.agreeToPrivacy
              }
            />
          </div>

          {isloading ? (
            <>
              <div className="loader">
                <Button disabled text="ارسال استمارة التاصل" />
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
            <button type="submit" className={styles.registerWay}>
              اشتراك
              <Image
                src="/assets/icons/form/arrow-left-black.png"
                width={24}
                height={24}
                alt="arrow-left icon"
              />
            </button>
          )}
        </form>
        <p className="err">{error}</p>
        <p className="success">{success}</p>
      </div>
    </section>
  );
};

export default SubForm;