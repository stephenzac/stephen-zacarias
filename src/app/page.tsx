"use client";
import Image from "next/image";
import Links from "../components/links";
// import styles from "../styles/page.module.css";
import { motion, useScroll } from "framer-motion";
import Projects from "../components/projects";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col items-center h-auto w-full pb-4">
      <motion.div
        className="fixed top-0 w-full bg-red-500 h-4 origin-center"
        style={{
          scaleX: scrollYProgress,
        }}
      />

      <div className="flex flex-row items-center justify-center w-80 gap-8 pr-1 mt-10 mb-14">
        <h1 className="responsive-header text-center mt-8 pb-4 font-black">
          Hey, {`I'm`} <span className="italic">Stephen</span>!
        </h1>
        <Image
          src="/stephen.JPG"
          height={225}
          width={225}
          alt="Picture of Stephen"
          priority={true}
          className="w-48 h-auto border-double border-2 rounded-xl"
        />
      </div>

      <div className="flex flex-col items-center text-center responsive-text text-balance w-4/5 mb-20">
        <p>
          {`I'm`} a third year Computer Science major at the University of
          California, Irvine. I have a particular interest in developing web
          applications, with experience in developing with Typescript, React,
          Next.js, Tailwind CSS, and HTML/CSS.
        </p>
      </div>

      <h1 className="section-header">Projects</h1>

      <Projects />

      <div className="flex flex-col w-4/5 mb-28 responsive-text text-balance">
        <h1 className="section-header">
          When {`I'm`} not programming or studying...
        </h1>

        <h1>Music</h1>
        <ul>
          <li>trombone (jazz trombone)</li>
          <li>
            influenced by sound and nuances of L.A studio jazz trombonists
          </li>
          <li>anteater band</li>
          <li>big band</li>
          <li>wind ensemble</li>
          <li>
            <a
              href="https://open.spotify.com/user/cheesehugger1"
              target="_blank"
              className="underline"
            >
              my spotify account
            </a>
          </li>
        </ul>

        <br />

        <h1>Gaming</h1>
        <ul>
          <li>fps</li>
          <li>valorant, csgo</li>
          <li>best strategies, teamwork, mechanics in server to win</li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=5HOU8SykHzg"
              target="_blank"
            >
              speedrunning minesweeper (previous google minsweeper top record
              holder)
            </a>
          </li>
          <li></li>
        </ul>

        <br />

        <h1>Friends</h1>
        <ul>
          <li>eating</li>
          <li>going out</li>
        </ul>
      </div>

      <div className="flex flex-col items-start w-full text-xs pl-8">
        <Links />
        <div className="mr-auto">
          <p>© Stephen Zacarias 2024</p>
          <p>
            Built with Next.js, React, Framer Motion, Typescript, and deployed
            on Vercel
          </p>
        </div>
      </div>
    </div>
  );
}
