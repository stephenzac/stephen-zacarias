'use client';

import { projects } from '@/utils';
import { motion } from 'framer-motion';
import { NewProjectCard } from './new-project-card';

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
      {/* <div className='flex flex-wrap items-stretch justify-center gap-20 mb-28'> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {projects.map((project) => (
          <NewProjectCard
            key={project.title}
            title={project.title}
            link={project.link}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
    </motion.div>
  </section>
);
