import Image from "next/image"
import styles from "./page.module.css"
import Team from "@/components/shared/client/Team/Team"
const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
    alt : "رئيس تنفيذي لمكتب محاماة دولى فى مصر"
  },
  {
    id: 2,
    name: "هشام محمود",
    category: "محامي جنائي",
    img: "/assets/images/homePage/lawyers/هشام محمود.png",
    alt : "محامي جنائي في مصر"
  },
  {
    id: 3,
    name: "خلف حسين",
    category: "محامي مدني",
    img: "/assets/images/homePage/lawyers/خلف حسين.png",
    alt : "محامي مدني في مصر"
  },
  {
    id: 4,
    name: "سهى خيري",
    category: "محامية بنوك",
    img: "/assets/images/homePage/lawyers/سهي خيري.png",
    alt : "محامي بنوك في مصر"
  },
  {
    id: 5,
    name: "كرم موريس",
    category: "محامي شركات",
    img: "/assets/images/homePage/lawyers/كرم موريس.png",
    alt : "محامي شركات في مصر"
  },
];
const PartnerWithExperts = () => {
  return (
    <section className={styles.expert}>
      <h2>تعاون مع نخبة من المحامين لتحقيق أهدافك</h2>
      <div className={styles.content}>
        <p>إذا كنت محاميًا طموحًا يبحث عن وظائف محامين وتريد فرصة للتعاون مع أفضل الخبراء في المجال؛ فإننا نقدم لك بيئة مثالية لتحقيق طموحاتك المهنية. في TCMG, نوفر مجموعة من الوظائف القانونية لجمع نخبة من المحامين المتميزين الذين يمتلكون الخبرة والاحترافية العالية. نحن نقدم لك فرصة الانضمام إلى فريق متكامل, حيث يمكنك الإسهام بمهاراتك القانونية والمشاركة في تحقيق أهداف العملاء بطرق مبتكرة وفعالة. انضم إلينا وكن ضمن عمل فريق احترافي, يسعى دائمًا لتقديم أفضل الحلول القانونية.</p>
      </div>
     <div>
     <Team lawyers={lawyers} />
     </div>

    </section>
  )
}

export default PartnerWithExperts
