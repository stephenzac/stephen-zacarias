import { ProjectData } from '../page';
import { GoLink } from 'react-icons/go';

interface ProjectProps {
  data: ProjectData;
}

export const Project: React.FC<ProjectProps> = ({ data }) => (
  <article className='mb-2'>
    <h3 className='italic font-bold text-xl text-accent mb-3'>
      <a
        href={data.link}
        target='_blank'
        rel='noreferrer'
        className='flex gap-2 items-center'
      >
        {data.title}

        <GoLink />
      </a>
    </h3>

    <p className='pl-5 md:pl-7 mb-3'>{data.description}</p>

    <div className='flex flex-wrap gap-3'>
      {data.skills.map((skill) => (
        <p key={skill} className='text-gray-400 italic text-sm'>
          {skill}
        </p>
      ))}
    </div>
  </article>
);
