import { useState, useCallback } from "react";
import api from "../services/api";

function UserCard({ user }) {
  const { id, name, email, role, balance } = user;

  const [localBalance, setLocalBalance] = useState(Number(balance));
  const [adjustment, setAdjustment] = useState(0);

  const handleChange = ({ target: { value } }) => {
    setAdjustment(Number(value));
  };

  const handleAdjust = useCallback(async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.put("user/updateBalance", { id, adjustment });
      setLocalBalance(data)
      setAdjustment(0)
    } catch (error) {
      console.log("Unable to adjust balance")
    }
  });

  const handleDelete = useCallback(async (event) => {
    event.preventDefault();
    try {
      await api.delete("user/delete", { data: { email } });
    } catch (error) {
      console.log("Unable to delete user")
    }
  });

  return (
    <li>
      <span>{id}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span>{role}</span>
      <span>{localBalance}</span>
      <input
        type="number"
        value={ adjustment }
        onChange={ handleChange }
      />
      <button type="button" onClick={handleAdjust}>
        Adjust
      </button>
      <button type="button" onClick={handleDelete}>
        Delete User
      </button>
    </li>
  );
}

export default UserCard;
