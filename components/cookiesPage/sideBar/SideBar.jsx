"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import DataCollection from "../dataCollection/DataCollection";
import UserProvidedData from "../UserProvidedData";
import AccessRights from "../AccessRights";
import LegalBasis from "../LegalBasis";

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
  
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setData(true); // Automatically set first section as open on large screens

      setActiveItem("dataCollection"); // Automatically set first section as active on mobile
    }
  }, []);
  return (
    <aside className={styles.sideBar}>
      <ul>
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
          ملفات تعريف الارتباط
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt="Close icon"
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
            handleIsOpen;
          }}
          className={`${
            activeItem === "userProvidedData" ? styles.activeItem : ""
          } ${styles.itemMob}`}
        >
          {" "}
          ملفات تعريف الارتباط الأساسية
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt="Close icon"
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
          className={`${
            activeItem === "accessRights" ? styles.activeItem : ""
          } ${styles.itemMob}`}
        >
          ملفات تعريف الارتباط الخاصة بالتحليلات والأداء{" "}
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt="Close icon"
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
          className={`${activeItem === "legalBasis" ? styles.activeItem : ""} ${
            styles.itemMob
          }`}
        >
          ملفات تعريف الارتباط الوظيفية{" "}
          <Image
            src="/assets/icons/form/openacc.svg"
            width={24}
            height={24}
            alt="Close icon"
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
      </ul>
    </aside>
  );
}
