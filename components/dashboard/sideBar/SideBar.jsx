import styles from './page.module.css';

export default function SideBar({ activeItem, setActiveItem }) {
  const handleActive = (item) => {
    setActiveItem(item); 
  };

  return (
    <aside className={styles.sideBar}>
      <ul>
        <li onClick={() => handleActive('account')} className={activeItem === 'account' ? styles.activeItem : ''}>حسابى</li>
        <li onClick={() => handleActive('consultation')} className={activeItem === 'consultation' ? styles.activeItem : ''}>إستشارتي</li>
        <li onClick={() => handleActive('review')} className={activeItem === 'review' ? styles.activeItem : ''}>إستشارات قيد المراجعة</li>
        <li onClick={() => handleActive('completed')} className={activeItem === 'completed' ? styles.activeItem : ''}>إستشارات تم الإنتهاء منها</li>
      </ul>
    </aside>
  );
}
