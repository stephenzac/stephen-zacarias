'use client';

import { projects } from '../../utils';
import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';

const projectVariant = {
  hidden: { opacity: 0, x: -25 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const Projects: React.FC = () => {
  return (
    <section>
      <h2 className='section-header'>Projects</h2>

      <motion.div
        variants={projectVariant}
        initial='hidden'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <div className='flex flex-wrap items-stretch justify-center gap-10 mb-28'>
          {projects.map((project) => {
            const { title, link, description, skills } = project;

            return (
              <ProjectCard
                title={title}
                link={link}
                description={description}
                skills={skills}
                key={title}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
