import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = () => (
  <article className={styles.card}>
    <a className={styles.link} title="test">
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          src="/image/1.png"
          alt="test"
          width={485}
          height={300}
        />
        <div className={styles.category}>
          <FontAwesomeIcon className={styles.category_icon} icon={faTag} />
          <span>category</span>
        </div>
      </figure>
      <section className={styles.seciton}>
        <h2 className={styles.title}>【初学者向け】React入門</h2>
        <div className={styles.time}>
          <FontAwesomeIcon className={styles.category_icon} icon={faClock} />
          <time className={styles.time_meta}>2021.10.30</time>
        </div>
        <div className={styles.description}>
          React コンポーネントを作成するには render()
          メソッドを実装します。このメソッドは、受け取った入力データを元に、表示する内容を返す役割を担当します。次の例では
          JSX ...
        </div>
      </section>
    </a>
  </article>
);

export default ArticleCard;
