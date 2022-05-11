import { Link } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { useAuth } from "../context/Auth";
import api from "../services/api";

function UserHeader({ title }) {
  const { setUserRole, userRole } = useAuth();

  const [currentUser, setCurrentUser] = useState([]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("@voll-token");
    localStorage.removeItem("@voll-role")
    setUserRole(null);
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get("user");
        setCurrentUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <header>
      <h1>{title}</h1>
      <h3>{`Balance: ${currentUser.balance}`}</h3>
      <Link to="/products">Products</Link>
      <Link to="/sales">Orders</Link>
      {userRole === "admin" ? <Link to="/users">Manage Users</Link> : null}
      {userRole === "admin" ? <Link to="/product/create">Create Product</Link> : null}  
      <button type="button" onClick={handleLogout}>
        Log-out
      </button>
    </header>
  );
}

export default UserHeader;
