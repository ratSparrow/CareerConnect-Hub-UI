import { createBrowserRouter } from "react-router-dom";


// import PrivateRoutes from "./PrivateRoute";
import MainLayout from "../components/layouts/MainLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import ViewJob from "../pages/dashboard/job/ViewJob";
import Homepage from "../pages/home/Homepage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: "blog",
      },
    ],
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
      {
        path: "/dashboard/company",
        element: "company",
      },
    ],
  },
]);
export default routes;
