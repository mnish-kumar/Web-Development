import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.userReducer);
  const localUser = JSON.parse(localStorage.getItem("user"));
  const finalUser = user || localUser;

  if (!finalUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};

export default AuthWrapper;