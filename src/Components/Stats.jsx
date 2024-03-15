const Stats = () => {
  return (
    <section className="bg-black my-24">
      <div className="mx-auto w-3/4">
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-white p-8">
            <div className="flex flex-col px-4 py-8 text-center">
              <div className="text-4xl font-bold text-white md:text-5xl">
                +300
              </div>
              <div className="text-2xl mt-2 font-medium text-gray-400 tracking-widest">
                Proyectos
              </div>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <div className="text-4xl font-bold text-white md:text-5xl">
                +10.000 m2
              </div>
              <div className="order-last text-2xl mt-2 font-medium text-gray-400 tracking-widest">
                Construidos
              </div>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <div className="text-4xl font-bold text-white md:text-5xl">
                +10 años
              </div>
              <div className="order-last text-2xl mt-2 font-medium text-gray-400 tracking-widest">
                Experiencia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
