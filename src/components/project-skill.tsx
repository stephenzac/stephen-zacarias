type ProjectSkill = {
  skill: string;
};

export default function ProjectSkill({ skill }: ProjectSkill) {
  return (
    <div className='text-sm bg-accent hover:bg-yellow-500 text-white rounded-lg text-nowrap py-1 px-3 border-2 border-gray-300 hover:border-white hover:scale-110 transition-transform'>
      {skill}
    </div>
  );
}
