"use client";

import styles from "@/app/page.module.css";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import Image from "next/image";

const partners = [
  {
    id: "1",
    img: "/assets/images/homePage/partners/delta 1.png",
    w: 196,
    h: 64,
  },
  {
    id: "2",
    img: "/assets/images/homePage/partners/download (2).png",
    w: 86,
    h: 113,
  },
  {
    id: "3",
    img: "/assets/images/homePage/partners/download (3).png",
    w: 140,
    h: 132,
  },
  {
    id: "4",
    img: "/assets/images/homePage/partners/download.png",
    w: 207,
    h: 87,
  },
  {
    id: "5",
    img: "/assets/images/homePage/partners/download (4).png",
    w: 125,
    h: 128,
  },
  {
    id: "6",
    img: "/assets/images/homePage/partners/download (5).png",
    w: 173,
    h: 136,
  },
  {
    id: "7",
    img: "/assets/images/homePage/partners/images.png",
    w: 175,
    h: 51,
  },
];

function Parteners() {
  const flickityOptions = {
    initialIndex: 2,
    groupCells: false,
    pageDots: false,
    prevNextButtons: false,
  };

  return (
    <section className={styles.partners}>
      <Flickity
        options={flickityOptions}
        disableImagesLoaded={true}
        reloadOnUpdate={true}
        static
        className={styles.parent}>
        {partners.map((partner) => (
          <div className={styles.logo} key={partner.id}>
            <Image
              src={partner.img}
              alt={partner.img}
              width={partner.w}
              height={partner.h}
            />
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default Parteners;
