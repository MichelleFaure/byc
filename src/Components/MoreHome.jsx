import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import ButtonLayout from "../Layouts/ButtonLayout";
import client from "../assets/icons/client.png"
import arq from "../assets/icons/arq.png";
import contact from "../assets/icons/contact.png";

const MoreHome = () => {
  const data = [
    {
      img: client,
      imgHover:
        "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      title: "Servicios",
      id: "servicios",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      imgHover:
        "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",

      title: "Contacto",
      id: "contacto",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      imgHover:
        "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",

      title: "Clientes",
      id: "clientes",
    },
  ];

  return (
    <section className="w-full">
      <div className="w-3/5 flex flex-wrap justify-center gap-6 md:justify-between m-auto my-16">
        <div className="border shadow-lg hover:shadow-2xl px-14 py-8">
          <img src={arq} alt="" className="w-44 m-auto" />
          <NavLink to={"servicios"}>
            <ButtonLayout
              title="Servicios"
              width="w-52"
              margin="mx-auto"
            ></ButtonLayout>
          </NavLink>
        </div>
        <div className="border shadow-lg hover:shadow-2xl px-14 py-8">
          <img src={contact} alt="" className="w-44 m-auto" />
          <NavLink to={"Contacto"}>
            <ButtonLayout
              title="Contacto"
              width="w-52"
              margin="mx-auto"
            ></ButtonLayout>
          </NavLink>
        </div>
        <div className="border shadow-lg hover:shadow-2xl px-14 py-8">
          <img src={client} alt="" className="w-44 m-auto" />
          <NavLink to={"Clientes"}>
            <ButtonLayout
              title="Clientes"
              width="w-52"
              margin="mx-auto"
            ></ButtonLayout>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default MoreHome;
