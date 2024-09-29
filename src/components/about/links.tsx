import { Link, links } from '@/utils/index';
import { AnimateRight } from '../app/animation/animate-right';

export const Links: React.FC = () => (
  <AnimateRight>
    <div className="flex flex-wrap justify-center w-full lg:w-4/5 gap-4 self-center">
      {links.map((link: Link) => (
        <div key={link.link}>
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 link-hover flex flex-row items-center text-lg lg:text-2xl"
          >
            {link.linkIcon({})}
            {link.linkText}
          </a>
        </div>
      ))}
    </div>
  </AnimateRight>
);
