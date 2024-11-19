import styles from "./page.module.css";
import ContactInformation from "@/components/branches/ContactInformation";
import ContactNumbers from "@/components/branches/ContactNumbers";
import BranchHero from "@/components/branches/branchHero/BranchHero";
import BranchLocations from "@/components/branches/BranchLocations/BranchLocations";
import BranchContactForm from "@/components/branches/client/branchContactForm/BranchContactForm";
import Head from "next/head";

export const metadata = {
  title: "الفروع",
  description : "هل تبحث عن عناوين وفروع مكاتب محامين أو مكاتب محاماة في القاهرة؟ لا داعى للبحث أكثر، نحن بجانبك من خلال فروعنا الموجودة فى مصر ودول الوطن العربي.",
  keywords : "فروع مكاتب TCMG، مكاتب محاماة دولية، فروع مكاتب المحامين",
  robots: "index, follow",
  revisit: "2 days",
};

function Branches() {
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
              url: "https://www.tcmglaw.com/offices",
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
    <div className={styles.branchPage}>
      <BranchHero />

     <BranchLocations/>

      <ContactInformation />
      <ContactNumbers />
      

      <BranchContactForm />

    </div>
    </>
  );
}

export default Branches;
