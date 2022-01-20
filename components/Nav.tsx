import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { siteLinks } from '../constants';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between px-6 py-3 items-center">
      <div className="flex items-center gap-4">
        <Link href="/" passHref>
          <Image
            src="/assets/logos/aw-iconmark.svg"
            width={50}
            height={60}
            alt="aw-iconmark"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <button
          className="pt-2 px-2 rounded"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Image
            src={
              theme === 'dark'
                ? '/assets/icons/light-mode.svg'
                : '/assets/icons/dark-mode.svg'
            }
            width={30}
            height={30}
            alt="aw-darkmode-toggle"
          />
        </button>
        <button
          className="pt-2 px-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/assets/icons/menu.svg"
            width={30}
            height={30}
            alt="aw-menu"
          />
        </button>
      </div>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

const NavMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <nav
      className={`${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform fixed z-50 inset-0 bg-gray-100 dark:bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-xl dark:bg-opacity-60 p-4 flex flex-col`}
    >
      <div className="flex justify-between mb-16">
        <Link href="/" passHref>
          <Image
            src="/assets/logos/aw-wordmark.svg"
            width={200}
            height={30}
            alt="aw-wordmark"
          />
        </Link>
        <button
          className="pt-2 px-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/assets/icons/close.svg"
            width={30}
            height={30}
            alt="aw-close"
          />
        </button>
      </div>

      <div
        className="flex flex-col gap-2 self-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {siteLinks.map((link) => (
          <NavItem key={link.name} href={link.href} text={link.name} />
        ))}
      </div>
    </nav>
  );
};

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <a
        className={`${
          isActive
            ? 'text-transparent bg-clip-text gradient-bvp w-max mb-1 text-4xl'
            : 'text-3xl'
        } transition-colors text-stone-700 py-1 rounded-lg font-black`}
      >
        {text}
      </a>
    </Link>
  );
};
