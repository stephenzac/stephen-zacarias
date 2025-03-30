interface InterestsSectionHeaderProps {
  children: React.ReactNode;
}

export const InterestsSectionHeader: React.FC<InterestsSectionHeaderProps> = ({
  children,
}) => <h3 className='text-xl text-accent font-bold italic'>{children}</h3>;
