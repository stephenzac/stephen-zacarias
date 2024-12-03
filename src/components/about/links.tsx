import { personalLinks } from '../../utils';

export const Links: React.FC = () => (
  <div className='flex flex-wrap justify-center items-center w-full lg:w-4/5 gap-4 self-center'>
    {personalLinks.map((linkData) => (
      <div key={linkData.link}>
        <a
          href={linkData.link}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:scale-110 link-hover flex flex-row items-center text-lg lg:text-2xl'
        >
          {linkData.icon({})}
          {linkData.linkText}
        </a>
      </div>
    ))}
  </div>
);
