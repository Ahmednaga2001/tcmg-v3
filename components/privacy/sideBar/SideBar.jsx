import styles from "./page.module.css"
export default function SideBar({ activeItem, setActiveItem }) {
  const handleActive = (item) => {
    setActiveItem(item); 
  };
  

  return (
    <aside className={styles.sideBar}>
      <ol>
        <li onClick={() => handleActive('dataCollection')} className={activeItem === 'dataCollection' ? styles.activeItem : ''}> المعلومات التي نجمعها منك عند زيارة موقع المجموعة التجارية والبحرية الإلكتروني </li>
        <li onClick={() => handleActive('userProvidedData')} className={activeItem === 'userProvidedData' ? styles.activeItem : ''}> المعلومات التي تقدمها لنا من خلال موقع المجموعة التجارية والبحرية الإلكتروني</li>
        <li onClick={() => handleActive('accessRights')} className={activeItem === 'accessRights' ? styles.activeItem : ''}>حقوقك في الوصول إلى معلوماتك الشخصية وتحديثها</li>
        <li onClick={() => handleActive('legalBasis')} className={activeItem === 'legalBasis' ? styles.activeItem : ''}>الأساس القانوني لمعالجة معلوماتك الشخصية</li>
        <li onClick={() => handleActive('links')} className={activeItem === 'links' ? styles.activeItem : ''}>الروابط</li>
        <li onClick={() => handleActive('informationSharing')} className={activeItem === 'informationSharing' ? styles.activeItem : ''}>تبادل المعلومات</li>
        <li onClick={() => handleActive('security')} className={activeItem === 'security' ? styles.activeItem : ''}>الأمن</li>
        <li onClick={() => handleActive('childPrivacy')} className={activeItem === 'childPrivacy' ? styles.activeItem : ''}>خصوصية الأطفال</li>
        <li onClick={() => handleActive('agreement')} className={activeItem === 'agreement' ? styles.activeItem : ''}>الاتفاق ، التغييرات</li>
        <li onClick={() => handleActive('communication')} className={activeItem === 'communication' ? styles.activeItem : ''}>الاتصالات والحقوق</li>
        <li onClick={() => handleActive('dataControl')} className={activeItem === 'dataControl' ? styles.activeItem : ''}>تحكم البيانات</li>
      </ol>
    </aside>
  );
}
