import { motion } from "framer-motion";

interface Project {
  projectName: string;
  projectLink: string;
  projectDescription: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      projectName: "Soundle",
      projectLink: "https://github.com/stephenzac/soundle",
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
        "My personal portfolio, built using Next.js, Framer Motion, TypeScript, and Vercel for deployment",
    },
  ];

  return (
    <motion.div
      className="flex flex-col"
      variants={{
        hidden: { opacity: 0, translateX: -100 },
        visible: { opacity: 1, translateX: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: 0.7 }}
    >
      <h1 className="section-header">Projects</h1>

      <div className="flex flex-wrap items-center justify-center gap-10 mb-28">
        {projects.map((project: Project, index) => {
          return (
            // bg-zinc-500
            <motion.div
              className="flex flex-col text-center justify-center project-box bg-accent text-gray-800 font-semibold rounded-md"
              variants={{
                hidden: { opacity: 0, translateX: -100 },
                visible: { opacity: 1, translateX: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              key={project.projectName}
            >
              <a
                href={project.projectLink}
                target="_blank"
                className="project-header hover:scale-125 transition-all"
              >
                {project.projectName}
              </a>
              <p className="project-text italic mx-3">
                {project.projectDescription}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
