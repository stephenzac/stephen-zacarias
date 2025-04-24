import { SectionHeader } from '@/components/app/section-header';
import { InterestsSection } from '@/components/interests/interests-section';
import { InterestsSectionHeader } from '@/components/interests/interests-section-header';
import { InterestsListElement } from '@/components/interests/interests-list-element';
import { AiOutlineSmile } from 'react-icons/ai';
import { LineDivider } from '@/components/app/line-divider';
import Link from 'next/link';
import { Links } from '../components/app/links';

export default function Home() {
  return (
    <main className='w-full pt-16'>
      <section className='mb-12'>
        <SectionHeader>
          Hello!
          <span className='text-accent'>
            <AiOutlineSmile />
          </span>
        </SectionHeader>

        <header className='mb-1'>
          I am <span className='text-accent'>Stephen Zacarias</span>, a fourth
          year Computer Science major at the University of California, Irvine. I
          enjoy building things, working with/on the web, and working with
          others!
        </header>

        <Link className='text-accent underline' href='/projects'>
          Check out some of the cool things I&apos;ve built!
        </Link>

        <Links />

        <LineDivider />
      </section>

      <section>
        <SectionHeader>More About Me</SectionHeader>

        <InterestsSection>
          <InterestsSectionHeader>Musical Endeavors</InterestsSectionHeader>
          <ul className='md:pl-2'>
            <InterestsListElement>
              <a
                href='https://www.youtube.com/watch?v=PM5NgQcdWqM'
                target='_blank'
                rel='noreferrer'
                className='underline hover:text-accent transition-colors duration-150'
              >
                Playing trombone
              </a>
            </InterestsListElement>

            <InterestsListElement>
              Influenced by the sound of{' '}
              <a
                href='https://www.youtube.com/watch?v=Ic0FsCs-R6Y'
                target='_blank'
                rel='noreferrer'
                className='underline hover:text-accent transition-colors duration-150'
              >
                L.A studio jazz trombonists
              </a>
            </InterestsListElement>

            <InterestsListElement>Ear training</InterestsListElement>

            <InterestsListElement>
              <a
                href='https://uciband.com'
                target='_blank'
                rel='noreferrer'
                className='underline hover:text-accent transition-colors duration-150'
              >
                UC Irvine Anteater Band
              </a>
              {` `}(4 years)
            </InterestsListElement>

            <InterestsListElement>
              UCI Jazz Orchestra (briefly)
            </InterestsListElement>

            <InterestsListElement>
              UCI Wind Ensemble (occasionally)
            </InterestsListElement>

            <InterestsListElement>
              Check out my{' '}
              <Link
                href='/music'
                className='underline hover:text-accent transition-colors duration-150'
              >
                music page!
              </Link>
            </InterestsListElement>

            <InterestsListElement>
              ... and my{' '}
              <a
                href='https://open.spotify.com/user/cheesehugger1'
                target='_blank'
                rel='noreferrer'
                className='underline hover:text-accent transition-colors duration-150'
              >
                Spotify profile
              </a>{' '}
              (Bruno Mars/La La Land Enthusiast)
            </InterestsListElement>
          </ul>
        </InterestsSection>

        <InterestsSection>
          <InterestsSectionHeader>Gaming</InterestsSectionHeader>
          <ul className='md:pl-2'>
            <InterestsListElement>
              Favorite game genre: FPS
            </InterestsListElement>

            <InterestsListElement>
              Aiming for the best strategies, teamwork, and mechanics in the
              game server to win
            </InterestsListElement>

            <InterestsListElement>
              <a
                href='https://www.youtube.com/watch?v=I_DsR2mZsK0'
                target='_blank'
                rel='noreferrer'
                className='underline hover:text-accent transition-colors duration-150'
              >
                Valorant
              </a>
              , Counter-Strike, Overwatch, Pokémon, Skyrim, Fallout enjoyer
            </InterestsListElement>

            <InterestsListElement>
              <a
                href='https://www.youtube.com/watch?v=5HOU8SykHzg'
                target='_blank'
                rel='noreferrer'
                className='underline hover:text-accent transition-colors duration-150'
              >
                Minesweeper speedrunning
              </a>{' '}
              (formerly top 10 in Google Minesweeper)
            </InterestsListElement>
          </ul>
        </InterestsSection>

        <InterestsSection>
          <InterestsSectionHeader>Friends + Family</InterestsSectionHeader>
          <ul className='md:pl-2'>
            <InterestsListElement>
              Eating, cooking (big foodie)
            </InterestsListElement>
            <InterestsListElement>Going out</InterestsListElement>
            <InterestsListElement>More gaming</InterestsListElement>
            <InterestsListElement>Exploring new places</InterestsListElement>
            <InterestsListElement>Shenanigans :D</InterestsListElement>
          </ul>
        </InterestsSection>
      </section>
    </main>
  );
}
