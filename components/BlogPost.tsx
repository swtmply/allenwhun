import Link from 'next/link';
import React from 'react';
import { IBlog } from '../interfaces/Blog';

const BlogPost = ({ post }: { post: IBlog }) => {
  return (
    <Link href={`blog/${post.filename}`} passHref>
      <div className="cursor-pointer py-4">
        <div className="">
          <h2 className="font-semibold text-xl">{post.title}</h2>

          <p className="text-stone-600 text-sm dark:text-neutral-300 flex gap-2">
            <span>{post.publishedAt}</span>
            <span>&bull;</span>
            <span className="text-gray-200">16 min read.</span>
          </p>
        </div>
        <p className="text-stone-600 dark:text-neutral-300 mt-2">
          {post.summary}
        </p>
      </div>
    </Link>
  );
};

export default BlogPost;
