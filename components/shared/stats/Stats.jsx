"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const Stats = () => {
  const [currentValues, setCurrentValues] = useState([0, 0, 0, 0]);
  const [x] = useState([1000,2000,3000]);
  const [expNum] = useState([25,30,40]);
  const [count] = useState([15,20,35]);
  const [clients] = useState([5,7,9]);

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

  const labels = ["عميل","خبير","خبرة","مكتب"];

  return (
    <section className={styles.stats}>
      {currentValues.map((value, index) => (
        <div key={index}>
          <span>{index === 0 || index === 1 || index === 2 ? `${value}+` : value}
          </span>
          <span>{labels[index]}</span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
