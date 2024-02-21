import Titles from "../Layouts/Title";
import logos from "../assets/logos/logos";
const Clients = () => {
  return (
    <main className="py-12">
      <Titles title={"Clientes"} color={"black"}></Titles>
      <div className="flex flex-wrap justify-center gap-3">
        {logos.map((item,index) => {
          return (
            <div key={index}>
              <img src={item.url} alt={item.name} />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Clients;
