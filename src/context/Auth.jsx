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
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("@voll-token");

    if (token) {
      api.defaults.headers.common.authorization = token;
      return true;
    }

    return false;
  });

  const signOut = useCallback(() => {
    setUser(false);
    localStorage.removeItem("@voll-token");
  });

  const value = useMemo(
    () => ({
      signOut,
      user,
      setUser,
    }),
    [signOut, user, setUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
