const Titles = ({ title, color }) => {
  return (
    <div className="flex items-center w-3/5 mx-auto">
      <span className={`h-px md:flex-1 bg-${color}`}></span>
      <span className={`md:px-6 text-2xl m-auto font-semibold md:text-5xl text-${color}`}>
        {title}
      </span>
      <span className={`h-px md:flex-1 bg-${color}`}></span>
    </div>
  );
};
export default Titles;
