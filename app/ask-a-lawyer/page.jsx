import styles from "@/components/ask-attorny/ask-attrony.module.css";
import AskLawyer from "@/components/ask-attorny/AskLawyer";
import ConnectwithLegalExpert from "@/components/ask-attorny/ConnectwithLegalExpert";
import About from "@/components/ask-attorny/About";
import AskLawyerForm from "@/components/ask-attorny/client/AskLawyerForm";
import PopUp from "@/components/ask-attorny/client/PopUp";
import Head from "next/head";
export const metadata = {
  title: "اسأل محامى",
  description:
    "اسأل محامي مصري الآن من خلال اكبر مكتب محاماة في مصر والشرق الأوسط, مع خبرة لأكثر من 30 عاماً بالتميز والتفوق في مجال المحاماة وتقديم الاستشارات القانونية",
  keywords: "اسال محامي في مصر، اسال محامي مصري اون لاين",
  robots: "noindex, nofollow",
  revisit: "2 days",
};
function AskAttorny() {
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
              url: "https://www.tcmglaw.com/ask-a-lawyer",
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
      <div className={styles.page}>
        <section className={styles.hero}>
          <h1>اسأل محامي استشِر خبراء القانون لحل جميع استفساراتك القانونية</h1>
        </section>
        <PopUp />

        <ConnectwithLegalExpert />
        <About />
        <AskLawyer />
        <AskLawyerForm />
      </div>
    </>
  );
}

export default AskAttorny;
