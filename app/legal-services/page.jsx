import styles from "./page.module.css";

import Accordion from "@/components/legal-services/client/Accordion";
import LegalServicesHero from "@/components/legal-services/legalServicesHero/LegalServicesHero";
import LegalServicesSuccessFactor from "@/components/legal-services/legalServicesSuccessFactor/LegalServicesSuccessFactor";
import LegalServiceOurOfferings from "@/components/legal-services/client/legalServiceOurOfferings/LegalServiceOurOfferings";
import LegalServicesSectors from "@/components/legal-services/legalServicesSectorAndPractices/LegalServicesSectors";
import LegalServicesPractices from "@/components/legal-services/legalServicesSectorAndPractices/LegalServicesPractices";
import LegalServicesSuccessFactorMob from "@/components/legal-services/legalServicesSuccessFactorMob/LegalServicesSuccessFactorMob";
export const metadata = {
  title: 'Legal-Services',
  description : "إذا واجهتك أي مشكلة قانونية وترغب في الحفاظ على حقوقك فما عليك إلا التوجه إلى مكاتب TCMG؛ للحصول على خدمات قانونية بمعايير عالمية المستوى من أفضل خبراء القانون.",
  keywords : "خدمات قانونية، خدمات قانونية إلكترونية، خدمات مكتب المحاماة، باقة الخدمات القانونية"
}
function LegalServices() {
  return (
    <div className={styles.legalServicesPage}>
     <LegalServicesHero/>
     <LegalServiceOurOfferings/>
     <LegalServicesSuccessFactor/>
     <LegalServicesSuccessFactorMob/>
      <LegalServicesPractices/>
      <LegalServicesSectors/>
      <Accordion/>
    </div>
  );
}

export default LegalServices;
