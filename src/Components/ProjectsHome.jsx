import { Fade } from "react-awesome-reveal";
import Titles from "../Layouts/Title";
import { NavLink } from "react-router-dom";
import ButtonLayout from "../Layouts/ButtonLayout";
import {projectGroups} from "../data.js"
const ProjectsHome = () => {

  return (
    <main className="bg-white py-12">
      <Titles title="Proyectos" color={"black"}></Titles>

      <section>
        <div className="mx-auto w-3/5 py-8  sm:py-12">
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Fade cascade damping={0.2}>
              {projectGroups.map((item, index) => {
                return (
                  <NavLink key={index} to={`proyectos/${item.paramID}`}>
                    <li>
                      <div className="group relative block">
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
                      </div>
                      <ButtonLayout
                        title={item.title}
                        width="w-5/6"
                        margin="mx-auto"
                      ></ButtonLayout>
                    </li>
                  </NavLink>
                );
              })}
            </Fade>
          </ul>
        </div>
      </section>
      <NavLink to={"proyectos"}>
        <ButtonLayout
          title="Ver Todos Los Proyectos"
          width="w-3/4 md:w-1/2"
          margin="mx-auto"
        ></ButtonLayout>
      </NavLink>
    </main>
  );
};
export default ProjectsHome;
