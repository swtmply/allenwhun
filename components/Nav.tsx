import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center mt-4 mb-12">
      <nav className="flex gap-1">
        <NavItem href="/" text="Home" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/projects" text="Projects" />
      </nav>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Dark Mode Toggle
      </button>
    </header>
  );
}

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <a
        className={`${
          isActive && 'font-bold'
        } hover:bg-gray-200 transition-colors text-stone-700 px-4 py-1 rounded-lg`}
      >
        {text}
      </a>
    </Link>
  );
};
