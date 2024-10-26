"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "@/components/ask-attorny/ask-attrony.module.css"
const PopUp = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupVisible]);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div>
      {isPopupVisible && (
        <section className={styles.popup}>
          <div className={styles.popupContent}>
            <Image
              src="/assets/icons/askattorny/Questio.png"
              width={151}
              height={198}
              alt="question icon"
            />
            <p>
              اطرح علي أحد مستشاري المجموعة التجارية والبحرية استفسارك القانوني
              وسيتم الرد عليك في أقرب وقت ممكن.
            </p>
            <p>
              لا تكون أو تنشيء هذه الخدمة أي علاقة قانونية بين المحامي والعميل أو
              موقعنا الإلكتروني
            </p>
            <p>
              يتم توفير هذه الخدمة &quot;اسأل محامي&quot; في هذا الموقع فقط لأولئك الذين قد
              يرغبون في معرفة معلومات قانونية عامة وهي ليست بديلاً عن الحصول على
              استشارة قانونية حول سؤال محدد من محامٍ مرخص.
            </p>
            <p>
              لا يؤدي إلى إنشاء أي علاقة قانونية رسمية بين المحامي والعميل أو بين
              موقعنا الإلكتروني أو إنشاء أي علاقة أخرى مميزة أو سرية. وفقًا لذلك، لا
              تفصح لنا عن أي معلومات ترغب في أن تظل سرية أو خاصة. إذا كنت تنوي إرسال
              أي معلومات سرية عبر البريد الإلكتروني الخاص بتلك الخدمة الموضح أعلاه
              أو عن طريق نشر أي من المحتوى الخاص بك في هذه الصفحة أو على موقعنا
              الإلكتروني، يجب عليك أن تفهم أنك تفعل ذلك على مسؤوليتك الخاصة ونحن
              &quot;المجموعة التجارية والبحرية&quot; غير مسؤولين عن إغفالك الكلي أو الجزئي
              لذلك.
            </p>

            <button onClick={handleClosePopup}>
              تابع
              <Image
                src="/assets/icons/askattorny/arrow-left(1).png"
                alt="Arrow Left Small"
                width={26}
                height={26}
              />
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export default PopUp
