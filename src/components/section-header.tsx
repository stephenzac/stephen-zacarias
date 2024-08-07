type SectionHeaderProps = {
  headerText: string;
};

export default function SectionHeader({ headerText }: SectionHeaderProps) {
  return (
    <h1 className="text-xl font-extrabold md:text-2xl text-lighterAccent">
      {headerText}
    </h1>
  );
}
