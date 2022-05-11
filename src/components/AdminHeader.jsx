import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useAuth } from "../context/Auth";

function AdminHeader({ title }) {
  const { setUserRole } = useAuth();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("@voll-token");
    localStorage.removeItem("@voll-role");
    setUserRole(null);
  });

  return (
    <header>
      <h1>{title}</h1>
      <Link to="/users">Users</Link>
      <Link to="/product/create">Create Product</Link>
      <button type="button" onClick={handleLogout}>
        Log-out
      </button>
    </header>
  );
}

export default AdminHeader;
