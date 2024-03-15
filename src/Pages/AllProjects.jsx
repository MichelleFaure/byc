import Titles from "../Layouts/Title.jsx";
import { FaArrowRight } from "react-icons/fa";

import {
  projectGroups,
  intLocalesProjects,
  intOficinasProjects,
  arquitectutaIndProjects,
  disenoMobProjects,
} from "../data.js";
import SingleProject from "../Components/SingleProject.jsx";
import { NavLink } from "react-router-dom";
const AllProjects = () => {
  const bestProjects = [
    ...intLocalesProjects.slice(0, 4),
    ...intOficinasProjects.slice(0, 4),
    ...arquitectutaIndProjects.slice(0, 4),
    ...disenoMobProjects.slice(0, 4),
  ];
  return (
    <section>
      <Titles title="Proyectos" color="black"></Titles>
      <p className="w-3/5 m-auto text-center my-14">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
        alias. Possimus molestias cumque necessitatibus inventore cum doloremque
        suscipit sequi rem veniam beatae ipsa, impedit sit consequuntur nisi
        vero eum voluptatum! Voluptat eius quibusdam hic quaerat voluptatem?
        Vitae tenetur facilis, accusamus deserunt obcaecati totam illum ipsa
        quidem ratione aliquid eligendi laboriosam id.
      </p>
      <ul className="flex flex-wrap w-3/4 gap-4 md:w-3/5 m-auto justify-start md:justify-around font-semibold text-xl my-14 p-4 border">
        {projectGroups.map((item)=>{
          return (
            <NavLink to={`${item.paramID}`}>
              <div className="flex items-center">
                <li>{item.title}</li>
                <FaArrowRight className="mt-1 ms-1" />
              </div>
            </NavLink>
          );
        })}
      </ul>

      {projectGroups.map((item) => {
        return (
          <div key={item.id}>
            <h2 className="text-2xl font-bold text-center">{item.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 p-8 md:w-3/5 m-auto gap-4">
              {bestProjects.map((project) => {
                if (project.groupId == item.id) {
                  return (
                    <SingleProject
                      key={project.projectId}
                      project={project}
                    ></SingleProject>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default AllProjects;
