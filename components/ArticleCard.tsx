import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/ArticleCard.module.css";


const ArticleCard = () => (
  <article className={styles.container}>
    <a className={styles.link} title="test">
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src="https://lalafinland.com/wp-content/uploads/2021/07/IMG_6375-485x300.jpg"
          alt="test"
        />
        <div className={styles.category}>
          <FontAwesomeIcon className={styles.category_icon} icon={faTag} />
          <span>category</span>
        </div>
      </figure>
      <section>
        <h2 className={styles.title}>
          エスポーの森の中の夏限定カフェ「Kahvila Aiju」
        </h2>
        <div className={styles.time}>
          <FontAwesomeIcon className={styles.category_icon} icon={faClock} />
          <time className={styles.time_meta}>2021.10.30</time>
        </div>
        <div className={styles.description}>
          フィンランドの夏の楽しみのひとつは、夏限定のカフェを訪れること。
          ヘルシンキのお隣の都市エスポーに今年の夏オープンした夏限定のカフェがとってもすてきな場所だったので、今回ご紹介したいと思います。
          自然保護区内の歴史的な公...
        </div>
      </section>
    </a>
  </article>
);

export default ArticleCard;
