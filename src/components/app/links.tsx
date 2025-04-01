import { AiOutlineLinkedin, AiOutlineSpotify } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';
import { LiaGithubSquare } from 'react-icons/lia';

export const Links: React.FC = () => (
  <div className='flex gap-4 text-3xl mt-6 items-center'>
    <a
      href='https://linkedin.com/in/stephen-zac'
      target='_blank'
      rel='noreferrer'
      className='hover:text-accent transition-colors duration-200'
    >
      <AiOutlineLinkedin />
    </a>
    <a
      href='https://github.com/stephenzac'
      target='_blank'
      rel='noreferrer'
      className='text-[36px] hover:text-accent transition-colors duration-200'
    >
      <LiaGithubSquare />
    </a>
    <a
      href='https://open.spotify.com/user/cheesehugger1'
      target='_blank'
      rel='noreferrer'
      className='hover:text-accent transition-colors duration-200'
    >
      <AiOutlineSpotify />
    </a>
    <a
      href='https://www.youtube.com/@Cheesehuggerz'
      target='_blank'
      rel='noreferrer'
      className='hover:text-accent transition-colors duration-200'
    >
      <FiYoutube />
    </a>
  </div>
);
