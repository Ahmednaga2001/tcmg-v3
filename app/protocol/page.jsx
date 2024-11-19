import Links from "@/components/shared/linksPagination/Links";
import OurFeatures from "@/components/strategic-relations/client/features/OurFeatures";
import JoinOurLegalNetwork from "@/components/strategic-relations/OurLegalNetwork/JoinOurLegalNetwork";
import RelationAbout from "@/components/strategic-relations/relationAbout/RelationAbout";
import TcmgPartnership from "@/components/strategic-relations/tcmgPartnership/TcmgPartnership";
import styles from "./page.module.css";
import RelationHero from "@/components/strategic-relations/relationHero/RelationHero";
import Head from "next/head";
export const metadata = {
  title: "العلاقات العامة",
  description:
    "قم بمعقد بروتوكول تعاون مع مكاتب TCMG للمحاماة؛ لتحقيق شراكات استراتيجية تساهم بشكل فعَّال في تعزيز الخبرات القانونية وتقديم خدمات مبتكرة لضمان نجاح مشترك.",
  robots: "index, follow",
  revisit: "2 days",
};
function StrategicRelations() {
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
              url: "https://www.tcmglaw.com/protocol",
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
      <div className={styles.relationPage}>
        <RelationHero />
        <Links />
        <JoinOurLegalNetwork />
        <RelationAbout />
        <OurFeatures />

        <TcmgPartnership />
      </div>
    </>
  );
}

export default StrategicRelations;
