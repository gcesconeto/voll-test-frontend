import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [userRole, setUserRole] = useState(() => {
    const token = localStorage.getItem("@voll-token");
    const role = localStorage.getItem("@voll-role");
    if (token) {
      api.defaults.headers.common.authorization = token;
    }
    if (role) {
      return role;
    }
    return null;
  });

  const signOut = useCallback(() => {
    setUserRole(false);
    localStorage.removeItem("@voll-token");
  });

  const value = useMemo(
    () => ({
      signOut,
      userRole,
      setUserRole,
    }),
    [signOut, userRole, setUserRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
