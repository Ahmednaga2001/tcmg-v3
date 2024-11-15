import PrivacyDetails from "@/components/cookiesPage/privacyDetails/PrivacyDetails"
import PrivacyHero from "@/components/cookiesPage/privacyHero/PrivacyHero"
import PrivacyStatement from "@/components/cookiesPage/privacyStatement/PrivacyStatement"
import styles from "./page.module.css"
import CookiesFooter from "@/components/cookiesPage/cookiesFooter/CookiesFooter"
export const metadata = {
  title: "Cookies",
}
export default function page() {
  return (
    <div className={styles.privacyPage}>
      <PrivacyHero/>
      <PrivacyStatement/>
      <PrivacyDetails/>
      <CookiesFooter/>
      
    </div>
  )
}
