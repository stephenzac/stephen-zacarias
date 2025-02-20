'use client';

import { motion } from 'framer-motion';

export const IntroText: React.FC = () => (
  <div className='flex flex-col gap-8 items-center'>
    <div className='text-box flex flex-col relative'>
      <p className='responsive-text'>
        I&apos;m a fourth-year Computer Science student at UC Irvine with a
        passion for full-stack web development. I specialize in building
        scalable, accessible, and high-performance applications using
        technologies like React, Next.js, TypeScript, and GraphQL. Through
        personal and collaborative projects, I&apos;ve developed a strong
        foundation in creating user-friendly and well-architected software.
        I&apos;m excited to apply my skills to real-world challenges and build
        impactful solutions!
      </p>

      <motion.div
        className='duration-150 w-0 aspect-square border-b-[11px] border-b-white border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent absolute bottom-5 right-4'
        initial={{ y: 0 }}
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 5, 0],
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            },
          },
        }}
        animate={['idle', 'hover']}
        whileHover='hover'
      />
    </div>

    {/* <div className='text-box flex flex-col relative'>
      <p className='responsive-text'>
        Through both personal and collaborative projects, {`I'm`} honed my
        ability to create software that is not only well-architected but also
        scalable, accessible, and user-friendly. {`I'm`} eager to apply my
        skills to build real-world applications that perform exceptionally well
        and make a meaningful impact!
      </p>
      <motion.div
        className='duration-150 w-0 aspect-square border-b-[11px] border-b-white border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent absolute bottom-5 right-4'
        initial={{ y: 0 }}
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 5, 0],
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            },
          },
        }}
        animate={['idle', 'hover']}
        whileHover='hover'
      />
    </div> */}
  </div>
);
