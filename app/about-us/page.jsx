import styles from "./page.module.css";
import AboutSection from "@/components/about/aboutSection/AboutSection";
import AboutMilestones from "@/components/about/aboutMilestonesSection/AboutMilestonesSection";
import AboutVision from "@/components/about/AboutVision/AboutVision";
import AboutOurExperts from "@/components/about/aboutOurExperts/AboutOurExperts";
import AboutTeam from "@/components/about/aboutTeam/AboutTeam";
import AboutOwner from "@/components/about/aboutOwner/AboutOwner";
import AboutMetrics from "@/components/about/KeyMetrics/AboutMetrics";
import AboutSlider from "@/components/about/client/aboutSlider/AboutSlider";
import AboutMilestonesSectionMob from "@/components/about/aboutMilestonesSectionMob/AboutMilestonesSectionMob";
export const metadata = {
  title: "About",
  description: "تعرف علينا الآن، المجموعة التجارية والبحرية للمحاماة أحد أكبر مكاتب المحاماة بمصر والوطن العربي، تعرف على بدايتنا وتطور حلولنا القانونية منذ عام 1986 ",
  keywords: "المجموعة التجارية والبحرية للمحاماة،مكاتب TCMG للمحاماة"
};

function AboutUs() {
  return (
    <div className={styles.aboutPage}>
      <AboutSlider />
      <AboutSection />

      <AboutMilestones />
      <AboutMilestonesSectionMob/>

      <AboutVision />

      <AboutOurExperts />

      {/* <AboutTeam /> */}
      <AboutOwner />
      <AboutMetrics />
    </div>
  );
}

export default AboutUs;
