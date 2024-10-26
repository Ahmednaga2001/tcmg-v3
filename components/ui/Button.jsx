import Image from "next/image";
import styles from "./page.module.css";
const Button = ({ text }) => {
  return (
    <button type="submit" className={styles.btn}>
      {text}
      <Image
        src="/assets/icons/form/arrow-left.png"
        alt="Arrow Left Small"
        width={26}
        height={26}
      />
    </button>
  );
};

export default Button;
