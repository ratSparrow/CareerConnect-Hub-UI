import { createBrowserRouter } from "react-router-dom";

// import PrivateRoutes from "./PrivateRoute";

import CreateJob from "../pages/dashboard/job/CreateJob";
import ViewJobs from "../pages/dashboard/job/ViewJobs";
import LoginPage from "../pages/common/Login";
import RegisterPage from "../pages/common/SignUp";
import Homepage from "../pages/home/Homepage";
import CompanyChart from "../pages/dashboard/company/CompanyCharts";
import UserProfile from "../pages/user/Profile";

import ResumePage from "../pages/resume/Resume";
import MainLayout from "../components/layouts/MainLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import FindJob from "../pages/findJob/FindJob";

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
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/find-job",
        element: <FindJob />,
      }
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
        element: <ViewJobs />,
      },
      {
        path: "/dashboard/job/create",
        element: <CreateJob />,
      },
      {
        path: "/dashboard/company-chart",
        element: <CompanyChart />,
      },
      {
        path: "/dashboard/company",
        element: "company",
      },
    ],
  },
]);
export default routes;
