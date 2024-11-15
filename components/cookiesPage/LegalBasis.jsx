import BulletListComponent from './bulletListComponent/BulletListComponent'
const legalBasisData = {
 title : "ملفات تعريف الارتباط الوظيفية",
  options : [
    "تتذكر الخيارات التي تحددها ، مثل خيارات اللغة أو المنطقة التي تتواجد فيها. تساعد ملفات تعريف الارتباط هذه في جعل زيارتك أكثر شخصية ويتم حذفها تلقائيًا عند إغلاق المستعرض أو انتهاء الجلسة يمكنك حظر أو تعطيل ملفات تعريف الارتباط على جهازك في أي وقت من خلال الإشارة إلى ذلك في قوائم التفضيلات أو الخيارات في متصفحك."
  ]
}
export default function LegalBasis () {
  return (
   <>
   <BulletListComponent {...legalBasisData}/>
   </>
  )
}
