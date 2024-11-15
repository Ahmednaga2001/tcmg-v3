import React from 'react'
import styles from "./page.module.css"
export default function CookiesFooter() {
  return (
   <section className={styles.cookiesFooter}>
    <p>
    يمكنك أيضًا حذف ملفات تعريف الارتباط المخزنة على جهازك. ومع ذلك ، فإن حظر ملفات تعريف الارتباط أو تعطيلها أو حذفها قد يحد من قدرتك على عرض جميع صفحات الموقع أو استخدام الخدمات عبر الإنترنت التي تتطلب التسجيل. يمكنك العثور على مزيد من المعلومات حول ملفات تعريف الارتباط على
    </p>
    <a href="https://www.allaboutcookies.org" target="_blank">www.allaboutcookies.org</a>

   </section>
  )
}
