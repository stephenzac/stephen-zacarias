import { AiOutlineLinkedin, AiOutlineSpotify } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';
import { LiaGithubSquare } from 'react-icons/lia';

export const Links: React.FC = () => (
  <div className='flex gap-4 text-4xl mt-6'>
    <a
      href='https://linkedin.com/in/stephen-zac'
      target='_blank'
      rel='noreferrer'
    >
      <AiOutlineLinkedin />
    </a>
    <a href='https://github.com/stephenzac' target='_blank' rel='noreferrer'>
      <LiaGithubSquare />
    </a>
    <a
      href='https://open.spotify.com/user/cheesehugger1'
      target='_blank'
      rel='noreferrer'
    >
      <AiOutlineSpotify />
    </a>
    <a
      href='https://www.youtube.com/@Cheesehuggerz'
      target='_blank'
      rel='noreferrer'
    >
      <FiYoutube />
    </a>
  </div>
);
