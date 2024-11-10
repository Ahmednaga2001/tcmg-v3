"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import CookiesManagement from "./CookiesManagement";
export default function Cookies() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
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
              تفضيلات ملفات تعريف الارتباط أدناه. هناك بعض ملفات تعريف الارتباط،
              المصنفة كـ "ضرورية للغاية"، وهي أساسية لوظائف الموقع ولا يمكن
              إيقاف تشغيلها. يمكنك معرفة المزيد عن كل نوع من ملفات تعريف
              الارتباط، غرضه، وفترة الاحتفاظ به في سياسة ملفات تعريف الارتباط
              الخاصة بنا. لتعديل تفضيلاتك، قم بزيارة قسم "إدارة الكوكيز".والمزيد
              من المعلومات يمكنك معرفة المزيد عن كيفية استخدام المجموعة التجارية
              والبحرية للمحاماة والأطراف الثالثة لبياناتك من خلال قراءة سياسة
              الخصوصية وسياسة ملفات تعريف الارتباط الخاصة بنا.
            </p>
            <div className={styles.buttons}>
              <button>حفظ وإغلاق</button>
              <button>رفض الكل</button>
              <button onClick={() => setOpen(true)}>إدارة الكوكيز</button>
            </div>
          </div>
        </section>
      ) : (
        <CookiesManagement />
      )}
    </>
  );
}
