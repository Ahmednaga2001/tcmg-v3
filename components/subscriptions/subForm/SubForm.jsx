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
import Api from "@/components/config/Api";
import { notifyError, notifySuccess } from "@/components/notify/Notify";

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

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      sectors: "",
      practices: "",
      agreeToPrivacy: true,
    },
    validationSchema: Yup.object({
      country: Yup.string()
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),
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
        // .matches(
        //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        //   "يرجى إدخال بريد إلكتروني صالح"
        // )
        .required("مطلوب"),
      phone: Yup.string()
        .matches(/^[0-9]{11}$/, "رقم الهاتف يجب أن يكون مكونًا من 11 رقمًا فقط")
        .required("مطلوب"),
      city: Yup.string()
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        )
        .required("مطلوب"),
      sectors: Yup.string().required("مطلوب"),

      practices: Yup.string().required("مطلوب"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "يجب أن توافق على سياسة الخصوصية")
        .required("مطلوب"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      console.log(values);

      setisloading(true);
      try {
        const response = await Api.post("/subscriptions", values);

        setisloading(false);
        notifySuccess("تم الارسال بنجاح");
        formik.resetForm();
      } catch (error) {

        setisloading(false);
        const errorMsg = error?.response?.data?.error?.[0]?.msg || "حدث خطأ ما";
        notifyError(errorMsg);
      }
    },
  });

  return (
    <section className={styles.RequestLawyer}>
      <h2>معلومات التواصل</h2>
      <div className={styles.formPage}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.errorWrapper}>
            <Input
              label="الاسم الاول"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="الاسم الاول"
              alt={"person icon"}
              name={"first_name"}
              value={formik.values.first_name}
              change={formik.handleChange}
              blur={formik.handleBlur}
              display="block"
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="error">{formik.errors.first_name}</div>
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
              value={formik.values.last_name}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className="error">{formik.errors.last_name}</div>
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
              value={formik.values.email}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="رقم الهاتف"
              imgPath="/assets/icons/form/ic_round-phone.svg"
              placeholder="رقم الهاتف"
              alt={"phone icon"}
              name={"phone"} // Ensure this matches initialValues and schema
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
              label="المدينة"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder="المدينة"
              alt={"email icon"}
              display="block"
              name={"city"}
              value={formik.values.city}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="error">{formik.errors.city}</div>
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
              value={formik.values.country}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="error">{formik.errors.country}</div>
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
              selectedOption={formik.values.sector}
              setSelectedOption={(value) => {
                formik.setFieldValue("sectors", value); // Update Formik state
              }}
              onChange={formik.handleChange} // Bind Formik onChange
              onBlur={formik.handleBlur} // Bind Formik onBlur
            />
            {formik.touched.sectors && formik.errors.sectors ? (
              <div className="error">{formik.errors.sectors}</div>
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
              selectedOption={formik.values.practice}
              setSelectedOption={(value) => {
                formik.setFieldValue("practices", value); // Update Formik state
              }}
              onChange={formik.handleChange} // Bind Formik onChange
              onBlur={formik.handleBlur} // Bind Formik onBlur
            />
            {formik.touched.practices && formik.errors.practices? (
              <div className="error">{formik.errors.practices}</div>
            ) : null}
          </div>

          <div className={styles.agreeToPrivacy}>
            <CheckBox
              label={"أوافق على سياسة الخصوصية و سياسة الإستخدام "}
              name="agreeToPrivacy"
              checked={formik.values.agreeToPrivacy} // تعيين الحالة من Formik
              onChange={formik.handleChange} // التغيير مرتبط بـ Formik
              onBlur={formik.handleBlur} // للتفاعل مع Formik عند فقدان التركيز
              error={
                formik.touched.agreeToPrivacy && formik.errors.agreeToPrivacy
              }
            />
          </div>

          {isloading ? (
            <>
              <div className="loader">
                <button type="submit" disabled className={styles.registerWay}>
                  اشتراك
                  <Image
                    src="/assets/icons/form/arrow-left-black.png"
                    width={24}
                    height={24}
                    alt="arrow-left icon"
                  />
                </button>{" "}
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

      </div>
    </section>
  );
};

export default SubForm;
