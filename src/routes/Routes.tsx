// import PrivateRoutes from "./PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Homepage from "../pages/home/Homepage";
import CareerServices from "../pages/careerServices/careerServices";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import TermsPage from "../pages/Terms/Terms";
import PrivacyPage from "../pages/Privacy/Privacy";
import LoginPage from "../pages/common/Login";
import RegisterPage from "../pages/common/SignUp";
import UserProfile from "../pages/user/Profile";
import ResumePage from "../pages/resume/Resume";
import FindJob from "../pages/findJob/FindJob";
import AddCompany from "../pages/company/CompanySignUp";
import PrivateRoutes from "./PrivateRoute";
import JobDetails from "../pages/findJob/jobDetails";
import MyApplicationPage from "../pages/dashboard/myApplication/myApplication";
import DashboardLayout from "../components/layouts/DashboardLayout";
import ViewJobs from "../pages/dashboard/job/ViewJobs";
import EditJob from "../pages/dashboard/job/EditJob";
import CreateJob from "../pages/dashboard/job/CreateJob";
import CreateBlog from "../pages/dashboard/blog/CreateBlog";
import EditBlog from "../pages/dashboard/blog/EditBlog";
import ViewBlogs from "../pages/dashboard/blog/ViewBlogs";
import UpdateCompany from "../pages/dashboard/company/UpdateCompany";
import ViewCompany from "../pages/dashboard/company/ViewCompany";
import AppliedJobs from "../pages/dashboard/job/AppliedJobs";
import CompanyChart from "../pages/dashboard/company/CompanyCharts";

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
        path: "/edit-resume",
        element: <ResumePage />,
      },
      {
        path: "/find-job",
        element: <FindJob />,
      },
      {
        path: "/company-sign-up",
        element: <AddCompany />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <JobDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-application",
        element: <MyApplicationPage />,
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
      {
        path: "/dashboard/company-chart",
        element: <CompanyChart />,
      },
    
    ],
  },
]);
export default routes;
