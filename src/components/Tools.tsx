import MotionWrapper from "../utility/motion/MotionWraper";

const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 text-center">
      <MotionWrapper>
        <h2 className="text-3xl mb-6 font-semibold">Tools</h2>
        <div className="flex justify-center gap-6 mt-6">
          <img src="/figma.png" className="w-14" />
          <img src="/ps.png" className="w-14" />
          <img src="/html.png" className="w-14" />
          <img src="/ai.png" className="w-14" />
          <img src="/js.png" className="w-14" />
          <img src="/css.png" className="w-14" />
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Tools;
