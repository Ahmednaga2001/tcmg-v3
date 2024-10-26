import BulletListComponent from './bulletListComponent/BulletListComponent'
const legalBasisData = {
  title : "الأساس القانوني لمعالجة معلوماتك الشخصية",
  options : [
    "يتم توفير غالبية المعلومات الشخصية التي تجمعها المجموعة التجارية والبحرية بواسطتك طواعية على موقعنا الإلكتروني ، على سبيل المثال عند التسجيل .للانضمام إلى قائمة بريدية أو التسجيل في حدث ما ، وبالتالي يتم جمعها بإذن منك."
  ]
}
export default function LegalBasis () {
  return (
   <>
   <BulletListComponent {...legalBasisData}/>
   </>
  )
}
