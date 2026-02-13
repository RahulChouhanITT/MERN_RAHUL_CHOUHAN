import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { AuthContext } from "./AuthContext";
import { useToast } from "../utils/hooks/useToast";
import { AUTH_TEXT } from "../utils/constants/auth.constants";
import type { AuthContextType, User } from "../types/auth.types";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
        
      try {
        const response = await axiosInstance.get("/authentication/me");
        setUser(response.data.data);
      } catch {
        setUser(null);
      } finally {
        setIsAuthLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  const login: AuthContextType["login"] = async (emailAddress, password) => {
    const response = await axiosInstance.post("/authentication/login", {
      emailAddress,
      password
    });

    setUser(response.data.data);
    showToast(AUTH_TEXT.TOAST.LOGIN_SUCCESS, "success");
    navigate("/dashboard");
  };

  const logout: AuthContextType["logout"] = async () => {
    await axiosInstance.post("/authentication/logout");
    setUser(null);
    showToast(AUTH_TEXT.TOAST.LOGOUT_SUCCESS, "success");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
