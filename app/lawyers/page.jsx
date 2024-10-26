import Hero from "@/components/shared/hero/Hero";
import styles from "./page.module.css";
import LawyersForm from "@/components/lawyers/client/lawyersForm/LawyersForm";


const page = () => {
  return (
    <div className={styles.lawyersPage}>
      <Hero
        title={"المحامين"}
        path={"/assets/images/lawyers/Hero Section - المحامين.jpg"}
        w = {256}
        h = {74}
      />
     <LawyersForm/>
    </div>
  );
};

export default page;
