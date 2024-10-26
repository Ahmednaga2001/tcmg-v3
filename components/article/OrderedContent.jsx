import styles from "@/app/article/page.module.css"
const OrderedContent = ({ items,desc ,desc2,head}) => {
    
    return (
      <div className={styles.orderedContent}>
        {desc && (<p>{desc}</p>)}
          <ol>
            {items.map((el, index) => (
                <li key={index}>
                    {el.title && <strong>{el.title}</strong>}
                    {el.desc}
                </li>
            ))}
        </ol>
        {(desc2 || head) && (
                <p>
                    {head && <strong>{head}</strong>}
                    {desc2}
                </p>
            )}
      </div>
    );
}

export default OrderedContent;