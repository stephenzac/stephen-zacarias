interface SectionHeaderProps {
  children?: React.ReactNode;
}

export const InterestsSectionHeader: React.FC<SectionHeaderProps> = ({
  children,
}) => {
  return (
    <h1 className='text-xl font-extrabold md:text-2xl text-lighterAccent'>
      {children}
    </h1>
  );
};
