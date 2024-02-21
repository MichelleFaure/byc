import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar';

const RootLayout = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet />
    </>
  );
};
export default RootLayout;
