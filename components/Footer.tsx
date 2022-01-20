import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 p-4 pb-32 bg-gray-100 dark:bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-xl dark:bg-opacity-60">
      <div className="flex flex-col gap-2 mb-8">
        <h4 className="text-2xl font-bold mb-4">Contacts</h4>
        <FooterLink
          href="#"
          text="delosreyesjohnallen@gmail.com"
          icon="email"
        />
        <FooterLink href="#" text="09675006817" icon="phone" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-bold mb-4">Socials</h4>
        <FooterLink href="#" text="/allenwhun" icon="facebook" />
        <FooterLink href="#" text="/allenwhun" icon="twitter" />
        <FooterLink href="#" text="/swtmply" icon="github" />
        <FooterLink href="#" text="/allenwhun" icon="ig" />
      </div>
    </footer>
  );
}

const FooterLink = ({
  href,
  text,
  icon,
  ...rest
}: {
  href: string;
  text: string;
  icon: string;
  target?: string;
}) => {
  return (
    <Link href={href} passHref>
      <a
        {...rest}
        className="hover:text-stone-900 transition-colors text-stone-700 py-1 rounded-lg dark:text-neutral-300 dark:hover:text-neutral-500 flex gap-2 text-lg items-center hover:text-pink-300"
      >
        <Image
          src={`/assets/icons/${icon}.svg`}
          width={32}
          height={32}
          alt="footer-link-icon"
        />
        {text}
      </a>
    </Link>
  );
};
