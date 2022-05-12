import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
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
      const { data } = await api.post("user/login", { email, password });
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
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        required
        placeholder="youremail@email.com"
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required
        placeholder="password"
        value={password}
        onChange={handlePassword}
      />
      <p>{errorMessage}</p>
      <button type="submit">Log in</button>
      <button type="button">
        <Link to="/register">Create Account</Link>
      </button>
    </form>
  );
}

export default LoginForm;
