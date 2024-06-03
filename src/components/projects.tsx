import { motion } from "framer-motion";
import { Project, projects } from "../app/project-data";

export default function Projects() {
  return (
    <motion.div
      className="flex flex-col"
      variants={{
        hidden: { opacity: 0, x: -100 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.7 },
        },
      }}
      initial={"hidden"}
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      <h1 className="section-header">Projects</h1>

      <div className="flex flex-wrap items-center justify-center gap-10 mb-28">
        {projects.map((project: Project) => {
          return (
            <motion.div
              className="flex flex-col text-center justify-center project-box bg-accent text-gray-800 font-semibold rounded-xl"
              variants={{
                hidden: { opacity: 0, x: -100 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.65 },
                },
              }}
              initial={"hidden"}
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.5 }}
              key={project.projectName}
            >
              {project.projectLink === "" ? (
                <h1 className="project-header underline hover:scale-125 transition-all cursor-pointer">
                  {project.projectName}
                </h1>
              ) : (
                <a
                  href={project.projectLink}
                  target="_blank"
                  className="project-header hover:scale-125 transition-all"
                >
                  {project.projectName}
                </a>
              )}

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
