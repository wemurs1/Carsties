'use client';

import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  imageUrl: string;
};

export default function CarImage({ imageUrl }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      src={imageUrl}
      alt='image'
      fill
      priority
      sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw'
      className={`object-cover group-hover:opacity-75 duration-700 ease-in-out ${
        loading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
