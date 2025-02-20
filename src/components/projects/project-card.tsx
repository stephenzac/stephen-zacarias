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
    className={`group hover:scale-[1.02] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-box w-full md:max-w-md relative overflow-hidden`}
  >
    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300' />
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
