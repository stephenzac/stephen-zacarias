import React from 'react';

export const MyPicture: React.FC = () => (
  <img
    src='/stephen.JPG'
    height={225}
    width={225}
    alt='Picture of Stephen smiling'
    className='w-48 h-48 md:w-56 md:h-56 rounded-md border-4 border-accent'
  />
);
