import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="relative">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="fixed top-72 -left-20 -z-50">
        <div className="rounded-full animate-pulse-scale bg-blue-400 aspect-square w-[150px] sticky top-0 blur-2xl"></div>
      </div>
      <div className="fixed top-8 -right-32 -z-50">
        <div className="rounded-full animate-pulse-scale bg-pink-400 aspect-square w-[250px] sticky top-0 blur-2xl"></div>
      </div>

      <Nav />

      <div className="min-h-screen">
        <main className="overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
