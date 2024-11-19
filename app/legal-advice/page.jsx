import DividerTwo from "@/components/legal-consultations/consultDivider/DividerTwo";
import styles from "./page.module.css";
import OurCustomers from "@/components/shared/customers/Customers";
import ConsultHero from "@/components/legal-consultations/consultHero/ConsultHero";
import ConsultSupport from "@/components/legal-consultations/consultSupport/ConsultSupport";
import ConsultLegalAdvice from "@/components/legal-consultations/consultLegalAdvice/ConsultLegalAdvice";
import ConsultNowEasy from "@/components/legal-consultations/consultNowEasy/ConsultNowEasy";
import ConsultReserve from "@/components/legal-consultations/client/consultReserve/ReserveConsultation";
import ConsultWhyTrust from "@/components/legal-consultations/client/consultWhyTrust/ConsultWhyTrust";
import ConsultWhyTrustDesk from "@/components/legal-consultations/client/consultWhyTrustDesk/ConsultWhyTrust";
import Accordion from "@/components/legal-consultations/client/Accordion";
import ConsultStrongestLawyers from "@/components/legal-consultations/consultStrongestLawyers/ConsultStrongestLawyers";
import ConsultMob from "@/components/legal-consultations/client/consultMob/ConsultMob";
import EstablishLegalServices from "@/components/legal-consultations/client/establishLegalService/EstablishLegalServices";
import Head from "next/head";
export const metadata = {
  title: "الاستشارات القانونية",
  description:
    "هل تبحث عن أكبر مكتب استشارات قانونية مصرية؟ اطلب الآن استشارة قانونية فورية للأفراد والشركات واحصل على رد من مستشار قانوني أون لاين أو بالهاتف في مصر.",
  keywords:
    "استشارة قانونية فورية، استشارات قانونية، مكتب استشارات قانونية، استشارة محامي، استشارات قانونية اونلاين",
  robots: "index, follow",
  revisit: "2 days",
};

const customers = [
  {
    id: 4,
    img: "/assets/images/legalconsultations/أحمد سليم.png",
    name: "أستاذ عمر الشراكي",
    category: "مستثمر ورجل أعمال",
    body: "تعاقدي مع مكتب المحامي محمد أبو ضيف وشركائه الخبراء مكَّنني على تحقيق أهدافي القانونية بداية من كتابة العقود وحتى تأسيس الشركة في مصر الحبيبة. حقاً أنا أقدر ذلك",
  },
  {
    id: 3,
    img: "/assets/images/legalconsultations/فاطمة عيسى.png",
    name: "أستاذة فاطمة عيسى",
    category: "رائدة أعمال",
    body: "خدمات قانونية على أعلى مستوى تدعم عالم المال والأعمال، والأفضل من ذلك خبرة المحامين وسرعة الأداء والرد. شكراً جزيلاً على هذا الخبرات اللامعة",
  },
  {
    id: 2,
    img: "/assets/images/legalconsultations/هيثم الشيمي.png",
    name: "دكتور خالد الحوشي",
    category: "مدير ماليات",
    body: "دقة عالية وسرعة في الإداء وتعامل راقي مع محامو المكتب. بدعمهم تتحقق الأهداف وتحل المشكلات القانونية، شكراً لكم",
  },
  {
    id: 1,
    img: "/assets/images/legalconsultations/حسام نصار.png",
    name: "دكتور عمرو حسان",
    category: "مهندس إماراتي خبير",
    body: "جهود إستثنائية في دعم الموكلين والعمل على خطاهم. سعيد بتعاملي مع المجموعة التجارية والبحرية وممتن لما قدموه لي من خدمات",
  },
];
function LegalConsultation() {
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
              url: "https://www.tcmglaw.com/legal-advice",
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
      <div className={styles.consultPage}>
        <ConsultHero />
        <ConsultSupport />
        <ConsultStrongestLawyers />
        <ConsultLegalAdvice />
        <EstablishLegalServices />
        <ConsultMob />
        <ConsultNowEasy />
        <ConsultReserve />
        <ConsultWhyTrustDesk/>
        <ConsultWhyTrust />
        <OurCustomers customers={customers} />
        <DividerTwo />
        <Accordion />
      </div>
    </>
  );
}

export default LegalConsultation;
