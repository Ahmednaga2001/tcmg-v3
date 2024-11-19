import Accordion from "@/components/establish/client/Accordion";
import EstablishHero from "@/components/establish/establishHero/EstablishHero";
import EstablishFeatures from "@/components/establish/client/establishFeatures/EstablishFeatures";
import styles from "./page.module.css"
import EstablishCompany from "@/components/establish/establishCompany/EstablishCompany";
import EstablishLegalServices from "@/components/establish/client/establishLegalService/EstablishLegalServices";
import EstablishAchievement from "@/components/establish/establishAchievement/EstablishAchievement";
import EstablishCompanyTypes from "@/components/establish/client/establishCompanyTypes/EstablishCompanyTypes";
import EstablishForm from "@/components/establish/client/establishForm/EstablishForm";
import CompanyEst from "@/components/establish/companyEst/CompanyEst"
import EstablishCompanyMob from "@/components/establish/establishCompanyMob/EstablishCompanyMob";
import Head from "next/head";
export const metadata={
  title : "تأسيس الشركات",
  description : "هل تبحث عن أفضل مكتب تأسيس شركات قانوني يقدم خدمة تأسيس الشركات  بأعلى الإمتيازات في مصر؟ قدم طلب الآن بتأسيس شركة مصرية واحصل على أفضل دعم في مجال أعمال الشركات القانوني.",
  keywords : "مكتب تأسيس شركات، تأسيس الشركات في مصر",
  robots: "index, follow",
  revisit: "2 days",
}

function Establish() {
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
              url: "https://www.tcmglaw.com/establishing-companies",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  // telephone: "",
                  contactType: "customer service",
                  areaServed: "SA",
                  availableLanguage: "Arabic",
                },
              ],
            }),
          }}
        />
      </Head>
    <div className={styles.establishPage}>
      <EstablishHero/>
      <EstablishFeatures/>
      <EstablishCompany/>
      <EstablishCompanyMob/>
    <EstablishLegalServices/>
    <EstablishAchievement/>
    <EstablishCompanyTypes/>
      {/* <Slider data = {sliderInfo} name='est'/> */}
     <CompanyEst/>
      <EstablishForm/>
      <Accordion />
    </div>
    </>
  );
}

export default Establish;
