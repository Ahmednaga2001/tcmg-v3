import styles from "@/app/post/page.module.css";
const OrderedContent = ({options}) => {
  return (
    <div className={styles.orderedContent}>
      <ol>
        {options.map((el, index) => (
          <li key={index}>
            {el}
          </li>
        ))}
      </ol>
 
    </div>
  );
};

export default OrderedContent;
