"use client";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useState } from "react";
import styles from "./page.module.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
    value: "تشنغدو"
  },
  {
    value: "عمان"
  },
  {
    value: "جنين"
  }
]

const RequestLawyer = () => {

  const formik = useFormik({

    initialValues: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      major: "",
      issueInfo: "",
      office: "",
      customer: "",
      agreeToPrivacy: false, // Checkbox state
    },
    validationSchema: Yup.object({
      fName: Yup.string()
        .max(6, 'Must be 6 characters or less')
        .required('Required'),
      lName: Yup.string()
        .max(6, 'Must be 6 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string()
        .min(11, 'Phone Number Must be 11 Numbers')
        .required('Required'),
      major: Yup.string()
        .required('Required'),
      issueInfo: Yup.string()
        .min(20, 'Must be at least 20 characters')
        .required('Required'),
      office: Yup.string().required('Required'),     // Validation for office
      customer: Yup.string().required('Required'),     // Validation for office
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], 'You must agree to the privacy policy') // Validation rule
        .required('Required'),
    }),
    validateOnBlur: true,   // This ensures validation on blur
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
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
                name={"fName"}
                value={formik.values.fName}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.fName && formik.errors.fName ? (
                <div className={styles.error}>{formik.errors.fName}</div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="اسم العائلة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="اسم العائلة"
                alt={"person icon"}
                name={"lName"}
                value={formik.values.lName}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.lName && formik.errors.lName ? (
                <div className={styles.error}>{formik.errors.lName}</div>
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
              <div className={styles.error}>{formik.errors.email}</div>
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
              <div className={styles.error}>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <SelectComponent
              options={[{ value: "أفراد" }, { value: "شركات ومؤسسات" }]}
              head="فئة العميل"
              selectedOption={formik.values.customer}
              setSelectedOption={(value) => {
                formik.setFieldValue('customer', value); // Update Formik state
              }}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              onChange={formik.handleChange} // Bind Formik onChange
              onBlur={formik.handleBlur} // Bind Formik onBlur
            />
            {formik.touched.customer && formik.errors.customer ? (
              <div className={styles.error}>{formik.errors.customer}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent head={"اختر المكتب"}
              options={officeOptions}
              selectedOption={formik.values.office}
              setSelectedOption={(value) => {
                formik.setFieldValue('office', value); // Update Formik state
              }}
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              onChange={formik.handleChange} // Bind Formik onChange
              onBlur={formik.handleBlur} // Bind Formik onBlur
            />
            {formik.touched.office && formik.errors.office ? (
              <div className={styles.error}>{formik.errors.office}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <Input
              label="التخصص"
              placeholder="التخصص"
              imgPath={"/assets/icons/form/category.png"}
              alt={"major icon"}
              name={"major"}
              value={formik.values.major}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.major && formik.errors.major ? (
              <div className={styles.error}>{formik.errors.major}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.inp}>
              <textarea
                name="issueInfo"
                id="issueInfo"
                value={formik.values.issueInfo}  // Bind Formik value
                onChange={formik.handleChange}   // Bind Formik onChange
                onBlur={formik.handleBlur}       // Bind Formik onBlur
                placeholder="ما هي قضيتك المراد توكيل محامي لها؟"
              ></textarea>
              <span>?</span>
            </div>
            {formik.touched.issueInfo && formik.errors.issueInfo ? (
              <div className={styles.error}>{formik.errors.issueInfo}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <CheckBox label="أوافق على سياسة الخصوصية"
              name="agreeToPrivacy" // Bind the checkbox to Formik state
              checked={formik.values.agreeToPrivacy} // Control the checkbox
              onChange={formik.handleChange} // Use Formik's onChange
              onBlur={formik.handleBlur} // Use Formik's onBlur
              error={formik.touched.agreeToPrivacy && formik.errors.agreeToPrivacy}
            />
          </div>
          <Button text="ارسال" />
        </form>
      </div>
    </section>
  );
};

export default RequestLawyer;
