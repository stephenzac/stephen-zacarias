import { motion } from 'framer-motion';
import { GoLinkExternal } from 'react-icons/go';
import { ProjectSkill } from './project-skill';

interface ProjectCardProps {
  title: string;
  link: string;
  description: string;
  skills: string[];
}

const projectVariant = {
  hidden: { opacity: 0, x: -25 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  description,
  skills,
}) => (
  <motion.article
    key={title}
    className='flex flex-col items-center text-center w-3/4 sm:w-2/5 bg-neutral-700 text-gray-200 transition-colors font-semibold rounded-md border-2 pt-2'
    variants={projectVariant}
    initial='hidden'
    whileInView='animate'
    viewport={{ once: true, amount: 0.11 }}
  >
    {link === '' ? (
      <h3 className='project-header flex flex-row items-center gap-2 hover:scale-110 link-hover cursor-pointer'>
        {title}
      </h3>
    ) : (
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='project-header flex flex-row items-center gap-2 hover:scale-110 link-hover'
      >
        {title} <GoLinkExternal />
      </a>
    )}

    {/* Line underneath title */}
    <div className='bg-gray-200 h-[2px] w-9/12 mx-4 mt-1' />

    <div className='flex flex-col gap-3 justify-center h-full py-2 px-3'>
      <p className='font-normal mx-3'>{description}</p>

      <div className='flex flex-row justify-center flex-wrap gap-3'>
        {skills.map((skill) => (
          <ProjectSkill key={skill}>{skill}</ProjectSkill>
        ))}
      </div>
    </div>
  </motion.article>
);
