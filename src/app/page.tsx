"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Links from "../components/links";
import Projects from "../components/projects";
import TopScrollBar from "../components/top-scroll-bar";
import ListPlus from "../components/list-plus";
import ListElement from "../components/list-element";

export default function Home() {
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
    <div className="flex flex-col items-center h-auto w-auto pb-4">
      <TopScrollBar />
      <div className="flex flex-wrap items-center justify-center w-full gap-5 pr-1 mt-10 mb-12 lg:mb-16">
        <motion.div
          variants={xSlide}
          initial={"hidden"}
          animate={"animate"}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <h1 className="responsive-header text-center pb-4 font-black">
            Hey, {`I'm`} <span className="italic">Stephen</span>!
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
            className="w-48 h-auto border-4 border-solid border-accent overflow-hidden rounded-xl mb-3"
          />
        </motion.div>
      </div>

      {/* About paragraph */}
      <div className="flex flex-col items-center text-center responsive-text text-balance w-4/5 mb-20">
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
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <p>
            {`I'm`} a third year Computer Science major at the University of
            California, Irvine. I have a particular interest in developing web
            applications, with experience in developing with Typescript, React,
            Next.js, Tailwind CSS, and HTML/CSS.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      <Projects />
      {/* <motion.div
        whileHover={{ scaleX: 2, scaleY: 2, y: -15 }}
        className="w-48 h-16 rounded-xl bg-red-400"
      >
        <h1 className="text-center text-neutral-700">Test Project</h1>
      </motion.div> */}

      {/* Interests section */}
      <motion.div
        className="flex flex-col w-4/5 mb-16 responsive-text text-balance text-center md:text-left"
        variants={ySlide}
        initial={"hidden"}
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-header self-start text-balance">
          Outside of programming and studying...
        </h1>

        <motion.div
          className="mb-8"
          variants={ySlide}
          initial={"hidden"}
          whileInView={"animate"}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h1 className="text-xl lg:text-2xl text-lighterAccent">music</h1>
          <div className="flex flow-row flex-wrap gap-8 items-center">
            <ul>
              <li>
                <ListPlus />
                <a
                  href="https://www.youtube.com/watch?v=PM5NgQcdWqM"
                  target="_blank"
                  className="hover:scale-125"
                >
                  trombone
                </a>
                {` (jazz trombone)`}
              </li>
              <li>
                <ListPlus /> influenced by sound and nuances of
                <a
                  href="https://www.youtube.com/watch?v=Ic0FsCs-R6Y"
                  target="_blank"
                >
                  {` L.A studio jazz trombonists`}
                </a>
              </li>
              <ListElement text="uci anteater band" />
              <ListElement text="uci jazz orchestra" />
              <ListElement text="uci wind ensemble" />
              <li>
                <ListPlus />
                {`my spotify account `}
                <a
                  href="https://open.spotify.com/user/cheesehugger1"
                  target="_blank"
                  className="underline"
                >
                  here
                </a>
                {` (bruno mars and la la land enthusiast)`}
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mb-10"
          variants={ySlide}
          initial={"hidden"}
          whileInView={"animate"}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h1 className="text-xl md:text-2xl text-lighterAccent">gaming</h1>
          <div className="flex flow-row flex-wrap gap-8 items-center">
            <ul>
              <ListElement text="favorite game genre: fps games" />
              <ListElement text="aiming for the best strategies, teamwork, and mechanics in the game server to win" />
              <li>
                <ListPlus />
                <a
                  href="https://www.youtube.com/watch?v=I_DsR2mZsK0"
                  target="_blank"
                >
                  valorant
                </a>
                , csgo, overwatch, pokémon enjoyer
              </li>
              <li>
                <ListPlus />
                <a
                  href="https://www.youtube.com/watch?v=5HOU8SykHzg"
                  target="_blank"
                >
                  minesweeper speedrunning
                </a>
                {` (previously top 10 in google minesweeper)`}
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mb-10"
          variants={ySlide}
          initial={"hidden"}
          whileInView={"animate"}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h1 className="text-xl lg:text-2xl text-lighterAccent">
            friends + family
          </h1>
          <ul>
            <ListElement text="eating (big foodie)" />
            <ListElement text="going out" />
            <ListElement text="going to new places" />
            <ListElement text="shenanigans :D" />
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom section */}
      <div className="flex flex-col items-start w-full text-xs text-balance px-5 mr-auto pt-4">
        <p>© Stephen Zacarias 2024</p>
        <p>
          Built with Next.js, Framer Motion, Typescript, react-icons, and
          deployed on Vercel
        </p>
      </div>
    </div>
  );
}
