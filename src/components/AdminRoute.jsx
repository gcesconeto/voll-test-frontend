import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";

function AdminRoute({ children }) {
  const { userRole } = useAuth();

  if (userRole !== "admin") {
    return <Navigate to="/products" />;
  }

  return children || <Outlet />;
}

export default AdminRoute;
