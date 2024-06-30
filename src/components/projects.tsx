import { Project, projects } from "../app/project-data";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import ProjectSkill from "./project-skill";

export default function Projects() {
  const projectVariant = {
    hidden: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.7 },
    },
  };

  return (
    <motion.div
      variants={projectVariant}
      initial={"hidden"}
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      <h1 className="section-header">Projects</h1>

      <div className="flex flex-wrap items-center justify-center gap-10 mb-28">
        {projects.map((project: Project, projectIdx) => {
          return (
            <motion.div
              key={projectIdx}
              className="flex flex-col items-center text-center w-3/4 sm:w-2/5 bg-neutral-700 hover:text-white text-gray-200 transition-colors font-semibold rounded-lg border-2 pt-2 pb-3"
              variants={{
                ...projectVariant,
                animate: {
                  ...projectVariant.animate,
                  transition: { duration: 0.6, delay: 0 },
                },
              }}
              initial={"hidden"}
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.11 }}
            >
              {project.projectLink === "" ? (
                <h1 className="project-header flex flex-row items-center gap-2 hover:scale-110 transition-all cursor-pointer">
                  {project.projectName}
                </h1>
              ) : (
                <a
                  href={project.projectLink}
                  target="_blank"
                  className="project-header flex flex-row items-center gap-2 hover:scale-110 transition-all"
                >
                  {project.projectName} <GoLinkExternal />
                </a>
              )}
              <div className="bg-gray-200 h-0.5 w-9/12 mx-4 mt-1 mb-2"></div>

              <div className="flex flex-col justify-center items-center">
                <p className="font-normal mx-3">{project.projectDescription}</p>
                <div className="flex flex-row justify-center flex-wrap gap-3 mt-4 mx-2">
                  {project.skills.map((skill, skillIdx) => {
                    return <ProjectSkill skill={skill} key={skillIdx} />;
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
