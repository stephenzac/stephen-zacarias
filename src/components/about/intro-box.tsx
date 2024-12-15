import { MyPicture } from './my-picture';
import { NewLinks } from './new-links';

export const IntroBox: React.FC = () => (
  <div className='flex flex-col lg:flex-row'>
    <MyPicture />

    <div className='text-box max-h-56'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl'>Hey, I&apos;m Stephen!</h1>
        <NewLinks />
      </div>
    </div>
  </div>
);
