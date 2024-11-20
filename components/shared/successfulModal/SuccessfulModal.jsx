import React, { useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function SuccessfulModal({ setShowModal , text }) {
    
    useEffect(() => {
     
        const timer = setTimeout(() => {
            setShowModal(false); 
        }, 3000); 

        return () => clearTimeout(timer);
    }, [ setShowModal]);

    return (
        <div className={styles.successfulPaymentModal}>
            <Image src="/assets/icons/payment/tick-circle.png" alt="successful payment" width={104} height={104} />
            <span>{text}</span>
        </div>
    );
}
