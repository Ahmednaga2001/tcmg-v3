import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css"
const SelectSlider = ({ data}) => {
    
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % data.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className={styles.dropdownParent}>
        <span>{data[currentImage].title}</span>
              <div className={styles.dropdown}>
                <span>{data[currentImage].label}</span>
                <Image
                  src={data[currentImage].path}
                  width={data[currentImage].w}
                  height={data[currentImage].h}
                  alt={data[currentImage].alt}
                />
              </div>
            </div>
  );
};

export default SelectSlider;
