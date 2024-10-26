"use client";
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function RequestSummary() {
  const router = useRouter()
  const handlePrint = () => {
    window.print()
  }
  return (
    <div className={styles.requestSummary}>
      <section>
        <h2 className={styles.heading}>ملخص الطلب</h2>
        <div className={styles.buttons}>
          <div >
            <button onClick={() => router.push("/")} >
              العودة إلي الصفحة الرئيسية
              <Image src="/assets/icons/form/arrow-left-black.png" alt="Cupon Icon" width={14} height={14} />
            </button>
            <button onClick={() => router.push("/dashboard")}>
              حسابى
              <Image src="/assets/icons/form/arrow-left-white.png" alt="Cupon Icon" width={14} height={14} />
            </button>
          </div>
          <button onClick={handlePrint}>
            طباعة
            <Image src="/assets/icons/form/printer.png" alt="Cupon Icon" width={24} height={24} />
          </button>
        </div>

      </section>

      <section className={styles.summary}>
      <div className={styles.parent}>
      <span className={styles.order}>الطلب #0000818</span>
        <div className={styles.tableContainer}> 
          <table>
            <thead>
              <tr>
                <th>الخدمة</th>
                <th>السعر</th>
                <th>الاجمالى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>إستشارة هاتفية</td>
                <td>EGP 299.00</td>
                <td>EGP 299.00</td>
              </tr>
              <tr className={styles.total}>
                <td>الإجمالي الفرعي</td>
                <td></td>
                <td>EGP 299.00</td>
              </tr>
              <tr>
                <td className={styles.tax}>
                  <span>تفاصيل الضريبة</span>
                  <span>ضريبة (10%)</span>
                  <span>إجمالي الضريبة</span>
                </td>
                <td></td>
                <td className={styles.tax}> 
                  <span>EGP 29.90</span>
                  <span>EGP 29.90</span>
                  <span>EGP 29.90</span>
                </td>
              </tr>
            

              <tr>
                <td>إجمالي الفاتورة</td>
                <td></td>
                <td>EGP 328.90</td>
              </tr>
              <tr>
                <td>المبلغ المدفوع</td>
                <td></td>
                <td>EGP 328.90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      </section>
    </div>
  )
}
