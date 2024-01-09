import { Navigate, useLocation } from "react-router-dom";
import { authEmail, authKey } from "../components/Constant/authKey";
import { getFromLocalStorage } from "../helpers/utils/saveData";

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const token = getFromLocalStorage(authKey);
  const email = getFromLocalStorage(authEmail);
  if (!token && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoutes;
