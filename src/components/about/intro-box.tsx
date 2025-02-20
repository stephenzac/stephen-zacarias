import { MyPicture } from './my-picture';
import { NewLinks } from './new-links';

export const IntroBox: React.FC = () => (
  <div className='flex flex-col items-center lg:flex-row'>
    <MyPicture />

    <div className='text-box max-h-60'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-xl'>Hey, I&apos;m Stephen!</h1>
        <NewLinks />
      </div>
    </div>
  </div>
);
