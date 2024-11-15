import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Error from "../../components/Error";
import AuthContext from "../../contexts/AuthContext";

const AuthLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <Error
        title="401"
        subtitle="Unauthorized"
        description="You need to login to access this page"
        link={{ to: "/login", label: "Login to Continue" }}
      />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
