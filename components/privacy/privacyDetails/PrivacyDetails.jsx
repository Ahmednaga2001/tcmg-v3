"use client";
import { useState } from 'react';
import styles from "./page.module.css";
import SideBar from '../sideBar/SideBar';
import DataCollection from '../dataCollection/DataCollection';
import UserProvidedData from '../UserProvidedData';
import AccessRights from '../AccessRights';
import LegalBasis from '../LegalBasis';
import Links from "../Links"
import InfoSharing from '../InfoSharing';
import Security from '../Security';
import ChildPrivacy from '../ChildPrivacy';
import Agreement from '../Agreement';
import Communication from '../Communication';
import DataControl from '../DataControl';
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
      case 'links':
        return <Links/> 
      case 'informationSharing':
        return <InfoSharing/>   
      case 'security':
        return <Security/>  
      case 'childPrivacy':
        return <ChildPrivacy/>  
      case 'agreement':
        return <Agreement/>  
      case 'communication':
        return <Communication/>  
      case 'dataControl':
        return <DataControl/>  

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
