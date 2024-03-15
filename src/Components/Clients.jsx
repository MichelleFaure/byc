import Titles from "../Layouts/Title";
import logos from "../assets/logos/logos";
const Clients = () => {
  return (
    <main className="py-12">
      <Titles title={"Clientes"} color={"black"}></Titles>
      <div className="grid grid-cols-2  md:grid-cols-4 w-3/5 m-auto">
        {logos.map((item, index) => {
          return (
            <div
              key={index}
              className="px-2 hover:scale-110 duration-300 "
            >
              <img src={item.urlimg} alt={item.altimg} />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Clients;
