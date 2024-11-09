import Hero from "@/components/shared/hero/Hero";
import styles from "./page.module.css";
import LawyersForm from "@/components/lawyers/client/lawyersForm/LawyersForm";


const page = () => {
  return (
    <div className={styles.lawyersPage}>
   
         <section className={styles.hero}>
        <h1>خبراؤنا</h1>
      </section>
     <LawyersForm/>
    </div>
  );
};

export default page;
