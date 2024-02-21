import { useParams } from "react-router-dom";
import data from '../assets/intLocales/data2'
import ProjectHeader from '../Components/ProjectHeader';
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleProject = () => {
  let { id } = useParams();
  
  const projects = data.filter(item => item.id == id)
const [cantidadAMostrar, setCantidadAMostrar] = useState(3);

  const cargarMasImagenes = () => {
    setCantidadAMostrar((prevCantidad) => prevCantidad + 3);
  };
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <section className="w-5/6 m-auto">
      <ProjectHeader id={id}></ProjectHeader>
      <div className="divider w-80 m-auto"></div>
      <div className="mt-10 mb-3 font-semibold text-xl text-center">
        TITULO DE LA CATEGORIA
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {projects.slice(0, cantidadAMostrar).map((project, index) => (
          <div
            key={index}
            className="mb-10 group relative cursor-pointer"
            onClick={() => document.getElementById(project.model).showModal()}
          >
            <img src={project.img1} className="h-64 w-64 object-cover" />
            <div className="absolute bottom-0 w-full h-full group-hover:bg-black ease-in duration-200 opacity-70"></div>
            <div className="hidden bottom-1/2 group-hover:absolute group-hover:block group-hover:text-white ms-3">
              <p className="font-semibold">{project.company}</p>
              <p className="">{project.title}</p>
            </div>
            <dialog id={project.model} className="modal">
              <div className="modal-box w-11/12 max-w-4xl">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">{project.company}</h3>
                <div className="flex gap-10 justify-center md:justify-start flex-wrap-reverse items-center my-3">
                  <div className="md:w-1/2">
                    <img src={project.img1} className="max-h-96 m-auto" />
                  </div>
                  <div>
                    <h1 className="font-semibold mt-3">Descripción:</h1>
                    <p className="mb-3">{project.description}</p>
                    <h1 className="font-semibold">Empresa:</h1>
                    <p className="mb-3">{project.company}</p>
                    <h1 className="font-semibold">Superficie:</h1>
                    <p className="mb-3">{project.superficie}</p>
                  </div>
                </div>
                <Slider {...settings}>
                  <div className="px-3">
                    <img src={project.img1} alt="" />
                  </div>
                  <div className="px-3">
                    <img src={project.img2} alt="" />
                  </div>
                  <div className="px-3">
                    <img src={project.img3} alt="" />
                  </div>
                </Slider>
              </div>
            </dialog>
          </div>
        ))}
      </div>

      {cantidadAMostrar < projects.length && (
        <div className="text-center m-10">
          <button
            className="btn rounded-none bg-black text-white"
            onClick={cargarMasImagenes}
          >
            Cargar más
          </button>
        </div>
      )}
    </section>
  );
};
export default SingleProject;
