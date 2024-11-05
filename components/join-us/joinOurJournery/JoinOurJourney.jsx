import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"
const JoinOurJourney = () => {
  return (
    <section className={styles.ourJourney}>
        <div>
        <h2>رحلتنا في بناء شبكة قانونية بلا حدود</h2>
        <p>نسعى دائمًا لتوسيع نفوذنا القانوني عالميًا من خلال بناء شراكات استراتيجية مع مكاتب وشركات محاماة دولية أخرى. هدفنا هو خلق تحالفات قوية تعزز الجودة والخبرة القانونية، وتواجه التحديات القانونية الدولية بكفاءة وتميز. ندعوكم للانضمام إلينا في رحلتنا نحو تشكيل شبكة قانونية عالمية تتجاوز العدالة والنزاهة كل حدود.</p>
        <Link href="/protocol">
        تعرف علي فروعنا
      <Image src="/assets/icons/joinus/arrow-left.png" width={24} height={24} alt="arrow-left.png"/>
      </Link>
        </div>
    </section>
  )
}

export default JoinOurJourney
