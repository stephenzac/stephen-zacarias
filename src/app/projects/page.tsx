import { SectionHeader } from '@/app/section-header';
import { Project } from './components/project';

export interface ProjectData {
  title: string;
  link: string;
  description: string;
  skills: string[];
}

const ProjectsList: ProjectData[] = [
  {
    title: 'UC Irvine Anteater Band Website',
    link: 'https://uciband.com',
    description:
      'A collaborative project to develop and maintain a rewrite of the UC Irvine Anteater Band website for better maintainability, and a fresh look and feel',
    skills: ['Next.js', 'TypeScript', 'GraphQL', 'Contentful', 'Chakra UI'],
  },
  {
    title: 'Soundle',
    link: 'https://soundle.stephenzacarias.com',
    description:
      "An independently developed, interactive, Wordle-like ear training game designed to challenge users' pitch recognition skills",
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
  },
  {
    title: '🏆 Live, Laugh, Zot',
    link: 'https://github.com/stephenzac/live-laugh-zot',
    description:
      "A real-time collaborative dashboard for roommates to organize their households together. Won the 1st place award at ICSSC's WebJam 2024",
    skills: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Zustand',
      'bcryptjs',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Sentimentify',
    link: 'https://github.com/stephenzac/sentimentify',
    description:
      'Collaborative web application developed for the five-day ICSSC WebJam 2023, designed to analyze the mood and energy of Spotify playlists',
    skills: ['Python', 'Spotify API', 'Genius API', 'Flask', 'Beautiful Soup'],
  },
];

export default function Projects() {
  return (
    <main className='w-full pt-10'>
      <SectionHeader>Projects</SectionHeader>

      <section>
        {ProjectsList.map((project) => (
          <>
            {/* <div className='w-full h-[1px] bg-accent mt-8 mb-2' /> */}
            <Project key={project.title} data={project} />
            <div className='mb-12' />
          </>
        ))}
      </section>
    </main>
  );
}
