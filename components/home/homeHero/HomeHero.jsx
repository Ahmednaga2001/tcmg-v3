"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeHero = () => {
  const [open, setOpen] = useState(false);
  const scrollToCarousel = () => {
    const carouselElement = document.getElementById("home-carousel");
    if (carouselElement) {
      carouselElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>انطلق نحو مستقبل قانوني أفضل مع مكتب TCMG للمحاماة </h1>
        <p>
          مرحبًا بكم في المجموعة التجارية والبحرية للمحاماة، حيث نقدم حلولًا
          قانونية شاملة تلبي احتياجات الشركات والأفراد على حد سواء. منذ تأسيسنا
          عام 1986، نسعى لنكون أكبر شركة محاماة دولية في مصر والشرق الأوسط؛ لذا
          نعمل جاهدين على تقديم أعلى معايير الاحترافية والدعم القانوني المتكامل.
          فريقنا من المحامين الخبراء جاهزون دائمًا لمساعدتكم على تحقيق أهدافكم
          القانونية وضمان حقوقكم. نحن هنا لنكون شريككم الموثوق في جميع المسائل
          القانونية، في حال كنتم تبحثون عن مكتب محاماة دولى فى مصر.
        </p>
      </div>
      <div className={styles.container}>
      <div className={styles.iconsChat}>
          <AnimatePresence>
            {open && (
              <motion.a
              href="tel:+201276299998" 
              target="_blank"
                              style={{ textAlign: "center" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/icons/phone.svg"
                  alt="phone icon"
                  width={44}
                  height={44}
                />
              </motion.a>
            )}
          </AnimatePresence>
          <div className={styles.iconsChatOne}>
            <Image
              src={!open ? "/assets/icons/chat.svg" : "/assets/icons/close.svg"}
              alt="chat icon"
              width={44}
              height={44}
              onClick={() => setOpen(!open)}
              style={{cursor:"pointer"}}
            />
            <AnimatePresence>
              {open && (
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  href="https://api.whatsapp.com/send?phone=201276299998"
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/whatsup.svg"
                    alt="whatsapp icon"
                    width={44}
                    height={44}
                  />
                </motion.a>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {open && (
              <motion.a
              href="mailto:contact@tcmglaw.com"
              target="_blank"
                              className={styles.email}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/icons/email.svg"
                  alt="email icon"
                  width={44}
                  height={44}
                />
              </motion.a>
            )}
          </AnimatePresence>
          </div>
        <div className={styles.animation}>
          <iframe
            src="https://lottie.host/embed/5c8cb5db-732f-4f67-b717-5f739c8980b2/R8K8DXZUOR.json"
            style={{ border: "none", width: "46px", height: "46px" }}
          ></iframe>
          <p className="link" onClick={scrollToCarousel}>
            أكتشف المزيد
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
