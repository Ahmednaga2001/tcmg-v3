import styles from "@/app/post/page.module.css"
export const BulletContent = ({options }) => {
    return (
        <div className={styles.bulletContent}>
            <ul>
                {options.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}