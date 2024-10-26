// "use client"
// import React, { useState } from 'react'
// import styles from "./page.module.css"
// import Image from 'next/image'

// const SelectComponent = ({display='hidden', options, label,selectedOption, setSelectedOption, head, style , imgPath = '/assets/icons/form/drop.svg' ,w=10 , h=10}) => {

//   const [open, setOpen] = useState(false)
//   return (
//     <div className={styles.container}>
//       {label && <label style={{display}}  className={styles.label}>{label}</label>}
//       <div className={styles.heading} onClick={() => setOpen(!open)} style={style} >
//       <h3 style={{ color: selectedOption ? 'white' : '#9D9D9D' }}>
//   {selectedOption || head}
// </h3>
//         <Image src={imgPath} width={w} height={h} alt='drop icon' />
//       </div>
//       {
//         open && (
//           <ul className={styles.options} style={style}>

//             {options.map((option) => (
//               <li key={option.value} onClick={() => { setSelectedOption(option.value), setOpen(!open) }}>{option.value}</li>
//             ))}
//           </ul>
//         )
//       }
//     </div>
//   )
// }

// export default SelectComponent;

// SelectComponent.js
"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

const SelectComponent = ({
  display = 'hidden',
  options,
  label,
  selectedOption,
  setSelectedOption,
  head,
  style,
  imgPath = '/assets/icons/form/drop.svg',
  w = 10,
  h = 10,
  onChange,    // Add onChange prop
  onBlur       // Add onBlur prop
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    setSelectedOption(value);
    onChange(value); // Call the onChange function from Formik
    setOpen(false);  // Close the dropdown
  };

  return (
    <div className={styles.container}>
      {label && <label style={{ display }} className={styles.label}>{label}</label>}
      <div className={styles.heading} onClick={() => setOpen(!open)} style={style}>
        <h3 style={{ color: selectedOption ? 'white' : '#9D9D9D' }}>
          {selectedOption || head}
        </h3>
        <Image src={imgPath} width={w} height={h} alt='drop icon' />
      </div>
      {open && (
        <ul className={styles.options} style={style}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectComponent;

