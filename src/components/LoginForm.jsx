import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import api from "../services/api";

function LoginForm() {
  const navigate = useNavigate();
  const { setUserRole } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = useCallback(({ target }) => setEmail(target.value));
  const handlePassword = useCallback(({ target }) => setPassword(target.value));
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      console.log(api)
      const { data } = await api.post("http://localhost:3001/user/login", { email, password });
      localStorage.setItem("@voll-token", data.token);
      localStorage.setItem("@voll-role", data.role);
      api.defaults.headers.common.authorization = data.token;
      setUserRole(data.role);
      navigate("/products");
    } catch (error) {
      setErrorMessage("Invalid Credentials");
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        required
        placeholder="seu.email@gmail.com"
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required
        placeholder="senha123"
        value={password}
        onChange={handlePassword}
      />
      <p>{errorMessage}</p>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
