const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['tailwindcss.com'],
  },
});
