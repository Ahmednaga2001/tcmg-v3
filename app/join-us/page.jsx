import JoinUsSlider from "@/components/join-us/client/joinSlider/JoinUsSlider";
import Links from "@/components/shared/linksPagination/Links";
import JoinHero from "@/components/join-us/joinHero/JoinHero";
import JoinAbout from "@/components/join-us/joinAbout/JoinAbout";
import JoinValues from "@/components/join-us/client/joinValues/JoinValues";
import JoinIntern from "@/components/join-us/joinIntern/JoinIntern";
import JoinOurJourney from "@/components/join-us/joinOurJournery/JoinOurJourney";
import styles from "./page.module.css";
import JoinJobOpportunities from "@/components/join-us/client/joinJobOpportunities/JoinJobOpportunities";
export const metadata={
  title : "Join-Us",
  description : "هل تبحث عن فرص قانونية مميزة؟ انضم إلى مكاتب TCMG للمحاماة الدولية, واكتشف فرص مثالية للتطوير المهني في بيئة عمل محفزة تسعى للتميز والكفاءة في تقديم الخدمات القانونية."
}
function JoinUs() {
  return (
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
  );
}

export default JoinUs;
