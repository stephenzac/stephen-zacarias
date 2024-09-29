interface SectionHeaderProps {
  children: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => (
  <h3 className="text-xl font-extrabold md:text-2xl text-lighterAccent">{children}</h3>
);
