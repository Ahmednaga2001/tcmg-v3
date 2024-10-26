"use client";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import styles from "./page.module.css";
import Image from "next/image";

const branches = [
  {
    id: 1,
    img: "/assets/images/homePage/cities/Cairo.png",
    name: "القاهرة",
    alt : "مكتب محاماة دولى فى مصر"
  },
  {
    id: 2,
    img: "/assets/images/homePage/cities/Ryad.png",
    name: "الرياض",
    alt : "مكتب محاماة واستشارات قانونية في الرياض"
  },
  {
    id: 3,
    img: "/assets/images/homePage/cities/Dubay.png",
    name: "دبي",
    alt : "شركة للمحاماة والاستشارات القانونية في دبي"
  },
  {
    id: 4,
    img: "/assets/images/homePage/cities/Chegendo.png",
    name: "تشغندو",
    alt : "شركة محاماة دولية في الصين"
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
        static>
        {branches.map((branch) => (
          <div className={styles.branche} key={branch.id}>
            <Image
              src={branch.img}
              alt={branch.alt}
              width={1440}
              height={460}
            />
            <span>{branch.name}</span>
            <div className={`link ${styles.link}`}>
              <p> تعرف علي فروعنا</p>
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default Branches;
