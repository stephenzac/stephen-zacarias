'use client';

import { motion } from 'framer-motion';

interface AnimateUpProps {
  children?: React.ReactNode;
}

export const AnimateUp: React.FC<AnimateUpProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
