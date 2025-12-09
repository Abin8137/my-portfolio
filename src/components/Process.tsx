import MotionWrapper from "../utility/motion/MotionWraper";

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 max-w-6xl mx-auto px-6">
      <MotionWrapper>
        <h2 className="text-3xl font-semibold mb-10">My creative process and tools I used</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["Understanding Brief", "Researching", "Design & Iterations", "Final Polishing"].map((item) => (
            <div key={item} className="bg-[#1e1e1e] p-6 rounded-xl h-48"></div>
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Process;
