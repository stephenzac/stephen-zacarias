'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    <nav className='flex gap-8'>
      {links.map((link) => (
        <Link
          className={`text-xl ${
            currentRoute === link.href ? 'text-accent' : ''
          } transition-all duration-200`}
          key={link.href}
          href={link.href}
        >
          {link.linkText}
        </Link>
      ))}
    </nav>
  );
};
