import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import { Blog } from "../../interfaces/BlogInterface";
import { Responce } from "../../interfaces/ResponceInterface";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.css";

// TODO: 型宣言
const BlogId = ({ blog }) => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>{blog.publishedAt}</p>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    </Layout>
  );
};
export default BlogId;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Responce<Blog> = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

// TODO: 型宣言
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
