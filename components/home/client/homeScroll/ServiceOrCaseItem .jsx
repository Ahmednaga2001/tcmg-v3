import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

export const ServiceOrCaseItem  = ({services}) => {
  return (
    <>
          {
                    services.map((el) => (
                        <div key={el.id}>
                          <Image
                            src={el.img}
                            alt={el.img}
                            width={600}
                            height={350}
                            className={styles.image}
                          />
                          <h3>{el.header}</h3>
                          {el.date && <span className={styles.date}>{el.date}</span>}
                          <p>{el.body}</p>
                          <span className="link">
                            الذهاب إلي الصفحة
                            <Image
                              src="assets/icons/arrow-left.svg"
                              alt="Arrow Left Small"
                              width={20}
                              height={20}
                            />
                          </span>
                        </div>
                    ))
                    
                }
    </>
  )
}
