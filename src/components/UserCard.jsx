import { useState, useCallback } from "react";
import api from "../services/api";

function UserCard({ user }) {
  const { id, name, email, role, balance } = user;

  const [localBalance, setLocalBalance] = useState(Number(balance));
  const [adjustment, setAdjustment] = useState(0);
  const [deleted, setDeleted] = useState(false);

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
      global.alert("Unable to adjust balance");
    }
  });

  const handleDelete = useCallback(async (event) => {
    event.preventDefault();
    try {
      await api.delete("user/delete", { data: { email } });
      setDeleted(true);
    } catch (error) {
      global.alert("Unable to delete user");
    }
  });

  const handleSignal = () => setAdjustment((old) => old * -1);

  return (
    <li style={{ visibility: deleted ? 'hidden': 'visible'}}>
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
      <button type="button" onClick={handleSignal}>
        +/-
      </button>
      <button type="button" onClick={handleAdjust}>
        Adjust
      </button>
      { role === "admin" ? null : 
      <button type="button" onClick={handleDelete}>Delete</button>
      }
    </li>
  );
}

export default UserCard;
