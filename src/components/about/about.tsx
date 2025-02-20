import { IntroText } from './intro-text';
import { IntroBox } from './intro-box';

export const About: React.FC = () => (
  <header className='flex flex-col items-center justify-center w-full gap-5'>
    <div className='grid grid-cols-1 md:grid-cols-[60%_40%] w-full gap-6 lg:gap-8'>
      <div className='flex items-center justify-center '>
        <IntroBox />
      </div>

      <IntroText />
    </div>
  </header>
);
