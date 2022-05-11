import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import api from "../services/api";
import "../styles/List.scss";

function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("user/list");
        setUserList(data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <section className="table">
      <ul>
        <li>
          <span>ID</span>
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Balance</span>
          <span>Points to adjust</span>
        </li>
        {userList.map((user) => (
          <UserCard key={user.id} user={user} />
          ))}
      </ul>
    </section>
  );
}

export default UserList;
