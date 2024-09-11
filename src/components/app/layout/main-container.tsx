interface MainContainerProps {
  children?: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <div className="flex flex-col flex-grow min-h-screen pt-16 px-12">
    <div className="flex-grow">{children}</div>
  </div>
);
