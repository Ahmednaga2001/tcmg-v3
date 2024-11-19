import PrivacyPolicy from "@/components/privacy/privacyDetails/PrivacyDetails";
import PrivacyHero from "@/components/privacy/privacyHero/PrivacyHero";
import styles from "./page.module.css"
import PrivacyStatement from "@/components/privacy/privacyStatement/PrivacyStatement";
import PrivacyDetails from "@/components/privacy/privacyDetails/PrivacyDetails";

export const metadata = {
  title: "سياسة الخصوصية",
}
export default function page() {
  return (
    <div className={styles.privacyPage}>
      <PrivacyHero/>
      <PrivacyStatement/>
      <PrivacyDetails/>
      
    </div>
  )
}
