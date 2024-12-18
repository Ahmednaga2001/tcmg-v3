"use client";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { notifyError, notifySuccess } from "@/components/notify/Notify";
import Api from "@/components/config/Api";

const HiringGraduationForm = () => {
  const [fileName, setFileName] = useState("");
  const [cvFile, setCvFile] = useState(null); // Track file object
  const [success, setsuccess] = useState(null);
  const [error, seterror] = useState(null);
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
      job: "",
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
      job: Yup.string().required("مطلوب"),
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
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      setisloading(true);

      const formData = new FormData();
      formData.append("cv", cvFile);
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("job", values.job);
      formData.append("howDidYouHearAboutUs", values.howDidYouHearAboutUs);
      formData.append("office", values.office);
      formData.append("address", values.address);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("agreeToPrivacy", values.agreeToPrivacy);
      setisloading(true);
      try {
        const response = await Api.post("/employments", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // تحديد نوع المحتوى
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
        seterror(errorMsg);
        notifyError(errorMsg);
      }
    },
  });

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setCvFile(file);
      Intern_Graduation_Form.setFieldValue("cv", file); // Set Formik field value
    }
  };
  const jobOptions = [
    {
      value: "محامى",
    },
    {
      value: "موظف ادارى",
    },
    {
      value: "محاسب قانونى",
    },
    {
      value: "سكرتارية",
    },
    {
      value: "بحوث",
    },
    {
      value: "تسويق",
    },
    {
      value: "مترجم قانونى",
    },
    {
      value: "تدريب",
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
      value: "عمّان",
    },
    {
      value: "جنين",
    },
  ];
  return (
    <section className={styles.graduationForm}>
      <div className={styles.formPage}>
        <h2>إستمارة التوظيف</h2>
        <form action="" onSubmit={Intern_Graduation_Form.handleSubmit}>
          <div className={styles.names}>
            <div className={styles.errorWrapper}>
              <Input
                label="الاسم الاول"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                placeholder="الاسم الاول"
                name={"first_name"}
                value={Intern_Graduation_Form.values.first_name}
                change={Intern_Graduation_Form.handleChange}
                blur={Intern_Graduation_Form.handleBlur}
                alt={"person icon"}
              />
              {Intern_Graduation_Form.touched.first_name &&
              Intern_Graduation_Form.errors.first_name ? (
                <div className="error">
                  {Intern_Graduation_Form.errors.first_name}
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
                value={Intern_Graduation_Form.values.last_name}
                change={Intern_Graduation_Form.handleChange}
                blur={Intern_Graduation_Form.handleBlur}
              />
              {Intern_Graduation_Form.touched.last_name &&
              Intern_Graduation_Form.errors.last_name ? (
                <div className="error">
                  {Intern_Graduation_Form.errors.last_name}
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
              value={Intern_Graduation_Form.values.email}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.email &&
            Intern_Graduation_Form.errors.email ? (
              <div className="error">{Intern_Graduation_Form.errors.email}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="رقم الهاتف"
              imgPath="/assets/icons/form/ic_round-phone.svg"
              placeholder="رقم الهاتف"
              alt={"phone icon"}
              name={"phone"}
              value={Intern_Graduation_Form.values.phone}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.phone &&
            Intern_Graduation_Form.errors.phone ? (
              <div className="error">{Intern_Graduation_Form.errors.phone}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
              w={24}
              h={24}
              head={"اختر المكتب"}
              options={officeOptions}
              selectedOption={Intern_Graduation_Form.values.office}
              setSelectedOption={(value) => {
                Intern_Graduation_Form.setFieldValue("office", value); // Update Formik state
              }}
              onChange={Intern_Graduation_Form.handleChange} // Bind Formik onChange
              onBlur={Intern_Graduation_Form.handleBlur} // Bind Formik onBlur
            />
            {Intern_Graduation_Form.touched.office &&
            Intern_Graduation_Form.errors.office ? (
              <div className="error">
                {Intern_Graduation_Form.errors.office}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <SelectComponent
              head={"اختر الوظيفة"}
              options={jobOptions}
              selectedOption={Intern_Graduation_Form.values.job}
              setSelectedOption={(value) => {
                Intern_Graduation_Form.setFieldValue("job", value); // Update Formik state
              }}
              onChange={Intern_Graduation_Form.handleChange} // Bind Formik onChange
              onBlur={Intern_Graduation_Form.handleBlur} // Bind Formik onBlur
            />
            {Intern_Graduation_Form.touched.job &&
            Intern_Graduation_Form.errors.job ? (
              <div className="error">{Intern_Graduation_Form.errors.job}</div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <Input
              label="منطقة السكن الحالى / المحافظة"
              imgPath="/assets/icons/form/mdi_location.svg"
              placeholder={"منطقة السكن الحالى / المحافظة"}
              alt={"location icon"}
              name={"address"}
              value={Intern_Graduation_Form.values.address}
              change={Intern_Graduation_Form.handleChange}
              blur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.address &&
            Intern_Graduation_Form.errors.address ? (
              <div className="error">
                {Intern_Graduation_Form.errors.address}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.inp}>
              <textarea
                name="howDidYouHearAboutUs"
                id="howDidYouHearAboutUs"
                value={Intern_Graduation_Form.values.howDidYouHearAboutUs} // Bind Formik value
                onChange={Intern_Graduation_Form.handleChange} // Bind Formik onChange
                onBlur={Intern_Graduation_Form.handleBlur} // Bind Formik onBlur
                placeholder="كيف سمعت عنا؟"
              ></textarea>
              <span>؟</span>
            </div>
            {Intern_Graduation_Form.touched.howDidYouHearAboutUs &&
            Intern_Graduation_Form.errors.howDidYouHearAboutUs ? (
              <div className="error">
                {Intern_Graduation_Form.errors.howDidYouHearAboutUs}
              </div>
            ) : null}
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.file}>
              <div className={styles.right}>
                {fileName ? (
                  <>
                    <p>{fileName}</p>
                  </>
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
                alt="Location icon"
              />
            </div>
            {Intern_Graduation_Form.touched.cv &&
            Intern_Graduation_Form.errors.cv ? (
              <div className="error">{Intern_Graduation_Form.errors.cv}</div>
            ) : null}
          </div>
          <div className={styles.errorWrapper}>
            <CheckBox
              label="اوافق على الشروط والاحكام"
              name="agreeToPrivacy" // Bind the checkbox to Formik state
              checked={Intern_Graduation_Form.values.agreeToPrivacy} // Control the checkbox
              onChange={Intern_Graduation_Form.handleChange} // Use Formik's onChange
              onBlur={Intern_Graduation_Form.handleBlur} // Use Formik's onBlur
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
        {/* <p className="err">{error}</p>
        <p className="success">{success}</p> */}
      </div>
    
    </section>
  );
};

export default HiringGraduationForm;
