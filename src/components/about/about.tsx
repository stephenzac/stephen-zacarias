import { Links } from './links';
import { MyPicture } from './picture';
import { IntroText } from './intro-text';
import { StaggerName } from './stagger-name';

export const About: React.FC = () => (
  <header className="flex flex-wrap items-center justify-center w-full gap-5 pr-1 mb-20 mt-8 lg:mt-16 lg:mb-32">
    <div className="flex flex-wrap text-center justify-center lg:w-4/12">
      <StaggerName />
      <Links />
    </div>
    <MyPicture />
    <IntroText />
  </header>
);
