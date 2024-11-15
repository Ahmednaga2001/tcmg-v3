import Link from 'next/link'
 
export default function NotFound() {
  return (
  <section className='notFound'>
    <div className='notFoundContent'  >
      <h1>404</h1>
     <h2>لايمكننا العثور علي الصفحة</h2>
     <p>تحقق من العنوان الخاص بالموقع وحاول مرة أخرى ، أو ابحث عن ما تريده على صفحتنا الرئيسية.</p>
    </div>
  </section>
  )
}