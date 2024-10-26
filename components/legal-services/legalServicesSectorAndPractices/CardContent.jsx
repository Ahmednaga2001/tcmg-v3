import styles from "./page.module.css"
const CardContent = ({visionContentstyle , title , desc}) => {  
  return (
    <div className={styles[visionContentstyle]}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default CardContent;
