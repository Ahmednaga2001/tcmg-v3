import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Input = ({ name, value, change, blur, display = 'none', label, style, imgPath, placeholder, alt, color, type = "text", showPassword, setShowPassword }) => {

  const togglePasswordVisibility = () => {
    if (type === 'password') {
      setShowPassword(prev => !prev);
    }
  };


  return (
    <div className={styles.inpContainer}>
      <label style={{ display }} htmlFor={label} className={styles.hiddenLabel}>{label}</label>
      <div className={styles.inp} style={style}>
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          style={{ color }}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={change}
          name={name}
          onBlur={blur}
        />
        {
          type === 'password' && imgPath ? (
            <Image
              src={imgPath}
              width={24}
              height={24}
              alt={alt}
              onClick={togglePasswordVisibility}
            />
          ) : imgPath && (
            <Image
              src={imgPath}
              width={24}
              height={24}
              alt={alt}
            />
          )
        }
      </div>
    </div>
  );
};

export default Input;
