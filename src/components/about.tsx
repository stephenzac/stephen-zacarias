'use client';

import { motion } from 'framer-motion';
import Links from './links';
import Picture from './picture';
import IntroText from './intro-text';

export const About: React.FC = () => {
  const introductionWords = ['Hey,', "I'm", 'Stephen!'];

  return (
    <header className='flex flex-wrap items-center justify-center w-full gap-5 pr-1 mb-20 mt-8 lg:mt-16 lg:mb-32'>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
        className='flex flex-wrap text-center justify-center lg:w-4/12'
      >
        <h1 className='flex flex-row responsive-header text-center pb-4 font-black'>
          <motion.div
            initial='before'
            animate='after'
            variants={{
              before: {},
              after: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {introductionWords.map((text, index) => (
              <motion.span
                key={index}
                className='inline-block'
                variants={{
                  before: { opacity: 0, x: -100 },
                  after: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
              >
                {text}
                {index === introductionWords.length - 1 ? '' : '\u00A0'}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        <Links />
      </motion.div>

      <Picture />

      <IntroText />
    </header>
  );
};
