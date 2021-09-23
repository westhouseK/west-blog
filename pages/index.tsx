import Link from "next/link";
import { client } from "../libs/client";
import { GetStaticProps, NextPage } from "next";

type DefalultResponceType = {
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  id: string
}

type Blog = DefalultResponceType & {
  title: string,
  body: string,
  category: string
}

type Props = {
  blogs: Blog[]
}

type Responce = {
  contents: Blog[],
  totalCount: number,
  offset: number,
  limit: number
}

const Home: NextPage<Props> = ({blogs}) => {
  return (
    <div>
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
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {

  const data: Responce = await client.get({ endpoint: "blogs" }); // TODO: エンドポイントの一覧作る
  console.log(data);

  return {
    props: {
      blogs: data.contents,
    },
  };
};
