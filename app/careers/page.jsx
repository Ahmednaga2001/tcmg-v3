import PartnerWithExperts from "@/components/hiring/PartnerWithExperts/PartnerWithExperts";
import Accordion from "@/components/hiring/client/Accordion";
import HiringGraduationForm from "@/components/hiring/client/hiringGraduationForm/HiringGraduationForm";
import HiringTcmgJob from "@/components/hiring/client/hiringTcmgJob/HiringTcmgJob";
import HiringWhyChooseUs from "@/components/hiring/client/hiringWhyChooseUse/WhyChoose";
import HireingAchieveSuccess from "@/components/hiring/hireingAchieveSuccess/HireingAchieveSuccess";
import HiringCareerJourney from "@/components/hiring/hiringCareerJourney/HiringCareerJourney";
import HiringCareerProgressSteps from "@/components/hiring/hiringCareerProgressSteps/HiringCareerProgressSteps";
import HiringHero from "@/components/hiring/hiringHero/HiringHero";
import Links from "@/components/shared/linksPagination/Links";
import styles from "./page.module.css";
import Head from "next/head";
export const metadata={
  title : "الوظايف",
  description : "انضم إلى فريق TCMG للمحاماة واكتشف وظائف محامين مميزة تٌمَكنك من العمل في بيئة تدعم التطور المهني. ابنِ مسيرتك المهنية الواعدة وحقق طموحاتك في عالم المحاماة.",
  robots: "index, follow",
  revisit: "2 days",
}

function Hiring() {
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
              url: "https://www.tcmglaw.com/careers",
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
    <div className={styles.hiringPage}>
      <HiringHero />

      <Links />
      <HireingAchieveSuccess />
      <HiringCareerJourney />

      <HiringCareerProgressSteps />
      <HiringWhyChooseUs />
      <PartnerWithExperts />
      <HiringTcmgJob />
      <HiringGraduationForm />
      <Accordion />
    </div>
    </>
  );
}

export default Hiring;
