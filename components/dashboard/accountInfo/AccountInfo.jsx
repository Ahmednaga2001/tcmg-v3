import styles from './page.module.css'

export default function AccountInfo() {
  return (
    <>
      <h2>حسابي</h2>
      <span className={styles.infoAccount}>معلومات الحساب</span>
      <div className={styles.info}>
        <div className={styles.data}>
          <span>معلومات التواصل</span>
          <span>Esraa Adel</span>
          <span>esraa@gmail.com</span>
          <div className={styles.buttons}>
            <button>تعديل</button>
            <button>تغير كلمة المرور</button>
          </div>
        </div>
        <div className={styles.data}>
          <span>النشرات الإخبارية</span>
          <span>أنت غير مشترك في النشرة الإخبارية لدينا.</span>
          <button>اشتراك</button>
        </div>
      </div>
    </>
  )
}
