import Image from "next/image";
import styles from "./page.module.css"
import { ServiceOrCaseItem } from "./ServiceOrCaseItem ";
import { ServiceOrCaseItemSlider } from "./ServiceOrCaseItemSlider";
function HomeScroll({ cases, services }) {
    return (
        <>
            <section className={styles.scroll}>
                <div className={styles.right}>
                    <h2>خدمات قانونية عالمية المستوى منذ 1986</h2>
                    <p>
                        نختصّ بتقديم أكثر من 30 خدمة قانونية بخبرات عالمية وفهم واسع للبيئة
                        القانونية. لتقديم أفضل مستوى من الحلول القانونية على الصعيد المحلي
                        والدولي في مكتبنا بقلب مدينة القاهرة. فمن خلال دمج خبرات فريق العمل
                        المكون من أكثر من 40 محامي متخصصين في مجالات القانون المختلفة، تكمن
                        قوتنا في تقديم خدمات قانونية بمعايير أداء عالمية ومستوى فاعلية ممتاز
                        في الجودة والوقت.
                    </p>
                    <span className="link">
                        توجه إلي صفحة الخدمات القانونية
                        <Image
                            src="assets/icons/arrow-left.svg"
                            alt="Arrow Left Small"
                            width={20}
                            height={20}
                        />
                    </span>
                </div>
                <div className={styles.left}>

                    <ServiceOrCaseItem services={services} />

                </div>
                <div className={styles.leftSlider}>
                <ServiceOrCaseItemSlider services={services}/>

                </div>
            </section>
            <section className={styles.scroll}>
                <div className={styles.right}>
                    <h2>محامين خبراء في مجالات القانون والقضايا المختلفة</h2>
                    <p>
                        ما يميز مكتبنا عن مكاتب المحاماة الأخرى، هو انفرادنا بالتخصصات
                        القانونية التي تتطلب خبرة قانونية وفكر استراتيجي من الدرجة الأولى.
                        حيث نفخر بوجود شركائنا المتخصصين في مجالات القانون المختلفة،
                        والمستعدون لدعم عملائنا الكرام بكل السبل الممكنة لتحقيق أهدافهم
                        بأسرع وقت وبأعلى جودة ممكنة؛ سعياً منا لنصبح أفضل شركة محاماة في مصر
                        في المستقبل القريب.
                    </p>
                    <span className="link">
                        تصفح كامل الخدمات القانونية
                        <Image
                            src="assets/icons/arrow-left.svg"
                            alt="Arrow Left Small"
                            width={20}
                            height={20}
                        />
                    </span>
                </div>
                <div className={styles.left}>
                    <ServiceOrCaseItem services={cases} />
                </div>
                <div className={styles.leftSlider}>
                <ServiceOrCaseItemSlider services={cases}/>

                </div>
            </section>
        </>
    );
}

export default HomeScroll