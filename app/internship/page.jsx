import PathToLegalExcellence from "@/components/internship/InternLgalExcellence/PathToLegalExcellence";
import InternHero from "@/components/internship/internHero/InternHero";
import InternChallenges from "@/components/internship/internChallenges/InternChallenges";
import InternOffer from "@/components/internship/client/internOffer/Offer";
import InternExperience from "@/components/internship/client/internOffer/InternExperience";
import InternAspirations from "@/components/internship/InternAspirations/InternAspirations";
import InternTcmg from "@/components/internship/client/internTcmg/InternTcmg";
import InternGraduationForm from "@/components/internship/client/internGraduationForm/InternGraduationForm";
import Accordion from "@/components/internship/client/accordion/Accordion";
import styles from "./page.module.css";
import Discover from "@/components/internship/discover/Discover";
import Links from "@/components/shared/linksPagination/Links";
import Head from "next/head";
export const metadata = {
  title: "التدريب",
  description:
    "هل تبحث عن فرص تدريب محامين حديثي التخرج من كلية الحقوق؟ قدم طلب الآن لمكاتب TCMG للمحاماة وتدرب مع نخبة من أكفأ المحامين الممارسين في مصر",
  keywords: "تدريب محامين حديثي التخرج",
  robots: "index, follow",
  revisit: "2 days",
};
function Internship() {
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
              url: "https://www.tcmglaw.com/internship",
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
      <div className={styles.internPage}>
        <InternHero />
        <Links />
        <Discover />
        <PathToLegalExcellence />
        <InternChallenges />
        <InternOffer />
        <InternExperience />
        <InternAspirations />
        <InternTcmg />
        <InternGraduationForm />
        <Accordion />
      </div>
    </>
  );
}

export default Internship;
