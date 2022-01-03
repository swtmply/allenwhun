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
      <article className="min-w-full prose prose-img:rounded-lg prose-h3:text-2xl prose-h3:font-bold prose-p:text-stone-600 dark:prose-headings:text-stone-200 dark:prose-p:text-stone-300 dark:prose-code:text-stone-50 hover:prose-a:text-pink-500">
        <h1 className="font-bold text-5xl dark:text-stone-200">
          {frontMatter.title}
        </h1>
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
