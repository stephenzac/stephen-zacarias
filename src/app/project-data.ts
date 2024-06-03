export interface Project {
  projectName: string;
  projectLink: string;
  projectDescription: string;
}

export const projects: Project[] = [
  {
    projectName: "Soundle",
    projectLink: "https://stephenzac.github.io/soundle",
    projectDescription:
      "A wordle-like ear training game to challenge and improve your sense of pitch",
  },
  {
    projectName: "Sentimentify",
    projectLink: "https://github.com/stephenzac/Sentimentify",
    projectDescription:
      "An application to analyze the feel of your Spotify playlists, developed for ICSSC's week-long WebJam 2023",
  },
  {
    projectName: "song-keys",
    projectLink: "https://github.com/stephenzac/song-keys",
    projectDescription:
      "A personal use project where I determine the keys of songs to store them with Spotify API song info",
  },
  {
    projectName: "This website",
    projectLink: "",
    projectDescription:
      "My personal portfolio, built using Next.js, Framer Motion, TypeScript, react-icons, and Vercel for deployment",
  },
  {
    projectName: "Universitle",
    projectLink: "",
    projectDescription: "Under construction...",
  },
  {
    projectName: "Anteater Band Website",
    projectLink: "",
    projectDescription: "Under construction...",
  },
];
