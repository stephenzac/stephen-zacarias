import Image from 'next/image';
import React from 'react';

export const Picture: React.FC = () => (
  <div className='flex flex-col place-items-center self-center'>
    <Image
      src='/stephen.JPG'
      height={225}
      width={225}
      alt='Picture of Stephen smiling'
      priority={true}
      className='w-48 h-auto mb-8 border-4 border-solid border-accent overflow-hidden rounded-md'
    />
  </div>
);
