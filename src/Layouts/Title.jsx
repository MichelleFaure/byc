const Titles = ({ title, color }) => {
  return (
    <div className="flex items-center w-3/4 mx-auto">
      <span className={`pr-6 text-5xl text-${color}`}>{title}</span>
      <span className={`h-px flex-1 bg-${color}`}></span>
    </div>
  );
};
export default Titles;
