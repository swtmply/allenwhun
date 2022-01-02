import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="bg-slate-50 dark:bg-black text-black dark:text-white transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
