import { IntroText } from './intro-text';

import { MyPicture } from './my-picture';
import { MyLinks } from './my-links';

export const About: React.FC = () => (
  <header className='flex flex-col w-full gap-4 items-center'>
    <div className='grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-2 gap-y-2 items-center'>
      <div className='flex justify-center'>
        <MyPicture />
      </div>

      {/* <div className='relative max-w-md p-4 bg-blue-500 border-4 border-black rounded-lg shadow-md font-mono text-white text-lg'>
        <div className='absolute inset-0 border-4 border-white m-1' />
        <p className='relative'>Hello! My name is Stephen.</p>
      </div> */}

      {/* <div className='flex flex-col gap-3 justify-center items-center md:items-start text-box h-full'>
        <h1 className='text-xl pl-[2.2px]'>Hey, I&apos;m Stephen!</h1>
        <MyLinks />
      </div> */}

      <div className='dialogue-box max-w-lg'>
        <h1 className='font-extrabold mb-1'>
          STEPHEN ZACARIAS: Welcome to my personal website!
        </h1>
        <p>
          I am a fourth year Computer Science major at the University of
          California, Irvine. I specialize in creating well-written, scalable,
          and high-performing web applications, always keeping the end-user in
          mind.
        </p>
        <span className='absolute bottom-1 right-3 animate-bounce text-black'>
          ▼
        </span>
      </div>

      {/* <div className='dialogue-box w-full flex flex-col relative'>
        <div className='dialogue-content w-full'>
          I&apos;m a fourth-year Computer Science student at UC Irvine with a
          passion for full-stack web development. I specialize in building
          scalable, accessible, and high-performance applications using
          technologies like React, Next.js, TypeScript, and GraphQL. Through
          personal and collaborative projects, I&apos;ve developed a strong
          foundation in creating user-friendly and well-architected software.
          I&apos;m excited to apply my skills to real-world challenges and build
          impactful solutions!
          <span className='absolute bottom-5 right-8 animate-bounce'>▼</span>
        </div>
      </div> */}

      {/* <div className='dialogue-box'>
        <div className='dialogue-content'>
          Hey, I&apos;m Stephen!
          <MyLinks />
        </div>
      </div> */}
    </div>

    {/* <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
      <div className='w-80 p-6 bg-gray-300 rounded-xl shadow-lg border-2 border-gray-400'>
        <p className='text-lg text-gray-800 font-semibold mb-4'>
          NPC: Welcome to the village, traveler!
        </p>
        <p className='text-md text-gray-600'>
          It&apos;s dangerous out there, be careful in the woods.
        </p>
      </div>

      <div className='w-80 p-6 bg-gray-300 rounded-xl shadow-lg border-2 border-gray-400 mt-8'>
        <p className='text-lg text-gray-800 font-semibold mb-4'>
          Player: Thanks for the warning!
        </p>
        <p className='text-md text-gray-600'>
          I&apos;ll be sure to stay on the path and avoid any trouble.
        </p>
      </div>
    </div> */}

    {/* <IntroText /> */}
  </header>
);
