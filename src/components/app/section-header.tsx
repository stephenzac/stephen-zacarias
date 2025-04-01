interface SectionHeaderProps {
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => (
  <h1 className='text-3xl font-extrabold md:text-4xl mb-9 flex items-center gap-4'>
    {children}
  </h1>
);
