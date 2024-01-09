import { createBrowserRouter } from "react-router-dom";


// import PrivateRoutes from "./PrivateRoute";
import MainLayout from "../components/layouts/MainLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import ViewJob from "../pages/dashboard/job/ViewJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoutes>
      <DashboardLayout />
      // </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/job",
        element: <ViewJob />,
      },
    ],
  },
]);
export default routes;
