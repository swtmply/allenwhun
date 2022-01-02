import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="grid place-items-center">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="w-[700px] min-h-screen p-4">
        <Nav />

        <main className="w-full">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
