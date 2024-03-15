const ButtonLayout = ({ title, width, margin }) => {
  return (
    <div className={`relative my-4 ${width} ${margin} cursor-pointer`}>
      <div
        className={`p-3 text-center border border-black font-medium before:absolute before:w-px before:h-full before:bg-black  before:top-4 before:-right-2 after:absolute after:w-20 after:h-px after:bg-black after:-bottom-2 after:-right-4   hover:after:w-3/4 hover:after:h-1 hover:after:duration-300`}
      >
        {title}
      </div>
    </div>
  );
};
export default ButtonLayout;
