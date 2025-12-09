import MotionWrapper from "../utility/motion/MotionWraper";

const skills = [
  "Product Design","Logo Designing","Graphics Designing","Icons","Wireframing",
  "Front-end Developing","Prototyping","Design System","User Research"
];

const Skills: React.FC = () => {
  return (
    <MotionWrapper>
      <div className="flex flex-wrap gap-3 mt-8">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-[#1a1a1a] rounded-lg text-gray-200 text-sm">
            {skill}
          </span>
        ))}
      </div>
    </MotionWrapper>
  );
};

export default Skills;
