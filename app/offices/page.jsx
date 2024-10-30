import styles from "./page.module.css";
import ContactInformation from "@/components/branches/ContactInformation";
import ContactNumbers from "@/components/branches/ContactNumbers";
import BranchHero from "@/components/branches/branchHero/BranchHero";
import BranchLocations from "@/components/branches/BranchLocations/BranchLocations";
import BranchContactForm from "@/components/branches/client/branchContactForm/BranchContactForm";

import ContactMobile from "@/components/branches/ContactMobile/ContactMobile";
export const metadata = {
  title: "Offices",
  description : "هل تبحث عن عناوين وفروع مكاتب محامين أو مكاتب محاماة في القاهرة؟ لا داعى للبحث أكثر، نحن بجانبك من خلال فروعنا الموجودة فى مصر ودول الوطن العربي.",
  keywords : "فروع مكاتب TCMG، مكاتب محاماة دولية، فروع مكاتب المحامين"
};

function Branches() {
  return (
    <div className={styles.branchPage}>
      <BranchHero />

     <BranchLocations/>

      <ContactInformation />
      <ContactNumbers />
      

      <BranchContactForm />

    </div>
  );
}

export default Branches;
