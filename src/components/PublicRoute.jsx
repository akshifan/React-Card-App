import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/app/home" /> : children;
};

export default PublicRoute;