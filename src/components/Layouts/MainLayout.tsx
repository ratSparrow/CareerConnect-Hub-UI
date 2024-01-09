import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
