import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = useCallback(({ target }) => setName(target.value));
  const handleEmail = useCallback(({ target }) => setEmail(target.value));
  const handlePassword = useCallback(({ target }) => setPassword(target.value)
  );

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const newUserData = {
        name,
        email,
        password,
      };

      await api.post("user/register", newUserData);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error.response);
      const { status } = error.response;
      if (status === 409) {
        global.alert("User already exists!");
      }
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full name</label>
      <input
        placeholder="Your full name here"
        type="text"
        id="name"
        required
        value={name}
        onChange={handleName}
      />
      <label htmlFor="email">Email</label>
      <input
        placeholder="youremail@email.com"
        type="text"
        id="email"
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="password">Password</label>
      <input
        placeholder="password"
        type="password"
        id="password"
        value={password}
        onChange={handlePassword}
      />
      <button type="submit">Finalizar Cadastro</button>
    </form>
  );
}

export default RegisterForm;
