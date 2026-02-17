import { useContext } from "react";
import { AuthContext} from '../../context/AuthContext'

export const useAuthentication = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthentication must be used inside AuthProvider");
  }

  return context;
};