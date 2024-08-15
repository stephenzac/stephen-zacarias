import { ReactNode } from "react";

interface NavBarContainerProps {
  children?: ReactNode;
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({ children }) => {
  return (
    <nav className="flex flex-row items-center h-14 w-full gap-10 pl-6 bg-neutral-700">
      {children}
    </nav>
  );
};

export default NavBarContainer;
