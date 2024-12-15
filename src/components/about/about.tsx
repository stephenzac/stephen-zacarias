import { MyPicture } from './my-picture';
import { IntroText } from './intro-text';
import { NewLinks } from './new-links';
import { IntroBox } from './intro-box';

export const About: React.FC = () => (
  <header className='flex flex-col items-center justify-center w-full gap-5'>
    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-6 lg:gap-8'>
      <div className='flex flex-row'>
        <IntroBox />
      </div>

      <div className=''>
        <IntroText />
      </div>
    </div>
  </header>
);
