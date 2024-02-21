import projectGroup from "../data";

const ProjectHeader = ({id}) => {
  
  const group = projectGroup.filter((item) => item.id === id);
  return (
    <div className="hero mt-10">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-4xl font-bold">{group[0].title}</h1>
          <p className="py-6 text-slate-400">{group[0].desc}</p>
        </div>
      </div>
    </div>
  );
}
export default ProjectHeader