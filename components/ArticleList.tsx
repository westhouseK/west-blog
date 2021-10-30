import styles from "../styles/ArticleList.module.css";

// 記事の一覧を表示する
const ArticleList = ({ children }) => (
  <div className={styles.article_list}>{children}</div>
);

export default ArticleList;
