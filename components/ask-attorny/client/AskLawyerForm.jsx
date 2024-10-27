"use client";
import styles from "@/components/ask-attorny/ask-attrony.module.css";
// import styles from "./page.module.css";

import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
const majorOptions = [
  {
    value: "أفراد",
  },
  {
    value: "مؤسسات وشركات",
  },
];
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
    value: "عمان",
  },
  {
    value: "جنين",
  },
];
const AskLawyerForm = () => {
  const [selectedmajor, setSelectedmajor] = useState();
  const [selectedOffice, setSelectedOffice] = useState(null);

  const [success, setsuccess] = useState(null);

  const ask_lawyer_form = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      office: "",
      email: "",
      phone: "",
      question: "",
      questionTitle: "",
      questionCategory: "",
      howDidYouHearAboutUs: "",
      agreeToPrivacy: false, // Checkbox state
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid "),
      last_name: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid "),
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
      question: Yup.string()
        .required("Required")
        .min(20, "Must be at least 20 characters")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "major invalid "),

      howDidYouHearAboutUs: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Required"),
      questionTitle: Yup.string().required("Required"), // Validation for office
      questionCategory: Yup.string().required("Required"), // Validation for office
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "You must agree to the privacy policy") // Validation rule
        .required("Required"),
    }),
    validateOnBlur: true, // This ensures validation on blur
    validateOnChange: true,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios
        .post("https://tcmg-production.up.railway.app/ask-attorney", values)
        .then((res) => {
          console.log("say", res.data.status);
          setsuccess(res.data.status);
          setTimeout(() => {
            setsuccess(null);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
      console.log("helloo");
    },
  });

  return (
    <section className={styles.askLawyerForm}>
      <div className={styles.formPage}>
        <h2>استمارة أسأل محامي</h2>
        <form onSubmit={ask_lawyer_form.handleSubmit}>
          <div className={styles.names}>
            <div className={styles.errorWrapper}>
              <Input
                label="الاسم الاول"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="الاسم الاول"
                alt={"person icon"}
                name={"first_name"}
                value={ask_lawyer_form.values.first_name}
                change={ask_lawyer_form.handleChange}
                blur={ask_lawyer_form.handleBlur}
              />
              {ask_lawyer_form.touched.first_name &&
              ask_lawyer_form.errors.first_name ? (
                <div className="error">{ask_lawyer_form.errors.first_name}</div>
              ) : null}
            </div>
            <div className={styles.errorWrapper}>
              <Input
                label="اسم العائلة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="اسم العائلة"
                alt={"person icon"}
                name={"last_name"}
                value={ask_lawyer_form.values.last_name}
                change={ask_lawyer_form.handleChange}
                blur={ask_lawyer_form.handleBlur}
              />
              {ask_lawyer_form.touched.last_name &&
              ask_lawyer_form.errors.last_name ? (
                <div className="error">{ask_lawyer_form.errors.last_name}</div>
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
              value={ask_lawyer_form.values.email}
              change={ask_lawyer_form.handleChange}
              blur={ask_lawyer_form.handleBlur}
            />
            {ask_lawyer_form.touched.email && ask_lawyer_form.errors.email ? (
              <div className="error">{ask_lawyer_form.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="رقم الهاتف"
              imgPath="/assets/icons/form/ic_round-phone.svg"
              placeholder="رقم الهاتف"
              alt={"phone icon"}
              name={"phone"}
              value={ask_lawyer_form.values.phone}
              change={ask_lawyer_form.handleChange}
              blur={ask_lawyer_form.handleBlur}
            />
            {ask_lawyer_form.touched.phone && ask_lawyer_form.errors.phone ? (
              <div className="error">{ask_lawyer_form.errors.phone}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              head={"عنوان الاستفسار"}
              options={officeOptions}
              selectedOption={ask_lawyer_form.values.questionTitle}
              setSelectedOption={(value) => {
                ask_lawyer_form.setFieldValue("questionTitle", value); // Update Formik state
              }}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              onChange={ask_lawyer_form.handleChange} // Bind Formik onChange
              onBlur={ask_lawyer_form.handleBlur} // Bind Formik onBlur
            />
            {ask_lawyer_form.touched.questionTitle &&
            ask_lawyer_form.errors.questionTitle ? (
              <div className="error">
                {ask_lawyer_form.errors.questionTitle}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              head={" فئة العميل"}
              options={majorOptions}
              selectedOption={ask_lawyer_form.values.questionCategory}
              setSelectedOption={(value) => {
                ask_lawyer_form.setFieldValue("questionCategory", value); // Update Formik state
              }}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              onChange={ask_lawyer_form.handleChange} // Bind Formik onChange
              onBlur={ask_lawyer_form.handleBlur} // Bind Formik onBlur
            />
            {ask_lawyer_form.touched.questionCategory &&
            ask_lawyer_form.errors.questionCategory ? (
              <div className="error">
                {ask_lawyer_form.errors.questionCategory}
              </div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <div className={styles.inp}>
              <textarea
                name="howDidYouHearAboutUs"
                id="howDidYouHearAboutUs"
                value={ask_lawyer_form.values.howDidYouHearAboutUs} // Bind Formik value
                onChange={ask_lawyer_form.handleChange} // Bind Formik onChange
                onBlur={ask_lawyer_form.handleBlur} // Bind Formik onBlur
                placeholder="كيف سمعت عنا؟"
              ></textarea>
              <span>؟</span>
            </div>

            {ask_lawyer_form.touched.howDidYouHearAboutUs &&
            ask_lawyer_form.errors.howDidYouHearAboutUs ? (
              <div className="error">
                {ask_lawyer_form.errors.howDidYouHearAboutUs}
              </div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <div className={styles.inp}>
              <textarea
                name="question"
                id="question"
                value={ask_lawyer_form.values.question} // Bind Formik value
                onChange={ask_lawyer_form.handleChange} // Bind Formik onChange
                onBlur={ask_lawyer_form.handleBlur} // Bind Formik onBlur
                placeholder="اكتب استفسارك القانوني هنا"
              ></textarea>
            </div>
            {ask_lawyer_form.touched.question &&
            ask_lawyer_form.errors.question ? (
              <div className="error">{ask_lawyer_form.errors.question}</div>
            ) : null}
          </div>

          <CheckBox
            label="اوافق على الشروط والاحكام"
            name="agreeToPrivacy" // Bind the checkbox to Formik state
            checked={ask_lawyer_form.values.agreeToPrivacy} // Control the checkbox
            onChange={ask_lawyer_form.handleChange} // Use Formik's onChange
            onBlur={ask_lawyer_form.handleBlur} // Use Formik's onBlur
            error={
              ask_lawyer_form.touched.agreeToPrivacy &&
              ask_lawyer_form.errors.agreeToPrivacy
            }
          />

          <button type="submit">
            إرسال
            <Image
              src="/assets/icons/askattorny/arrow-left.png"
              alt="Arrow Left Small"
              width={26}
              height={26}
            />
          </button>
        </form>
        <p className="success">{success}</p>
      </div>
    </section>
  );
};

export default AskLawyerForm;
