import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewProduct from "./pages/NewProduct";
import Products from "./pages/Products";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AdminRoute from "./components/AdminRoute";
import Users from "./pages/Users";
import Sales from "./pages/Sales";
import SaleDetails from "./pages/SaleDetails";
import { AuthProvider } from "./context/Auth";
import "./styles/App.scss";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="products" element={<Products />} />
          <Route path="sale/:id" element={<SaleDetails />} />
          <Route path="sales" element={<Sales />} />
          <Route element={<AdminRoute />}>
            <Route path="product/create" element={<NewProduct />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
