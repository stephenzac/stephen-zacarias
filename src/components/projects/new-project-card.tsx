import { GoLinkExternal } from 'react-icons/go';

interface ProjectCardProps {
  title: string;
  link: string;
  description: string;
  skills: string[];
}

export const NewProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  description,
  skills,
}) => (
  <article className='hover:translate-y-[-8px] transition-transform duration-300 text-box px-8 w-full md:max-w-md bg-zinc-700 border-double border-accent rounded-md'>
    {link ? (
      <a
        className='group transition duration-300 flex flex-row text-xl items-center gap-2 pb-2'
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        {title}
        <GoLinkExternal />
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white' />
      </a>
    ) : (
      <p className='pb-4 text-xl'>{title}</p>
    )}

    <p className='pb-4 text-zinc-300'>{description}</p>

    <div className='flex flex-wrap gap-4'>
      {skills.map((skill) => (
        // <p className='bg-accent text-zinc-100 py-1 px-3 rounded-md' key={skill}>
        <p className='text-zinc-400' key={skill}>
          {skill}
        </p>
      ))}
    </div>
  </article>
);
