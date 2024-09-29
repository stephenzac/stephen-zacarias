import { AnimateUp } from '../app/animation/animate-up';

export const IntroText: React.FC = () => (
  <AnimateUp>
    <p className="responsive-text w-full lg:w-4/6">
      I&apos;m a fourth year Computer Science major at the University of California, Irvine. I have a particular
      interest in developing web applications, with experience in developing with React, Typescript, Next.js, Tailwind
      CSS, and HTML/CSS.
    </p>
    <p className="responsive-text w-full lg:w-4/6">
      I am looking to use my knowledge and skill set to build real-world applications that perform exceptionally well
      and have an impact!
    </p>
  </AnimateUp>
);
