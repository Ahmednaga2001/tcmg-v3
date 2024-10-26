import styles from "@/components/about/AboutVision/page.module.css";
const VisonCard = ({visionContentStyle , title , desc}) => {  
  
  return (
    <div className={styles[visionContentStyle]}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default VisonCard;
