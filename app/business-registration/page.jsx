"use client";
import Input from "@/components/ui/Input";
import styles from "./page.module.css";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { TailSpin } from "react-loader-spinner";
import { useFormik } from "formik";
import CheckBox from "@/components/ui/CheckBox";
import Api from "@/components/config/Api";
import { notifyError, notifySuccess } from "@/components/notify/Notify";
import SuccessfulModal from "@/components/shared/successfulModal/SuccessfulModal";
const sectorOptions = [
  { id: 1, value: "أسواق المال" },
  { id: 2, value: "الإندماج والاستحواذ" },
  { id: 3, value: "التحكيم التجاري" },
  { id: 4, value: "التطوير العقاري والإنشاءات" },
  { id: 5, value: "الخدمات البنكية والمالية" },
  { id: 6, value: "الرعاية الصحية" },
  { id: 7, value: "التجزئة والمستهلك" },
  { id: 8, value: "التقاضي" },
];

const BusinessRegistration = () => {
  const [isloading, setisloading] = useState(false);
const [showModal , setShowModal] = useState(false);
  const formik = useFormik({
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
      agreeToPrivacy: true,
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .min(20, "يجب أن يكون على الأقل 20 حرفًا")
        .required("مطلوب"),
      how_did_you_hear_about_us: Yup.string()
        .min(20, "يجب أن يكون على الأقل 20 حرفًا")
        .required("مطلوب"),
      company_name: Yup.string()
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),
      industry: Yup.string()
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),
      country: Yup.string()
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),
      major: Yup.string()
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
      num_of_attendance: Yup.string()
        .matches(/^\d+$/, "يجب أن يكون رقم")
        .required("مطلوب"),
      sector: Yup.string().required("مطلوب"),

      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "يجب أن توافق على سياسة الخصوصية")
        .required("مطلوب"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      setisloading(true);
      try {
        const response = await Api.post("/companies-operations", values);
        setisloading(false);
        setShowModal(true); 
        formik.resetForm(); // Reset form after successful submission
      } catch (error) {
        setisloading(false);
        const errorMsg = error?.response?.data?.error?.[0]?.msg || "حدث خطأ ما";
        notifyError(errorMsg); // Show error notification if the request fails
      }
    },
  });

  return (
    <div className={styles.businessPage}>
            {showModal && <SuccessfulModal text={"تم الإرسال بنجاح "} setShowModal={setShowModal} />}

      <section>
       <h2>إستشارة أعمال الشركات</h2>
        <div className={styles.formPage}>
       
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.errorWrapper}>
              <Input
                label="اسم الشركة"
                placeholder="اسم الشركة"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                display="block"
                name={"company_name"}
                value={formik.values.company_name}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.company_name && formik.errors.company_name ? (
                <div className="error">{formik.errors.company_name}</div>
              ) : null}
            </div>
            <div className={styles.errorWrapper}>
              <Input
                label="بريد إلكتروني الشركة"
                imgPath="/assets/icons/form/ic_round-email.svg"
                placeholder="بريد إلكتروني الشركة"
                alt="email icon"
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
                label="رقم هاتف الشركة"
                placeholder={"رقم هاتف الشركة"}
                imgPath={"/assets/icons/form/ic_round-phone.png"}
                display="block"
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
              <Input
                label="الصناعة"
                placeholder="الصناعة"
                name={"industry"}
                value={formik.values.industry}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.industry && formik.errors.industry ? (
                <div className="error">{formik.errors.industry}</div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="الدولة"
                placeholder="الدولة"
                imgPath={"/assets/icons/form/mdi_location.svg"}
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
                options={sectorOptions}
                head={"اختر القطاع من القائمة"}
                label={"القطاع"}
                imgPath={"/assets/icons/form/mdi_arrow-down-drop.png"}
                w={24}
                h={24}
                display="block"
                name="sector"
                id="sector"
                selectedOption={formik.values.sector}
                setSelectedOption={(value) => {
                  formik.setFieldValue("sector", value); // Update Formik state
                }}
                onChange={formik.handleChange} // Bind Formik onChange
                onBlur={formik.handleBlur} // Bind Formik onBlur
              />
              {formik.touched.sector && formik.errors.sector ? (
                <div className="error">{formik.errors.sector}</div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}>
              <Input
                label="عدد الحاضرين"
                placeholder="عدد الحاضرين"
                imgPath="/assets/icons/form/solar_user-bold.svg"
                display="block"
                name={"num_of_attendance"}
                value={formik.values.num_of_attendance}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.num_of_attendance &&
              formik.errors.num_of_attendance ? (
                <div className="error">{formik.errors.num_of_attendance}</div>
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
                value={formik.values.major}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
              {formik.touched.major && formik.errors.major ? (
                <div className="error">{formik.errors.major}</div>
              ) : null}
            </div>

            <div className={styles.errorWrapper}> </div>

            <div className={styles.message}>
              <label htmlFor="message">كيف سمعت عنا</label>
              <div className={styles.inp}>
                <textarea
                  name="message"
                  id="message"
                  value={formik.values.message} // Bind Formik value
                  onChange={formik.handleChange} // Bind Formik onChange
                  onBlur={formik.handleBlur} // Bind Formik onBlur
                  placeholder="كيف سمعت عنا ؟"
                ></textarea>
                <span>?</span>
              </div>
              {formik.touched.message && formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
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
                    value={formik.values.how_did_you_hear_about_us} // Bind Formik value
                    onChange={formik.handleChange} // Bind Formik onChange
                    onBlur={formik.handleBlur} // Bind Formik onBlur
                    placeholder="اكتب استشارتك هنا"
                  ></textarea>
                  <span>؟</span>
                </div>
                {formik.touched.how_did_you_hear_about_us &&
                formik.errors.how_did_you_hear_about_us ? (
                  <div className="error">
                    {formik.errors.how_did_you_hear_about_us}
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.errorWrapper}> </div>

            <div className={styles.errorWrapper}>
             <div className={styles.terms}>
             <CheckBox
                label="   إوافق على سياسة الخصوصية وسياسة الاستخدام   "
                name="agreeToPrivacy"
                checked={formik.values.agreeToPrivacy} // Control the checkbox based on Formik value
                onChange={formik.handleChange} // Use Formik's onChange
                onBlur={formik.handleBlur} // Use Formik's onBlur
                error={
                  formik.touched.agreeToPrivacy && formik.errors.agreeToPrivacy
                }
              />
             </div>
            </div>
            {isloading ? (
              <>
                <div className="loader">
                  <button disabled type="submit" className={styles.registerWay}>
                    المتابعة
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
                المتابعة
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
    </div>
  );
};
export default BusinessRegistration;
