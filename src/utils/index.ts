import { IconType } from 'react-icons';
import { AiFillLinkedin, AiFillSpotify, AiFillMail } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';

export interface PersonalLink {
  linkText: string;
  link: string;
  icon: IconType;
}

export const personalLinks: PersonalLink[] = [
  {
    linkText: 'GitHub',
    link: 'https://github.com/stephenzac',
    icon: DiGithubBadge,
  },

  {
    linkText: 'LinkedIn',
    link: 'https://linkedin.com/in/stephen-zac',
    icon: AiFillLinkedin,
  },
  {
    linkText: 'Spotify',
    link: 'https://open.spotify.com/user/cheesehugger1',
    icon: AiFillSpotify,
  },
  {
    linkText: 'stephenzacarias2@gmail.com',
    link: 'mailto:stephenzacarias2@gmail.com',
    icon: AiFillMail,
  },
];

export interface Project {
  title: string;
  link: string;
  description: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    title: 'Soundle',
    link: 'https://stephenzac.github.io/soundle',
    description:
      "An independently developed, interactive Wordle-like ear training game designed to challenge users' pitch recognition skills",
    skills: ['React', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
  },
  {
    title: 'Anteater Band Website',
    link: 'https://uciband.com',
    description:
      'Collaborative project to develop and maintain a rewrite of the UC Irvine Anteater Band website',
    skills: ['Next.js', 'GraphQL', 'Contentful', 'Chakra', 'Emotion'],
  },
  {
    title: '🏆 Live, Laugh, Zot',
    link: 'https://github.com/stephenzac/live-laugh-zot',
    description:
      "A real-time collaborative dashboard for roommates to organize their households together. Won the 1st place award at ICSSC's WebJam 2024",
    skills: ['Next.js', 'Firebase', 'Gemini', 'Tailwind CSS'],
  },
  {
    title: 'Sentimentify',
    link: 'https://github.com/stephenzac/Sentimentify',
    description:
      'Collaborative web application developed for the five-day ICSSC WebJam 2023, designed to analyze the mood and energy of Spotify playlists',
    skills: ['Python', 'Rest APIs', 'Flask', 'Beautiful Soup'],
  },
  {
    title: 'This website',
    link: '',
    description:
      'My personal portfolio, built using Next.js, Framer Motion, TypeScript, react-icons, and Vercel for deployment',
    skills: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
];
