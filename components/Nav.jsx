import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";
import toggleSideNav from "@/utils/toggleSideNav";
function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.expand} onClick={toggleSideNav}>
        <Image
          src="/assets/icons/HamburgerMenu-1.svg"
          alt="Logo"
          width={50}
          height={60}
        />
      </div>
      <div className={styles.SearchIconForMobile}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-globe"></i>
      </div>
      <div className={styles.search}>
        <Image
          src="/assets/icons/search.svg"
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
        <div className={styles.lens}>
          <Image
            src="/assets/icons/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
            className={styles.searchIcon}
          />
        </div>
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
  );
}

export default Nav;
