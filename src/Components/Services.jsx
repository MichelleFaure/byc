import Titles from "../Layouts/Title";
import ButtonLayout from "../Layouts/ButtonLayout";
import { TbSquareDot } from "react-icons/tb";
const Services = () => {
  const data = [
    {
      title: "Arquitectura",
      desc: [
        "Arquitectura Integral para Edificios Industriales, Habitacionales, Comerciales y de Oficinas.",
        "Habilitación Interior de Oficinas y Locales Comerciales e Institucionales.",
        "Desarrollo de Proyectos de Arquitectura para Licitación y Construcción.",
        "Asesorías e ingenierías en implementación de Centros Productivos y/o de Explotación.",
      ],
    },
    {
      title: "Especialidades e Ingenierías",
      desc: [
        "Proyectos Eléctricos y de Datos.",
        "Iluminación Arquitectónica.",
        "Sanitarios.",
        "Climatización.",
        "Seguridad Contra Intrusión.",
        "Seguridad Contra Incendio.",
        "Cálculo Estructural.",
        "Mecánica de Suelos.",
        "Topografías",
      ],
    },
    {
      title: "Administación de proyectos",
      desc: [
        "Gestión, Desarrollo, Planificación y Gerenciamiento de Proyectos.",
        "Integración y/o Coordinación de Proyectos de Especialidades.",
        " Procesos de Licitación y Adjudicación de Proyectos de Arq. para Construcción.",
        "Supervisiones de Obras Civiles e Inspecciones Técnicas de Obras.",
        "Tramitaciones para Autorizaciones de Construcción y Funcionamiento",
      ],
    },
    {
      title: "Construcción y ejecucion de mobiliario",
      desc: [
        "Ejecución de Obras Menores, Remodelaciones y Habilitaciones.",
        "Ejecución de Mobiliario Especial.",
      ],
    },
  ];


  return (
    <section className="py-12">
      <Titles title="Servicios" color={"black"}></Titles>
      
      <div className="grid md:grid-cols-2 w-3/5 m-auto gap-8 py-20 ">
        {data.map((item)=>{
          return (
            <div className="border shadow-lg ">
              <h2 className="text-center text-2xl font-semibold border-b-2 p-4">
                {item.title}
              </h2>
              <ul className="flex flex-col gap-4 p-8">
                {item.desc.map((item)=>{
                  return (
                    <li className="flex items-start">
                      <div className="me-2">
                        <TbSquareDot className="text-lg mt-1"></TbSquareDot>
                      </div>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        </div>
    </section>
  );
};
export default Services;
