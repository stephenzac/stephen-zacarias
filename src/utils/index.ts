import { IconType } from "react-icons";
import { AiFillLinkedin, AiFillSpotify, AiFillMail } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
export type MyLinks = {
  linkText: string;
  link: string;
  linkIcon: IconType;
};
export const links: MyLinks[] = [
  {
    linkText: "GitHub",
    link: "https://github.com/stephenzac",
    linkIcon: DiGithubBadge,
  },

  {
    linkText: "LinkedIn",
    link: "https://linkedin.com/in/stephen-zac",
    linkIcon: AiFillLinkedin,
  },
  {
    linkText: "Spotify",
    link: "https://open.spotify.com/user/cheesehugger1",
    linkIcon: AiFillSpotify,
  },
  {
    linkText: "stephenzacarias2@gmail.com",
    link: "mailto:stephenzacarias2@gmail.com",
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
    projectName: "Soundle",
    projectLink: "https://stephenzac.github.io/soundle",
    projectDescription:
      "A Wordle-like ear training game to challenge and improve your sense of pitch",
    skills: ["React", "Typescript", "Tailwind CSS", "Vite", "GitHub Pages"],
  },
  {
    projectName: "Anteater Band Website",
    projectLink: "",
    projectDescription:
      "Ongoing collaborative project to develop and maintain a website for the UC Irvine Anteater Band using Next.js and Contentful (under construction)",
    skills: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Contentful",
      "Chakra UI",
      "Emotion",
    ],
  },
  {
    projectName: "Sentimentify",
    projectLink: "https://github.com/stephenzac/Sentimentify",
    projectDescription:
      "An application to analyze the feel of your Spotify playlists, developed for ICSSC's week-long WebJam 2023",
    skills: ["Python", "Flask", "REST APIs", "Beautiful Soup"],
  },
  {
    projectName: "This website",
    projectLink: "",
    projectDescription:
      "My personal portfolio, built using Next.js, Framer Motion, TypeScript, react-icons, and Vercel for deployment",
    skills: [
      "Next.js",
      "Typescript",
      "Vercel",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];
