'use client';

import { Project, projects } from '../../utils/index';
import { motion } from 'framer-motion';
import { GoLinkExternal } from 'react-icons/go';
import { ProjectSkill } from './project-skill';

export const MyProjects: React.FC = () => {
  const projectVariant = {
    hidden: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section variants={projectVariant} initial="hidden" whileInView="animate" viewport={{ once: true }}>
      <h2 className="section-header">Projects</h2>

      <div className="flex flex-wrap items-stretch justify-center gap-10">
        {projects.map((project: Project) => {
          return (
            <motion.div
              key={project.projectName}
              className="flex flex-col items-center text-center w-3/4 sm:w-2/5 bg-neutral-700 text-gray-200 transition-colors font-semibold rounded-md border-2 pt-2"
              variants={projectVariant}
              initial="hidden"
              whileInView="animate"
              viewport={{ once: true, amount: 0.11 }}
            >
              {project.projectLink === '' ? (
                <h1 className="project-header flex flex-row items-center gap-2 hover:scale-110 link-hover cursor-pointer">
                  {project.projectName}
                </h1>
              ) : (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-header flex flex-row items-center gap-2 hover:scale-110 link-hover"
                >
                  {project.projectName} <GoLinkExternal />
                </a>
              )}

              {/* Line underneath title */}
              <div className="bg-gray-200 h-[2px] w-9/12 mx-4 mt-1"></div>

              <div className="flex flex-col gap-3 justify-center h-full py-2 px-3">
                <p className="font-normal mx-3">{project.projectDescription}</p>

                <div className="flex flex-row justify-center flex-wrap gap-3">
                  {project.skills.map((skill) => (
                    <ProjectSkill skill={skill} key={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
