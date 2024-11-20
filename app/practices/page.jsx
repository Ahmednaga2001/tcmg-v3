import Services from "@/components/shared/services/Services";
import styles from "./page.module.css";

const data = [
  "تأسيس الشركات",
  "التقاضي",
  "الملكية الفكرية",
  "الضرائب",
  "التأمين",
  "العقارات",
  "الأموال العامة",
  "التوظيف",
];
export const metadata = {
  title: "الممارسات",
};
const Practices = () => {
  return (
    <div className={styles.practices}>
      <section className={styles.hero}>
        <h1>الممارسات</h1>
      </section>
      <Services data={data} />
    </div>
  );
};

export default Practices;
