// FollowPayment.jsx
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CardInfo from "../cardInfo.jsx/CardInfo";
import SuccessfulPaymentModal from "../successfulPaymentModal/SuccessfulPaymentModal";
import UploadImgModal from "../uploadImgModal/UploadImgModal";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import ModalPrivacy from "../modalPrivacy/ModalPrivacy";

export default function FollowPayment() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const handleModalClose = () => {
    setShowPrivacyModal(false);
  };
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      paymentMethod: "",
      agreeToPrivacy: true,
    },
    validationSchema: Yup.object({
      paymentMethod: Yup.string().required("يرجى اختيار طريقة الدفع"),
      agreeToPrivacy: Yup.boolean().oneOf([true], "يرجى الموافقة على الشروط"),
    }),
    onSubmit: (values) => {
      if (values.paymentMethod === "visa") {
        setShowModal(true);
        setTimeout(() => {
          router.push("/request-summary");
        },3000)
      } else if (values.paymentMethod === "instapay") {
        setShowModal2(true);
      }

    },
  });



  return (
    <section className={styles.followPayment}>
      <div className={styles.formPage}>
        <p>
          <strong>الدفع عن طريق </strong>(اختر الطريقة المفضلة لك)
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.paymentParent}>

            <div
              className={styles.paymentLogo}
              onClick={() => formik.setFieldValue("paymentMethod", "visa")}
            >
              <span className={styles.checkmark}>
                {formik.values.paymentMethod === "visa" && (
                  <Image
                    src="/assets/icons/payment/correct.svg"
                    alt="Correct Icon"
                    width={53}
                    height={53}
                  />
                )}
              </span>
              <div>
                <span>الدفع بالبطاقة الائتمانية أو المحفظة الالكترونية</span>
                <p>
                  <Image
                    src="/assets/images/payment/visa.svg"
                    alt="/assets/images/payment/visa.svg"
                    width={160}
                    height={38}
                    quality={100}
                  />
                </p>
              </div>
            </div>

            <div
              className={styles.paymentLogo}
              onClick={() => formik.setFieldValue("paymentMethod", "instapay")}
            >
              <span className={styles.checkmark}>
                {formik.values.paymentMethod === "instapay" && (
                  <Image
                    src="/assets/icons/payment/correct.svg"
                    alt="Correct Icon"
                    width={53}
                    height={53}
                  />
                )}
              </span>
              <div>
                <span>الدفع عن طريق انستا باي</span>
                <p>
                  <Image
                    src="/assets/images/payment/instapay.svg"
                    alt="/assets/images/payment/instapay.svg"
                    width={160}
                    height={38}
                    quality={100}
                  />
                </p>
              </div>
            </div>

            <div className={styles.errors}>
              {formik.touched.paymentMethod && formik.errors.paymentMethod && (
                <span className="error">{formik.errors.paymentMethod}</span>
              )}
            </div>

            <div className={styles.btnParent}>
              <span className={styles.checkmark}></span>
              <div className={styles.terms}>
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  name="agreeToPrivacy"
                  checked={formik.values.agreeToPrivacy} 
                  onChange={(e) => {
                    formik.setFieldValue("agreeToPrivacy", e.target.checked); 
                  }}
                  onBlur={formik.handleBlur}
                />
                <label
                  htmlFor="agreeToPrivacy"
                  style={{
                    cursor: "pointer",
                    color: "white",
                    textDecoration: "underline",
                    paddingBottom: "10px",
                    fontSize: "18px",
                  }}
                  className={styles.labelUnderlined}
                  onClick={() => setShowPrivacyModal(true)}
                >
                  إوافق على سياسة الخصوصية
                </label>
              </div>
            </div>

            <div className={styles.btnParent}>
              <span className={styles.checkmark}></span>
              {formik.touched.agreeToPrivacy && (
                  <formik className="errors"></formik>
                ) && (
                  <span className="error">{formik.errors.agreeToPrivacy}</span>
                )}
            </div>

            <div className={styles.btnParent}>
              <span className={styles.checkmark}></span>
              <button className={styles.btn}>
                المتابعة
                <Image
                  src="/assets/icons/form/arrow-left-black.png"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
      <CardInfo />

      {showModal && (
        <SuccessfulPaymentModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {showPrivacyModal && (
        <ModalPrivacy
          showModal={showPrivacyModal}
          setShowModal={handleModalClose} // Close modal and trigger next step
        />
      )}
      {showModal2 && (
        <UploadImgModal
          showModal={showModal2}
          setShowModal={setShowModal2}
        />
      )}
    </section>
  );
}
