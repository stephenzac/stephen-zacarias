'use client';

import { motion } from 'framer-motion';

export const IntroText: React.FC = () => (
  <div className='text-box md:w-3/4 flex flex-col relative'>
    <p className='responsive-text'>
      I&apos;m a fourth-year Computer Science student at UC Irvine with a
      passion for full-stack web development. I specialize in building scalable,
      accessible, and high-performance applications using technologies like
      React, Next.js, TypeScript, and GraphQL. Through personal and
      collaborative projects, I&apos;ve developed a strong foundation in
      creating user-friendly and well-architected software. I&apos;m excited to
      apply my skills to real-world challenges and build impactful solutions!
    </p>

    {/* triangle thing */}
    <motion.div
      className='duration-150 w-0 aspect-square border-t-[11px] border-b-white border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent absolute bottom-2.5 right-4'
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
);
