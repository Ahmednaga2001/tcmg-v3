"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import CookiesManagement from "./CookiesManagement";

export default function Cookies() {
  const [open, setOpen] = useState(false);
  const [mainOpen, setMainOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false); // حالة جديدة للتحقق من الكوكيز

  // دالة حفظ التفضيلات
  const handleSavePreferences = (preferences) => {
    fetch("/api/cookies/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // بعد حفظ التفضيلات، نغلق النافذة
        setOpen(false);
        setMainOpen(false);
      })
      .catch((error) => console.error("خطأ في حفظ التفضيلات:", error));
  };

  const handleRejectAllPreferences = () => {
    const preferences = {
      essential: true,
      functional: false,
      analytics: false,
      advertising: false,
    };

    fetch("/api/cookies/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("تم رفض جميع الكوكيز.");
        setOpen(false);
        setMainOpen(false);
      })
      .catch((error) => console.error("خطأ في رفض التفضيلات:", error));
  };

  // تحقق من وجود الكوكيز عند تحميل الصفحة
  useEffect(() => {
    const cookies = document.cookie;
    // إذا كانت الكوكيز موجودة، أغلق النافذة على الفور
    if (
      cookies.includes("essential=true") ||
      cookies.includes("functional=true") ||
      cookies.includes("analytics=true") ||
      cookies.includes("advertising=true")
    ) {
      setIsChecked(true); // تم التحقق من الكوكيز
      setMainOpen(false); // إغلاق النافذة
    } else {
      setIsChecked(true); // تم التحقق من الكوكيز
    }
  }, []);

  // لا تظهر النافذة إلا إذا كانت الكوكيز غير موجودة ولم يتم التحقق منها بعد
  if (!isChecked) {
    return null; // لا تظهر النافذة إذا لم يتم التحقق من الكوكيز بعد
  }
  return (
    <>
      {mainOpen &&
        (!open ? (
          <section className={styles.cookies}>
            <div className={styles.header}>
              <Image
                src="/assets/icons/form/lock.svg"
                width={16}
                height={16}
                alt="lock icon"
              />
              <h3>نحن نقدر خصوصيتك</h3>
            </div>
            <div className={styles.content}>
              <p>
                يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك إدارة
                تفضيلات ملفات تعريف الارتباط أدناه. هناك بعض ملفات تعريف
                الارتباط، المصنفة كـ "ضرورية للغاية"، وهي أساسية لوظائف الموقع
                ولا يمكن إيقاف تشغيلها. يمكنك معرفة المزيد عن كل نوع من ملفات
                تعريف الارتباط، غرضه، وفترة الاحتفاظ به في سياسة ملفات تعريف
                الارتباط الخاصة بنا. لتعديل تفضيلاتك، قم بزيارة قسم "إدارة
                الكوكيز".والمزيد من المعلومات يمكنك معرفة المزيد عن كيفية
                استخدام المجموعة التجارية والبحرية للمحاماة والأطراف الثالثة
                لبياناتك من خلال قراءة سياسة الخصوصية وسياسة ملفات تعريف
                الارتباط الخاصة بنا.
              </p>
              <div className={styles.buttons}>
                <button
                  onClick={() =>
                    handleSavePreferences({
                      essential: true,
                      functional: true,
                      analytics: true,
                      advertising: true,
                    })
                  }
                >
                  قبول الجميع
                </button>{" "}
                <button onClick={handleRejectAllPreferences}>رفض الكل</button>
                <button onClick={() => setOpen(true)}>إدارة الكوكيز</button>
              </div>
            </div>
          </section>
        ) : (
          <CookiesManagement
            setMainOpen={setMainOpen}
            onSave={handleSavePreferences}
            onRejectAll={handleRejectAllPreferences}
          />
        ))}
    </>
  );
}
