import Image from 'next/image';
import React from 'react';

type TechType = {
  imageLink: string;
  name: string;
};

export default function Tech({ imageLink, name }: TechType) {
  return (
    <div className="snap-center px-3 py-2 bg-gray-cool dark:bg-gray-700 rounded-xl min-w-[110px] max-w-max text-center bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
      <Image src={imageLink} width={100} height={100} alt={name} />
      <p>{name}</p>
    </div>
  );
}
