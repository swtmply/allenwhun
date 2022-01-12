import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between px-6 py-3 items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/logos/aw-iconmark.svg"
          width={50}
          height={60}
          alt="aw-iconmark"
        />
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
            alt="aw-iconmark"
          />
        </button>
        <button className="pt-2 px-2 rounded">
          <Image
            src="/assets/icons/menu.svg"
            width={30}
            height={30}
            alt="aw-iconmark"
          />
        </button>
      </div>
      {/* <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
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
  return <nav className="fixed inset-0 max-h-[50vh] bg-gray-700"></nav>;
};

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <a
        className={`${
          isActive && 'font-bold'
        } hover:bg-gray-200 transition-colors text-stone-700 px-4 py-1 rounded-lg dark:text-neutral-300  dark:hover:bg-neutral-800`}
      >
        {text}
      </a>
    </Link>
  );
};
