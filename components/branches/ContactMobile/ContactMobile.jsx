"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import CheckBox from "@/components/ui/CheckBox";
import Button from "@/components/ui/Button";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";

const ContactMobile = () => {
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);

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
        .min(20, "Must be at least 20 characters")
        .required("Required"),
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
      clientType: Yup.string().required("Required"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "You must agree to the privacy policy")
        .required("Required"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      axios
        .post("https://tcmg-production-0be9.up.railway.app/contact-us", values)
        .then((res) => {
          console.log("say", res.data);
          setsuccess(res.data.status);
          setTimeout(() => {
            setsuccess(null);
          }, 3000);
        })
        .catch((err) => {
          console.log(err.response.data.error[0].msg);
          seterror(err.response.data.error[0].msg);
          setTimeout(() => {
            seterror(null);
          }, 3000);
        });
      console.log(values);
    },
  });

  const options = [{ value: "أفراد" }, { value: "مؤسسات وشركات" }];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section className={styles.contactForm}>
      <div className={styles.egyLocations}>
        <h2>جمهورية مصر العربية</h2>
        <div className={styles.parent}>
          <div className={styles.parentLocations}>
            <div className={styles.locationInfo}>
              <h4>رقم الهاتف</h4>
              <a href="tel:+201276299998">201276299998+</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>الرقم الأرضي</h4>
              <a href="tel:+20222636983">20222636983</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>بريد التواصل الرسمي</h4>
              <a href="mailto:contact@tcmglaw.com">contact@tcmglaw.com</a>
            </div>
            <div className={styles.locationInfo}>
              <h4>بريد العلاقات الاستراتيجة</h4>
              <a href="mailto:pr@tcmglaw.com">pr@tcmglaw.com</a>
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.h2}>استمارة التواصل </h2>
      <div className={styles.formPage}>
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
          <Button text="إرسال استمارة التواصل" />
        </form>
        <p className="err">{error}</p>
        <p className="success">{success}</p>
      </div>
    </section>
  );
};
export default ContactMobile;
