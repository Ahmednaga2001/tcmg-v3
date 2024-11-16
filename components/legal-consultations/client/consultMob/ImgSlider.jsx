import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css"
const ImageSlider = ({ images, width, height }) => {
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.whatupCard}>
      <Image
        src={images[currentImage].path}
        width={width}
        height={height}
        alt={images[currentImage].label}
      />
      <span>{images[currentImage].label}</span>
    </div>
  );
};

export default ImageSlider;
