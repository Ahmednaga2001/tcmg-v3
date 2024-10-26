"use client";
import { useState } from 'react';
import styles from "./page.module.css";
import AccountInfo from '../accountInfo/AccountInfo';
import RecentConsultations from '../recentConsultations/RecentConsultations';
import SideBar from '../sideBar/SideBar';

export default function ClientDashBoard() {
  const [activeItem, setActiveItem] = useState('account');

  const renderComponent = () => {
    switch (activeItem) {
      case 'account':
        return (
          <section className={styles.content}>
            <AccountInfo />
            <RecentConsultations />
          </section>
        )

    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
        {renderComponent()}
      </div>
    </div>
  );
}
