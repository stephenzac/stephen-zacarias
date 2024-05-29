import { motion } from "framer-motion";

interface ProjectProps {
  projectName: string;
  projectLink: string;
  projectDescription: string;
}

export default function Projects() {
  const projects: ProjectProps[] = [
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
        "A personal use project where I determine the keys of songs to store them with song information from the Spotify API",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mb-28">
      {projects.map((project: ProjectProps, index) => {
        return (
          <motion.div
            className="flex flex-col text-center project-box bg-zinc-500 rounded-md"
            variants={{
              hidden: { opacity: 0, translateX: -100 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            key={project.projectName}
          >
            <a
              href={project.projectLink}
              target="_blank"
              className="project-header mt-2 mb-2"
            >
              {project.projectName}
            </a>
            <div className="flex flex-col">
              <p className="project-text italic mb-4 mx-3">
                {project.projectDescription}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
