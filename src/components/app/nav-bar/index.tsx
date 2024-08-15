"use client";
import Link from "next/link";
import NavBarContainer from "./nav-bar-container";
import { LuGlasses } from "react-icons/lu";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/about", text: "About" },
    { href: "/interests", text: "Interests" },
  ];

  const currentRoute = usePathname();

  return (
    <NavBarContainer>
      {navLinks.map((linkData) => {
        return (
          <div key={linkData.href} className="flex flex-col items-center">
            {currentRoute === linkData.href && <LuGlasses />}
            <Link href={linkData.href}>{linkData.text}</Link>
          </div>
        );
      })}
    </NavBarContainer>
  );
};

export default NavBar;
