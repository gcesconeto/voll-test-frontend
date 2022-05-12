import { Link } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { useAuth } from "../context/Auth";
import api from "../services/api";
import "../styles/Header.scss";

function UserHeader({ title }) {
  const { setUserRole, userRole } = useAuth();

  const [currentUser, setCurrentUser] = useState([]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("@voll-token");
    localStorage.removeItem("@voll-role");
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
      <div>
        <span className="balance">{`${currentUser.balance} Points`}</span>
        <Link to="/products">Products</Link>
        <Link to="/sales">Orders</Link>
        {userRole === "admin" ? <Link to="/users">Manage Users</Link> : null}
        {userRole === "admin" ? <Link to="/product/create">Create Product</Link> : null}  
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default UserHeader;
