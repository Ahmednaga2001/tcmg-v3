import styles from "./page.module.css";
const TextArea = ({
  display = "none",
  label,
  placeholder,
  name,
  value,
  change,
  blur,
}) => {
  return (
    <div className={styles.inpContainer}>
      <div className={styles.inp}>
        <label
          htmlFor={label}
          style={{ display }}
          className={styles.hiddenLabel}
        >
          {label}
        </label>
        <textarea
          className="textarea"
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={change}
          name={name}
          onBlur={blur}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
