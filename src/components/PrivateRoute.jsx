import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";

function PrivateRoute({ children }) {
  const { userRole } = useAuth();

  if (userRole === null) {
    return <Navigate to="/" />;
  }

  return children || <Outlet />;
}

export default PrivateRoute;
