interface MainContainerProps {
  children?: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <div className='w-11/12 md:w-4/5 lg:w-11/20 pt-12 lg:pt-10 pb-8'>
    {children}
  </div>
);
