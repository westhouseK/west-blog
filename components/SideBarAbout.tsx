import styles from "../styles/SidebarAbout.module.css";
import Image from "next/image";

// マークダウンにする
const SidebarAbout = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>About</h3>
    <div className={styles.contents}>
      <div className={styles.profile}>
        <Image
          className={styles.profile_image}
          src="/image/profile.png"
          alt="うえすと"
          width={120}
          height={120}
        />
      </div>
      <h4 className={styles.name}>うえすと</h4>
      <div className={styles.description}>
        <p>都内で働くWebエンジニア3年生</p>
        <p>2016.4 千葉大学大学院 園芸学</p>
        <p>2018.4 某大手お花屋さん</p>
        <p>2019.10 SES企業 業務システム開発</p>
        <p>2021.11 自社ミドルベンチャー メディアシステム開発</p>
      </div>
    </div>
  </div>
);

export default SidebarAbout;
