import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = ({ id, title, createdAt, category, summary }) => (
  <article className={styles.card}>
    <Link href={`/blog/${id}`}>
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
            <span>{category}</span>
          </div>
        </figure>
        <section className={styles.seciton}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.time}>
            <FontAwesomeIcon className={styles.category_icon} icon={faClock} />
            <time className={styles.time_meta}>{createdAt}</time>
          </div>
          <div className={styles.summary}>{summary}</div>
        </section>
      </a>
    </Link>
  </article>
);

export default ArticleCard;
