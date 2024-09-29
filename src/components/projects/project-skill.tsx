interface ProjectSkillProps {
  skill: string;
}

export const ProjectSkill: React.FC<ProjectSkillProps> = ({ skill }) => (
  <div className="text-sm bg-accent text-white rounded-lg text-nowrap py-1 px-3 border-2 border-gray-300 hover:border-white hover:scale-110 transition-transform">
    {skill}
  </div>
);
