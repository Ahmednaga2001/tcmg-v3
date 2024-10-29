import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const AccordionCard = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHTML, setIsHTML] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const containsHTML = (str) => /<[^>]+>/.test(str);
    
    setIsHTML(containsHTML(desc));
  }, [desc]);

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionQues}>
        <div className={styles.accordionQuesHeader} onClick={handleIsOpen}>
          <h3>{title}</h3>
          <div></div>
          <Image
                      src={isOpen ? '/assets/icons/form/closeacc.svg' : '/assets/icons/form/openacc.svg'}
                      width={24}
                      height={24}
                      alt={isOpen ? 'Close icon' : 'Open icon'}
                    />
        </div>
        <div
          className={`${styles.accordionQuesContent} ${
            isOpen ? styles.open : ""
          }`}
        >
          {isHTML ? (
            <div dangerouslySetInnerHTML={{ __html: desc }} />
          ) : (
            <p>{desc}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
