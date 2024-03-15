import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import Contact from "./Pages/Contact";
import CategoryProjects from "./Pages/CategoryProjects";
import Clients from "./Components/Clients";
import Services from "./Components/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "proyectos",
        element: <AllProjects />,
      },
      {
        path: "proyectos/:id",
        element: <CategoryProjects />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
      {
        path: "servicios",
        element: <Services />,
      },
      {
        path: "clientes",
        element: <Clients />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
