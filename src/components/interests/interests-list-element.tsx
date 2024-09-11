interface InterestsListElementProps {
  children?: React.ReactNode;
}

export const InterestsListElement: React.FC<InterestsListElementProps> = ({ children }) => (
  <li>
    <span className="text-lighterAccent lg:ml-2 text-base lg:text-2xl">+ </span>
    {children}
  </li>
);
