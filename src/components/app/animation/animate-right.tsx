'use client';

import { motion } from 'framer-motion';

interface AnimateRightProps {
  children?: React.ReactNode;
}

export const AnimateRight: React.FC<AnimateRightProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
