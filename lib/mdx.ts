import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export const getPosts = async () => {
  return fs.readdirSync(path.join(root, 'public/posts'));
};

export const getPostBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(root, 'public/posts', `${slug}.mdx`),
    'utf8'
  );

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return { source: mdxSource, frontMatter: data };
};
