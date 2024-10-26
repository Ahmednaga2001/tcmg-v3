// FollowPayment.jsx
import React, { useState } from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import CardInfo from '../cardInfo.jsx/CardInfo';
import SuccessfulPaymentModal from '../successfulPaymentModal/SuccessfulPaymentModal';
import UploadImgModal from '../uploadImgModal/UploadImgModal';
import { useRouter } from 'next/navigation';

const paymentOptions = [
    {
        id: 1,
        name: 'كاشير',
        logo: '/assets/images/payment/kashier.svg',
        alt: 'Kashier Logo',
        value: 'kashier'
    },
    {
        id: 2,
        name: 'باى موب',
        logo: '/assets/images/payment/paymob.svg',
        alt: 'Paymob Logo',
        value: 'paymob'
    },
    {
        id: 3,
        name: 'انستا باي',
        logo: '/assets/images/payment/instapay.svg',
        alt: 'Instapay Logo',
        value: 'instapay'
    },
];

export default function FollowPayment() {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedPayment === 'kashier' || selectedPayment === 'paymob') {
            setShowModal(true);
        }
        if (selectedPayment === 'instapay') {
            setShowModal2(true);
        }
    };

    const handlePaymentSuccess = () => {
        setIsPaymentSuccess(true);
        setShowModal(false);
        setShowModal2(false);
        router.push('/request-summary');
    };

    return (
        <section className={styles.followPayment}>
            <div className={styles.formPage}>
                <p><strong>الدفع عن طريق </strong>(اختر الطريقة المفضلة لك)</p>
                <div className={styles.paymentParent}>
                    {paymentOptions.map((option) => (
                        <div
                            key={option.id}
                            className={styles.paymentLogo}
                            onClick={() => setSelectedPayment(option.value)}
                        >
                            <span className={styles.checkmark}>
                                {selectedPayment === option.value && (
                                    <Image
                                        src="/assets/icons/payment/correct.svg"
                                        alt="Correct Icon"
                                        width={53}
                                        height={53}
                                    />
                                )}
                            </span>
                            <div>
                                <span>{option.name}</span>
                                <p>
                                    <Image
                                        src={option.logo}
                                        alt={option.alt}
                                        width={160}
                                        height={38}
                                        quality={100}
                                    />
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.btnParent}>
                        <span className={styles.checkmark}></span>
                        <button className={styles.btn} onClick={handleSubmit}>
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
            </div>
            <CardInfo />

            {showModal && (
                <SuccessfulPaymentModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    onSuccess={handlePaymentSuccess}
                />
            )}

            {showModal2 && (
                <UploadImgModal
                    showModal={showModal2}
                    setShowModal={setShowModal2}
                    onSuccess={handlePaymentSuccess}
                />
            )}
        </section>
    );
}
