import styles from './page.module.css'

export default function BulletListComponent({ title, options, desc }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      {desc && <p>{desc}</p>}
      <ul>
        {options.map((option, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: option }} />
        ))}
      </ul>
    </div>
  )
}
