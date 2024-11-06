"use client";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    id: 1,
    img: "/assets/images/homePage/cities/Cairo.png",
    name: "القاهرة",
    alt: "مكتب محاماة دولى فى مصر",
  },
  {
    id: 2,
    img: "/assets/images/homePage/cities/Ryad.png",
    name: "الرياض",
    alt: "مكتب محاماة واستشارات قانونية في الرياض",
  },
  {
    id: 3,
    img: "/assets/images/homePage/cities/Dubay.png",
    name: "دبي",
    alt: "شركة للمحاماة والاستشارات القانونية في دبي",
  },
  {
    id: 4,
    img: "/assets/images/homePage/cities/Chegendo.png",
    name: "تشغندو",
    alt: "شركة محاماة دولية في الصين",
  },
  {
    id: 5,
    img: "/assets/images/homePage/cities/Amman.png",
    name: "عمّان",
    alt: "شركة محاماة دولية في عمّان",
  },
  {
    id: 6,
    img: "/assets/images/homePage/cities/jenin.png",
    name: "جنين",
    alt: "شركة محاماة دولية في جنين",
  },
];

function Branches() {
  const flickityOptions = {
    initialIndex: 0,
    draggable: true,
    fullscreen: true,
    lazyLoad: 1,
    fade: true,
    contain: true,
    pageDots: true,
    cellAlign: "center",
    wrapAround: true,
  };

  return (
    <section className={styles.branches}>
      <Flickity
        options={flickityOptions}
        disableImagesLoaded={true}
        reloadOnUpdate={true}
        static
      >
        {branches.map((branch) => (
          <div className={styles.branche} key={branch.id}>
            <Image
              src={branch.img}
              alt={branch.alt}
              width={1440}
              height={460}
              quality={100}
            />
            <div className={styles.content}>
              <span className={styles.name}>{branch.name}</span>
              <Link href="offices" className={`${styles.link}`}>
                <span> تعرف علي فروعنا</span>
                <Image
                  src="assets/icons/arrow-left.svg"
                  alt="Arrow Left Small"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default Branches;
