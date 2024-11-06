import styles from "./page.module.css";
import { useEffect, useState } from "react";
import DataCollection from "../dataCollection/DataCollection";
import UserProvidedData from "../UserProvidedData";
import AccessRights from "../AccessRights";
import LegalBasis from "../LegalBasis";
import Links from "../Links";
import InfoSharing from "../InfoSharing";
import Security from "../Security";
import ChildPrivacy from "../ChildPrivacy";
import Agreement from "../Agreement";
import Communication from "../Communication";
import DataControl from "../DataControl";
import Image from "next/image";
export default function SideBar({ activeItem, setActiveItem }) {
  const handleActive = (item) => {
    setActiveItem(item);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const [data, setData] = useState(false);
  const [userData, setUserData] = useState(false);
  const [accessRight, setAccessRight] = useState(false);
  const [legalBasis, setLegalBasis] = useState(false);
  const [links, setLinks] = useState(false);
  const [infoSharing, setInfoSharing] = useState(false);
  const [security, setSecurity] = useState(false);
  const [childPrivacy, setChildPrivacy] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [comunication, setComunication] = useState(false);
  const [dataControl, setDataControl] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setData(true); // Automatically set first section as open on large screens

      setActiveItem("dataCollection"); // Automatically set first section as active on mobile
    }
  }, []);
  return (
    <aside className={styles.sideBar}>
      <ol>
        <li
          onClick={() => {
            handleActive("dataCollection");
            setData((prev) => !prev);
            handleIsOpen;
          }}
          className={`${
            activeItem === "dataCollection" ? styles.activeItem : ""
          } ${styles.itemMob}`}
        >
          المعلومات التي نجمعها منك عند زيارة موقع المجموعة التجارية والبحرية
          الإلكتروني
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {data ? (
          <section className={styles.content}>
            <DataCollection />
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("userProvidedData");
            setUserData((prev) => !prev);
          }}
          className={`${activeItem === "userProvidedData" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          {" "}
          المعلومات التي تقدمها لنا من خلال موقع المجموعة التجارية والبحرية
          الإلكتروني
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {userData ? (
          <section className={styles.content}>
            {" "}
            <UserProvidedData />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("accessRights");
            setAccessRight((prev) => !prev);
          }}
          className={`${activeItem === "accessRights" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          حقوقك في الوصول إلى معلوماتك الشخصية وتحديثها
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {accessRight ? (
          <section className={styles.content}>
            {" "}
            <AccessRights />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("legalBasis");
            setLegalBasis((prev) => !prev);
          }}
          className={`${activeItem === "legalBasis" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          الأساس القانوني لمعالجة معلوماتك الشخصية
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {legalBasis ? (
          <section className={styles.content}>
            {" "}
            <LegalBasis />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("links");
            setLinks((prev) => !prev);
          }}
          className={`${activeItem === "links" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          الروابط
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {links ? (
          <section className={styles.content}>
            {" "}
            <Links />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("informationSharing");
            setInfoSharing((prev) => !prev);
          }}
          className={`
            ${activeItem === "informationSharing" ? styles.activeItem : ""} ${styles.itemMob}`}
          
        >
          تبادل المعلومات
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {infoSharing ? (
          <section className={styles.content}>
            {" "}
            <InfoSharing />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("security");
            setSecurity((prev) => !prev);
          }}
          className={`${activeItem === "security" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          الأمن
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {security ? (
          <section className={styles.content}>
            {" "}
            <Security />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("childPrivacy");
            setChildPrivacy((prev) => !prev);
          }}
          className={`${activeItem === "childPrivacy" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          خصوصية الأطفال
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {childPrivacy ? (
          <section className={styles.content}>
            {" "}
            <ChildPrivacy />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("agreement");
            setAgreement((prev) => !prev);
          }}
          className={`${activeItem === "agreement" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          الاتفاق ، التغييرات
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {agreement ? (
          <section className={styles.content}>
            {" "}
            <Agreement />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("communication");
            setComunication((prev) => !prev);
          }}
          className={`${activeItem === "communication" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          الاتصالات والحقوق
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {comunication ? (
          <section className={styles.content}>
            {" "}
            <Communication />{" "}
          </section>
        ) : (
          <></>
        )}
        <li
          onClick={() => {
            handleActive("dataControl");
            setDataControl((prev) => !prev);
          }}
          className={`${activeItem === "dataControl" ? styles.activeItem : ""} ${styles.itemMob}`}
        >
          تحكم البيانات
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
        </li>
        {dataControl ? (
          <section className={styles.content}>
            {" "}
            <DataControl />{" "}
          </section>
        ) : (
          <></>
        )}
      </ol>
    </aside>
  );
}
