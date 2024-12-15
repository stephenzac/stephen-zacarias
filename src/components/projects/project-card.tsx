import { GoLinkExternal } from 'react-icons/go';

interface ProjectCardProps {
  title: string;
  link: string;
  description: string;
  skills: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  description,
  skills,
}) => (
  <a
    href={link ? link : undefined}
    target='_blank'
    rel='noreferrer'
    className={`group hover:translate-y-[-8px] ${
      link ? 'hover:cursor-pointer' : ''
    } transition-transform duration-200 text-box px-8 w-full md:max-w-md bg-zinc-700 border-double border-accent rounded-md`}
  >
    {link ? (
      <h2 className='group-hover:text-lighterAccent transition duration-300 flex flex-row text-xl items-center gap-2 pb-2'>
        {title}
        <span className='text-lighterAccent'>
          <GoLinkExternal />
        </span>
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white' />
      </h2>
    ) : (
      <h2 className='pb-4 text-xl group-hover:text-lighterAccent transition duration-300'>
        {title}
      </h2>
    )}

    <p className='pb-4 text-zinc-300'>{description}</p>

    <div className='flex flex-wrap gap-4'>
      {skills.map((skill) => (
        <p className='text-zinc-400' key={skill}>
          {skill}
        </p>
      ))}
    </div>
  </a>
);
