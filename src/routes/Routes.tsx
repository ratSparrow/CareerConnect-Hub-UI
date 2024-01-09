import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import MainLayout from "../components/Layouts/MainLayout";
import PrivateRoutes from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [],
  },
]);
export default routes;
