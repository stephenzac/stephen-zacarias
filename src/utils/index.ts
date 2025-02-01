import { IconType } from 'react-icons';
import { AiFillLinkedin, AiFillSpotify, AiFillMail } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';

export type MyLinks = {
  linkText: string;
  link: string;
  linkIcon: IconType;
};

export const links: MyLinks[] = [
  {
    linkText: 'GitHub',
    link: 'https://github.com/stephenzac',
    linkIcon: DiGithubBadge,
  },

  {
    linkText: 'LinkedIn',
    link: 'https://linkedin.com/in/stephen-zac',
    linkIcon: AiFillLinkedin,
  },
  {
    linkText: 'Spotify',
    link: 'https://open.spotify.com/user/cheesehugger1',
    linkIcon: AiFillSpotify,
  },
  {
    linkText: 'stephenzacarias2@gmail.com',
    link: 'mailto:stephenzacarias2@gmail.com',
    linkIcon: AiFillMail,
  },
];

export type Project = {
  projectName: string;
  projectLink: string;
  projectDescription: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    projectName: 'Soundle',
    projectLink: 'https://soundle.stephenzacarias.com',
    projectDescription:
      "An independently developed, interactive Wordle-like ear training game designed to challenge users' pitch recognition skills",
    skills: ['React', 'Typescript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
  },
  {
    projectName: 'Anteater Band Website',
    projectLink: 'https://uciband.com',
    projectDescription:
      'Collaborative project to develop and maintain a rewrite of the UC Irvine Anteater Band website',
    skills: [
      'Next.js',
      'TypeScript',
      'Apollo GraphQL',
      'Contentful',
      'Chakra UI',
      'Emotion',
    ],
  },
  {
    projectName: '🏆 Live, Laugh, Zot',
    projectLink: 'https://github.com/stephenzac/live-laugh-zot',
    projectDescription:
      "A real-time collaborative dashboard for roommates to organize their households together. Won the 1st place award at ICSSC's WebJam 2024",
    skills: [
      'Next.js',
      'TypeScript',
      'Firebase/Firestore',
      'Gemini',
      'Tailwind CSS',
    ],
  },
  {
    projectName: 'Sentimentify',
    projectLink: 'https://github.com/stephenzac/Sentimentify',
    projectDescription:
      'Collaborative web application developed for the five-day ICSSC WebJam 2023, designed to analyze the mood and energy of Spotify playlists',
    skills: ['Python', 'Rest APIs', 'Flask', 'Beautiful Soup'],
  },
  {
    projectName: 'This website',
    projectLink: '',
    projectDescription:
      'My personal portfolio, built using Next.js, Framer Motion, TypeScript, react-icons, and Vercel for deployment',
    skills: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
  },
];
