import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="navbar justify-between align-element">
        <div className="dropdown sm:hidden">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
            <FaBarsStaggered className="h-6 w-6 text-white" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white w-44"
          >
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="contacto">CONTACTO</NavLink>
            </li>
            <li>
              <details>
                <summary>PROYECTOS</summary>
                <ul className="p-2 bg-base-100 text-black">
                  <li>
                    <NavLink to="proyectos/interior-locales">
                      Interior Locales
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos/interior-oficina">
                      Interior Oficina
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos/arquitectura-industrial">
                      Arquitectura Industrial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos/mobiliario-diseño">
                      Mobiliario Diseño
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos">Ver todos</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <NavLink to="/" className="w-36">
          <img src={logo} alt="logo" />
        </NavLink>

        <div className="hidden sm:flex me-5">
          <ul className="menu menu-horizontal text-white z-20 ">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="contacto">CONTACTO</NavLink>
            </li>
            <li>
              <details>
                <summary>PROYECTOS</summary>
                <ul className="p-2 bg-base-100 text-black">
                  <li>
                    <NavLink to="proyectos/interior-locales">
                      Interior Locales
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos/interior-oficina">
                      Interior Oficina
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos/arquitectura-industrial">
                      Arquitectura Industrial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos/mobiliario-diseño">
                      Mobiliario Diseño
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="proyectos">Ver todos</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
