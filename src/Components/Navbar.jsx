import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav>
        <ul className="hidden md:flex items-center justify-between my-10 w-3/5 m-auto  font-semibold text-black text-xl ">
          <li className="hover:underline">
            <NavLink to="proyectos">Proyectos</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={logo} alt="logo barrera y cuevas" className="w-40" />
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="servicios">Servicios</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="clientes">Clientes</NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <div className="flex justify-around p-3">
            <NavLink to="/">
              <img src={logo} alt="logo barrera y cuevas" className="w-40" />
            </NavLink>
            <button className="text-2xl" onClick={() => setShowMenu(!showMenu)}>
              <FaBars />
            </button>
          </div>
          <div
            className={` ${
              showMenu
                ? "absolute bg-white w-full h-full z-10 top-0 p-6"
                : "hidden"
            }`}
          >
            <button className="text-2xl" onClick={() => setShowMenu(!showMenu)}>
              <FaXmark />
            </button>
            <ul className="text-2xl">
              <li className="mt-6 font-bold">
                <NavLink to="proyectos" onClick={() => setShowMenu(false)}>
                  Proyectos
                </NavLink>
              </li>
              <li className="mt-6 font-bold">
                <NavLink to="contacto" onClick={() => setShowMenu(false)}>
                  Contacto
                </NavLink>
              </li>
              <li className="mt-6 font-bold">
                <NavLink to="servicios" onClick={() => setShowMenu(false)}>
                  Servicios
                </NavLink>
              </li>
              <li className="mt-6 font-bold">
                <NavLink to="clientes" onClick={() => setShowMenu(false)}>
                  Clientes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
