import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import AuthContext from "../../contexts/AuthContext";
import useAuth from "../../hooks/useAuth";

const RootLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { fetchProfile } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-gray-50 h-full">
      <Header />
      <div className="container mx-auto my-5">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
