import matter from "gray-matter";
import ArticleCard from "../components/ArticleCard";
import ArticleList from "../components/ArticleList";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Index.module.css"; // あんまり良いやり方ではないかも
import { getAllPosts } from "../utils/BlogFunction";

// TODO: 関数名Blogって良くない気がする。TopとかMainとかHomeとか
const Blog = (props) => {
  return (
    <>
      <div className={styles.content}>
        <ArticleList>
          {props.blogs.map((blog) => (
            <ArticleCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              createdAt={blog.createdAt}
              category={blog.category}
              summary={blog.summary}
            />
          ))}
        </ArticleList>
        <Sidebar />
      </div>
      <ul></ul>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  return {
    props: {
      blogs: getAllPosts(),
    },
  };
}
