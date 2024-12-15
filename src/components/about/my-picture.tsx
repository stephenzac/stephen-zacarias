import React from 'react';

export const MyPicture: React.FC = () => (
  <img
    src='/stephen.JPG'
    height={225}
    width={225}
    alt='Picture of Stephen smiling'
    className='w-48 h-48 mb-8 border-4 border-solid border-accent overflow-hidden rounded-md'
  />
);
