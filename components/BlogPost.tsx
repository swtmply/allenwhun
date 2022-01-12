import Link from 'next/link';
import React from 'react';
import { IBlog } from '../interfaces/Blog';

const BlogPost = ({ post }: { post: IBlog }) => {
  return (
    <Link href={`blog/${post.filename}`} passHref>
      <div className="cursor-pointer">
        <div className="flex justify-between items-end mb-2">
          <h2 className="font-semibold text-xl">{post.title}</h2>

          <p className="text-stone-600 text-sm dark:text-neutral-300">
            {post.publishedAt}
          </p>
        </div>
        <p className="text-stone-600 dark:text-neutral-300">{post.summary}</p>
      </div>
    </Link>
  );
};

export default BlogPost;
