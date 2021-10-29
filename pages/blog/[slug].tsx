import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

type SingleBlogProps = {
  frontmatter: {
    title: String
    date: String
  }
  markdownBody: String
}

const SingleBlog = (props: SingleBlogProps) => {
  return (
    <div>
      <h1>{props.frontmatter.title}</h1>
      <p>{props.frontmatter.date}</p>
      {/* TODO: エラー直す */}
      <ReactMarkdown children={props.markdownBody} />
    </div>
  );
};

export default SingleBlog;

export const getStaticPaths = () => {
  // TODO: 記事の番号順にする
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../contents", true, /\.md$/));

  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const data = await import(`../../contents/${slug}.md`); // 対象の記事を1つ読み込む
  const singleDocument = matter(data.default); // 本文を解析する

  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
    },
  };
};
