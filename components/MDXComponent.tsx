import Link from 'next/link';
// import Image from 'next/image';

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export const MDXComponents = {
  a: CustomLink,
  // img: (props: any) => (
  //   // height and width are part of the props, so they get automatically passed here with {...props}
  //   <Image
  //     {...props}
  //     layout="responsive"
  //     loading="lazy"
  //     alt={props.alt || ''}
  //   />
  // ),
};
