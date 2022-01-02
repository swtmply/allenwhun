import { GetStaticProps } from 'next';
import path from 'path';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import { BlogProps } from '../../interfaces/Blog';
import { getPostBySlug, getPosts } from '../../lib/mdx';

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout>
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-5xl font-bold ">Blog</h1>

        <p className="text-stone-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum
          labore sit autem, nesciunt laudantium nobis eius id asperiores est,
          fuga.
        </p>

        {/* TODO search component */}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">All Posts</h2>

        {posts.map((post) => (
          <BlogPost post={post} key={post.filename} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filenames = await getPosts();

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const { frontMatter } = await getPostBySlug(path.parse(filename).name);

      return {
        filename: path.parse(filename).name,
        ...frontMatter,
      };
    })
  );

  return { props: { posts } };
};
