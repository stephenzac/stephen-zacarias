export const Footer: React.FC = () => (
  <footer className='flex flex-col items-start w-full text-sm text-balance text-gray-400'>
    <p>&copy; Stephen Zacarias 2025</p>
    <p>
      Built with{' '}
      <span className='text-white'>
        <a
          href='https://nextjs.org/'
          target='_blank'
          rel='noreferrer noopener'
          className='link-hover'
        >
          Next.js
        </a>
      </span>
      ,{' '}
      <span className='text-white'>
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          rel='noreferrer noopener'
          className='link-hover'
        >
          Tailwind CSS
        </a>
      </span>
      ,{' '}
      <span className='text-white'>
        <a
          href='https://www.framer.com/motion/'
          target='_blank'
          rel='noreferrer noopener'
          className='link-hover'
        >
          Framer Motion
        </a>
      </span>
      ,{' '}
      <span className='text-white'>
        <a
          href='https://react-icons.github.io/react-icons/'
          target='_blank'
          rel='noreferrer noopener'
          className='link-hover'
        >
          react-icons
        </a>
      </span>
      , and deployed on{' '}
      <span className='text-white'>
        <a
          href='https://vercel.com/home'
          target='_blank'
          rel='noreferrer noopener'
          className='link-hover'
        >
          Vercel
        </a>
      </span>
    </p>
  </footer>
);
