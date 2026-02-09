import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();

  // Check if redirected from registration and ensure login tab is shown
  useEffect(() => {
    if (location.state?.showLogin) {
      setIsLogin(true);
    }
  }, [location]);
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      className="w-full flex items-center justify-center px-4"
      style={{ minHeight: "calc(100vh - 80px)", paddingTop: "40px" }}
    >
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default AuthPage;
