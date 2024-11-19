import styles from "./page.module.css";
import AboutSection from "@/components/about/aboutSection/AboutSection";
import AboutMilestones from "@/components/about/aboutMilestonesSection/AboutMilestonesSection";
import AboutVision from "@/components/about/AboutVision/AboutVision";
import AboutOurExperts from "@/components/about/aboutOurExperts/AboutOurExperts";
import AboutOwner from "@/components/about/aboutOwner/AboutOwner";
import AboutMetrics from "@/components/about/KeyMetrics/AboutMetrics";
import AboutSlider from "@/components/about/client/aboutSlider/AboutSlider";
import AboutMilestonesSectionMob from "@/components/about/aboutMilestonesSectionMob/AboutMilestonesSectionMob";
import Head from "next/head";
export const metadata = {
  title: "About",
  description:
    "تعرف علينا الآن، المجموعة التجارية والبحرية للمحاماة أحد أكبر مكاتب المحاماة بمصر والوطن العربي، تعرف على بدايتنا وتطور حلولنا القانونية منذ عام 1986 ",
  keywords: "المجموعة التجارية والبحرية للمحاماة،مكاتب TCMG للمحاماة",

  robots: "index, follow",
  revisit: "2 days",
};

function AboutUs() {
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
              url: "https://www.tcmglaw.com/about-us",
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
      <div className={styles.aboutPage}>
        <AboutSlider />
        <AboutSection />

        <AboutMilestones />
        <AboutMilestonesSectionMob />

        <AboutVision />

        <AboutOurExperts />

  
        <AboutOwner />
        <AboutMetrics />
      </div>
    </>
  );
}

export default AboutUs;
