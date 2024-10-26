import React, { useState } from 'react';
import styles from "./page.module.css";
import Input from '@/components/ui/Input';
import SelectComponent from '@/components/ui/selectComponent/SelectComponent';
import Image from 'next/image';
import CardInfo from '../cardInfo.jsx/CardInfo';
import ModalPrivacy from '../modalPrivacy/ModalPrivacy';

const options = [
    { value: 'أفراد' },
    { value: 'مؤسسات وشركات' },
];

export default function AdditionalInfo({ onNextStep }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showModal, setShowModal] = useState(false); // Control modal visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true); 
    };

 
    const handleModalClose = () => {
        setShowModal(false);
        onNextStep(); 
    };

    return (
        <section className={styles.additionalInfo}>
            <div className={styles.formPage}>
                <p>يرجي إدخال بيانات بشكل صحيح وسيتم التواصل خلال ساعة من الحجز في خلال مواعيد العمل الرسمية من 9 صباحًا لـ 11 مساءًا</p>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="الاسم بالكامل"
                        placeholder="الاسم بالكامل"
                        imgPath="/assets/icons/form/solar_user-bold.png"
                      
                        display = "block"
                    />
                    <Input 
                        label="رقم الهاتف"
                        placeholder={"رقم الهاتف"}
                        imgPath={"/assets/icons/form/ic_round-phone.png"} 
                        display = "block"
                    
                        

                    />
                    <SelectComponent 
                        options={options} 
                        head={"فئة العميل"} 
                        selectedOption={selectedOption} 
                        setSelectedOption={setSelectedOption}
                        label={"فئة العميل ( إختر النوع)"}
                        imgPath={'/assets/icons/form/mdi_arrow-down-drop.png'}
                        w={24}
                        h={24}
                    
                        display = "block"

                    />
                    <Input 
                    label="التخصص" 
                    placeholder="التخصص"
                    imgPath={"/assets/icons/form/category.png"}
                   
                    display = "block"
                    />
                    <div className={styles.message}>
                        <label htmlFor="message">موضوع الإستشارة</label>
                        <div className={styles.inp}>
                            <textarea id="message" placeholder="كيف سمعت عنا؟"></textarea>
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
