import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 pb-32">
      <hr className="border border-gray-200 mb-8" />
      <div className="flex space-x-40">
        <div className="flex flex-col gap-3">
          <FooterLink href="/" text="Home" target="" />
          <FooterLink href="/blog" text="Blog" target="" />
          <FooterLink href="/about" text="About" target="" />
        </div>
        <div className="flex flex-col gap-3">
          <FooterLink
            href="https://twitter.com/allenwhun"
            text="Twitter"
            target="_blank"
          />
          <FooterLink
            href="https://www.facebook.com/allenwhun"
            text="Facebook"
            target="_blank"
          />
          <FooterLink
            href="https://github.com/swtmply"
            text="Github"
            target="_blank"
          />
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({
  href,
  text,
  ...rest
}: {
  href: string;
  text: string;
  target: string;
}) => {
  return (
    <Link href={href} passHref>
      <a
        {...rest}
        className="hover:text-stone-900 transition-colors text-stone-700 py-1 rounded-lg dark:text-neutral-300 dark:hover:text-neutral-500"
      >
        {text}
      </a>
    </Link>
  );
};
