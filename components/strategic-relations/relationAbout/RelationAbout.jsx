import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
const RelationAbout = () => {
  return (
    <section className={styles.about}>
    <div className={styles.top}>
      <h2>من نحن</h2>
      <Image
        src="/assets/images/strategicrelations/topL.png"
        width={135}
        height={135}
        alt="topL image"
      />
    </div>
    
    <div className={styles.body}>
      <p>
      نعد من أكبر مكاتب المحاماة في مصر, حيث نتميز بالتفاني في تقديم خدمات قانونية متميزة لعملائنا على المستوى المحلي والدولي ايضاً. وما يجعلنا ذلك هو, أننا نجمع بين الخبرة العميقة والابتكار في تقديم حلول قانونية شاملة تلبي احتياجات العملاء. بفضل فريقنا المتخصص والملتزم، نسعى جاهدين لتحقيق أفضل النتائج لعملائنا في مختلف المجالات القانونية. تتمثل رؤيتنا في تقديم خدمة استثنائية لعملائنا, وأيضاً نسعى إلى بناء بروتوكول تعاون مستدام مع مكاتب المحاماة الأخرى؛ مما يجعلنا ويجعلهم الشريك المفضل للقانون والمشورة القانونية الموثوقة.
      </p>
      <span className={styles.linkKnow}>
      <Link href="about-us" className="link">
                        تعرف علينا
                        <Image
                            src="assets/icons/arrow-left.svg"
                            alt="Arrow Left Small"
                            width={20}
                            height={20}
                        />
                    </Link>
      </span>
      <Image
        src="/assets/images/strategicrelations/bottomL.png"
        width={135}
        height={135}
        alt=" bottomL image"
      />
       
    </div>
    </section>
  )
}

export default RelationAbout
