// import styles from "./page.module.css";

// const CheckBox = ({ label }) => {
//   return (
//     <div className={styles.checkBox}>
//       <label htmlFor={label}>
//         {label}
//       </label>
//       <input type="checkbox" id={label} />
//     </div>
//   );
// };

// export default CheckBox;

// CheckBox.js
import styles from "./page.module.css";

const CheckBox = ({ label, checked, onChange, onBlur, name, error }) => {
  return (
    <div className={styles.checkWrapper}>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          id={name}
          checked={checked} // Control the checkbox using the checked prop
          onChange={onChange} // Use Formik's onChange
          onBlur={onBlur} // Use Formik's onBlur
        />
        <label htmlFor={name}>
          {label}
        </label>
      </div>
      {error && <div className={styles.error}>{error}</div>} {/* Render error message */}
    </div>
  );
};

export default CheckBox;

