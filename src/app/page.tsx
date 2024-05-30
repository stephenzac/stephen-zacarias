"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Links from "../components/links";
import Projects from "../components/projects";
import TopScrollBar from "../components/top-scroll-bar";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-auto w-full pb-4">
      <TopScrollBar />

      <div className="flex flex-wrap items-center justify-center w-full gap-5 pr-1 mt-10 mb-16">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
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
            hidden: { opacity: 0, translateX: 100 },
            visible: { opacity: 1, translateX: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image
            src="/stephen.JPG"
            height={225}
            width={225}
            alt="Picture of Stephen"
            priority={true}
            className="w-48 h-auto border-2 border-solid border-accent overflow-hidden rounded-xl mb-3"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center text-center responsive-text text-balance w-4/5 mb-20">
        <motion.div
          variants={{
            hidden: { opacity: 0, translateY: 100 },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            {`I'm`} a third year Computer Science major at the University of
            California, Irvine. I have a particular interest in developing web
            applications, with experience in developing with Typescript, React,
            Next.js, Tailwind CSS, and HTML/CSS.
          </p>
        </motion.div>
      </div>

      <Projects />

      <motion.div
        className="flex flex-col w-4/5 mb-16 responsive-text text-balance text-center md:text-left"
        variants={{
          hidden: { opacity: 0, translateY: 100 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-header self-start text-balance">
          Outside of programming and studying...
        </h1>

        <motion.div
          className="mb-8"
          variants={{
            hidden: { opacity: 0, translateY: 100 },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl lg:text-2xl text-lighterAccent">music</h1>
          <ul>
            <li>
              <span className="list-plus">+ </span>
              <a
                href="https://www.youtube.com/watch?v=PM5NgQcdWqM"
                target="_blank"
                className="hover:scale-125"
              >
                trombone
              </a>{" "}
              (jazz trombone)
            </li>
            <li>
              <span className="list-plus">+ </span>influenced by sound and
              nuances of{" "}
              <a
                href="https://www.youtube.com/watch?v=Ic0FsCs-R6Y"
                target="_blank"
              >
                L.A studio jazz trombonists
              </a>
            </li>
            <li>
              <span className="list-plus">+ </span>uci anteater band
            </li>
            <li>
              <span className="list-plus">+ </span>uci jazz orchestra
            </li>
            <li>
              <span className="list-plus">+ </span>uci wind ensemble
            </li>
            <li>
              <span className="list-plus">+ </span>
              my spotify account{" "}
              <a
                href="https://open.spotify.com/user/cheesehugger1"
                target="_blank"
                className="underline"
              >
                here
              </a>{" "}
              (bruno mars and la la land enthusiast)
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="mb-10"
          variants={{
            hidden: { opacity: 0, translateY: 100 },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl md:text-2xl text-lighterAccent">gaming</h1>
          <ul>
            <li>
              <span className="list-plus">+ </span>favorite genre: fps games
            </li>
            <li>
              <span className="list-plus">+ </span>aiming for the best
              strategies, teamwork, mechanics in server to win
            </li>
            <li>
              <span className="list-plus">+ </span>
              <a
                href="https://www.youtube.com/watch?v=I_DsR2mZsK0"
                target="_blank"
              >
                valorant
              </a>
              , csgo, overwatch, pokémon enjoyer
            </li>
            <li>
              <span className="list-plus">+ </span>
              <a
                href="https://www.youtube.com/watch?v=5HOU8SykHzg"
                target="_blank"
              >
                minesweeper speedrunning
              </a>{" "}
              (previously top 10 in google minesweeper)
            </li>
            <li></li>
          </ul>
        </motion.div>

        <motion.div
          className="mb-10"
          variants={{
            hidden: { opacity: 0, translateY: 100 },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl lg:text-2xl text-lighterAccent">friends</h1>
          <ul>
            <li>
              <span className="list-plus">+ </span>eating (big foodie)
            </li>
            <li>
              <span className="list-plus">+ </span>going out
            </li>
            <li>
              <span className="list-plus">+ </span>going to new places
            </li>
            <li>
              <span className="list-plus">+ </span>shenanigans :D
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-start w-full text-xs text-balance pl-8 mr-auto pt-4">
        <p>© Stephen Zacarias 2024</p>
        <p>
          Built with Next.js, Framer Motion, Typescript, react-icons, and
          deployed on Vercel
        </p>
      </div>
    </div>
  );
}
