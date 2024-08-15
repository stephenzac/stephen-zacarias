import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-8 items-center w-4/5"
    >
      <p className="responsive-text w-full lg:w-4/6">
        {`I'm`} a fourth year Computer Science major at the University of
        California, Irvine. I have a particular interest in developing web
        applications, with experience in developing with React, Typescript,
        Next.js, Tailwind CSS, and HTML/CSS.
      </p>
      <p className="responsive-text w-full lg:w-4/6">
        I am looking to use my knowledge and skill set to build real-world
        applications that perform exceptionally well and have an impact!
      </p>
    </motion.div>
  );
}
