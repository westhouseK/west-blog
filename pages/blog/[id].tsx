import { client } from "../../libs/client";
import styles from '../../styles/Home.module.css';

const BlogId: React.FC = ({ blogs }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blogs.title}</h1>
      <p className={styles.publishedAt}>{blogs.publishedAt}</p>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{
          __html: `${blogs.body}`,
        }}
      />
    </main>
  );
};
export default BlogId;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: "blogs", contentId: id})

  return {
    props: {
      blogs: data
    }
  }
}
