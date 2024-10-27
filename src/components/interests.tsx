'use client';

import { motion } from 'framer-motion';
import { InterestsSectionHeader } from './section-header';
import { InterestsListElement } from './interests-list-element';

export const Interests: React.FC = () => {
  const ySlide = {
    hidden: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const viewportSettings = {
    once: true,
    amount: 0.3,
  };

  return (
    <section className='flex flex-col w-4/5 mb-16 responsive-text text-left md:text-left'>
      <h2 className='section-header self-start text-balance font-black'>
        Outside of programming and studying...
      </h2>

      <motion.div
        className='mb-12 lg:mb-8'
        variants={ySlide}
        initial='hidden'
        whileInView='animate'
        viewport={viewportSettings}
      >
        <InterestsSectionHeader>music</InterestsSectionHeader>
        <ul>
          <InterestsListElement>
            <a
              href='https://www.youtube.com/watch?v=PM5NgQcdWqM'
              target='_blank'
              rel='noopener noreferrer'
              className='underline font-extrabold ransition-all link-hover'
            >
              playing trombone
            </a>
          </InterestsListElement>

          <InterestsListElement>
            influenced by sound and nuances of{' '}
            <a
              href='https://www.youtube.com/watch?v=Ic0FsCs-R6Y'
              target='_blank'
              rel='noopener noreferrer'
              className='underline font-extrabold link-hover'
            >
              L.A studio jazz trombonists
            </a>
          </InterestsListElement>

          <InterestsListElement>
            <a
              href='https://uciband.com/staff'
              target='_blank'
              rel='noopener noreferrer'
              className='underline font-extrabold link-hover'
            >
              uci anteater band
            </a>{' '}
            (student manager + web developer)
          </InterestsListElement>

          <InterestsListElement>
            uci jazz orchestra (briefly)
          </InterestsListElement>

          <InterestsListElement>
            uci wind ensemble (occasionally)
          </InterestsListElement>

          <InterestsListElement>
            check out my{' '}
            <a
              href='https://open.spotify.com/user/cheesehugger1'
              target='_blank'
              rel='noopener noreferrer'
              className='underline font-extrabold link-hover'
            >
              spotify profile
            </a>{' '}
            (bruno mars and la la land enthusiast)
          </InterestsListElement>
        </ul>
      </motion.div>

      <motion.div
        className='mb-12 lg:mb-8'
        variants={ySlide}
        initial='hidden'
        whileInView='animate'
        viewport={viewportSettings}
      >
        <InterestsSectionHeader>gaming</InterestsSectionHeader>
        <ul>
          <InterestsListElement>
            favorite game genre: fps games
          </InterestsListElement>

          <InterestsListElement>
            aiming for the best strategies, teamwork, and mechanics in the game
            server to win
          </InterestsListElement>

          <InterestsListElement>
            <a
              href='https://www.youtube.com/watch?v=I_DsR2mZsK0'
              target='_blank'
              rel='noopener noreferrer'
              className='underline font-extrabold link-hover'
            >
              valorant
            </a>
            , csgo, overwatch, pokémon, skyrim, fallout enjoyer
          </InterestsListElement>

          <InterestsListElement>
            <a
              href='https://www.youtube.com/watch?v=5HOU8SykHzg'
              target='_blank'
              rel='noopener noreferrer'
              className='underline font-extrabold link-hover'
            >
              minesweeper speedrunning
            </a>{' '}
            (previously top 10 in google minesweeper)
          </InterestsListElement>
        </ul>
      </motion.div>

      <motion.div
        className='mb-10'
        variants={ySlide}
        initial='hidden'
        whileInView='animate'
        viewport={viewportSettings}
      >
        <InterestsSectionHeader>friends + family</InterestsSectionHeader>
        <ul>
          <InterestsListElement>
            eating, cooking (big foodie)
          </InterestsListElement>

          <InterestsListElement>going out</InterestsListElement>

          <InterestsListElement>more gaming</InterestsListElement>

          <InterestsListElement>checking out new places</InterestsListElement>

          <InterestsListElement>shenanigans :D</InterestsListElement>
        </ul>
      </motion.div>
    </section>
  );
};
