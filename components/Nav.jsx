"use client"
import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";
import { useState } from "react";
import SideNav from "./SideNav";
import SideNavMob from "./SideNavMobile";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
    <nav className={styles.nav}>
      <div className={styles.expand} onClick={toggleSideNav}>
        <Image
          src="/assets/icons/Hamburger Menu.svg"
          alt="Logo"
          width={34}
          height={24}
        />
      </div>
      <div className={styles.SearchIconForMobile}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-globe"></i>
      </div>
      <div className={styles.search}>
        <Image
                src="/assets/icons/searchwhite.svg"
                alt="Search Icon"
          width={20}
          height={20}
          className={styles.searchIcon}
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="كيف يمكننا مساعدتك ؟"
        />
        {/* <div className={styles.lens}>
          <Image
            src="/assets/icons/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
            className={styles.searchIcon}
          />
        </div> */}
      </div>
      <div className={styles.selector}>
        <div>فروعنا</div>
        <div>@ AR</div>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/assets/icons/logo/Logo.svg"
            alt="Logo"
            width={200}
            height={70}
          />
        </Link>
      </div>
    </nav>
          <SideNav isOpen={isOpen} toggleSideNav={toggleSideNav} />
          <SideNavMob isOpen={isOpen} toggleSideNav={toggleSideNav} />
</>
  );
}

export default Nav;
