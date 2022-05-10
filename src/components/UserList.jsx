import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import api from "../services/api";

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
    <ul>
      {userList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
