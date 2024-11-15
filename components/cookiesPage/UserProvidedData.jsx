import BulletListComponent from './bulletListComponent/BulletListComponent'
const userData = {
title : "ملفات تعريف الارتباط الأساسية",
options : [
  ' هذه ضرورية لتمكينك من التنقل حول الموقع واستخدام ميزاته ، مثل الوصول إلى المناطق الآمنة على موقع الويب. ']
}
export default function UserProvidedData() {
  return (
   <>
   <BulletListComponent {...userData}/>
   </>
  )
}
