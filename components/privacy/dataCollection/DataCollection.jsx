import Image from 'next/image'
import styles from './page.module.css'

export default function DataCollection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <span className={styles.title}>المعلومات التي نجمعها منك عند زيارة موقع المجموعة التجارية والبحرية الإلكتروني</span>
      <Image
            src="/assets/icons/form/closeacc.svg"
            width={24}
            height={24}
            alt= "Close icon"
          />
      </div>
      <ol>
        <li>لست مطالبا بتقديم أي معلومات إلى موقعنا ومع ذلك ، يمكنك اختيار القيام بذلك عن طريق ملء النماذج المتاحة في عدة أقسام من موقعنا الإلكتروني، بما في ذلك: الخدمات المقدمة والمحادثة المباشرة واسأل محامي والمهن والأحداث الخ.</li>
        <li>
          قد نستخدم هذه المعلومات لتحسين الخدمات التي نقدمها وتقديم الخدمات التي تطلبها من خلال موقعنا الإلكتروني، ومراقبة وتحسين أداء خوادمنا ، وإدارة موقعنا الإلكتروني، وحماية والدفاع عن حقوقنا أو ممتلكاتنا أو سلامتنا أو حقوق عملائنا وغيرهم من مستخدمي موقع المجموعة التجارية والبحرية .</li>
        <li>
          يستخدم هذا الموقع أيضا ملفات تعريف الارتباط يمكنك معرفة المزيد حول هذا الموضوع في سياسة ملفات تعريف الارتباط

        </li>
      </ol>
    </div>
  )
}
