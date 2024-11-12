import React, { useState } from "react";
import styles from "./page.module.css";

export default function CookiesManagement({onSave, onRejectAll,setMainOpen}) {
  const [preferences, setPreferences] = useState({
    essential: true, 
    functional: false,
    analytics: false,
    advertising: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };



  const handleRejectAll = () => {
    setPreferences({
      essential: true, 
      functional: false,
      analytics: false,
      advertising: false,
    });
    onRejectAll(); 
    setMainOpen(false);
  };

  const handleAcceptAll = () => {
    const updatedPreferences = {
      essential: true,
      functional: true,
      analytics: true,
      advertising: true,
    };
  
    setPreferences(updatedPreferences); // تحديث الحالة أولاً
    onSave(updatedPreferences); // ثم إرسال التفضيلات المحدثة إلى onSave
    setMainOpen(false); // إغلاق النافذة
  };
  

  return (
    <section className={styles.cookiesMang}>
      <div className={styles.headerMang}>
        <h3>إدارة الكوكيز</h3>
        <p>
          الكوكيز هي ملفات نصية صغيرة يمكن للمواقع الإلكترونية استخدامها لتحسين
          تجربة المستخدم.القانون ينص على أنه يجوز لنا تخزين الكوكيز على جهازك
          إذا كانت ضرورية للغاية لعمل هذا الموقع. لجميع أنواع الكوكيز الأخرى ،
          نحتاج إلى إذنك. يستخدم هذا الموقع أنواعًا مختلفة من الكوكيز. يتم وضع
          بعض ملفات تعريف الارتباط بواسطة خدمات خارجية تظهر على صفحاتنا.
        </p>
        <button onClick={handleAcceptAll} className={styles.acceptAll}>
          قبول الجميع
        </button>
      </div>
      <div className={styles.cookiesList}>
        <div className={styles.cookieItemOne}>
          <div className={styles.cookieItemContainer}>
            <div>
              <strong>الكوكيز الأساسية </strong>
              <strong>دائمًا نشط</strong>
            </div>
            <p>
              هذه الكوكيز ضرورية لكي يعمل الموقع الإلكتروني ولا يمكن إيقاف
              تشغيلها. يتم تعيين هذه الكوكيز بشكل افتراضي ولا يمكن تعطيلها.
            </p>
          </div>
        </div>

        <div className={styles.cookieItem}>
          <div className={styles.cookieItemContainer}>
            <div>
              <strong>الكوكيز الوظيفية</strong>

              <span>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    name="functional"
                    checked={preferences.functional}
                    onChange={handleChange}
                  />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </span>
            </div>
            <p>
              تمكّننا هذه الكوكيز من توفير وظائف محسّنة وتخصيص المحتوى. على سبيل
              المثال، قد نستخدم هذه الكوكيز لتوفير وعرض مقاطع الفيديو والمحتوى
              المضمّن ولتوفير بعض الميزات الأخرى. يتم إدارة بعض هذه الكوكيز من
              قِبل أطراف ثالثة، بما في ذلك موردو الأطراف الثالثة الذين نستخدم
              خدماتهم على موقعنا الإلكتروني.
            </p>
          </div>
        </div>

        <div className={styles.cookieItem}>
          <div className={styles.cookieItemContainer}>
            <div>
              <strong>كوكيز التحليلات</strong>
              <span>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    name="analytics"
                    checked={preferences.analytics}
                    onChange={handleChange}
                  />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </span>
            </div>
            <p>
              تجمع هذه الكوكيز معلومات حول كيفية استخدامك لموقعنا الإلكتروني.
            </p>
          </div>
        </div>

        <div className={styles.cookieItem}>
          <div className={styles.cookieItemContainer}>
            <div>
              <strong>كوكيز الإعلانات</strong>
              <span>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    name="advertising"
                    checked={preferences.advertising}
                    onChange={handleChange}
                  />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </span>
            </div>
            <p>
              قد تجمع هذه الكوكيز بيانات التصفح والنشاط على مواقعنا الإلكترونية
              وعلى مواقع الجهات الخارجية.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.buttons} ${styles.bottomButtons}`}>
        <button onClick={handleAcceptAll}>حفظ وإغلاق</button>
        <button onClick={handleRejectAll}>رفض الكل</button>
      </div>
    </section>
  );
}
