interface MainContainerProps {
  children?: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <div className='w-10/12 lg:w-4/5 pt-12 lg:pt-32 pb-2'>{children}</div>
);
