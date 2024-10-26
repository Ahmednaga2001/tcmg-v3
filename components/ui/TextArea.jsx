import styles from "./page.module.css"
const TextArea = ({display='none', label , placeholder}) => {
  return (
    <div className={styles.inpContainer}>

    <div className={styles.inp}>
    <label htmlFor={label} style={{ display }} className={styles.hiddenLabel}>{label}</label>
    <textarea className="textarea" id={label} placeholder={placeholder}></textarea>
    </div>
  </div>
  )
}

export default TextArea
