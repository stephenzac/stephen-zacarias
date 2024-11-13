import { motion } from 'framer-motion';

export default function IntroText() {
  return (
    <div className='flex flex-col gap-8 items-center w-4/5'>
      <p className='responsive-text w-full lg:w-4/6'>
        {`I'm`} a fourth year Computer Science major at the University of
        California, Irvine, with a passion for developing web applications on
        both ends of the stack. I have hands-on experience with technologies
        like React, Next.js, TypeScript, GraphQL, AWS, just to name a few.
      </p>
      <p className='responsive-text w-full lg:w-4/6'>
        Through both personal and collaborative projects, I&apos;ve honed my
        ability to create software that is not only well-architected but also
        scalable, accessible, and user-friendly. I&apos;m eager to apply my
        skills to build real-world applications that perform exceptionally well
        and make a meaningful impact!
      </p>
    </div>
  );
}
