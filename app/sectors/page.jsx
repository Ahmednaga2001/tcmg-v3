import Services from "@/components/shared/services/Services";
import styles from "./page.module.css";


const data = [
  "أسواق المال",
  "الإندماج والاستحواذ",
  "التحكيم التجاري",
  "التطوير العقاري والإنشاءات",
  "الخدمات البنكية والمالية",
  "الرعاية الصحية",
  "التجزئة والمستهلك",
  "التقاضي",
];
export const metadata = {
  title: "القطاعات",
};
const Sectors = () => {
  return (
    <div className={styles.sectors}>
      <section className={styles.hero}>
        <h1>القطاعات</h1>
      </section>{" "}
      <Services data={data} />
    </div>
  );
};

export default Sectors;
