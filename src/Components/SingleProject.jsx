import { FaMaximize } from "react-icons/fa6";
const SingleProject = ({ project }) => {
  const { description, company, location, area, projectId, groupId, img } =
    project;
  return (
    <div
      onClick={() => document.getElementById(projectId).showModal()}
      className="hover:scale-[1.05] duration-300 my-6"
    >
      <img src={img[0]} alt="" className="w-full h-52 object-cover" />
      <div className="py-2">
        <p className="font-semibold h-12">{company}</p>
        <p className="text-sm text-gray-500 h-24 md:h-16 ">{description}</p>
        <button className="bg-black text-white py-1 px-4 mt-4 shadow-md hover:scale-[1.05] duration-300">
          Mas Info
        </button>
      </div>

      <dialog id={projectId} className="modal modal-bottom">
        <div className="modal-box md:w-3/5 m-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <td className="font-bold">Cliente</td>
                  <td>{company}</td>
                </tr>
                <tr>
                  <td className="font-bold">Proyecto</td>
                  <td>{description}</td>
                </tr>
                <tr>
                  <td className="font-bold">Ubicación</td>
                  <td>{location}</td>
                </tr>
                <tr>
                  <td className="font-bold">Superficie</td>
                  <td>{area}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-8">
            {img.map((item) => {
              return (
                <div className="relative">
                  <img src={item} alt="" className="w-52 h-52 object-cover" />
                  <div
                    className="absolute top-2 right-2 z-10 bg-white p-1 cursor-pointer hover:scale-[1.05] duration-300 "
                    onClick={() => document.getElementById(item).showModal()}
                  >
                    <FaMaximize className="text-xl" />
                  </div>
                  <dialog id={item} className="modal">
                    <div className="modal-box md:w-1/2 m-auto">
                      <img src={item} alt={description} className="w-full" />
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Cerrar</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              );
            })}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
      
    </div>
  );
};
export default SingleProject;
