"use client";
import {useState } from 'react';
import styles from "./page.module.css";
import SideBar from '../sideBar/SideBar';
import DataCollection from '../dataCollection/DataCollection';
import UserProvidedData from '../UserProvidedData';
import AccessRights from '../AccessRights';
import LegalBasis from '../LegalBasis';

export default function PrivacyDetails() {
  const [activeItem, setActiveItem] = useState('dataCollection');


  const renderComponent = () => {
    switch (activeItem) {
      case 'dataCollection':
        return <DataCollection/>
      case  'userProvidedData':
        return <UserProvidedData/>
      case 'accessRights':
        return <AccessRights/>
      case 'legalBasis':
        return <LegalBasis/>  
  

    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
        <section className={styles.content}>
        {renderComponent()}

        </section>
      </div>
    </div>
  );
}
