// import PrivateRoutes from "./PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import CreateJob from "../pages/dashboard/job/CreateJob";
import ViewJobs from "../pages/dashboard/job/ViewJobs";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import PrivacyPage from "../pages/Privacy/Privacy";
import TermsPage from "../pages/Terms/Terms";
import CareerServices from "../pages/careerServices/careerServices";
import LoginPage from "../pages/common/Login";
import RegisterPage from "../pages/common/SignUp";
import Homepage from "../pages/home/Homepage";
import UserProfile from "../pages/user/Profile";
import ResumePage from "../pages/resume/Resume";
import FindJob from "../pages/findJob/FindJob";
import JobDetails from "../pages/findJob/jobDetails";
import EditJob from "../pages/dashboard/job/EditJob";
import AppliedJobs from "../pages/dashboard/job/AppliedJobs";
import CreateBlog from "../pages/dashboard/blog/CreateBlog";
import ViewBlogs from "../pages/dashboard/blog/ViewBlogs";
import EditBlog from "../pages/dashboard/blog/EditBlog";
import ViewCompany from "../pages/dashboard/company/ViewCompany";
import MainLayout from "../components/Layouts/MainLayout";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import UpdateCompany from "../pages/dashboard/company/UpdateCompany";

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
      },
      {
        path: "/details/:id",
        element: <JobDetails />,
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
      {
        path: "/dashboard/company",
        element: <ViewCompany />,
      },
      {
        path: "/dashboard/company/edit/:id",
        element: <UpdateCompany />,
      },
    ],
  },
]);
export default routes;
