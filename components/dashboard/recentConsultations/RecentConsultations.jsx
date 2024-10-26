import styles from './page.module.css';

export default function RecentConsultations() {
  return (
    <div className={styles.recentConsultations}>
      <div>
        <span>الإستشارات الأخيرة</span>
        <button>مشاهدة الكل</button>
      </div>
     <div className={styles.tableContainer}>
     <table>
        <thead>
          <tr>
            <td>رقم الطلب</td>
            <td>التاريخ</td>
            <td>نوع الإستشارة</td>
            <td>المجموع الكلي</td>
            <td>الحالة</td>
            <td>تنفيذ</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2002080981</td>
            <td>2024 \ 10 / 1</td>
            <td>إستشارة هاتفية</td>
            <td>328.90</td>
            <td>مكتمل</td>
            <td className={styles.actions}>
              <button>مشاهدة الفاتورة</button>
              <button>إعادة الإستشارة</button>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
    </div>
  );
}
