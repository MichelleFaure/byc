import { NavLink } from "react-router-dom";

const Breadcrumb = ({ page }) => {
  return (
    <div className="text-sm breadcrumbs mx-10 my-5">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/proyectos">Proyectos</NavLink>
        </li>
        <li>{page}</li>
      </ul>
    </div>
  );
};
export default Breadcrumb;
