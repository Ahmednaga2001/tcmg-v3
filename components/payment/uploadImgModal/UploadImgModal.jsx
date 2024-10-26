// UploadImgModal.jsx
import React, { useRef, useState } from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import SuccessfulPaymentModal from '../successfulPaymentModal/SuccessfulPaymentModal';

export default function UploadImgModal({ onSuccess, showModal, setShowModal }) {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal2, setShowModal2] = useState(false); 

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal2(true);
       
    };

    return (
        <>
            {!showModal2 && (
                <div className={styles.uploadImgModal}>
                    <div onClick={handleImageClick} className={styles.imageWrapper}>
                        {selectedImage ? (
                            <Image src={selectedImage} alt="Uploaded" width={164} height={326} />
                        ) : (
                            <Image src="/assets/images/payment/imgUpload.png" alt="Upload Image" width={164} height={326} />
                        )}
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className={styles.hiddenFileInput}
                        onChange={handleFileChange}
                    />
                    {selectedImage && (
                        <span>تم إرفاق الصورة بنجاح</span>
                    )}

                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!selectedImage} 
                    >
                        المتابعة
                        <Image src="/assets/icons/form/arrow-left-black.png" alt="Arrow Left" width={24} height={24} />
                    </button>
                </div>
            )}
            {showModal2 && (
                <SuccessfulPaymentModal onSuccess={onSuccess} setShowModal={setShowModal2} />
            )}
        </>
    );
}
