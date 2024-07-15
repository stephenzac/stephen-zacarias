"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Links from "./links";

export default function About() {
  const xSlide = {
    hidden: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const ySlide = {
    hidden: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <header className="flex flex-wrap items-center justify-center w-full gap-5 pr-1 mt-10 mb-20 lg:mb-32">
      <motion.div
        variants={{
          ...xSlide,
          animate: {
            ...xSlide.animate,
            transition: {
              ...xSlide.animate.transition,
              delay: 0.3,
            },
          },
        }}
        initial={"hidden"}
        animate={"animate"}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h1 className="flex flex-row responsive-header text-center pb-4 font-black">
          <motion.div
            variants={{
              ...xSlide,
              animate: {
                ...xSlide.animate,
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                },
              },
            }}
          >
            <span className="inline-block">Hey,&nbsp;</span>
          </motion.div>

          <motion.div
            variants={{
              ...xSlide,
              animate: {
                ...xSlide.animate,
                transition: {
                  duration: 0.7,
                  delay: 0.52,
                },
              },
            }}
          >
            <span>{`I'm`}&nbsp;</span>
          </motion.div>

          <motion.div
            variants={{
              ...xSlide,
              animate: {
                ...xSlide.animate,
                transition: {
                  duration: 0.7,
                  delay: 0.74,
                },
              },
            }}
          >
            <span className="italic">Stephen!</span>
          </motion.div>
        </h1>

        <Links />
      </motion.div>

      <motion.div
        className="flex flex-col place-items-center self-center"
        variants={{
          hidden: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
        }}
        initial={"hidden"}
        animate={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Image
          src="/stephen.JPG"
          height={225}
          width={225}
          alt="Picture of Stephen smiling"
          priority={true}
          className="w-48 h-auto border-4 border-solid border-accent overflow-hidden rounded-lg mb-3"
        />
      </motion.div>

      {/* About paragraph */}
      <motion.div
        variants={ySlide}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
        className="flex flex-col gap-20 items-center w-4/5"
      >
        <p className="text-center responsive-text">
          {`I'm`} a fourth year Computer Science major at the University of
          California, Irvine. I have a particular interest in developing web
          applications, with experience in developing with React, Typescript,
          Next.js, Tailwind CSS, and HTML/CSS.
        </p>
      </motion.div>
    </header>
  );
}
