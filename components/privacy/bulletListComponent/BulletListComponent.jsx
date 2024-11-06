import Image from 'next/image'
import styles from './page.module.css'

export default function BulletListComponent({ title, options, desc }) {
  return (
    <div className={styles.container}>
     <div className={styles.header}>
     <span className={styles.title}>{title}</span>
     <Image
            src="/assets/icons/form/closeacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
     </div>
      {desc && <p>{desc}</p>}
      <ul>
        {options.map((option, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: option }} />
        ))}
      </ul>
    </div>
  )
}
