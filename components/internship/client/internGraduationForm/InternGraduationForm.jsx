// "use client";
// import styles from "./page.module.css";
// import Button from "@/components/ui/Button";
// import CheckBox from "@/components/ui/CheckBox";
// import Input from "@/components/ui/Input";
// import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
// import { useFormik } from "formik";
// import Image from "next/image";
// import * as Yup from "yup";
// import axios from "axios";

// import { useState } from "react";

// const InternGraduationForm = () => {
//   const [cvFile, setCvFile] = useState(null); // Track file object

//   const Intern_Graduation_Form = useFormik({
//     initialValues: {
//       cv: "",
//       first_name: "",
//       last_name: "",
//       howDidYouHearAboutUs: "",
//       office: "",
//       address: "",
//       phone: "",
//       email: "",
//       agreeToPrivacy: false,
//     },
//     validationSchema: Yup.object({
//       howDidYouHearAboutUs: Yup.string()
//         .min(20, "Must be at least 20 characters")
//         .required("Required"),
//       first_name: Yup.string()
//         .max(10, "Must be 10 characters or less")
//         .required("Required")
//         .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid "),
//       last_name: Yup.string()
//         .max(10, "Must be 10 characters or less")
//         .required("Required")
//         .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid "),
//       email: Yup.string()
//         .matches(
//           /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//           "please enter a valid email"
//         )
//         .required("Required"),
//       phone: Yup.string()
//         .matches(
//           /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
//           "invalid phone number"
//         )
//         .required("Required"),
//       address: Yup.string().required("Required"),
//       office: Yup.string().required("Required"),
//       agreeToPrivacy: Yup.boolean()
//         .oneOf([true], "You must agree to the privacy policy")
//         .required("Required"),
//         cv: Yup.mixed()
//   .required("Required")
//   .test("fileSize", "File too large", value => value && value.size <= 15 * 1024 * 1024) // 15 MB
//   .test("fileType", "Unsupported File Format", value => value && (value.type === "application/pdf" || value.type === "application/msword")),

//     }),
//     validateOnBlur: true,
//     validateOnChange: true,
//     onSubmit: (values) => {
//       const formData = new FormData();
//       formData.append("cv", cvFile);
//       formData.append("first_name", values.first_name);
//       formData.append("last_name", values.last_name);
//       formData.append("howDidYouHearAboutUs", values.howDidYouHearAboutUs);
//       formData.append("office", values.office);
//       formData.append("address", values.address);
//       formData.append("phone", values.phone);
//       formData.append("email", values.email);
//       formData.append("agreeToPrivacy", values.agreeToPrivacy);

//       for (const [key, value] of formData.entries()) {
//         console.log(`${key}: ${value}`);
//       }

//       axios
//         .post("https://tcmg-production.up.railway.app/internship", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         })
//         .then((res) => {
//           console.log("say", res.data);
//           setsuccess(res.data.status);
//           setTimeout(() => {
//             setsuccess(null);
//           }, 3000);
//         })
//         .catch((err) => {
//           console.log("aaa"+err);
//           seterror(err.response.data.message);
//           setTimeout(() => {
//             seterror(null);
//           }, 3000);
//         });
//     },
//   });

//   const [selectedOffice, setSelectedOffice] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [success, setsuccess] = useState(null);
//   const [error, seterror] = useState(null);
//   const handleFileChange = (e) => {
//     if (e.target.files.length > 0) {
//       setFileName(e.target.files[0].name);
//       setCvFile(e.target.files[0]); // Add this line to track the file

     
//     }
//   };
  
//   const officeOptions = [
//     {
//       value: "القاهرة",
//     },
//     {
//       value: "دبى",
//     },
//     {
//       value: "الرياض",
//     },
//     {
//       value: "تشنغدو",
//     },
//     {
//       value: "عمان",
//     },
//     {
//       value: "جنين",
//     },
//   ];
//   return (
//     <section className={styles.graduationForm}>
//       <div className={styles.formPage}>
//         <h2>استمارة حديث التخرج </h2>
//         <form action="" onSubmit={Intern_Graduation_Form.handleSubmit}>
//           <div className={styles.names}>
//             <div className={styles.errorWrapper}>
//               <Input
//                 label="الاسم الاول"
//                 imgPath="/assets/icons/form/solar_user-bold.svg"
//                 placeholder="الاسم الاول"
//                 name={"first_name"}
//                 value={Intern_Graduation_Form.values.first_name}
//                 change={Intern_Graduation_Form.handleChange}
//                 blur={Intern_Graduation_Form.handleBlur}
//                 alt={"person icon"}
//               />
//               {Intern_Graduation_Form.touched.first_name &&
//               Intern_Graduation_Form.errors.first_name ? (
//                 <div className={styles.error}>
//                   {Intern_Graduation_Form.errors.first_name}
//                 </div>
//               ) : null}
//             </div>
//             <div className={styles.errorWrapper}>
//               <Input
//                 label="اسم العائلة"
//                 imgPath="/assets/icons/form/solar_user-bold.svg"
//                 placeholder="اسم العائلة"
//                 alt={"person icon"}
//                 name={"last_name"}
//                 value={Intern_Graduation_Form.values.last_name}
//                 change={Intern_Graduation_Form.handleChange}
//                 blur={Intern_Graduation_Form.handleBlur}
//               />
//               {Intern_Graduation_Form.touched.last_name &&
//               Intern_Graduation_Form.errors.last_name ? (
//                 <div className={styles.error}>
//                   {Intern_Graduation_Form.errors.last_name}
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           <div className={styles.errorWrapper}>
//             <Input
//               label="البريد الالكتروني"
//               imgPath="/assets/icons/form/ic_round-email.svg"
//               placeholder="البريد الالكتروني"
//               alt={"email icon"}
//               name={"email"}
//               value={Intern_Graduation_Form.values.email}
//               change={Intern_Graduation_Form.handleChange}
//               blur={Intern_Graduation_Form.handleBlur}
//             />
//             {Intern_Graduation_Form.touched.email &&
//             Intern_Graduation_Form.errors.email ? (
//               <div className={styles.error}>
//                 {Intern_Graduation_Form.errors.email}
//               </div>
//             ) : null}
//           </div>
//           <div className={styles.errorWrapper}>
//             <Input
//               label="رقم الهاتف"
//               imgPath="/assets/icons/form/ic_round-phone.svg"
//               placeholder="رقم الهاتف"
//               alt={"phone icon"}
//               name={"phone"}
//               value={Intern_Graduation_Form.values.phone}
//               change={Intern_Graduation_Form.handleChange}
//               blur={Intern_Graduation_Form.handleBlur}
//             />
//             {Intern_Graduation_Form.touched.phone &&
//             Intern_Graduation_Form.errors.phone ? (
//               <div className={styles.error}>
//                 {Intern_Graduation_Form.errors.phone}
//               </div>
//             ) : null}
//           </div>

//           <div className={styles.errorWrapper}>
//             <SelectComponent
//               imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
//               w={24}
//               h={24}
//               head={"اختر المكتب"}
//               options={officeOptions}
//               selectedOption={Intern_Graduation_Form.values.office}
//               setSelectedOption={(value) => {
//                 Intern_Graduation_Form.setFieldValue("office", value); // Update Formik state
//               }}
//               onChange={Intern_Graduation_Form.handleChange} // Bind Formik onChange
//               onBlur={Intern_Graduation_Form.handleBlur} // Bind Formik onBlur
//             />
//             {Intern_Graduation_Form.touched.office &&
//             Intern_Graduation_Form.errors.office ? (
//               <div className={styles.error}>
//                 {Intern_Graduation_Form.errors.office}
//               </div>
//             ) : null}
//           </div>
//           <div className={styles.errorWrapper}>
//             <Input
//               label="منطقة السكن الحالى / المحافظة"
//               imgPath="/assets/icons/form/mdi_location.svg"
//               placeholder={"منطقة السكن الحالى / المحافظة"}
//               alt={"location icon"}
//               name={"address"}
//               value={Intern_Graduation_Form.values.address}
//               change={Intern_Graduation_Form.handleChange}
//               blur={Intern_Graduation_Form.handleBlur}
//             />
//             {Intern_Graduation_Form.touched.address &&
//             Intern_Graduation_Form.errors.address ? (
//               <div className={styles.error}>
//                 {Intern_Graduation_Form.errors.address}
//               </div>
//             ) : null}
//           </div>
//           <div className={styles.errorWrapper}>
//             <div className={styles.inp}>
//               <textarea
//                 name="howDidYouHearAboutUs"
//                 id="howDidYouHearAboutUs"
//                 value={Intern_Graduation_Form.values.howDidYouHearAboutUs} // Bind Formik value
//                 onChange={Intern_Graduation_Form.handleChange} // Bind Formik onChange
//                 onBlur={Intern_Graduation_Form.handleBlur} // Bind Formik onBlur
//                 placeholder="كيف سمعت عنا؟"
//               ></textarea>
//               <span>؟</span>
//             </div>
//             {Intern_Graduation_Form.touched.howDidYouHearAboutUs &&
//             Intern_Graduation_Form.errors.howDidYouHearAboutUs ? (
//               <div className={styles.error}>
//                 {Intern_Graduation_Form.errors.howDidYouHearAboutUs}
//               </div>
//             ) : null}
//           </div>
//           <div className={styles.errorWrapper}>
//             <div className={styles.file}>
//               <div className={styles.right}>
//                 {fileName ? (
//                   <>
//                     <p>{fileName}</p>
//                   </>
//                 ) : (
//                   <>
//                     <span>قم برفع سيرتك الذاتية</span>
//                     <span>
//                       ( ارفع ملف مدعوم وواضح بصيغة PDF,WORD بحد اقصي 15ميجا )
//                     </span>
//                   </>
//                 )}
//               </div>
//               <input
//                type="file"
//                name="cv"
//                id="cv"
//                onChange={handleFileChange}
//                onBlur={Intern_Graduation_Form.handleBlur}
//                className={styles.fileInput}
//               />
//               <Image
//                 src="/assets/icons/form/Vector.png"
//                 width={24}
//                 height={24}
//                 alt="Location icon"
//               />
//             </div>
//             {Intern_Graduation_Form.touched.cv &&
//             Intern_Graduation_Form.errors.cv ? (
//               <div className={styles.error}>
//                 {Intern_Graduation_Form.errors.cv}
//               </div>
//             ) : null}
//           </div>

//           <div className={styles.errorWrapper}>
//             <CheckBox
//               label="اوافق على الشروط والاحكام"
//               name="agreeToPrivacy" // Bind the checkbox to Formik state
//               checked={Intern_Graduation_Form.values.agreeToPrivacy} // Control the checkbox
//               onChange={Intern_Graduation_Form.handleChange} // Use Formik's onChange
//               onBlur={Intern_Graduation_Form.handleBlur} // Use Formik's onBlur
//               error={
//                 Intern_Graduation_Form.touched.agreeToPrivacy &&
//                 Intern_Graduation_Form.errors.agreeToPrivacy
//               }
//             />
//           </div>
//           <Button text="ارسال" />
//         </form>
//         <p className="err">{error}</p>
//         <p className="success">{success}</p>
//       </div>
//       <div className={styles.emailContact}>
//         <p>
//           بريد التواصل للمنحة الصيفية لطلاب السنة الثالثة والرابعة بكلية الحقوق{" "}
//         </p>
//         <a
//           href="mailto:Careers@tcmglaw.com"
//           style={{ textDecoration: "underline" }}
//         >
//           Careers@tcmglaw.com
//         </a>
//       </div>
//     </section>
//   );
// };

// export default InternGraduationForm;
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

const InternGraduationForm = () => {
  const [cvFile, setCvFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

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
      agreeToPrivacy: false,
    },
    validationSchema: Yup.object({
      howDidYouHearAboutUs: Yup.string()
        .min(20, "Must be at least 20 characters")
        .required("Required"),
      first_name: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid"),
      last_name: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required")
        .matches(/^[a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "name invalid"),
      email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "please enter a valid email")
        .required("Required"),
      phone: Yup.string()
        .matches(/^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/, "invalid phone number")
        .required("Required"),
      address: Yup.string().required("Required"),
      office: Yup.string().required("Required"),
      agreeToPrivacy: Yup.boolean()
        .oneOf([true], "You must agree to the privacy policy")
        .required("Required"),
      cv: Yup.mixed()
        .required("Required")
        .test("fileSize", "File too large", value => value && value.size <= 15 * 1024 * 1024)
        .test("fileType", "Unsupported File Format", value => value && (value.type === "application/pdf" || value.type === "application/msword")),
    }),
    onSubmit: (values) => {
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


      axios
        .post("https://tcmg-production.up.railway.app/internship", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setSuccess(res.data.status);
          setTimeout(() => setSuccess(null), 3000);
        })
        .catch((err) => {
          setError(err.response?.data?.message || "Something went wrong");
          setTimeout(() => setError(null), 3000);
        });
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

  const officeOptions = [
    { value: "القاهرة" },
    { value: "دبى" },
    { value: "الرياض" },
    { value: "تشنغدو" },
    { value: "عمان" },
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
              {Intern_Graduation_Form.touched.first_name && Intern_Graduation_Form.errors.first_name && (
                <div className={styles.error}>{Intern_Graduation_Form.errors.first_name}</div>
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
              {Intern_Graduation_Form.touched.last_name && Intern_Graduation_Form.errors.last_name && (
                <div className={styles.error}>{Intern_Graduation_Form.errors.last_name}</div>
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
            {Intern_Graduation_Form.touched.email && Intern_Graduation_Form.errors.email && (
              <div className={styles.error}>{Intern_Graduation_Form.errors.email}</div>
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
            {Intern_Graduation_Form.touched.phone && Intern_Graduation_Form.errors.phone && (
              <div className={styles.error}>{Intern_Graduation_Form.errors.phone}</div>
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
              setSelectedOption={(value) => Intern_Graduation_Form.setFieldValue("office", value)}
              onChange={Intern_Graduation_Form.handleChange}
              onBlur={Intern_Graduation_Form.handleBlur}
            />
            {Intern_Graduation_Form.touched.office && Intern_Graduation_Form.errors.office && (
              <div className={styles.error}>{Intern_Graduation_Form.errors.office}</div>
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
            {Intern_Graduation_Form.touched.address && Intern_Graduation_Form.errors.address && (
              <div className={styles.error}>{Intern_Graduation_Form.errors.address}</div>
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
            {Intern_Graduation_Form.touched.howDidYouHearAboutUs && Intern_Graduation_Form.errors.howDidYouHearAboutUs && (
              <div className={styles.error}>{Intern_Graduation_Form.errors.howDidYouHearAboutUs}</div>
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
                    <span>( ارفع ملف مدعوم وواضح بصيغة PDF,WORD بحد اقصي 15ميجا )</span>
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
            {Intern_Graduation_Form.touched.cv && Intern_Graduation_Form.errors.cv && (
              <div className={styles.error}>{Intern_Graduation_Form.errors.cv}</div>
            )}
          </div>

          <div className={styles.errorWrapper}>
            <CheckBox
              label="اوافق على الشروط والاحكام"
              name="agreeToPrivacy"
              checked={Intern_Graduation_Form.values.agreeToPrivacy}
              onChange={Intern_Graduation_Form.handleChange}
              onBlur={Intern_Graduation_Form.handleBlur}
              error={Intern_Graduation_Form.touched.agreeToPrivacy && Intern_Graduation_Form.errors.agreeToPrivacy}
            />
          </div>

          <Button text="ارسال" />
        </form>
        <p className="err">{error}</p>
        <p className="success">{success}</p>
      </div>
      <div className={styles.emailContact}>
        <p>بريد التواصل للمنحة الصيفية لطلاب السنة الثالثة والرابعة بكلية الحقوق</p>
        <a href="mailto:Careers@tcmglaw.com" style={{ textDecoration: "underline" }}>
          Careers@tcmglaw.com
        </a>
      </div>
    </section>
  );
};

export default InternGraduationForm;
