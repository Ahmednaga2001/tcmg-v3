import styles from "@/app/article/page.module.css"
export const BulletContent = ({ items, title, desc , desc2 }) => {
    return (
        <div className={styles.bulletContent}>
            {title && <span className={styles.headTitle}>{title}</span>}
            {desc && <p className={styles.desc}>{desc}</p>}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.title && <strong>{item.title}</strong>}
                        {item.desc}
                    </li>
                ))}
            </ul>
            {desc2 && (<p>{desc2}</p>)}
        </div>
    );
}