"use client";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import ListPlus from "./list-plus";

export default function Interests() {
  const ySlide = {
    hidden: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const viewportSettings = {
    once: true,
    amount: 0.3,
  };

  return (
    <section className="flex flex-col w-4/5 mb-16 responsive-text text-left md:text-left">
      <motion.h1
        className="section-header self-start text-balance font-black"
        variants={ySlide}
        initial={"hidden"}
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Outside of programming and studying...
      </motion.h1>

      <motion.div
        className="mb-12 lg:mb-8"
        variants={ySlide}
        initial={"hidden"}
        whileInView={"animate"}
        viewport={viewportSettings}
      >
        <SectionHeader headerText="music" />
        <ul>
          <li>
            <ListPlus />
            <a
              href="https://www.youtube.com/watch?v=PM5NgQcdWqM"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-extrabold ransition-all link-hover"
            >
              playing trombone
            </a>
          </li>

          <li>
            <ListPlus /> influenced by sound and nuances of{" "}
            <a
              href="https://www.youtube.com/watch?v=Ic0FsCs-R6Y"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-extrabold link-hover"
            >
              {`L.A studio jazz trombonists`}
            </a>
          </li>

          <li>
            <ListPlus />
            <a
              href="https://www.youtube.com/watch?v=TsCuT2j36-w&list=PLHFy1972idO-sEZCZxF_o3o3UpMEsm6b6&index=13"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-extrabold link-hover"
            >
              uci anteater band
            </a>{" "}
            (student manager + web developer)
          </li>

          <li>
            <ListPlus /> uci jazz orchestra (briefly)
          </li>

          <li>
            <ListPlus /> uci wind ensemble (occasionally)
          </li>

          <li>
            <ListPlus />
            check out my{" "}
            <a
              href="https://open.spotify.com/user/cheesehugger1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-extrabold link-hover"
            >
              spotify profile
            </a>
            {` (bruno mars and la la land enthusiast)`}
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="mb-12 lg:mb-8"
        variants={ySlide}
        initial={"hidden"}
        whileInView={"animate"}
        viewport={viewportSettings}
      >
        <SectionHeader headerText="gaming" />
        <ul>
          <li>
            <ListPlus /> favorite game genre: fps games
          </li>

          <li>
            <ListPlus /> aiming for the best strategies, teamwork, and mechanics
            in the game server to win
          </li>

          <li>
            <ListPlus />
            <a
              href="https://www.youtube.com/watch?v=I_DsR2mZsK0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-extrabold link-hover"
            >
              valorant
            </a>
            , csgo, overwatch, pokémon, skyrim, fallout enjoyer
          </li>

          <li>
            <ListPlus />
            <a
              href="https://www.youtube.com/watch?v=5HOU8SykHzg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-extrabold link-hover"
            >
              minesweeper speedrunning
            </a>
            {` (previously top 10 in google minesweeper)`}
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="mb-10"
        variants={ySlide}
        initial={"hidden"}
        whileInView={"animate"}
        viewport={viewportSettings}
      >
        <SectionHeader headerText="friends + family" />
        <ul>
          <li>
            <ListPlus /> eating, cooking (big foodie)
          </li>

          <li>
            <ListPlus /> going out
          </li>

          <li>
            <ListPlus /> checking out new places
          </li>

          <li>
            <ListPlus /> shenanigans :D
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
