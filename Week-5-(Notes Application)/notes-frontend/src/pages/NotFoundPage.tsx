import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.8rem",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go to Login</Link>
    </div>
  );
};

export default NotFoundPage;
