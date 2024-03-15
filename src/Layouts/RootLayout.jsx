import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};
export default RootLayout;
