import { getAllPosts, getPostBySlug, markdownToHtml } from "../../utils/BlogFunction";

const SingleBlog = ({title, createdAt, content}) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{createdAt}</p>
        {/* TODO: エラー直す */}
        <div dangerouslySetInnerHTML={{ __html: content}} />
      </div>
    </>
  );
};

export default SingleBlog;

export const getStaticPaths = async () => {
  const paths = getAllPosts().map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  // TODO: 型指定
  const { createdAt, title, category, tags, updatedAt, content }: any =
    getPostBySlug(id);
  const htmlContent = await markdownToHtml(content);
  console.log(htmlContent)

  return {
    props: {
      title,
      createdAt,
      content: htmlContent,
    },
  };
};
