import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Team from '@/components/shared/client/Team/Team'
const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    alt: "رئيس تنفيذي لمكاتب TCMG للمحاماة ",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
  },
  {
    id: 2,
    name: "هشام محمود",
    category: "محامي جنائي",
    alt: "محامي جنائي في مصر",
    img: "/assets/images/homePage/lawyers/هشام محمود.png",
  },
  {
    id: 3,
    name: "خلف حسين",
    category: "محامي مدني",
    alt: "محامي مدني في مصر",
    img: "/assets/images/homePage/lawyers/خلف حسين.png",

  },
  {
    id: 4,
    name: "سهى خيري",
    category: "محامية بنوك",
    alt: "محامي بنوك في مصر",
    img: "/assets/images/homePage/lawyers/سهي خيري.png",
  },
  {
    id: 5,
    name: "كرم موريس",
    category: "محامي شركات",
    alt: "محامي شركات في مصر",
    img: "/assets/images/homePage/lawyers/كرم موريس.png",
  },
];

const HomeTeam = () => {
  return (
    <section className={styles.homeTeam}>
      <div className={styles.heading}>
        <div>
          <h2>فريق العمل</h2>
          <Image src="/assets/icons/crown.svg" width={30} height={30} alt='Crown Icon' />
        </div>
        <p>
          تتكون الهيكلة الإدارية للمجموعة التجارية والبحرية من أشهر محامين مصر أصحاب الخبرات في تخصصات القضايا المحلية والدولية المختلفة. حيث نضم مجموعة من الكوادر مجموعة من الكوادر البشرية المتخصصة في مجالات القانون المختلفة. ولأن الجودة والسرعة هي شعارنا؛ نعمل بروح الفريق لدمج الخبرات والمعرفة المتراكمة في دعم عملائنا الكرام على تحقيق أهدافهم القانونية.
        </p>

      </div>
      <Team lawyers={lawyers} />

    </section>
  )
}

export default HomeTeam;