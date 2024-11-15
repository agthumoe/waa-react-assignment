import { useContext } from "react";
import api from "../api/api";
import AuthContext from "../contexts/AuthContext";

function useAuth() {
  const { setAuthenticated, setUser } = useContext(AuthContext);

  const login = async ({ username, password }) => {
    const response = await api.post("/authenticate", { username, password });
    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      setAuthenticated(true);
    }
  };

  const logout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuthenticated(false);
    setUser(null);
  };

  const fetchProfile = async () => {
    const response = await api.get("/profile");
    if (response.status === 200) {
      setUser(response.data);
    }
  };

  return { login, logout, fetchProfile };
}

export default useAuth;
