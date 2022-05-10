import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <main>
      <h1>Login</h1>
      <LoginForm />
      <Link to="/register">Register</Link>
    </main>
  );
}

export default Login;
