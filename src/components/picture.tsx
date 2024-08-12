import Image from "next/image";
import { motion } from "framer-motion";

export default function Picture() {
  return (
    <motion.div
      className="flex flex-col place-items-center self-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/stephen.JPG"
        height={225}
        width={225}
        alt="Picture of Stephen smiling"
        priority={true}
        className="w-48 h-auto mb-8 border-4 border-solid border-accent overflow-hidden rounded-md"
      />
    </motion.div>
  );
}
