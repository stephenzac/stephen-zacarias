// "use client";
// import Link from "next/link";
// import NavBarContainer from "./nav-bar-container";
// import { LuGlasses } from "react-icons/lu";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const NavBar: React.FC = () => {
//   const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

//   const navLinks = [
//     { href: "/", text: "Home" },
//     { href: "/projects", text: "Projects" },
//     { href: "/interests", text: "Interests" },
//     { href: "/contact", text: "Contact" },
//   ];

//   const handleNavButton = () => {
//     setNavMenuIsOpen(!navMenuIsOpen);
//   };

//   const currentRoute = usePathname();

//   return (
//     <NavBarContainer>
//       <button
//         onClick={handleNavButton}
//         className="flex flex-row md:hidden text-xl"
//       >
//         <LuGlasses />
//       </button>

//       <div
//         className={`sm:hidden ${
//           navMenuIsOpen ? "flex flex-col" : ""
//         } bg-neutral-700 w-screen z-10 md:mt-16`}
//       >
//         {navLinks.map((linkData) => {
//           const isCurrentRoute = linkData.href === currentRoute;

//           return (
//             <div key={linkData.href} className={`flex flex-col items-center`}>
//               {isCurrentRoute && <LuGlasses />}
//               <Link
//                 href={linkData.href}
//                 className={`${isCurrentRoute ? "text-yellow-400" : ""}`}
//               >
//                 {linkData.text}
//               </Link>
//             </div>
//           );
//         })}
//       </div>

//       {navMenuIsOpen && <div></div>}
//     </NavBarContainer>
//   );
// };

// export default NavBar;

'use client';

import Link from 'next/link';
import { NavBarContainer } from './nav-bar-container';
import { LuGlasses } from 'react-icons/lu';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const NavBar: React.FC = () => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Projects' },
    { href: '/interests', text: 'Interests' },
    { href: '/contact', text: 'Contact' },
  ];

  const handleNavButton = () => setNavMenuIsOpen(!navMenuIsOpen);

  const currentRoute = usePathname();

  return (
    <NavBarContainer>
      <button onClick={handleNavButton} className="flex flex-row md:hidden text-xl">
        <LuGlasses />
      </button>

      <div className={`md:flex ${navMenuIsOpen ? 'block' : 'hidden'} mt-8 items-center sm:mt-0 gap-8`}>
        {navLinks.map((linkData) => {
          const isCurrentRoute = linkData.href === currentRoute;

          return (
            <div key={linkData.href} className="flex flex-col items-center">
              {isCurrentRoute && (
                <motion.div layoutId="glassesIcon" className="absolute top-1">
                  <LuGlasses />
                </motion.div>
              )}
              <Link href={linkData.href} className={`pt-2 ${isCurrentRoute ? 'text-yellow-400' : ''}`}>
                {linkData.text}
              </Link>
            </div>
          );
        })}
      </div>
    </NavBarContainer>
  );
};

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="flex justify-between items-center">
//         <div className="text-white">My Logo</div>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-white sm:hidden"
//         >
//           ☰
//         </button>
//       </div>

//       <div className={`sm:flex ${isOpen ? "block" : "hidden"} mt-4 sm:mt-0`}>
//         <Link href="/" className="block px-2 py-1">
//           Home
//         </Link>
//         <Link href="/projects" className="block px-2 py-1">
//           Projects
//         </Link>
//         <Link href="/interests" className="block px-2 py-1">
//           Interests
//         </Link>
//         <Link href="/contact" className="block px-2 py-1">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
