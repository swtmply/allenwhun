import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPostBySlug, getPosts } from '../../lib/mdx';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { MDXComponents } from '../../components/MDXComponent';
import { IBlog } from '../../interfaces/Blog';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IPost {
  source: MDXRemoteSerializeResult;
  frontMatter: IBlog;
}

function Post({ source, frontMatter }: IPost) {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content={frontMatter.description}
          key="description"
        />
        <meta
          property="og:description"
          content={frontMatter.description}
          key="ogDescription"
        />
      </Head>
      <article className="min-w-full prose prose-img:rounded-lg  prose-img:shadow-lg prose-h3:text-2xl prose-h3:font-bold prose-a:text-pink-300 hover:prose-a:text-pink-400 dark:prose-code:bg-gray-500 prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded dark:prose-invert p-6">
        <h1 className="font-bold text-5xl">{frontMatter.title}</h1>
        <p>
          {frontMatter.author} /{' '}
          <span className="text-sm">{frontMatter.publishedAt}</span>
        </p>
        <MDXRemote {...source} components={MDXComponents} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((p) => ({ params: { slug: p.replace(/\.mdx/, '') } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const { source, frontMatter } = await getPostBySlug(slug);

  return { props: { source, frontMatter } };
};

export default Post;
