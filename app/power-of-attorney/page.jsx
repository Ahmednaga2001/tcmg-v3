import Accordion from "@/components/hire-attorny/client/Accordion";
import RequestLawyer from "@/components/hire-attorny/client/requestLawyer/RequestLawyer";
import HireHero from "@/components/hire-attorny/hireHero/HireHero";
import HireWhyChoose from "@/components/hire-attorny/client/hireWhyChoose/WhyChoose";
import IndividualServices from "@/components/hire-attorny/client/hireServices/IndividualServices";
import CorporateService from "@/components/hire-attorny/client/hireServices/CorporateService";
import LegalInstructions from "@/components/hire-attorny/hireLegalInstructions/LegalInstructions";
import styles from "./page.module.css"
export const metadata = {
  title : "Power Of Attorney",
  description : "هل ترغب في توكيل محامي متخصص يتولى قضاياك ويحقق أهدافك القانونية ويمثلك أمام المحاكم؟ قم الان بعمل توكيل قضايا عام أو خاص لمحامي متخصص وأتمم الإجراءات بنجاح.",
  keywords : "توكيل محامي"
}
function HireAttorny() {
  return (
    <div className={styles.hireAttornyPage}>
     <HireHero/>
      <HireWhyChoose/>
      <IndividualServices />
      <CorporateService />
      <LegalInstructions />
      <RequestLawyer />
      <Accordion />
    </div>
  );
}
export default HireAttorny;
