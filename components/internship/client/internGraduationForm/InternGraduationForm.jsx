"use client";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Api from "@/components/config/Api";
import { notifyError, notifySuccess } from "@/components/notify/Notify";

const InternGraduationForm = () => {
  const [cvFile, setCvFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setisloading] = useState(false);

  const Intern_Graduation_Form = useFormik({
    initialValues: {
      cv: "",
      first_name: "",
      last_name: "",
      howDidYouHearAboutUs: "",
      office: "",
      address: "",
      phone: "",
      email: "",
      agreeToPrivacy: true,
    },
    validationSchema: Yup.object({
      howDidYouHearAboutUs: Yup.string()
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
      address: Yup.string().required("مطلوب"),
      office: Yup.string().required("مطلوب"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "يجب أن توافق على سياسة الخصوصية")
        .required("مطلوب"),
      cv: Yup.mixed()
        .required("مطلوب")
        .test(
          "fileSize",
          "الملف كبير جدًا",
          (value) => value && value.size <= 15 * 1024 * 1024
        )
        .test(
          "fileType",
          "تنسيق ملف غير مدعوم",
          (value) =>
            value &&
            (value.type === "application/pdf" ||
              value.type === "application/msword" ||
              value.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

            )
        ),
    }),
    onSubmit: async (values) => {
      setisloading(true);

      const formData = new FormData();
      formData.append("cv", cvFile);
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("howDidYouHearAboutUs", values.howDidYouHearAboutUs);
      formData.append("office", values.office);
      formData.append("address", values.address);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("agreeToPrivacy", values.agreeToPrivacy);

      try {
        const response = await Api.post("/internship", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setisloading(false);
        notifySuccess("تم الارسال بنجاح");
        setFileName("");
        setCvFile(null);
        Intern_Graduation_Form.resetForm();
      } catch (error) {
        setisloading(false);
        const errorMsg = error?.response?.data?.error?.[0]?.msg || "حدث خطأ ما";
        notifyError(errorMsg);
      }
    },
  });

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setCvFile(file);
      Intern_Graduation_Form.setFieldValue("cv", file);
    }
  };

  const officeOptions = [
    { value: "القاهرة" },
    { value: "دبى" },
    { value: "الرياض" },
    { value: "تشنغدو" },
    { value: "عمّان" },
    { value: "جنين" },
  ];

  return (
    <section className={styles.graduationForm}>
      <div className={styles.formPage}>
        <h2> استمارة التدريب</h2>
        <form onSubmit={Intern_Graduation_Form.handleSubmit}>
          <div className={styles.names}>
            <div className={styles.errorWrapper}>
              <Input
                label="الاسم الاول"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="الاسم الاول"
                name="first_name"
                value={Intern_Graduation_Form.values.first_name}
                change={Intern_Graduation_Form.handleChange}
                blur={Intern_Graduation_Form.handleBlur}
                alt="person icon"
              />
              {Intern_Graduation_Form.touched.first_name &&
                Intern_Graduation_Form.errors.first_name && (
                  <div className="error">
                    {Intern_Graduation_Form.errors.first_name}
                  </div>
                )}
            </div>
            <div className={styles.errorWrapper}>
              <Input
                label="اسم العائلة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="اسم العائلة"
                name="last_name"
                value={Intern_Graduation_Form.values.last_name}
                change={Intern_Graduation_Form.handleChange}
                blur={Intern_Graduation_Form.handleBlur}
                alt="person icon"
              />
              {Intern_Graduation_Form.touched.last_name &&
                Intern_Graduation_Form.errors.last_name && (
                  <div className="error">
                    {Intern_Graduation_Form.errors.last_name}
                  </div>
                )}
            </div>
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="البريد الالكتروني"
              imgPath="/assets/icons/form/ic_round-email.svg"
              placeholder="البريد الالكتروني"
              name="email"
              value={Intern_Graduation_Form.values.email}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
              alt="email icon"
            />
            {Intern_Graduation_Form.touched.email &&
              Intern_Graduation_Form.errors.email && (
                <div className="error">
                  {Intern_Graduation_Form.errors.email}
                </div>
              )}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="رقم الهاتف"
              imgPath="/assets/icons/form/ic_round-phone.svg"
              placeholder="رقم الهاتف"
              name="phone"
              value={Intern_Graduation_Form.values.phone}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
              alt="phone icon"
            />
            {Intern_Graduation_Form.touched.phone &&
              Intern_Graduation_Form.errors.phone && (
                <div className="error">
                  {Intern_Graduation_Form.errors.phone}
                </div>
              )}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              head="اختر المكتب"
              options={officeOptions}
              selectedOption={Intern_Graduation_Form.values.office}
              setSelectedOption={(value) =>
                Intern_Graduation_Form.setFieldValue("office", value)
              }
              onChange={Intern_Graduation_Form.handleChange}
              onBlur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.office &&
              Intern_Graduation_Form.errors.office && (
                <div className="error">
                  {Intern_Graduation_Form.errors.office}
                </div>
              )}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="منطقة السكن الحالى / المحافظة"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder="منطقة السكن الحالى / المحافظة"
              name="address"
              value={Intern_Graduation_Form.values.address}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
              alt="location icon"
            />
            {Intern_Graduation_Form.touched.address &&
              Intern_Graduation_Form.errors.address && (
                <div className="error">
                  {Intern_Graduation_Form.errors.address}
                </div>
              )}
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.inp}>
              <textarea
                name="howDidYouHearAboutUs"
                value={Intern_Graduation_Form.values.howDidYouHearAboutUs}
                onChange={Intern_Graduation_Form.handleChange}
                onBlur={Intern_Graduation_Form.handleBlur}
                placeholder="كيف سمعت عنا؟"
              />
              <span>؟</span>
            </div>
            {Intern_Graduation_Form.touched.howDidYouHearAboutUs &&
              Intern_Graduation_Form.errors.howDidYouHearAboutUs && (
                <div className="error">
                  {Intern_Graduation_Form.errors.howDidYouHearAboutUs}
                </div>
              )}
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.file}>
              <div className={styles.right}>
                {fileName ? (
                  <p>{fileName}</p>
                ) : (
                  <>
                    <span>قم برفع سيرتك الذاتية</span>
                    <span>
                      ( ارفع ملف مدعوم وواضح بصيغة PDF,WORD بحد اقصي 15ميجا )
                    </span>
                  </>
                )}
              </div>
              <input
                type="file"
                name="cv"
                id="cv"
                onChange={handleFileChange}
                onBlur={Intern_Graduation_Form.handleBlur}
                className={styles.fileInput}
              />
              <Image
                src="/assets/icons/form/Vector.png"
                width={24}
                height={24}
                alt="Upload icon"
              />
            </div>
            {Intern_Graduation_Form.touched.cv &&
              Intern_Graduation_Form.errors.cv && (
                <div className="error">{Intern_Graduation_Form.errors.cv}</div>
              )}
          </div>

          <div className={styles.errorWrapper}>
            <CheckBox
              label="اوافق على الشروط والاحكام"
              name="agreeToPrivacy"
              checked={Intern_Graduation_Form.values.agreeToPrivacy}
              onChange={Intern_Graduation_Form.handleChange}
              onBlur={Intern_Graduation_Form.handleBlur}
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
        <p className="err">{error}</p>
        <p className="success">{success}</p>
      </div>
      <div className={styles.emailContact}>
        <p>
          بريد التواصل للمنحة الصيفية لطلاب السنة الثالثة والرابعة بكلية الحقوق
        </p>
        <a
          href="mailto:internship@tcmglaw.com"
          style={{ textDecoration: "underline" }}
        >
        internship@tcmglaw.com
        </a>
      </div>
    </section>
  );
};

export default InternGraduationForm;
