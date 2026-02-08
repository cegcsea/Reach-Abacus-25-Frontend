import { Navigate } from "react-router-dom";
import { UserData } from "../context/userContext";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = UserData();
  const { isLoading } = LoaderData();

  if (isLoading) return <Loader />;

  if (!isAuth && !localStorage.getItem("abacustoken")) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;