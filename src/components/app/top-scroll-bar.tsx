'use client';

import { motion, useScroll } from 'framer-motion';

export const TopScrollBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className='fixed top-0 w-full h-[15px] origin-center blurred-backdrop'
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};
