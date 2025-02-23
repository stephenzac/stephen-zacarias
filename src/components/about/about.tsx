import { IntroText } from './intro-text';

import { MyPicture } from './my-picture';
import { MyLinks } from './my-links';

export const About: React.FC = () => (
  <header className='flex flex-col w-full gap-4 items-center'>
    <div className='grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-2 gap-y-2 items-center'>
      <div className='flex justify-center'>
        <MyPicture />
      </div>

      <div className='flex flex-col gap-3 justify-center items-center md:items-start text-box h-full'>
        <h1 className='text-xl pl-[2.2px]'>Hey, I&apos;m Stephen!</h1>
        <MyLinks />
      </div>
    </div>

    <IntroText />
  </header>
);
