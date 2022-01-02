export interface IBlog {
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
  filename: string;
  description: string;
}

export type BlogPostProps = {
  post: IBlog;
};

export type BlogProps = {
  posts: IBlog[];
};
