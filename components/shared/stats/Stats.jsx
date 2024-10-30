"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const Stats = () => {
  const [currentValues, setCurrentValues] = useState([0, 0, 0, 0]);
  const [x] = useState([7, 6, 5]);
  const [expNum] = useState([50, 30, 40]);
  const [count] = useState([40, 20, 30]);
  const [clients] = useState([300, 750, 600]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentValues([
        x[index], 
        expNum[index],
        count[index],
        clients[index],
      ]);

      index = (index + 1) % x.length; 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [clients, count, expNum, x]);

  const labels = ["مكاتب","خبرة","خبير","عميل"];

  return (
    <section className={styles.stats}>
      {currentValues.map((value, index) => (
        <div key={index}>
          <span>{index === 1 || index === 3 ? `${value}+` : value}
          </span>
          <span>{labels[index]}</span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
