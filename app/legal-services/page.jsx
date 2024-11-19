import styles from "./page.module.css";
import Accordion from "@/components/legal-services/client/Accordion";
import LegalServicesHero from "@/components/legal-services/legalServicesHero/LegalServicesHero";
import LegalServicesSuccessFactor from "@/components/legal-services/legalServicesSuccessFactor/LegalServicesSuccessFactor";
import LegalServiceOurOfferings from "@/components/legal-services/client/legalServiceOurOfferings/LegalServiceOurOfferings";
import LegalServicesSectors from "@/components/legal-services/legalServicesSectorAndPractices/LegalServicesSectors";
import LegalServicesPractices from "@/components/legal-services/legalServicesSectorAndPractices/LegalServicesPractices";
import LegalServicesSuccessFactorMob from "@/components/legal-services/legalServicesSuccessFactorMob/LegalServicesSuccessFactorMob";
import Head from "next/head";
export const metadata = {
  title: "الخدمات القانونية",
  description:
    "إذا واجهتك أي مشكلة قانونية وترغب في الحفاظ على حقوقك فما عليك إلا التوجه إلى مكاتب TCMG؛ للحصول على خدمات قانونية بمعايير عالمية المستوى من أفضل خبراء القانون.",
  keywords:
    "خدمات قانونية، خدمات قانونية إلكترونية، خدمات مكتب المحاماة، باقة الخدمات القانونية",
  robots: "index, follow",
  revisit: "2 days",
};
function LegalServices() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TCMG",
              url: "https://www.tcmglaw.com/legal-services",
              contactPoint: [
                {
                  // "@type": "ContactPoint",
                  telephone: "",
                  contactType: "customer service",
                  areaServed: "SA",
                  availableLanguage: "Arabic",
                },
              ],
            }),
          }}
        />
      </Head>
      <div className={styles.legalServicesPage}>
        <LegalServicesHero />
        <LegalServiceOurOfferings />
        <LegalServicesSuccessFactor />
        <LegalServicesSuccessFactorMob />
        <LegalServicesPractices />
        <LegalServicesSectors />
        <Accordion />
      </div>
    </>
  );
}

export default LegalServices;
