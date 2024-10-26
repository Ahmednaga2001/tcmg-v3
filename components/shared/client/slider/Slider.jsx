"use client";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import styles from "./page.module.css";
import Image from "next/image";



function Slider({ data , name }) {
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
    autoPlay : 3000
  };

  return (
    <section className={styles.branches}>
      <Flickity
        options={flickityOptions}
        disableImagesLoaded={true}
        reloadOnUpdate={true}
        static
      >
        {data.map((item, index) => (
          <div             className={`${styles.branche} ${name ? styles.branchHover : ''}`} // Conditionally apply hover class
          key={index}>
            <Image
              src={item.imgPath}
              alt={item.title}
              width={1440}
              height={480}
            />
            <div className={styles.content}>
              <span>{item.title}</span>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default Slider;
