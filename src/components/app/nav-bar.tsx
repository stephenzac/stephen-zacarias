'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { IoGlassesOutline } from 'react-icons/io5';

interface NavLink {
  linkText: string;
  href: string;
}

const links: NavLink[] = [
  { linkText: 'Home', href: '/' },
  { linkText: 'Projects', href: '/projects' },
  { linkText: 'Music', href: '/music' },
];

export const NavBar: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <nav className='flex flex-wrap gap-8 justify-center'>
      {links.map((link) => (
        <Link
          className={`relative text-xl ${
            currentRoute === link.href ? 'text-accent' : ''
          } transition-all duration-200 flex items-center justify-center flex-col`}
          key={link.href}
          href={link.href}
        >
          {link.linkText}
          {currentRoute === link.href && (
            <motion.div
              className='flex justify-center absolute top-full'
              layoutId='glasses'
              transition={{ duration: 0.2 }}
            >
              <IoGlassesOutline />
            </motion.div>
          )}
        </Link>
      ))}
    </nav>
  );
};
