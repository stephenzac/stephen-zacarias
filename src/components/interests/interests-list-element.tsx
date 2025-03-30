interface InterestsListElementProps {
  children?: React.ReactNode;
}

export const InterestsListElement: React.FC<InterestsListElementProps> = ({
  children,
}) => (
  <li>
    <span className='text-accent mr-2 font-extrabold'>+</span>
    {children}
  </li>
);
