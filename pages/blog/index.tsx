import { GetStaticProps } from 'next';
import path from 'path';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import { IBlog } from '../../interfaces/Blog';
import { getPostBySlug, getPosts } from '../../lib/mdx';

export default function Blog({ posts }: { posts: IBlog[] }) {
  return (
    <Layout>
      <header className="col-span-full grid grid-cols-6 items-center p-6 ">
        <div className="col-span-full">
          <p className="font-mono font-bold text-gray-200 col-span-full mt-12 mb-2 text-xs">
            Blog
          </p>
          <h1 className="text-5xl font-bold col-span-full mb-4 tracking-wide">
            &gt;not me
          </h1>
          <p className="col-span-full mb-4 tracking-wide">
            I&rsquo;m not very good at writing and it can really get messy
            easily. But I&rsquo;ll do my best for you to understand what I
            learnt and what are the techniques I do when learning new
            technologies.
          </p>
          <button className="bg-pink-300 text-white font-mono px-8 py-2 col-span-3 max-w-max text-sm rounded gradient-bvp">
            Make a me search input field
          </button>
        </div>
      </header>

      <h2 className="text-3xl font-bold p-6">All Posts</h2>
      <div className="flex flex-col gap-4 px-6 divide-y divide-gray-200">
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
