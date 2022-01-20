import Head from 'next/head';
import React from 'react';

export default function ErrorPage() {
  return (
    <div className="relative">
      <Head>
        <title>404 Not Found</title>
      </Head>

      <div className="fixed top-96 -left-20 -z-50">
        <div className="rounded-full animate-pulse-scale bg-blue-400 aspect-square w-[150px] sticky top-0 blur-2xl"></div>
      </div>
      <div className="fixed top-32 -right-32 -z-50">
        <div className="rounded-full animate-pulse-scale bg-pink-400 aspect-square w-[250px] sticky top-0 blur-2xl"></div>
      </div>

      <main className="overflow-x-hidden flex flex-col justify-center min-h-screen px-6">
        <p className="self-start text-sm mb-2 font-mono text-gray-200 min-w-full">
          Oh wow, a 404 Not Found Page
        </p>
        <h2 className="font-bold text-5xl mb-2">You found literally nothing</h2>
        <p>Go tell your friends you found nothing.</p>
      </main>
    </div>
  );
}
