"use client"
import Input from "@/components/ui/Input";
import styles from "./page.module.css"
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useState } from "react";
import Image from "next/image";
const sectorOptions = [
    {
        value: "a"
    }
]
const BusinessRegistration = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const [selectedSector, setSelectedSector] = useState("")
    return (
        <div className={styles.businessPage}>

            <section >
                <h2>إستمارة أعمال الشركات</h2>
                <div className={styles.formPage}>
                    <p>يرجي إدخال بيانات بشكل صحيح وسيتم التواصل خلال ساعة من الحجز في خلال مواعيد العمل الرسمية من 9 صباحًا لـ 11 مساءًا</p>
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="اسم الشركة"
                            placeholder="اسم الشركة"
                            imgPath="/assets/icons/form/solar_user-bold.svg"

                            display="block"
                        />
                        <Input
                            label="بريد إلكتروني الشركة"
                            imgPath="/assets/icons/form/ic_round-email.svg"
                            placeholder="بريد إلكتروني الشركة"
                            type='email'
                            alt="email icon"
                            display="block"

                        />

                        <Input
                            label="رقم هاتف الشركة"
                            placeholder={"رقم هاتف الشركة"}
                            imgPath={"/assets/icons/form/ic_round-phone.png"}
                            display="block"



                        />
                        <Input
                            label="الصناعة"
                            placeholder="الصناعة"
                        />
                        <Input
                            label="الدولة"
                            placeholder="الدولة"
                            imgPath={"/assets/icons/form/mdi_location.svg"}
                            display="block"

                        />
                        <SelectComponent
                            options={sectorOptions}
                            head={"اختر القطاع من القائمة"}
                            selectedOption={selectedSector}
                            setSelectedOption={setSelectedSector}
                            label={"القطاع"}
                            imgPath={'/assets/icons/form/mdi_arrow-down-drop.png'}
                            w={24}
                            h={24}

                            display="block"

                        />
                        <Input
                            label="عدد الحاضرين"
                            placeholder="عدد الحاضرين"
                            imgPath="/assets/icons/form/solar_user-bold.svg"

                            display="block"
                        />
                        <Input
                            label="التخصص"
                            placeholder="التخصص"
                            imgPath={"/assets/icons/form/category.png"}
                            style={{
                                background: "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
                                border: "1px solid #fff",
                            }}
                            color="#fff"
                            display="block"
                        />
                        <div className={styles.message}>
                            <label htmlFor="message">كيف سمعت عنا</label>
                            <div className={styles.inp}>
                                <textarea id="message" placeholder="كيف سمعت عنا"></textarea>
                                <span>؟</span>
                            </div>
                        </div>
                        <div className={styles.topic}>
                            <label htmlFor="message">موضوع الإستشارة</label>
                            <div className={styles.inp}>
                                <textarea id="message" placeholder="اكتب استشارتك هنا"></textarea>
                                <span>؟</span>
                            </div>
                        </div>
                        <div className={styles.terms}>
                            <input type="checkbox" />
                            أوافق على سياسة الخصوصية و سياسة الإستخدام
                        </div>
                        <button type="submit" className={styles.registerWay}>
                            المتابعة
                            <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />
                        </button>
                    </form>
                </div>
            </section>
        </div>

    )
}
export default BusinessRegistration