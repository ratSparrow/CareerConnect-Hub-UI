import { createBrowserRouter } from "react-router-dom";

// import PrivateRoutes from "./PrivateRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import PrivacyPage from "../pages/Privacy/Privacy";
import TermsPage from "../pages/Terms/Terms";
import CareerServices from "../pages/careerServices/careerServices";
import LoginPage from "../pages/common/Login";
import RegisterPage from "../pages/common/SignUp";
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
        path: "/career-services",
        element: <CareerServices />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
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
