import styles from "@/components/ask-attorny/ask-attrony.module.css"
import Image from "next/image"
const About = () => {
  return (
    <section className={styles.about}>
          <h2>ما هي خدمة اسأل محامي؟</h2>
          <div>
         <p>تعرَّف على الحل القانوني الأمثل مع خدمة اسأل محامي في مصر لمكاتب TCMG للمحاماة. إذا كان لديك استفسار قانوني, أو تحتاج إلى إرشاد قانوني سريع وموثوق مهما كانت تساؤلاتك القانونية. هذه الخدمة، يمكنك طرح استفسارات قانونية لا حصر لها؛ لتحصل على إجابات سريعة من فريقنا المختصّ من محامين المجموعة التجارية والبحرية للمحاماة.</p>
            <Image src="/assets/images/askattorny/path406.png" alt="/assets/images/askattorny/path406.png" width={192.4} height={86.11}/>
          </div>
    </section>
  )
}

export default About
