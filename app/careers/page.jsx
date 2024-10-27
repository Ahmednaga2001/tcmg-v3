import PartnerWithExperts from "@/components/hiring/PartnerWithExperts/PartnerWithExperts";
import Accordion from "@/components/hiring/client/Accordion";
import HiringGraduationForm from "@/components/hiring/client/hiringGraduationForm/HiringGraduationForm";
import HiringTcmgJob from "@/components/hiring/client/hiringTcmgJob/HiringTcmgJob";
import HiringWhyChooseUs from "@/components/hiring/client/hiringWhyChooseUse/WhyChoose";
import HireingAchieveSuccess from "@/components/hiring/hireingAchieveSuccess/HireingAchieveSuccess";
import HiringCareerJourney from "@/components/hiring/hiringCareerJourney/HiringCareerJourney";
import HiringCareerProgressSteps from "@/components/hiring/hiringCareerProgressSteps/HiringCareerProgressSteps";
import HiringHero from "@/components/hiring/hiringHero/HiringHero";
import Team from "@/components/shared/client/Team/Team";
import Links from "@/components/shared/linksPagination/Links";
import styles from "./page.module.css";
export const metadata={
  title : "Careers",
  description : "انضم إلى فريق TCMG للمحاماة واكتشف وظائف محامين مميزة تٌمَكنك من العمل في بيئة تدعم التطور المهني. ابنِ مسيرتك المهنية الواعدة وحقق طموحاتك في عالم المحاماة."
}

function Hiring() {
  return (
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
  );
}

export default Hiring;
