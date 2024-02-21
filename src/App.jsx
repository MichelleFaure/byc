import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import SingleProject from "./Pages/SingleProject";


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
        element: <Projects />,
      },
      {
        path: "proyectos/:id",
        element: <SingleProject />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router ={router}/>;
};
export default App;
