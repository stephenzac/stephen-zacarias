'use client';

import { projects } from '@/utils';
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

export const Projects: React.FC = () => (
  <section className='mb-20 md:mb-40'>
    <h2 className='section-header'>Projects</h2>

    <motion.div
      variants={projectVariant}
      initial='hidden'
      whileInView='animate'
      viewport={{ once: true }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {projects.map((project) => (
          <ProjectCard
            key={project.projectName}
            title={project.projectName}
            link={project.projectLink}
            description={project.projectDescription}
            skills={project.skills}
          />
        ))}
      </div>
    </motion.div>
  </section>
);
