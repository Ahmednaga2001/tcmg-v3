"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathName = usePathname();
  
  return (
    <div className={styles.links}>
      <Link
        href="/internship"
        className={pathName === "/internship" ? styles.activeLink : ""}
      >
        متدربين
      </Link>
      <Link
        href="/careers"
        className={pathName === "/careers" ? styles.activeLink : ""}
      >
        محامين
      </Link>
      <Link
        href="/protocol"
        className={pathName === "/protocol" ? styles.activeLink : ""}
      >
        علاقات عامة
      </Link>
    </div>
  );
};

export default Links;
