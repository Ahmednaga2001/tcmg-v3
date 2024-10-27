"use client";
import Input from "@/components/ui/Input";
import styles from "./page.module.css";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import CheckBox from "@/components/ui/CheckBox";
const sectorOptions = [
  {
    value: "a",
    value  : "b"
  },
];
const BusinessRegistration = () => {
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);

  const contact_us_form = useFormik({
    initialValues: {
      company_name: "",
      email: "",
      phone: "",
      industry: "",
      country: "",
      sector: "",
      num_of_attendance: "",
      major: "",
      message: "",
      how_did_you_hear_about_us: "",
      agreeToPrivacy: false,
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .min(20, "Must be at least 20 characters")
        .required("Required"),
      how_did_you_hear_about_us: Yup.string()
        .min(20, "Must be at least 20 characters")
        .required("Required"),
      company_name: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid "),
      industry: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid "),
      country: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid "),
      major: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "major invalid "),

      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "please enter a valid email"
        )
        .required("Required"),
      phone: Yup.string()
        .matches(
          /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
          "invalid phone number"
        )
        .required("Required"),
      num_of_attendance: Yup.string()
        .matches(/^\d+$/, "invalid number")
        .required("Required"),
      sector: Yup.string().required("Required"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "You must agree to the privacy policy")
        .required("Required"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      axios
        .post(
          "https://tcmg-production.up.railway.app/companies-operations",
          values
        )
        .then((res) => {
          console.log("say", res.data);
          setsuccess(res.data.status);
          setTimeout(() => {
            setsuccess(null);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          seterror(err);
          setTimeout(() => {
            seterror(null);
          }, 3000);
        });
      console.log(values);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [selectedSector, setSelectedSector] = useState("");
  return (
    <div className={styles.businessPage}>
      <section>
        <h2>إستمارة أعمال الشركات</h2>
        <div className={styles.formPage}>
          <p>
            يرجي إدخال بيانات بشكل صحيح وسيتم التواصل خلال ساعة من الحجز في خلال
            مواعيد العمل الرسمية من 9 صباحًا لـ 11 مساءًا
          </p>
          <form onSubmit={contact_us_form.handleSubmit}>
            <div className={styles.errorWrapper}>
              <Input
                label="اسم الشركة"
                placeholder="اسم الشركة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                display="block"
                name={"company_name"}
                value={contact_us_form.values.company_name}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.company_name &&
              contact_us_form.errors.company_name ? (
                <div className="error">
                  {contact_us_form.errors.company_name}
                </div>
              ) : null}
            </div>
            <div className={styles.errorWrapper}>
              <Input
                label="بريد إلكتروني الشركة"
                imgPath="/assets/icons/form/ic_round-email.svg"
                placeholder="بريد إلكتروني الشركة"
                type="email"
                alt="email icon"
                display="block"
                name={"email"}
                value={contact_us_form.values.email}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.email && contact_us_form.errors.email ? (
                <div className="error">
                  {contact_us_form.errors.email}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="رقم هاتف الشركة"
                placeholder={"رقم هاتف الشركة"}
                imgPath={"/assets/icons/form/ic_round-phone.png"}
                display="block"
                name={"phone"}
                value={contact_us_form.values.phone}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.phone && contact_us_form.errors.phone ? (
                <div className="error">
                  {contact_us_form.errors.phone}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="الصناعة"
                placeholder="الصناعة"
                name={"industry"}
                value={contact_us_form.values.industry}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.industry &&
              contact_us_form.errors.industry ? (
                <div className="error">
                  {contact_us_form.errors.industry}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="الدولة"
                placeholder="الدولة"
                imgPath={"/assets/icons/form/mdi_location.svg"}
                display="block"
                name={"country"}
                value={contact_us_form.values.country}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.country &&
              contact_us_form.errors.country ? (
                <div className="error">
                  {contact_us_form.errors.country}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <SelectComponent
                options={sectorOptions}
                head={"اختر القطاع من القائمة"}
                label={"القطاع"}
                imgPath={"/assets/icons/form/mdi_arrow-down-drop.png"}
                w={24}
                h={24}
                display="block"
                name="sector"
                id="sector"
                selectedOption={contact_us_form.values.sector}
                setSelectedOption={(value) => {
                  contact_us_form.setFieldValue("sector", value); // Update Formik state
                }}
                onChange={contact_us_form.handleChange} // Bind Formik onChange
                onBlur={contact_us_form.handleBlur} // Bind Formik onBlur
              />
              {contact_us_form.touched.sector &&
              contact_us_form.errors.sector ? (
                <div className="error">
                  {contact_us_form.errors.sector}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="عدد الحاضرين"
                placeholder="عدد الحاضرين"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                display="block"
                name={"num_of_attendance"}
                value={contact_us_form.values.num_of_attendance}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.num_of_attendance &&
              contact_us_form.errors.num_of_attendance ? (
                <div className="error">
                  {contact_us_form.errors.num_of_attendance}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="التخصص"
                placeholder="التخصص"
                imgPath={"/assets/icons/form/category.png"}
                style={{
                  background:
                    "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
                  border: "1px solid #fff",
                }}
                color="#fff"
                display="block"
                name={"major"}
                value={contact_us_form.values.major}
                change={contact_us_form.handleChange}
                blur={contact_us_form.handleBlur}
              />
              {contact_us_form.touched.major && contact_us_form.errors.major ? (
                <div className="error">
                  {contact_us_form.errors.major}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}> </div>

            <div className={styles.message}>
              <label htmlFor="message">كيف سمعت عنا</label>
              <div className={styles.inp}>
                <textarea
                  name="message"
                  id="message"
                  value={contact_us_form.values.message} // Bind Formik value
                  onChange={contact_us_form.handleChange} // Bind Formik onChange
                  onBlur={contact_us_form.handleBlur} // Bind Formik onBlur
                  placeholder="كيف سمعت عنا ؟"
                ></textarea>
                <span>?</span>
              </div>
              {contact_us_form.touched.message &&
              contact_us_form.errors.message ? (
                <div className="error">
                  {contact_us_form.errors.message}
                </div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <div className={styles.topic}>
                <label htmlFor="how_did_you_hear_about_us">
                  موضوع الإستشارة
                </label>
                <div className={styles.inp}>
                  <textarea
                    name="how_did_you_hear_about_us"
                    id="how_did_you_hear_about_us"
                    value={contact_us_form.values.how_did_you_hear_about_us} // Bind Formik value
                    onChange={contact_us_form.handleChange} // Bind Formik onChange
                    onBlur={contact_us_form.handleBlur} // Bind Formik onBlur
                    placeholder="اكتب استشارتك هنا"
                  ></textarea>
                  <span>؟</span>
                </div>
                {contact_us_form.touched.how_did_you_hear_about_us &&
                contact_us_form.errors.how_did_you_hear_about_us ? (
                  <div className="error">
                    {contact_us_form.errors.how_did_you_hear_about_us}
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.errorWrapper}> </div>

            <div className={styles.errorWrapper}>
              <CheckBox
                label="   إوافق على سياسة الخصوصية وسياسة الاستخدام   "
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
      </section>
    </div>
  );
};
export default BusinessRegistration;
