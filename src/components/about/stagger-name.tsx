'use client';

import { motion } from 'framer-motion';

export const StaggerName: React.FC = () => {
  const words = ['Hey,', "I'm", 'Stephen!'];

  return (
    <h1 className="flex flex-row responsive-header text-center pb-4 font-black">
      <motion.div
        initial="before"
        animate="after"
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {words.map((text, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              before: { opacity: 0, x: -100 },
              after: { opacity: 1, x: 0, transition: { duration: 0.4 } },
            }}
          >
            {text}
            {index === words.length - 1 ? '' : '\u00A0'}
          </motion.span>
        ))}
      </motion.div>
    </h1>
  );
};
