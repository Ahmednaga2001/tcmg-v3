import React, { useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function SuccessfulPaymentModal({ onSuccess, setShowModal }) {
    
    useEffect(() => {
     
        const timer = setTimeout(() => {
            setShowModal(false); 
            onSuccess(); 
        }, 3000); 

        return () => clearTimeout(timer);
    }, [onSuccess, setShowModal]);

    return (
        <div className={styles.successfulPaymentModal}>
            <Image src="/assets/icons/payment/tick-circle.png" alt="successful payment" width={104} height={104} />
            <span>تم الدفع بنجاح</span>
            <span>سيتم توجيهك لملخص طلبك</span>
            <span>التواصل خلال ساعة من الحجز المواعيد من 9 ص حتي 11 م</span>
            <Image src="/assets/icons/payment/loading-gray-tlLFhw2Iik.png" alt="loading icon" width={40} height={40} />
        </div>
    );
}
