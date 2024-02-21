import { Fade } from "react-awesome-reveal";
import Titles from "../Layouts/Title";
const ProjectsHome = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      imgHover:
        "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      title: "Interior Locales",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      imgHover:
        "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",

      title: "Interior Oficina",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      imgHover:
        "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",

      title: "Arquitectura Industrial",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      imgHover:
        "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",

      title: "Mobiliario Diseño",
    },
  ];

  return (
    <main className="bg-black text-white py-12">
      <Titles title="Proyectos" color={"white"}></Titles>
      <section>
        <div className="mx-auto w-3/4 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Fade cascade damping={0.2}>
              {data.map((item,index) => {
                return (
                  <li key={index} >
                    <a href="#" className="group relative block">
                      <div className="relative h-[350px] sm:h-[450px]">
                        <img
                          src={item.img}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                        />

                        <img
                          src={item.imgHover}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                        />
                      </div>

                      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                        <h3 className="text-xl font-medium text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dignissimos sequi dicta impedit aperiam ipsum!
                        </p>

                        <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                          Ver Más
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </Fade>
          </ul>
        </div>
      </section>
      <div className="flex justify-center">
        <button className="btn rounded-none">Ver Todos</button>
      </div>
    </main>
  );
};
export default ProjectsHome;
