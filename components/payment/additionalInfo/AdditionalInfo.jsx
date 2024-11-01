import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import Image from "next/image";
import CardInfo from "../cardInfo.jsx/CardInfo";
import ModalPrivacy from "../modalPrivacy/ModalPrivacy";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import CheckBox from "@/components/ui/CheckBox";

const options = [{ value: "أفراد" }, { value: "مؤسسات وشركات" }];

export default function AdditionalInfo({ onNextStep }) {
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);

  const contact_us_form = useFormik({
    initialValues: {
      first_name: "",
      phone: "",
      message: "",
      major: "",
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
      major: Yup.string()

        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "major invalid "),

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
      //   axios
      //     .post("https://tcmg-production-0be9.up.railway.app/contact-us", values)
      //     .then((res) => {
      //       console.log("say", res.data);
      //       setsuccess(res.data.status);
      //       setTimeout(() => {
      //         setsuccess(null);
      //       }, 3000);
      //     })
      //     .catch((err) => {
      //       console.log(err.response.data.error[0].msg);
      //       seterror(err.response.data.error[0].msg);
      //       setTimeout(() => {
      //         seterror(null);
      //       }, 3000);
      //     });
      console.log(values);
    },
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.additionalInfo}>
      <div className={styles.formPage}>
        <p>
          يرجي إدخال بيانات بشكل صحيح وسيتم التواصل خلال ساعة من الحجز في خلال
          مواعيد العمل الرسمية من 9 صباحًا لـ 11 مساءًا
        </p>
        <form onSubmit={contact_us_form.handleSubmit}>
          <div className={styles.errorWrapper}>
            <Input
              label="الاسم بالكامل"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="الاسم بالكامل"
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
            <Input
              label="التخصص"
              placeholder="التخصص"
              imgPath={"/assets/icons/form/category.png"}
              display="block"
              name={"major"}
              value={contact_us_form.values.major}
              change={contact_us_form.handleChange}
              blur={contact_us_form.handleBlur}
            />
            {contact_us_form.touched.major && contact_us_form.errors.major ? (
              <div className={styles.error}>{contact_us_form.errors.major}</div>
            ) : null}
          </div>

          <div className={styles.message}>
            <div className={styles.errorWrapper}>
              <label htmlFor="message">موضوع الإستشارة</label>
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
                <div className={styles.error}>
                  {contact_us_form.errors.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.errorWrapper}>
            <div className={styles.termsC}>
             <div className={styles.terms}>
             <input
                type="checkbox"
                id="agreeToPrivacy"
                name="agreeToPrivacy"
                checked={contact_us_form.values.agreeToPrivacy}
                onChange={(e) => {
                  // Update Formik state directly
                  contact_us_form.setFieldValue("agreeToPrivacy", e.target.checked);
                }}
                onBlur={contact_us_form.handleBlur}
              />
              <label
                htmlFor="agreeToPrivacy"
                style={{ cursor: "pointer", color: "white", textDecoration: "underline", paddingBottom: "10px" ,fontSize: "18px"}}  
                className={styles.labelUnderlined} // Apply the underline class
                onClick={() => setShowModal(true)} // Show modal when label is clicked
              >
                إوافق على سياسة الخصوصية
              </label>
             </div>
              {contact_us_form.touched.agreeToPrivacy && contact_us_form.errors.agreeToPrivacy ? (
                <div className={styles.error}>{contact_us_form.errors.agreeToPrivacy}</div>
              ) : null}
            </div>
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
      <CardInfo />

      {/* Show Modal if `showModal` is true */}
      {showModal && (
        <ModalPrivacy
          showModal={showModal}
          setShowModal={handleModalClose} // Close modal and trigger next step
        />
      )}
    </section>
  );
}
