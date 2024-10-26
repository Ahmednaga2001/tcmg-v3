import toggleSideNav from "@/utils/toggleSideNav";
import styles from "./SideNav.module.css";
function SideNav() {
  return (
    <div className={styles.sideNav} id="sideNav">
      <span className={styles.cancel} onClick={toggleSideNav}>
        x
      </span>
      <h4 className={styles.sideContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        illum sit maxime enim sapiente explicabo, magnam accusantium voluptatum
        quis nihil quas facilis incidunt dolores temporibus dolor quod neque
        odit pariatur ipsa ipsum aspernatur. Obcaecati voluptatem qui molestiae
        minus! Possimus distinctio eos voluptatibus itaque quo dolorem deserunt
        enim molestias consectetur rem quis error, ratione alias assumenda at.
        Excepturi maiores voluptatem, rem molestias eius corporis, voluptate
        provident aliquid nobis culpa similique praesentium adipisci?
        Cupiditate, at possimus? Natus suscipit quisquam doloribus distinctio
        pariatur reiciendis porro totam impedit esse in assumenda eveniet iusto
        magnam vel veniam est ipsa, eum rerum similique odio tempora nesciunt
        veritatis. Iure veritatis impedit nobis cupiditate distinctio id nulla
        rerum sapiente eum ullam qui quaerat enim officiis aliquam optio saepe
        vitae minima fugiat veniam autem soluta repudiandae, libero numquam.
        Culpa saepe totam iste quisquam quia officiis veniam commodi corporis
        dolorem ullam ea accusantium optio, et vero sint possimus doloribus
        magnam enim temporibus consequatur impedit repellat perferendis
        veritatis eius. Sed quibusdam laborum cum! Libero, totam aliquam
        temporibus at rem, perspiciatis, porro harum itaque ex error illum enim
        repellat cupiditate quod molestiae! Cumque nobis nisi voluptas
        reprehenderit animi a assumenda amet facilis consequuntur delectus!
        Reprehenderit, natus. Temporibus incidunt itaque deleniti consectetur
        iusto.
      </h4>
    </div>
  );
}

export default SideNav;
