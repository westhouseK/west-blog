import matter from "gray-matter";
import Link from "next/link";
import ArticleCard from "../components/ArticleCard";
import ArticleList from "../components/ArticleList";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Index.module.css"; // あんまり良いやり方ではないかも

// TODO: Blogって良くない気がする
const Blog = (props) => {
  return (
    <>
      <div className={styles.content}>
        <ArticleList>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ArticleList>
        <Sidebar />
      </div>
      <ul>
        {props.blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <a>{blog.slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const blogs = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        slug: slug,
      };
    });
    return data;
  })(require.context("../contents", true, /\.md$/)); // TODO: 原因不明を直す

  const sortingArticles = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(sortingArticles)),
    },
  };
}
