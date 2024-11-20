import React from "react";
import styles from "@/app/post/page.module.css";
import Image from "next/image";

export default function ArticleHeader({ data }) {
    
  return (
    <div>
        
      <span className={styles.mainTitle}>{data.title}</span>

      {data.imagePath && (
        <Image
          src={data.imagePath}
          alt="article-image"
          className={styles.regImg}
          width={860}
          height={400}
          priority
        />
      )}

      {data.desc && <p>{data.desc}</p>}

      {data.subTitle && (
        <span className={styles.headTitle}>{data.subTitle}</span>
      )}

      {data.desc2 && <p>{data.desc2}</p>}
    </div>
  );
}
