import JoinUsSlider from "@/components/join-us/client/joinSlider/JoinUsSlider";
import Links from "@/components/shared/linksPagination/Links";
import JoinHero from "@/components/join-us/joinHero/JoinHero";
import JoinAbout from "@/components/join-us/joinAbout/JoinAbout";
import JoinValues from "@/components/join-us/client/joinValues/JoinValues";
import JoinIntern from "@/components/join-us/joinIntern/JoinIntern";
import JoinOurJourney from "@/components/join-us/joinOurJournery/JoinOurJourney";
import styles from "./page.module.css";
import JoinJobOpportunities from "@/components/join-us/client/joinJobOpportunities/JoinJobOpportunities";
import Head from "next/head";
export const metadata = {
  title: "انضم الينا",
  description:
    "هل تبحث عن فرص قانونية مميزة؟ انضم إلى مكاتب TCMG للمحاماة الدولية, واكتشف فرص مثالية للتطوير المهني في بيئة عمل محفزة تسعى للتميز والكفاءة في تقديم الخدمات القانونية.",
  robots: "index, follow",
  revisit: "2 days",
};
function JoinUs() {
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
              url: "https://www.tcmglaw.com/join-us",
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
      <div className={styles.joinPage}>
        <JoinHero />
        <Links />
        <JoinAbout />
        <JoinUsSlider />
        <JoinValues />
        <JoinIntern />
        <JoinJobOpportunities />
        <JoinOurJourney />
      </div>
    </>
  );
}

export default JoinUs;
