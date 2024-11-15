import BulletListComponent from "./bulletListComponent/BulletListComponent"

const accessRightsData = {
  title : "ملفات تعريف الارتباط الخاصة بالتحليلات والأداء",
  options: [
     "جوجل أناليتكس تشمل ملفات وتتبع الصفحات التي تزورها ومقاطع الفيديو والمحتويات الأخرى التي تصل إليها ، حتى نتمكن من تحديد المحتوى الأكثر شعبية وتحسين أداء موقعنا على الويب.<br/> تسجل ملفات تعريف الارتباط هذه بيانات إحصائية مجهولة فقط ولا تجمع أي معلومات شخصية يمكن أن تحدد هوية الزائر."

  ]
}
export default function AccessRights () {
  return (
    <>
    <BulletListComponent {...accessRightsData}/>
    </>
  )
}
