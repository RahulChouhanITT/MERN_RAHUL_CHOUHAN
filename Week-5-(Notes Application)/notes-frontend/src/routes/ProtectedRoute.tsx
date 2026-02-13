import { Navigate } from "react-router-dom";
import { useAuthentication } from "../utils/hooks/useAuthentication";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthLoading } = useAuthentication();

  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
