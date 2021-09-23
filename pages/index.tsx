import Link from "next/link";
import { client } from "../libs/client";
import { GetStaticProps } from "next";

type Props = {
  blog: string;
};

type Blog = {
  id: string,
  title: string
}

type Res = {
  contents: string
}

const Home: React.FC = ({ blog }) => {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
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

  const data: Res = await client.get({ endpoint: "blogs" }); // TODO: エンドポイントの一覧作る
  console.log(data);

  return {
    props: {
      blog: data.contents,
    },
  };
};
