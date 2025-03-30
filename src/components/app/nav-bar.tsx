import Link from 'next/link';

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
  return (
    <nav className='flex gap-8'>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.linkText}
        </Link>
      ))}
    </nav>
  );
};
