import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TailSpin } from "react-loader-spinner";
import { useSearchParams } from "next/navigation";

const options = [{ value: "أفراد" }, { value: "مؤسسات وشركات" }];
export default function RetryConsultInfo({onNextStep}) {
  const [isloading, setisloading] = useState(false);
  const searchParams = useSearchParams();
  const isOfficeConsultation =
    searchParams.get("isOfficeConsultation") === "true";
  console.log(isOfficeConsultation);

  const formik = useFormik({
    initialValues: {
      message: "",
      major: "",
     
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .min(20, "يجب ائن يكون على الأقل 20 حرفًا")
        .required("مطلوب"),
     
      major: Yup.string().required("مطلوب"),

 
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setisloading(true);

      onNextStep();
    },
  });
  return (
    <div className={styles.formPage}>
      <p>
      يرجي إدخال بيانات بشكل صحيح وسيتم التواصل خلال ساعة من الحجز في خلال مواعيد العمل الرسمية من 9 صباحًا لـ 11 مساءًا
      </p>
      <form onSubmit={formik.handleSubmit}>
    
  
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
            {formik.touched.message && formik.errors.message ? (
              <div className={styles.error}>{formik.errors.message}</div>
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
  );
}
