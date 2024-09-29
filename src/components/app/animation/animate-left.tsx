'use client';

import { motion } from 'framer-motion';

interface AnimateLeftProps {
  children?: React.ReactNode;
}

export const AnimateLeft: React.FC<AnimateLeftProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
