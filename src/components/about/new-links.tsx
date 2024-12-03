import { personalLinks } from '@/utils';
import { motion } from 'framer-motion';

export const NewLinks: React.FC = () => (
  <div className='text-box flex flex-col items-start gap-2'>
    {personalLinks.map((link) => (
      <div
        className='group relative flex flex-row items-center gap-1 text-base lg:text-xl'
        key={link.link}
      >
        {/* Triangle "selector" */}
        <motion.div
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-150 w-0 aspect-square border-t-[6px] border-t-transparent border-l-[9px] border-l-white border-b-[6px] border-b-transparent absolute left-[-10px]'
          initial={{ x: -1 }}
          variants={{
            idle: { x: -1 },
            hover: {
              x: [-1, -4, -1],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            },
          }}
          animate={['idle', 'hover']}
          whileHover='hover'
        />

        <a
          className='flex flex-row items-center gap-1'
          href={link.link}
          target='_blank'
          rel='noreferrer'
        >
          {link.icon({})}
          {link.linkText}
        </a>
      </div>
    ))}
  </div>
);
