import { motion, useScroll } from "framer-motion";

export default function TopScrollBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 w-full h-4 origin-center bg-gray-200"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
