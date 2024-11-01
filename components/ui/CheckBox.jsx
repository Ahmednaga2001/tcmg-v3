
// import styles from "./page.module.css";

// const CheckBox = ({ label, checked, onChange, onBlur, name, error }) => {
//   return (
//     <div className={styles.checkWrapper}>
//       <div className={styles.checkBox}>
//         <input
//           type="checkbox"
//           id={name}
//           checked={checked} // Control the checkbox using the checked prop
//           onChange={onChange} // Use Formik's onChange
//           onBlur={onBlur} // Use Formik's onBlur
//         />
//         <label htmlFor={name}>
//           {label}
//         </label>
//       </div>
//       {error && <div className={styles.error}>{error}</div>} {/* Render error message */}
//     </div>
//   );
// };

// export default CheckBox;

import styles from "./page.module.css";

const CheckBox = ({ label, checked, onChange, onBlur, name, error, onLabelClick }) => {
  return (
    <div className={styles.checkWrapper}>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          id={name}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span
          className={styles.clickableLabel}
          onClick={onLabelClick} // Make the text clickable
        >
          {label}
        </span>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default CheckBox;
