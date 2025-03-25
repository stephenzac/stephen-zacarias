import React from 'react';

export const MyPicture: React.FC = () => (
  <img
    src='/stephen.JPG'
    height={225}
    width={225}
    alt='Picture of Stephen smiling'
    // className='w-48 h-48 md:w-56 md:h-56 rounded-md border-4 border-accent shadow-2xl'
    className='w-48 h-48 md:w-56 md:h-56 rounded-md border-4 border-accent 
               shadow-[0px_0px_15px_rgba(224,165,27,0.6)] transition-all
               hover:scale-[1.05] hover:shadow-[0px_0px_25px_rgba(224,165,27,0.8)]
               before:absolute before:inset-0 before:border before:border-white before:m-1'
  />
);
