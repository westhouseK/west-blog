import fs from "fs"; // サーバーサイドでないと使えない
import { join } from "path";
import matter from "gray-matter";

import { remark } from 'remark';
import html from 'remark-html';

const blogFileName = "index.md";
const blogDirectory = join(process.cwd(), "contents", "blog");

export const getPostSlugs = () => {
  const allDirects: fs.Dirent[] = fs.readdirSync(blogDirectory, {
    withFileTypes: true,
  });
  // ディレクトリ名一覧を配列にして返却
  return allDirects
    .filter((direct) => direct.isDirectory())
    .map(({ name }) => name);
};

export const getPostBySlug = (slug: string) => {
  const fullPath = join(blogDirectory, slug, blogFileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  console.log(data);
  console.log(content);
  return {...data, content};
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug)).sort((a, b) => {
    return (a.createdAt > b.createdAt) ? -1 : 1;
  });
  return posts;
};

export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

