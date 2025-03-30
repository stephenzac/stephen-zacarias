interface InterestsSectionProps {
  children: React.ReactNode;
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({
  children,
}) => <div className='mb-8'>{children}</div>;
