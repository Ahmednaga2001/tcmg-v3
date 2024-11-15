import Image from 'next/image'
import styles from './page.module.css'
import BulletListComponent from '../bulletListComponent/BulletListComponent'
const dataControlData = {
  title : "ملفات تعريف الارتباط",
  options : [
"هي ملفات نصية تحتوي على كميات صغيرة من المعلومات التي يمكن تنزيلها على جهازك عند زيارة موقع ويب. تتيح لنا ملفات تعريف الارتباط تحليل كيفية استخدام موقعنا الإلكتروني ومراقبة أداء موقعنا حتى نتمكن من إنشاء أفضل تجربة للمستخدم. نستخدم أيضًا ملفات تعريف الارتباط لتخصيص إعدادات اللغة ولتوفير ميزات الوسائط الاجتماعية. باستخدام موقعنا الإلكتروني ، فإنك توافق على استخدام ملفات تعريف الارتباط للأغراض التالية"
  ]
}
export default function DataCollection() {
  return (
    <BulletListComponent {...dataControlData} />

  )
}
