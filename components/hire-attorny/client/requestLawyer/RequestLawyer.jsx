"use client";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useState } from "react";
import styles from "./page.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Oval, TailSpin } from "react-loader-spinner";
import Api from "@/components/config/Api";
import { notifyError, notifySuccess } from "@/components/notify/Notify";
const officeOptions = [
  {
    value: "القاهرة",
  },
  {
    value: "دبى",
  },
  {
    value: "الرياض",
  },
  {
    value: "تشنغدو",
  },
  {
    value: "عمّان",
  },
  {
    value: "جنين",
  },
];

const RequestLawyer = () => {
  const [success, setsuccess] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);
  const formik = useFormik({
    initialValues: {
      f_name: "",
      l_name: "",
      office: "",
      clientCategory: "",
      email: "",
      phone: "",
      legalCase: "",
      lawerSpecialization: "",
      agreeToPrivacy: false, // Checkbox state
    },
    validationSchema: Yup.object({
      f_name: Yup.string()
        .max(10, "يجب أن يكون 10 أحرف أو أقل")
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),      l_name: Yup.string()
        .max(10, "يجب أن يكون 10 أحرف أو أقل")
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "الرجاء إدخال بريد إلكتروني صالح"
        )
        .required("مطلوب"),
      phone: Yup.string()
      .matches(/^[0-9]{11}$/, "رقم الهاتف يجب أن يكون مكونًا من 11 رقمًا فقط")

        .required("مطلوب"),
      lawerSpecialization: Yup.string()
        .required("مطلوب"),
        // .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "معاق رئيسي "),
      legalCase: Yup.string()
        .min(20, "يجب أن يكون على الأقل 20 حرفًا")
        .required("مطلوب"),
      office: Yup.string().required("مطلوب"), // Validation for office
      clientCategory: Yup.string().required("مطلوب"), // Validation for office
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "يجب عليك الموافقة على سياسة الخصوصية") // Validation rule
        .required("مطلوب"),
    }),
    validateOnBlur: true, // This ensures validation on blur
    validateOnChange: true,
    onSubmit: async (values) => {
      setisloading(true);
      try {
        const response = await Api.post("/hire-lawer", values);

        setisloading(false);
        notifySuccess("تم الارسال بنجاح");
        formik.resetForm();
      } catch (error) {

        setisloading(false);
        const errorMsg = error?.response?.data?.error?.[0]?.msg || "حدث خطأ ما";
        seterror(errorMsg);
        notifyError(errorMsg);
      }
    },
  });
  return (
    <section className={styles.RequestLawyer}>
      <div className={styles.formPage}>
        <h2>استمارة لطلب توكيل محامي متخصص</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.names}>
            <div className={styles.errorWrapper}>
              <Input
                label="الاسم الاول"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="الاسم الاول"
                alt={"person icon"}
                name={"f_name"}
                value={formik.values.f_name}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.f_name && formik.errors.f_name ? (
                <div className="error">{formik.errors.f_name}</div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="اسم العائلة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="اسم العائلة"
                alt={"person icon"}
                name={"l_name"}
                value={formik.values.l_name}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.l_name && formik.errors.l_name ? (
                <div className="error">{formik.errors.l_name}</div>
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
              name={"phone"}
              value={formik.values.phone}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <SelectComponent
              options={[{ value: "أفراد" }, { value: "شركات ومؤسسات" }]}
              head="فئة العميل"
              selectedOption={formik.values.clientCategory}
              setSelectedOption={(value) => {
                formik.setFieldValue("clientCategory", value); // Update Formik state
              }}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              onChange={formik.handleChange} // Bind Formik onChange
              onBlur={formik.handleBlur} // Bind Formik onBlur
            />
            {formik.touched.clientCategory && formik.errors.clientCategory ? (
              <div className="error">{formik.errors.clientCategory}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              head={"اختر المكتب"}
              options={officeOptions}
              selectedOption={formik.values.office}
              setSelectedOption={(value) => {
                formik.setFieldValue("office", value); // Update Formik state
              }}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              onChange={formik.handleChange} // Bind Formik onChange
              onBlur={formik.handleBlur} // Bind Formik onBlur
            />
            {formik.touched.office && formik.errors.office ? (
              <div className="error">{formik.errors.office}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="التخصص"
              placeholder="التخصص"
              imgPath={"/assets/icons/form/category.png"}
              alt={"lawerSpecialization icon"}
              name={"lawerSpecialization"}
              value={formik.values.lawerSpecialization}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.lawerSpecialization &&
            formik.errors.lawerSpecialization ? (
              <div className="error">{formik.errors.lawerSpecialization}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.inp}>
              <textarea
                name="legalCase"
                id="legalCase"
                value={formik.values.legalCase} // Bind Formik value
                onChange={formik.handleChange} // Bind Formik onChange
                onBlur={formik.handleBlur} // Bind Formik onBlur
                placeholder="ما هي قضيتك المراد توكيل محامي لها؟"
              ></textarea>
              <span>?</span>
            </div>
            {formik.touched.legalCase && formik.errors.legalCase ? (
              <div className="error">{formik.errors.legalCase}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <CheckBox
              label="أوافق على سياسة الخصوصية"
              name="agreeToPrivacy" // Bind the checkbox to Formik state
              checked={formik.values.agreeToPrivacy} // Control the checkbox
              onChange={formik.handleChange} // Use Formik's onChange
              onBlur={formik.handleBlur} // Use Formik's onBlur
              error={
                formik.touched.agreeToPrivacy && formik.errors.agreeToPrivacy
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
        {/* <p className="success">{success}</p>
        <p className="err">{error}</p> */}
      </div>
    </section>
  );
};

export default RequestLawyer;
