import Link from "next/link";
import { client } from "../libs/client";
import { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import { Blog } from "../interfaces/BlogInterface";
import { Responce } from "../interfaces/ResponceInterface";
import styles from "../styles/index.module.css";

type Props = {
  blogs: Blog[]
}

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <div className={styles.aaa}>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: Responce<Blog> = await client.get({ endpoint: "blogs" }); // TODO: エンドポイントの一覧作る
  console.log(data);

  return {
    props: {
      blogs: data.contents,
    },
  };
};
