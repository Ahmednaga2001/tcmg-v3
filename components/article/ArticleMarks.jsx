import styles from "@/app/post/page.module.css";
import Image from "next/image";
import Link from "next/link";
const ArticleMarks = ({options}) => {
  return (
    <section className={styles.articleMarks}>
      <div className={styles.topContent}>
        <h2>العلامات:</h2>
        <div className={styles.marksContainer}>
  {options.map((el, index) => (
    <p key={index}>{el}</p>
  ))}
</div>
      </div>
      <div className={styles.bottom}>
        <h4>أخبار ومقالات </h4>
        <div className={styles.socialIcons}>
          <Link href="https://www.instagram.com/tcmglaw" target="_blank">
            <Image
              src={"/assets/icons/article/instgram.svg"}
              width={52}
              height={52}
              alt="Instgram Icon"
            />
          </Link>
          <Link href="https://youtube.com/@tcmglaw" target="_blank">

          <Image
            src={"/assets/icons/article/Group (2).svg"}
            width={52}
            height={52}
            alt="Youtube Icon"
          />
                    </Link>

            <Image
              src={"/assets/icons/article/youtube.svg"}
              width={52}
              height={52}
              alt="Youtube Icon"
            />
          <Link href="https://m.facebook.com/@tcmglaw/" target="_blank">
            <Image
              src={"/assets/icons/article/facebook.svg"}
              width={52}
              height={52}
              alt="Facebook Icon"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/tcmglawco"
            target="_blank"
          >
            <Image
              src={"/assets/icons/article/linkedin.svg"}
              width={52}
              height={52}
              alt="LinkedIn Icon"
            />
          </Link>
          <Link href="https://x.com/tcmglaw" target="_blank">
            <Image
              src={"/assets/icons/article/twitter.svg"}
              width={52}
              height={52}
              alt="Twitter Icon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ArticleMarks;
