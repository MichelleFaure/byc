import { useParams } from "react-router-dom";
import { projectGroups, allProjects } from "../data.js";
import { useEffect, useState } from "react";
import Title from "../Layouts/Title.jsx"
import SingleProject from "../Components/SingleProject.jsx";

const CategoryProjects = () => {
  const { id } = useParams();
  const [currentGroup, setcurrentGroup] = useState([]);

  useEffect(() => {
    const group = projectGroups.find((item) => item.paramID === id);
    setcurrentGroup(group);
  }, []); 

  console.log(currentGroup);
  return (
    <section className="py-8">
      <Title title={currentGroup.title} color="black"></Title>
      <div >
        <p className="p-8 md:w-3/5 m-auto text-center">{currentGroup.desc}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 p-8 md:w-3/5 m-auto gap-4">
          {allProjects.map((project) => {
            if (project.groupId == currentGroup.id) {
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
    </section>
  );
};

export default CategoryProjects;
