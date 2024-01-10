import { createBrowserRouter } from "react-router-dom";

// import PrivateRoutes from "./PrivateRoute";

import CreateJob from "../pages/dashboard/job/CreateJob";
import ViewJobs from "../pages/dashboard/job/ViewJobs";

import LoginPage from "../pages/common/Login";
import RegisterPage from "../pages/common/SignUp";

import Homepage from "../pages/home/Homepage";
import CompanyChart from "../pages/dashboard/company/CompanyCharts";

import UserProfile from "../pages/user/Profile";
import AppliedJobs from "../pages/dashboard/job/AppliedJobs";
import MainLayout from "../components/Layouts/MainLayout";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import CreateBlog from "../pages/dashboard/blog/CreateBlog";
import ViewBlogs from "../pages/dashboard/blog/ViewBlogs";
import EditBlog from "../pages/dashboard/blog/EditBlog";
import EditJob from "../pages/dashboard/job/EditJob";

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
        path: "/dashboard/job/edit/:id",
        element: <EditJob />,
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
        path: "/dashboard/job/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/dashboard/blog/create",
        element: <CreateBlog />,
      },
      {
        path: "/dashboard/blog",
        element: <ViewBlogs />,
      },
      {
        path: "/dashboard/blog/edit/:id",
        element: <EditBlog />,
      },
    ],
  },
]);
export default routes;
