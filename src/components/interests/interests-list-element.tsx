import { ListPlus } from './list-plus';

interface InterestsListElementProps {
  children?: React.ReactNode;
}

export const InterestsListElement: React.FC<InterestsListElementProps> = ({
  children,
}) => (
  <li>
    <ListPlus /> {children}
  </li>
);
