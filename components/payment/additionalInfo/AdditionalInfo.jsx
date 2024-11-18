import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import Image from "next/image";
import CardInfo from "../cardInfo.jsx/CardInfo";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { TailSpin } from "react-loader-spinner";
import { useSearchParams } from "next/navigation";
import OfiiceInfo from "./OfiiceInfo";
import RetryConsultInfo from "./RetryConsultInfo";

const options = [{ value: "أفراد" }, { value: "مؤسسات وشركات" }];

export default function AdditionalInfo({ onNextStep }) {
  const [isloading, setisloading] = useState(false);
  const searchParams = useSearchParams();
  const isOfficeConsultation = searchParams.get('isOfficeConsultation') === 'true';
  const retryConsultation = searchParams.get('retryConsultation') === 'true';
  
  
  const formik = useFormik({
    initialValues: {
      first_name: "",
      phone: "",
      message: "",
      major: "",
      clientType: "",
      subscribe: false,
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .min(20, "يجب ائن يكون على الأقل 20 حرفًا")
        .required("مطلوب"),
      first_name: Yup.string()
        .max(10, "يجب ائن يكون 10 أحرف او اقل")
        .required("مطلوب")
        .matches(
          /^[a-zA-Z\u0600-\u06FF\s]*$/,
          "اسم غير صالح. يجب أن يتضمن حروف إنجليزية أو عربية فقط"
        ),
      major: Yup.string().required("مطلوب"),

      phone: Yup.string()
        .matches(/^[0-9]{11}$/, "رقم الهاتف يجب أن يكون مكونًا من 11 رقمًا فقط")

        .required("مطلوب"),
      clientType: Yup.string().required("مطلوب"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setisloading(true);

      onNextStep();
    },
  });

  return (
    <section className={styles.additionalInfo}>
     {
        retryConsultation?(
          <RetryConsultInfo onNextStep={onNextStep}/>
        ):
        isOfficeConsultation?(
          <OfiiceInfo onNextStep={onNextStep}/>
     
           ):(
             <div className={styles.formPage}>
             <p>
               يرجي إدخال بيانات بشكل صحيح وسيتم التواصل خلال ساعة من الحجز في خلال
               مواعيد العمل الرسمية من 9 صباحًا لـ 11 مساءًا
             </p>
             <form onSubmit={formik.handleSubmit}>
               <div className={styles.errorWrapper}>
                 <Input
                   label="الاسم بالكامل"
                   imgPath="/assets/icons/form/solar_user-bold.svg"
                   placeholder="الاسم بالكامل"
                   alt={"person icon"}
                   name={"first_name"}
                   value={formik.values.first_name}
                   change={formik.handleChange}
                   blur={formik.handleBlur}
                   display="block"
                 />
                 {formik.touched.first_name &&
                 formik.errors.first_name ? (
                   <div className={styles.error}>
                     {formik.errors.first_name}
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
                   value={formik.values.phone}
                   change={formik.handleChange}
                   blur={formik.handleBlur}
                   display="block"
                 />
                 {formik.touched.phone && formik.errors.phone ? (
                   <div className={styles.error}>{formik.errors.phone}</div>
                 ) : null}
               </div>
               <div className={styles.errorWrapper}>
                 <SelectComponent
                   head={"فئة العميل"}
                   label={"فئة العميل ( إختر النوع)"}
                   options={options}
                   name="clientType"
                   id="clientType"
                   imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
                   w={24}
                   h={24}
                   selectedOption={formik.values.clientType}
                   setSelectedOption={(value) => {
                     formik.setFieldValue("clientType", value); // Update Formik state
                   }}
                   onChange={formik.handleChange} // Bind Formik onChange
                   onBlur={formik.handleBlur} // Bind Formik onBlur
                   display="block"
                 />
                 {formik.touched.clientType &&
                 formik.errors.clientType ? (
                   <div className={styles.error}>
                     {formik.errors.clientType}
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
                   value={formik.values.major}
                   change={formik.handleChange}
                   blur={formik.handleBlur}
                 />
                 {formik.touched.major && formik.errors.major ? (
                   <div className={styles.error}>{formik.errors.major}</div>
                 ) : null}
               </div>
     
               <div className={styles.message}>
                 <div className={styles.errorWrapper}>
                   <label htmlFor="message">موضوع الإستشارة</label>
                   <div className={styles.inp}>
                     <textarea
                       name="message"
                       id="message"
                       value={formik.values.message} // Bind Formik value
                       onChange={formik.handleChange} // Bind Formik onChange
                       onBlur={formik.handleBlur} // Bind Formik onBlur
                       placeholder="اكتب استشاراتك هنا "
                     ></textarea>
                     <span>?</span>
                   </div>
                   {formik.touched.message &&
                   formik.errors.message ? (
                     <div className={styles.error}>
                       {formik.errors.message}
                     </div>
                   ) : null}
                 </div>
               </div>
     
               <div className={styles.termsC}>
                 <input
                   type="checkbox"
                   id="subscribe"
                   name="subscribe"
                   checked={formik.values.subscribe}
                   onChange={formik.handleChange}
                 />
                 <label htmlFor="subscribe">أود الإشتراك في القائمة البريدية</label>
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
                     </button>
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
           )
     }
      <CardInfo />

    </section>
  );
}
