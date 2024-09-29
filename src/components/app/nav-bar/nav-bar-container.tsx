interface NavBarContainerProps {
  children?: React.ReactNode;
}

export const NavBarContainer: React.FC<NavBarContainerProps> = ({ children }) => (
  <nav className="flex flex-row items-center h-14 w-full gap-10 pl-6 bg-neutral-700">{children}</nav>
);
