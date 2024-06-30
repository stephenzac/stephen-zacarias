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
      "A wordle-like ear training game to challenge and improve your sense of pitch",
    skills: ["React", "Typescript", "Tailwind CSS", "Vite", "GitHub Pages"],
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
  {
    projectName: "Anteater Band Website",
    projectLink: "",
    projectDescription: "Under construction...",
    skills: ["React", "Next.js", "Chakra UI"],
  },
];
