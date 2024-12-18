

import styles from "./page.module.css";
import Image from "next/image";

const teamMembers = [
  {
    name: "الاستاذ محمد أبو ضيف",
    alt : "الرئيس التنفيذي للمجموعة التجارية والبحرية",
    position: "الرئيس التنفيذي",
    imageSrc: "/assets/images/about/mohamed.png",
    description: "العدالة ليست مجرد مفهوم مجرد, بل هي هدف ومسعى أرغب بتحقيقه على أكبر نطاق ممكن؛ فأنا أمثل صوت المظلوم بالدفاع عنه ضد أي اعتداء خارجي؛ استرجاعًا لحقوقه المسلوبة, وحفاظًا عليها.",
    iconSrc: "assets/symbols/about/hand.svg",
    iconAlt: "Symbol of a hand"
  },
  {
    name: "أستاذة سهى خيري",
    alt:" أفضل محامية بنوك",
    position: "محامية بنوك",
    imageSrc: "/assets/images/about/soha.png",
    description : "مهنة المحاماة ليست مجرد تقاضي كما يعتقد البعض؛ فأنا أسعى جاهدةً فى المجموعة التجارية والبحرية للمحاماة لتَولِّي مهمة إتمام الإجراءات القانونية مع البنوك والمصارف، بمساعدة جميع الكيانات من الأفراد والشركات والمؤسسات في مسائلها المالية وإنجازها تمامًا كما يقول القانون.",
    iconSrc: "assets/symbols/about/hand.svg",
    iconAlt: "Symbol of a hand"
  },
  {
    name: "أستاذ كرم موريس",
    alt:"محامي تأسيس شركات",
    position: "محامي شركات",
    imageSrc: "/assets/images/about/karimmores.png",
    description: "أمثل الدعم القانوني من الجانبين في التماثل دفاعًا عن حقوق الشركات خاصة الصغيرة, وتقديم الدعم والمتابعة الدائمة منذ بداية تأسيس الشركة حتى الانتهاء من إتمام الإجراءات القانونية وأمور التوثيق؛ ساعيًا لمساعدة رجال الأعمال والمبتدئين على ممارسة عملهم بناءً على أساس قانوني راسخ.",
    iconSrc: "assets/symbols/about/hand.svg",
    iconAlt: "Symbol of a hand"
  }
];

const AboutTeam = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.headingTeam}>
        فريقنا من المحامين والمستشارين الخبراء
      </h2>
      <div className={styles.teamParent}>
        {teamMembers.map((member, index) => (
          <div className={styles.teamCard} key={index}>
            <div className={styles.teamCardContainer}>
              <span className={styles.teamCardIcon}>
                <Image
                  src={member.iconSrc}
                  width={30}
                  height={30}
                  alt={member.iconAlt}
                />
              </span>
              <p>{member.description}</p>
            </div>
            <div className={styles.teamCardBottomData}>
              <div>
                <p>{member.name}</p>
                <span>{member.position}</span>
              </div>
              <Image
                src={member.imageSrc}
                width={60}
                height={60}
                alt={member.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
